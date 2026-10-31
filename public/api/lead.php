<?php
/**
 * Ezy Digital - lead proxy for the Perfex CRM web-to-lead form.
 * ---------------------------------------------------------------------------
 * The browser posts the four lead fields here, never to the CRM directly.
 *
 * Why a proxy is required:
 *   https://crm.ezydigital.in/forms/wtl/51cdbcdc72722ab5de415e9cdace0b74
 *   is a Perfex CRM web-to-lead endpoint. It answers a successful submission with
 *   a 302 redirect and a failed one with the form HTML, and it sends NO
 *   Access-Control-Allow-Origin header. A browser fetch therefore cannot read the
 *   result - any "success" shown client-side would be a guess. This script makes
 *   the request server-side, reads the real answer and only reports success when
 *   the CRM actually accepted the lead.
 *
 * Deployment: this file must be executed by PHP (PHP 7.4+ with the cURL
 * extension). It is copied into `dist/api/lead.php` by `vite build`. On nginx the
 * site needs a PHP handler, e.g.:
 *
 *   location ~ \.php$ {
 *       include fastcgi_params;
 *       fastcgi_pass unix:/run/php/php8.2-fpm.sock;
 *       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
 *   }
 *
 * A GET request returns a small JSON health check (no secrets), so the deployment
 * can be verified with: curl https://ezydigital.in/api/lead.php
 *
 * No private login, token or secret is used here. The `key` below is the
 * public form key that is already part of the form URL; it never reaches the
 * browser bundle.
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');

const CRM_FORM_URL = 'https://crm.ezydigital.in/forms/wtl/51cdbcdc72722ab5de415e9cdace0b74';
const CRM_FORM_KEY = '51cdbcdc72722ab5de415e9cdace0b74';

/** Simple abuse guard: 5 submissions per IP per 10 minutes. */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 600;

/** Maximum accepted request body size in bytes. */
const MAX_BODY_BYTES = 8192;

/**
 * Sends a JSON response and stops.
 *
 * @param int   $status  HTTP status code
 * @param array $payload JSON body
 */
function lead_respond($status, array $payload)
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Trims, strips tags/control characters and limits a user supplied string.
 *
 * @param mixed $value
 * @param int   $max
 * @return string
 */
function lead_clean($value, $max)
{
    if (!is_string($value)) {
        return '';
    }

    $value = strip_tags($value);
    $value = str_replace(array("\r", "\n", "\t", "\0"), ' ', $value);
    $value = preg_replace('/\s{2,}/u', ' ', $value);

    // preg_* returns null for invalid UTF-8; treat that as an empty value.
    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max, 'UTF-8');
    }

    return substr($value, 0, $max);
}

/**
 * Normalises an Indian mobile number to 10 local digits.
 *
 * @param mixed $value
 * @return string|null
 */
function lead_normalize_mobile($value)
{
    $digits = preg_replace('/\D+/', '', (string) $value);

    if (strlen($digits) === 14 && strpos($digits, '0091') === 0) {
        $digits = substr($digits, 4);
    } elseif (strlen($digits) === 12 && strpos($digits, '91') === 0) {
        $digits = substr($digits, 2);
    } elseif (strlen($digits) === 11 && $digits[0] === '0') {
        $digits = substr($digits, 1);
    }

    return preg_match('/^[6-9]\d{9}$/', $digits) === 1 ? $digits : null;
}

/**
 * Returns true when this IP has sent too many submissions recently.
 * Uses the system temp directory; failures are ignored so the form keeps working.
 *
 * @return bool
 */
function lead_rate_limited()
{
    $ip = isset($_SERVER['REMOTE_ADDR']) ? (string) $_SERVER['REMOTE_ADDR'] : '';
    if ($ip === '') {
        return false;
    }

    $file = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR . 'ezy-lead-' . sha1($ip) . '.json';

    $now = time();
    $hits = array();

    if (is_file($file)) {
        $raw = @file_get_contents($file);
        $decoded = json_decode((string) $raw, true);
        if (is_array($decoded)) {
            $hits = $decoded;
        }
    }

    $recent = array();
    foreach ($hits as $hit) {
        if (is_int($hit) && $hit > $now - RATE_LIMIT_WINDOW) {
            $recent[] = $hit;
        }
    }

    if (count($recent) >= RATE_LIMIT_MAX) {
        return true;
    }

    $recent[] = $now;
    @file_put_contents($file, json_encode($recent), LOCK_EX);

    return false;
}

/**
 * Interprets the CRM answer.
 *
 * A successful Perfex web-to-lead submission redirects (301/302/303/307/308).
 * A rejected one re-renders the form (HTTP 200 with HTML) or returns JSON with
 * `success: false`. Anything we cannot positively identify is treated as a
 * failure - the visitor must never see a success message we cannot back up.
 *
 * @param int    $status
 * @param string $body
 * @return bool
 */
function lead_crm_confirmed($status, $body)
{
    $decoded = json_decode((string) $body, true);
    if (is_array($decoded) && array_key_exists('success', $decoded)) {
        return $decoded['success'] === true;
    }

    return in_array($status, array(301, 302, 303, 307, 308), true);
}

/* ------------------------------------------------------------------------- */
/* Routing                                                                   */
/* ------------------------------------------------------------------------- */

$method = isset($_SERVER['REQUEST_METHOD']) ? strtoupper((string) $_SERVER['REQUEST_METHOD']) : 'GET';

