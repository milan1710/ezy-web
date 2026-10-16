/** Smoothly scrolls to an in-page section, accounting for the sticky header. */
export function scrollToSection(id, { behavior = 'smooth' } = {}) {
  if (typeof document === 'undefined') return
  const target = document.getElementById(id)
  if (!target) return

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  target.scrollIntoView({
    behavior: reduceMotion ? 'auto' : behavior,
    block: 'start',
  })
}

/** Reads the current #hash (without the '#') from a router location object. */
export function hashTarget(location) {
  const hash = location?.hash || (typeof window !== 'undefined' ? window.location.hash : '')
  return hash.replace('#', '')
}
