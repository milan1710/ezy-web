/**
 * Meta (Facebook) Pixel integration for the ceramic micro-site.
 *
 * Exactly ONE pixel is used on the ceramic site: `1679588473838138`. The id can
 * be overridden with `VITE_FB_PIXEL_ID`, but the verified ceramic-site id is
 * used by default so tracking keeps working without build-time configuration.
 * Duplicate initialisation is blocked both in module scope and with a global
 * flag, so the same pixel can never be loaded twice (HMR, StrictMode or a
 * second bundle).
 *
 * Tracked events:
 *   PageView  - once on first load and on every in-app route change
 *   Lead      - once on the thank-you page after a successful form submission
 *   CallClick - when a visitor clicks any phone (`tel:`) link. This is a custom
 *               event and NOT a `Lead`, so call clicks never inflate the Lead
 *               count reported by Meta.
 *
 * No name, phone number, email address or form description is ever sent to
 * Meta. Only the event and generic button/page labels are sent.
 */

// `import.meta.env` only exists under Vite. The fallback keeps this module
// importable from plain Node (verification scripts).
const env = import.meta.env ?? {}

const DEFAULT_PIXEL_ID = '1679588473838138'

// Global registry of pixel ids already initialised on this page. It survives
// duplicate module evaluation so `fbq('init', ...)` is never sent twice.
const PIXEL_REGISTRY_KEY = '__EZY_CERAMIC_PIXELS__'

// Use the verified id when the variable is not defined at all. An explicitly
// empty value disables the pixel, matching the main website's behaviour.
export const FB_PIXEL_ID =
  env.VITE_FB_PIXEL_ID === undefined
    ? DEFAULT_PIXEL_ID
    : String(env.VITE_FB_PIXEL_ID).trim()

export const FB_EVENTS = {
  pageView: 'PageView',
  lead: 'Lead',
  callClick: 'CallClick',
}

/** Friendly labels so Meta Events Manager shows useful breakdowns. */
const LEAD_SOURCES = {
  form: { content_name: 'Ceramic growth form', content_category: 'Ceramic inquiry' },
  audit: { content_name: 'Ceramic growth audit form', content_category: 'Ceramic inquiry' },
  inquiry: { content_name: 'Ceramic inquiry form', content_category: 'Ceramic inquiry' },
}

/** True when a pixel ID is configured. */
export function isPixelEnabled() {
  return FB_PIXEL_ID.length > 0
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

let initialised = false

/** True when this exact pixel id was already initialised on the page. */
function isRegisteredOnPage() {
  if (typeof window === 'undefined') return false
  const ids = window[PIXEL_REGISTRY_KEY]
  return Array.isArray(ids) && ids.includes(FB_PIXEL_ID)
}

function registerOnPage() {
  if (typeof window === 'undefined') return
  const ids = Array.isArray(window[PIXEL_REGISTRY_KEY]) ? window[PIXEL_REGISTRY_KEY] : []
  if (!ids.includes(FB_PIXEL_ID)) ids.push(FB_PIXEL_ID)
  window[PIXEL_REGISTRY_KEY] = ids
}

/**
 * Initialises the pixel once and sends the first PageView.
 * Safe to call on every render: it only does work the first time.
 */
export function initPixel() {
  if (!isPixelEnabled()) {
    if (env.DEV) {
      console.info('[analytics] Facebook Pixel is disabled because no pixel id is configured.')
    }
    return false
  }

  if (initialised || isRegisteredOnPage()) {
    initialised = true
    return true
  }
  if (!ensureFbq()) return false

  initialised = true
  registerOnPage()
  window.fbq('init', FB_PIXEL_ID)
  window.fbq('track', FB_EVENTS.pageView)
  return true
}

/** Sends a standard event. No-ops safely when the pixel is unavailable. */
export function track(event, params) {
  if (!isPixelEnabled() || typeof window === 'undefined') return false

  // A Lead can fire from a page effect before the App-level init effect has
  // run, so make sure the queue exists first.
  if (typeof window.fbq !== 'function' && !initPixel()) return false

  window.fbq('track', event, params)
  return true
}

/** PageView for in-app route changes (the first one is sent by initPixel). */
export function trackPageView(pathname) {
  const params = pathname && pathname !== '/' ? { content_name: pathname } : undefined
  return track(FB_EVENTS.pageView, params)
}

/**
 * Lead event for a visitor who submitted a ceramic form successfully.
 *
 * Only the ceramic thank-you page calls this, and only for the
 * `ceramic-audit` / `ceramic-inquiry` form ids, so unrelated forms can never
 * be counted as ceramic Leads.
 *
 * @param {'form' | 'audit' | 'inquiry' | string} source
 */
export function trackLead(source = 'form') {
  const meta = LEAD_SOURCES[source] ?? {
    content_name: `Ceramic lead - ${source}`,
    content_category: 'Ceramic inquiry',
  }

  return track(FB_EVENTS.lead, { ...meta, source })
}

/**
 * Custom `CallClick` event for a phone (`tel:`) link click.
 *
 * Deliberately NOT a `Lead` event: clicking a Call Now button only proves that
 * the dialer was opened, so counting it as a lead inflates the Lead numbers in
 * Meta Ads Manager. Only the thank-you page fires the form `Lead`.
 */
export function trackCallClick() {
  return track(FB_EVENTS.callClick, {
    content_name: 'Phone call button',
    content_category: 'Call',
  })
}