// Health check: proves PHP is executing on the host, without exposing anything.
if ($method === 'GET' || $method === 'HEAD') {
    lead_respond(200, array(
        'success' => true,
        'service' => 'ezy-digital-lead-proxy',
        'message' => 'Ready. POST JSON with name, phone, city and service.',
    ));
}

if ($method !== 'POST') {
    header('Allow: GET, POST');
    lead_respond(405, array(
        'success' => false,
        'message' => 'Method not allowed.',
    ));
}

if (!function_exists('curl_init')) {
    lead_respond(500, array(
        'success' => false,
        'message' => 'The enquiry service is not configured correctly. Please call us instead.',
    ));
}

// ---- Read and decode the request body -------------------------------------

$raw = file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES);
if ($raw === false) {
    $raw = '';
}

if (strlen($raw) > MAX_BODY_BYTES) {
    lead_respond(413, array(
        'success' => false,
        'message' => 'The submitted data is too large.',
    ));
}

$contentType = isset($_SERVER['CONTENT_TYPE']) ? strtolower((string) $_SERVER['CONTENT_TYPE']) : '';
$input = array();

if (strpos($contentType, 'application/json') !== false) {
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        $input = $decoded;
    }
} elseif ($raw !== '') {
    parse_str($raw, $parsed);
    if (is_array($parsed)) {
        $input = $parsed;
    }
}

$field = function ($key) use ($input) {
    return array_key_exists($key, $input) ? $input[$key] : '';
};

// ---- Sanitise and validate -------------------------------------------------

$name = lead_clean($field('name'), 80);
$city = lead_clean($field('city'), 60);
$service = lead_clean($field('service'), 120);
$page = lead_clean($field('page'), 300);
$source = lead_clean($field('source'), 40);
$mobile = lead_normalize_mobile($field('phone'));
$honeypot = lead_clean($field('website'), 120);

// Campaign attribution (Meta ad / UTM parameters). Non-personal data only.
$attribution = is_array($field('attribution')) ? $field('attribution') : array();
$utmSource = lead_clean(isset($attribution['utm_source']) ? $attribution['utm_source'] : '', 60);
$utmMedium = lead_clean(isset($attribution['utm_medium']) ? $attribution['utm_medium'] : '', 60);
$utmCampaign = lead_clean(isset($attribution['utm_campaign']) ? $attribution['utm_campaign'] : '', 80);
$hasMetaClick = lead_clean(isset($attribution['fbclid']) ? $attribution['fbclid'] : '', 20) !== '';

// Bots fill the hidden field; real visitors never see it.
if ($honeypot !== '') {
    lead_respond(400, array(
        'success' => false,
        'message' => 'Submission rejected. Please call us instead.',
    ));
}

if (strlen($name) < 2 || strlen($city) < 2 || $service === '' || $mobile === null) {
    lead_respond(422, array(
        'success' => false,
        'message' => 'Please check your name, mobile number, city and service selection.',
    ));
}

if (lead_rate_limited()) {
    lead_respond(429, array(
        'success' => false,
        'message' => 'Too many submissions from this connection. Please call us directly.',
    ));
}

// ---- Forward the lead to the Perfex CRM -----------------------------------

$campaign = implode(' / ', array_filter(array($utmSource, $utmMedium, $utmCampaign), 'strlen'));

$description = implode("\n", array_filter(array(
    'Service required: ' . $service,
    'City: ' . $city,
    'Submitted from the ezydigital.in lead form',
    $page !== '' ? 'Source page: ' . $page : null,
    $campaign !== '' ? 'Campaign: ' . $campaign : null,
    $hasMetaClick ? 'Meta ad click: yes' : null,
    $source !== '' ? 'Form opened from: ' . $source : null,
), 'strlen'));

$fields = array(
    'key' => CRM_FORM_KEY,
    'name' => $name,
    'phonenumber' => '+91' . $mobile,
    'city' => $city,
    'description' => $description,
);

$ch = curl_init(CRM_FORM_URL);
curl_setopt_array($ch, array(
    CURLOPT_POST => true,
    // An array makes cURL send multipart/form-data, exactly like the CRM's own form.
    CURLOPT_POSTFIELDS => $fields,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HEADER => true,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_CONNECTTIMEOUT => 8,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_USERAGENT => 'EzyDigitalWebsite/1.0 (+https://ezydigital.in)',
));

$response = curl_exec($ch);
$curlError = $response === false ? curl_error($ch) : '';
$status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$headerSize = (int) curl_getinfo($ch, CURLINFO_HEADER_SIZE);
curl_close($ch);

if ($response === false) {
    // Log the transport error only - never the visitor's details.
    error_log('[ezy-lead] CRM request failed: ' . $curlError);
    lead_respond(502, array(
        'success' => false,
        'message' => 'We could not reach our enquiry service. Please call us directly.',
    ));
}

$body = substr((string) $response, $headerSize);

if (!lead_crm_confirmed($status, $body)) {
    error_log('[ezy-lead] CRM did not confirm the lead (HTTP ' . $status . ').');
    lead_respond(502, array(
        'success' => false,
        'message' => 'Our CRM did not confirm the enquiry. Please try again or call us directly.',
    ));
}

lead_respond(200, array(
    'success' => true,
    'message' => 'Your enquiry has been submitted successfully. Our team will contact you soon.',
));

