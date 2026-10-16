import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  describeLink,
  initPixel,
  isPixelEnabled,
  trackLead,
  trackPageView,
} from '../utils/analytics'

/**
 * Wires up Meta Pixel tracking for the whole site:
 *
 * 1. Initialises the pixel and sends the first PageView.
 * 2. Sends a PageView on every in-app route change (this is a single page app,
 *    so a route change does not reload the page and would otherwise go unseen).
 * 3. Uses ONE delegated click listener to fire a `Lead` event whenever a visitor
 *    clicks a phone, WhatsApp or email link. Because it is delegated at the
 *    document level, every current and future CTA is covered automatically -
 *    the floating call/WhatsApp buttons, the header phone icon, hero buttons,
 *    pricing and package-finder CTAs and the footer links alike.
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

      const info = describeLink(anchor.getAttribute('href'))
      if (!info) return

      trackLead(info.source)
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
