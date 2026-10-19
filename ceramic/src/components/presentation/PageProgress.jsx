import { useEffect, useState } from 'react'

/** Non-blocking page-load progress accent. Content is never hidden behind it. */
export default function PageProgress() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  return <span className={`cn-progress${done ? ' is-done' : ''}`} aria-hidden="true" />
}
