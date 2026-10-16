import { useEffect, useState } from 'react'

/**
 * Reports whether the page has been scrolled past `offset` pixels.
 * Used for the sticky header's condensed styling.
 */
export default function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}
