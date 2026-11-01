/**
 * Meta (Facebook) Pixel integration - one pixel, one instance.
 *
 * The pixel id lives in the environment (`VITE_FB_PIXEL_ID`, see `.env`), so a
 * new pixel can be installed by changing one value and rebuilding. There is no
 * second pixel snippet anywhere in the project: `initPixel()` is guarded, so the
 * base code and `fbq('init', ...)` can only ever run once per page load.
 *
 * Tracked events (all belong to the single pixel):
 *   PageView  - on first load and on every in-app route change
 *   Lead      - ONLY for a lead-form submission confirmed by the CRM
 *               -> lead_source: website_form
 *   CallClick - a click on a Call Now `tel:` link. This is deliberately a
 *               custom event and NOT `Lead`: opening the dialer does not prove
 *               that a lead was created, so call clicks must never inflate the
 *               Lead count reported by Meta.
 *
 * No name, phone number, city or any other form value is sent to Meta. The pixel
 * only receives the page path, the selected service name (for the form event)
 * and the lead source, which keeps ad reporting useful without sending personal
 * data to a third party.
 *
 * Google Analytics is a completely separate tag loaded from `index.html`; this
 * module never touches `gtag`.
 */

// `import.meta.env` only exists under Vite, so fall back to an empty object to
// keep this module importable from plain Node (used by scripts/verify-config.mjs).
const env = import.meta.env ?? {}

export const FB_PIXEL_ID = String(env.VITE_FB_PIXEL_ID ?? '').trim()

export const FB_EVENTS = {
  pageView: 'PageView',
  lead: 'Lead',
  callClick: 'CallClick',
}

/** `lead_source` values. Only a confirmed form submission is a Lead. */
export const LEAD_SOURCES = {
  form: 'website_form',
}

/** A click on one of these links starts a phone call. */
const CALL_LINK_PREFIX = 'tel:'

/** Window used to swallow a duplicate click on the same call link. */
export const CALL_DEDUPE_WINDOW_MS = 1000

let initialised = false
let lastCallEvent = { href: '', at: 0 }

/** True when a pixel id has been configured. */
export function isPixelEnabled() {
  return FB_PIXEL_ID.length > 0
}

/**
 * Classifies an href. Only `tel:` links are call leads - normal links, email
 * links and WhatsApp links are not counted as calls.
 *
 * @param {string | null | undefined} href
 * @returns {boolean}
 */
export function isCallLink(href) {
  if (typeof href !== 'string') return false
  return href.trim().toLowerCase().startsWith(CALL_LINK_PREFIX)
}

/** Loads Meta's fbevents.js and creates a queueing `fbq` stub if needed. */
function ensureFbq() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false
  if (typeof window.fbq === 'function') return true

  const fbq = function (...args) {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  }

  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.push = fbq

  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  return true
}

/**
 * Initialises the pixel once and sends the first PageView.
 * Safe to call on every render: all work happens exactly once.
 *
 * @returns {boolean} whether the pixel is active
 */
export function initPixel() {
  if (!isPixelEnabled()) {
    if (env.DEV) {
      console.info(
        '[analytics] Meta Pixel is disabled because VITE_FB_PIXEL_ID is not set.',
      )
    }
    return false
  }

  if (initialised) return true

  // Set the flag before touching fbq so a re-entrant call cannot double init.
  initialised = true
  if (!ensureFbq()) {
    initialised = false
    return false
  }

  window.fbq('init', FB_PIXEL_ID)
  window.fbq('track', FB_EVENTS.pageView)
  return true
}

/** Sends a standard event. No-ops safely when the pixel is unavailable. */
export function track(event, params) {
  if (!isPixelEnabled() || typeof window === 'undefined') return false
  if (typeof window.fbq !== 'function') return false

  // fbevents.js delivers events with `navigator.sendBeacon` where available, so
  // an event fired just before a navigation (e.g. a call click) still leaves the
  // page with the browser.
  window.fbq('track', event, params)
  return true
}

/** PageView for in-app route changes (the first one is sent by initPixel). */
export function trackPageView(pathname) {
  const params = pathname && pathname !== '/' ? { content_name: pathname } : undefined
  return track(FB_EVENTS.pageView, params)
}

/** Custom (non-lead) events, e.g. `ServiceCTAClick` / `PricingInquiry`. */
export function trackCustomEvent(name, params) {
  if (!name) return false
  return track(name, params)
}

/**
 * Standard Meta `Lead` event with a distinguishing `lead_source`.
 *
 * @param {string} source `website_form`
 * @param {Record<string, unknown>} [params]
 */
export function trackLead(source, params = {}) {
  return track(FB_EVENTS.lead, { ...params, lead_source: source })
}

/**
 * Lead event for a lead-form submission. Must only be called after the CRM has
 * confirmed the lead - never on validation errors or on failure.
 *
 * @param {string} [serviceLabel] service chosen by the visitor (for reporting)
 */
export function trackFormLead(serviceLabel = '') {
  const label = String(serviceLabel).trim()
  return trackLead(LEAD_SOURCES.form, {
    content_name: label ? `Lead form - ${label}` : 'Lead form',
    content_category: 'Form',
  })
}

/**
 * Custom `CallClick` event for a Call Now click.
 *
 * This is intentionally NOT a `Lead` event: a click only proves that the dialer
 * was opened, so counting it as a lead inflates the Lead numbers in Meta Ads
 * Manager and in the events behind any Lead-optimised campaign. Only a lead form
 * that the CRM confirmed produces a `Lead` (see `trackFormLead()`).
 *
 * @param {string} [href] the clicked `tel:` link
 * @returns {boolean} whether an event was actually sent
 */
export function trackCallClick(href = '') {
  const now = Date.now()

  // Swallow an accidental double click on the same link in quick succession so a
  // single call attempt can never produce two events.
  if (
    lastCallEvent.href === href &&
    now - lastCallEvent.at < CALL_DEDUPE_WINDOW_MS
  ) {
    return false
  }

  lastCallEvent = { href, at: now }

  return track(FB_EVENTS.callClick, {
    content_name: 'Call Now button',
    content_category: 'Call',
  })
}

