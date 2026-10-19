/**
 * Meta (Facebook) Pixel integration for the ceramic micro-site.
 *
 * The pixel id can be overridden with `VITE_FB_PIXEL_ID`, but the verified
 * ceramic-site id is used by default so tracking keeps working without any
 * build-time configuration.
 *
 * Tracked events:
 *   PageView - once on first load and on every in-app route change
 *   Lead     - when a visitor clicks any phone (`tel:`) link
 *   Lead     - once on the thank-you page after a successful form submission
 *
 * No name, phone number, email address or form description is ever sent to
 * Meta. Only the event and generic button/page labels are sent.
 */

// `import.meta.env` only exists under Vite. The fallback keeps this module
// importable from plain Node (verification scripts).
const env = import.meta.env ?? {}

const DEFAULT_PIXEL_ID = '2673882233043263'

// Use the verified id when the variable is not defined at all. An explicitly
// empty value disables the pixel, matching the main website's behaviour.
export const FB_PIXEL_ID =
  env.VITE_FB_PIXEL_ID === undefined
    ? DEFAULT_PIXEL_ID
    : String(env.VITE_FB_PIXEL_ID).trim()

export const FB_EVENTS = {
  pageView: 'PageView',
  lead: 'Lead',
}

/** Friendly labels so Meta Events Manager shows useful breakdowns. */
const LEAD_SOURCES = {
  call: { content_name: 'Phone call button', content_category: 'Call' },
  form: { content_name: 'Ceramic growth form', content_category: 'Form' },
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

  if (initialised) return true
  if (!ensureFbq()) return false

  initialised = true
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
 * Lead event for a visitor who is trying to contact the business.
 *
 * @param {'call' | 'form' | string} source
 */
export function trackLead(source = 'unknown') {
  const meta = LEAD_SOURCES[source] ?? {
    content_name: `Lead - ${source}`,
    content_category: 'Other',
  }

  return track(FB_EVENTS.lead, { ...meta, source })
}
