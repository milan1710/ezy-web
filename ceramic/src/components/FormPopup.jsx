import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AuditForm from './presentation/AuditForm'
import Icon from './ui/Icon'

/**
 * Lead popup that contains the full audit form.
 *
 * It appears on every full page load/reload, a few seconds after the page
 * opens, and never on legal or confirmation pages. Closing hides it only for
 * the current page view.
 */
const OPEN_DELAY = 2800
const HIDDEN_ROUTES = ['/thank-you', '/privacy-policy', '/terms']

export default function FormPopup() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null)

  const hidden = HIDDEN_ROUTES.some((path) => pathname === path || pathname.startsWith(`${path}/`))

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (hidden) return undefined
    // Lets the automated smoke test exercise the page without the overlay.
    if (typeof window !== 'undefined' && window.__EZY_DISABLE_POPUP__) return undefined

    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY)
    return () => window.clearTimeout(timer)
  }, [hidden])

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => {
      dialogRef.current
        ?.querySelector('.cn-audit-form input, .cn-audit-form select, .cn-audit-form button')
        ?.focus()
    }, 90)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  if (!open) return null

  return (
    <div className="cn-popup" role="presentation">
      <button
        type="button"
        className="cn-popup__backdrop"
        aria-label="Close the free audit popup"
        onClick={close}
        tabIndex={-1}
      />
      <div
        className="cn-popup__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cn-popup-title"
        aria-describedby="cn-popup-lead"
        ref={dialogRef}
      >
        <div className="cn-popup__head">
          <span className="cn-popup__head-label">
            <Icon name="clipboard" size={15} /> Free Audit Form
          </span>
          <button
            type="button"
            className="cn-popup__close"
            onClick={close}
            aria-label="Close popup"
            title="Close"
          >
            <span className="cn-popup__close-glyph" aria-hidden="true">
              &times;
            </span>
          </button>
        </div>

        <div className="cn-popup__scroll">
        <span className="cn-popup__badge">
          <Icon name="clock" size={13} /> Limited free audit slots this week
        </span>

        <h2 id="cn-popup-title">Fill the Free Ceramic Growth Audit Form</h2>
        <p className="cn-popup__lead" id="cn-popup-lead">
          Fill the audit form below and we will review your website, catalogue and inquiry path —
          then tell you what to improve first.
        </p>

        <ul className="cn-popup__points">
          <li>
            <Icon name="checkCircle" size={14} /> Free 15-minute audit conversation
          </li>
          <li>
            <Icon name="checkCircle" size={14} /> Practical next steps, no obligation
          </li>
          <li>
            <Icon name="checkCircle" size={14} /> Reply within 1 business day
          </li>
        </ul>

        <div className="cn-popup__form">
          <AuditForm idPrefix="popup-audit" showUrgency={false} showNote={false} onSuccess={close} />
        </div>

        <p className="cn-popup__note">Free · No obligation · Reply within 1 business day.</p>

        <button type="button" className="cn-popup__dismiss" onClick={close}>
          Maybe later
        </button>
        </div>
      </div>
    </div>
  )
}
