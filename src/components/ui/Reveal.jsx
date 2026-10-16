import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * Scroll-triggered reveal wrapper.
 *
 * Animations are purely decorative:
 * - when the visitor prefers reduced motion the content renders immediately
 * - a safety timer also forces the visible state if the IntersectionObserver
 *   never reports (headless renderers, unusual embeds, older browsers), so the
 *   content can never be left permanently invisible
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className = '',
  as = 'div',
  once = true,
  amount = 0.15,
}) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount })
  const [forced, setForced] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const element = ref.current
      if (!element) return
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight + 200) setForced(true)
    }, 1200)
    return () => window.clearTimeout(timer)
  }, [])

  const MotionTag = motion[as] ?? motion.div

  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const visible = inView || forced

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
