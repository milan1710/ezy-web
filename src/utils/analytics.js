/**
 * Meta (Facebook) Pixel integration.
 *
 * The pixel ID lives in the environment (`VITE_FB_PIXEL_ID`) so it can be
 * changed without touching any code - see `.env` and `.env.example`.
 *
 * What is tracked on this website:
 *   PageView - once when the site loads, and again on every in-app route change
 *   Lead     - when a visitor clicks a phone (`tel:`), WhatsApp (`wa.me`) or
 *              email (`mailto:`) link, i.e. when they actually try to get in touch
 *
 * Nothing else is sent. In particular, no name, phone number, email address or
 * project description ever reaches Meta, because this website has no form.
 *
 * The pixel is a public identifier (it appears in the page source anyway); the
 * environment variable exists for easy switching between pixel IDs, not to keep
 * it secret. If the variable is empty the pixel is disabled entirely.
 */

// `import.meta.env` only exists under Vite, so fall back to an empty object to
// keep this module importable from plain Node (used by scripts/verify-config.mjs).
const env = import.meta.env ?? {}

export const FB_PIXEL_ID = String(env.VITE_FB_PIXEL_ID ?? '').trim()

export const FB_EVENTS = {
  pageView: 'PageView',
  lead: 'Lead',
}

/** Friendly names so Meta's events manager shows useful breakdowns. */
const LEAD_SOURCES = {
  call: { content_name: 'Phone call button', content_category: 'Call' },
  whatsapp: { content_name: 'WhatsApp button', content_category: 'WhatsApp' },
  email: { content_name: 'Email link', content_category: 'Email' },
}

/** True when a pixel ID has been configured. */
export function isPixelEnabled() {
  return FB_PIXEL_ID.length > 0
}

/**
 * Classifies a link so the caller knows whether clicking it is a lead.
 * Pure function - no browser APIs - so it can be unit checked.
 *
 * @param {string} href
 * @returns {{ event: string, source: string } | null}
 */
export function describeLink(href) {
  if (!href || typeof href !== 'string') return null

  const value = href.trim().toLowerCase()
  const lead = (source) => ({ event: FB_EVENTS.lead, source })

  if (value.startsWith('tel:')) return lead('call')
  if (value.includes('wa.me/') || value.includes('api.whatsapp.com')) return lead('whatsapp')
  if (value.startsWith('mailto:')) return lead('email')

  return null
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
 *
 * @returns {boolean} whether the pixel is active
 */
export function initPixel() {
  if (!isPixelEnabled()) {
    if (env.DEV) {
      console.info(
        '[analytics] Facebook Pixel is disabled because VITE_FB_PIXEL_ID is not set.',
      )
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
  if (typeof window.fbq !== 'function') return false

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
 * @param {'call' | 'whatsapp' | 'email' | string} source
 */
export function trackLead(source = 'unknown') {
  const meta = LEAD_SOURCES[source] ?? {
    content_name: `Lead - ${source}`,
    content_category: 'Other',
  }

  return track(FB_EVENTS.lead, { ...meta, source })
}
