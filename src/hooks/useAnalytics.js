import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  initPixel,
  isCallLink,
  isPixelEnabled,
  trackCallClick,
  trackCustomEvent,
  trackPageView,
} from '../utils/analytics'

/**
 * Wires up Meta Pixel tracking for the whole site:
 *
 * 1. Initialises the single pixel and sends the first PageView.
 * 2. Sends a PageView on every in-app route change (this is a single page app,
 *    so a route change does not reload the page and would otherwise go unseen).
 * 3. Uses ONE delegated click listener to fire a custom `CallClick` event
 *    whenever a visitor clicks a `tel:` link. Because it is delegated at the
 *    document level, every current and future Call Now button is covered - the
 *    floating button, the header, the hero, the pricing sections, the footer and
 *    the Thank You page alike. A call click is deliberately NOT a `Lead` event,
 *    so it can never inflate the Lead count in Meta Ads reporting.
 * 4. Still forwards the `data-fb-event` custom events used by the pricing and
 *    service CTAs. Those are not Lead events.
 *
 * The only `Lead` event on this site is fired by the form itself, after the CRM
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
      // block navigation. Duplicate clicks are handled inside trackCallClick().
      // This sends a custom `CallClick` event - never a `Lead`.
      trackCallClick(href)
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
