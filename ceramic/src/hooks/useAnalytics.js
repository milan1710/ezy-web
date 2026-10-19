import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { initPixel, isPixelEnabled, trackLead, trackPageView } from '../utils/analytics'

/**
 * Wires up Meta Pixel tracking for the ceramic site:
 *
 * 1. Initialises the pixel and sends the first PageView.
 * 2. Sends a PageView on every in-app route change.
 * 3. Fires a Lead when a visitor clicks any phone (`tel:`) link. This covers
 *    the floating call button, header/footer phone links and every "call"
 *    fallback inside the forms.
 *
 * Form submissions are counted separately on the thank-you page, so they are
 * never double-counted here.
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

      const href = (anchor.getAttribute('href') || '').trim().toLowerCase()
      if (href.startsWith('tel:')) trackLead('call')
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
