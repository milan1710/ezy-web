import { useEffect, useState } from 'react'

/**
 * Tracks which in-page section is currently in view so the navigation can show
 * a correct active state while scrolling the single-page home route.
 *
 * @param {string[]} ids Section element ids to observe
 * @returns {string} The id of the section closest to the top of the viewport
 */
export default function useActiveSection(ids, { enabled = true } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') return undefined

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element) => Boolean(element))

    if (elements.length === 0) return undefined

    const visibility = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let best = null
        visibility.forEach((ratio, id) => {
          if (ratio > 0 && (best === null || ratio > best.ratio)) best = { id, ratio }
        })

        if (best) setActiveId(best.id)
      },
      {
        rootMargin: '-96px 0px -45% 0px',
        threshold: [0.05, 0.25, 0.5, 0.75],
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids, enabled])

  return activeId
}
