/**
 * Lead generation form helpers.
 *
 * Everything here is a pure function so it can be unit-checked by
 * `npm run verify` without a browser, and reused by the form component.
 * Client-side validation is a convenience for the visitor - the same rules are
 * enforced again by the server-side proxy (`public/api/lead.php`) and by the
 * CRM itself.
 */
import { LEAD_SERVICE_OPTIONS } from '../data/leadFormServices.js'

/** A valid Indian mobile number starts with 6-9 and has 10 digits. */
export const INDIAN_MOBILE_PATTERN = /^[6-9]\d{9}$/

/** Letters and combining marks (Gujarati / Devanagari matras), spaces and name punctuation. */
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{0,79}$/u
const CITY_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{0,59}$/u

/** Country code used by every phone number on the site. */
export const INDIA_DIAL_CODE = '+91'

/**
 * Returns a valid 10-digit Indian mobile number, or null.
 * Accepts spaces, dashes, `+91`, `0091` and a leading `0`.
 *
 * @param {string} [value]
 * @returns {string | null}
 */
export function normalizeIndianMobile(value = '') {
  let digits = String(value ?? '').replace(/\D/g, '')

  if (digits.length === 14 && digits.startsWith('0091')) digits = digits.slice(4)
  else if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2)
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1)

  return INDIAN_MOBILE_PATTERN.test(digits) ? digits : null
}

/** Formats a 10-digit mobile number for the CRM: +91XXXXXXXXXX. */
export function toE164(value = '') {
  const local = normalizeIndianMobile(value)
  return local ? `${INDIA_DIAL_CODE}${local}` : ''
}

/** Collapses whitespace so `Milan   Soni ` and `Milan Soni` compare equal. */
export function cleanText(value = '', max = 120) {
  return String(value ?? '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, max)
}

/**
 * Validates the four required lead fields.
 *
 * @param {{ name?: string, phone?: string, city?: string, service?: string }} form
 * @returns {Record<string, string>} field -> message (empty object when valid)
 */
export function validateLeadForm(form = {}) {
  const errors = {}
  const name = cleanText(form.name, 80)
  const city = cleanText(form.city, 60)

  if (!name) {
    errors.name = 'Please enter your full name.'
  } else if (name.length < 2) {
    errors.name = 'Please enter at least 2 characters for your name.'
  } else if (!NAME_PATTERN.test(name)) {
    errors.name = 'Please use letters only (no numbers or symbols).'
  }

  if (!String(form.phone ?? '').trim()) {
    errors.phone = 'Please enter your mobile number.'
  } else if (!normalizeIndianMobile(form.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number starting with 6-9.'
  }

  if (!city) {
    errors.city = 'Please enter your city.'
  } else if (city.length < 2) {
    errors.city = 'Please enter at least 2 characters for your city.'
  } else if (!CITY_PATTERN.test(city)) {
    errors.city = 'Please use letters only (no numbers or symbols).'
  }

  const service = String(form.service ?? '').trim()
  if (!service) {
    errors.service = 'Please select the service you need.'
  } else if (!LEAD_SERVICE_OPTIONS.some((option) => option.id === service)) {
    errors.service = 'Please select a service from the list.'
  }

  return errors
}

/**
 * Builds the JSON body sent to the same-origin lead proxy.
 * The proxy validates it again and forwards it to the Perfex CRM.
 */
export function buildLeadPayload({
  form,
  serviceLabel,
  pageUrl = '',
  source = 'page',
  attribution = {},
}) {
  const local = normalizeIndianMobile(form.phone)
  return {
    name: cleanText(form.name, 80),
    phone: local ? `${INDIA_DIAL_CODE}${local}` : cleanText(form.phone, 20),
    city: cleanText(form.city, 60),
    service: cleanText(serviceLabel, 120),
    serviceId: String(form.service ?? '').trim(),
    page: cleanText(pageUrl, 300),
    source: cleanText(source, 40),
    attribution,
    // Hidden honeypot - real visitors never see or fill this field.
    website: String(form.website ?? ''),
  }
}

/* -------------------------------------------------------------------------- */
/* Campaign attribution (Meta Ads / Google Ads)                               */
/* -------------------------------------------------------------------------- */

const ATTRIBUTION_KEY = 'ezy_lead_attribution'
const ATTRIBUTION_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

function getSessionStorage() {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : null
  } catch {
    return null
  }
}

/**
 * Reads campaign parameters from the current URL and keeps them for the rest of
 * the session, so a visitor who lands from a Meta ad and submits the form on a
 * different page still produces an attributed lead.
 *
 * Only non-personal campaign values are stored - never the visitor's details.
 *
 * @param {string} [search] query string (defaults to the current URL)
 * @returns {Record<string, string>}
 */
export function readAttribution(
  search = typeof window !== 'undefined' ? window.location.search : '',
) {
  const storage = getSessionStorage()
  const collected = {}

  try {
    const params = new URLSearchParams(search || '')
    ATTRIBUTION_PARAMS.forEach((key) => {
      const value = cleanText(params.get(key) || '', 80)
      if (value) collected[key] = value
    })
    // The click id itself is not needed in the CRM; its presence tells the team
    // the lead came from a Meta ad click.
    if (params.get('fbclid')) collected.fbclid = 'present'
  } catch {
    // ignore malformed query strings
  }

  if (Object.keys(collected).length > 0) {
    try {
      storage?.setItem(ATTRIBUTION_KEY, JSON.stringify(collected))
    } catch {
      // private mode / storage disabled - attribution is optional
    }
    return collected
  }

  try {
    const stored = JSON.parse(storage?.getItem(ATTRIBUTION_KEY) || '{}')
    return stored && typeof stored === 'object' ? stored : {}
  } catch {
    return {}
  }
}

/**
 * Human readable block stored in the optional CRM `description` column, so the
 * lead record shows what the visitor asked for even if custom fields differ.
 */
export function buildLeadDescription({ serviceLabel, city, pageUrl = '' }) {
  return [
    `Service required: ${cleanText(serviceLabel, 120)}`,
    `City: ${cleanText(city, 60)}`,
    'Submitted from the ezydigital.in lead form',
    pageUrl ? `Source page: ${cleanText(pageUrl, 300)}` : null,
  ]
    .filter(Boolean)
    .join('\n')
}
