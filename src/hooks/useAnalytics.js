import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  initPixel,
  isCallLink,
  isPixelEnabled,
  trackCallLead,
  trackCustomEvent,
  trackPageView,
} from '../utils/analytics'

/**
 * Wires up Meta Pixel tracking for the whole site:
 *
 * 1. Initialises the single pixel and sends the first PageView.
 * 2. Sends a PageView on every in-app route change (this is a single page app,
 *    so a route change does not reload the page and would otherwise go unseen).
 * 3. Uses ONE delegated click listener to fire a `Lead` event (with
 *    `lead_source: call_click`) whenever a visitor clicks a `tel:` link. Because
 *    it is delegated at the document level, every current and future Call Now
 *    button is covered - the floating button, the header, the hero, the pricing
 *    sections, the footer and the Thank You page alike.
 * 4. Still forwards the `data-fb-event` custom events used by the pricing and
 *    service CTAs. Those are not Lead events.
 *
 * The Lead event for the form is fired by the form itself, only after the CRM
 * confirms the submission (see `components/LeadForm.jsx`).
 *
 * Everything no-ops safely when VITE_FB_PIXEL_ID is not set.
 */
export default function useAnalytics() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    initPixel()
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      // The initial PageView is already sent by initPixel().
      isFirstRender.current = false
      return
    }
    trackPageView(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    const handleActivation = (event) => {
      // For middle-click (auxclick) only button 1 opens a new tab.
      if (event.type === 'auxclick' && event.button !== 1) return

      const target = event.target
      const anchor = target instanceof Element ? target.closest('a[href]') : null
      if (!anchor) return

      const customEvent = anchor.dataset.fbEvent
      if (customEvent) {
        trackCustomEvent(customEvent, {
          content_name: anchor.dataset.fbLabel || customEvent,
        })
      }

      const href = anchor.getAttribute('href')
      if (!isCallLink(href)) return

      // Fire-and-forget: the dialer must open immediately, the event must not
      // block navigation. Duplicate clicks are handled inside trackCallLead().
      trackCallLead(href)
    }

    // Capture phase so the event is counted even if a handler stops propagation.
    document.addEventListener('click', handleActivation, true)
    document.addEventListener('auxclick', handleActivation, true)

    return () => {
      document.removeEventListener('click', handleActivation, true)
      document.removeEventListener('auxclick', handleActivation, true)
    }
  }, [])

  return { pixelEnabled: isPixelEnabled() }
}
