import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { hashTarget, scrollToSection } from '../utils/scroll'

/**
 * Scroll behaviour for the SPA:
 * - resets to the top when the route (pathname) changes
 * - scrolls to the matching section when a #hash is present (e.g. /#pricing)
 */
export default function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const target = hashTarget(location)

    if (target) {
      // Wait a frame so the target element exists after a route change.
      const frame = requestAnimationFrame(() => scrollToSection(target))
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [location.pathname, location.hash, location.key])

  return null
}
