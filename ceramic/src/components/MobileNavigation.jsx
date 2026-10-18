import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { primaryNav, solutionNav } from '../data/navigation'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'
import Icon from './ui/Icon'

export default function MobileNavigation({ open, onClose, path }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previous = document.activeElement
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [open, onClose])

  if (!open) return null

  const isActive = (to) => (to === '/' ? path === '/' : path === to || path.startsWith(`${to}/`))

  return (
    <>
      <div className="mobile-overlay" aria-hidden="true" onClick={onClose} />
      <aside
        className="mobile-menu"
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-menu__head">
          <img
            src={`${import.meta.env.BASE_URL}images/ezy-digital-logo.png`}
            alt="Ezy Digital logo"
            width="930"
            height="386"
          />
          <button
            type="button"
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Close navigation menu"
            ref={closeRef}
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="mobile-menu__body">
          <ul className="mobile-menu__links">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={isActive(item.to) ? 'is-active' : undefined}
                  onClick={onClose}
                  aria-current={isActive(item.to) ? 'page' : undefined}
                >
                  {item.label}
                  <Icon name="chevronRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mobile-menu__sublabel">Growth solution pages</p>
          <div className="mobile-menu__sublinks">
            {solutionNav.map((item) => (
              <Link key={item.to} to={item.to} onClick={onClose}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mobile-menu__foot">
          <Link className="btn btn--block" to="/contact" onClick={onClose}>
            Discuss Your Growth Plan <Icon name="arrowRight" size={16} />
          </Link>
          <a
            className="btn btn--outline btn--block"
            href={whatsappLink(ceramicSite.whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={16} /> WhatsApp Ezy Digital
          </a>
          <div className="mobile-menu__contact">
            <a href={ceramicSite.contact.telHref}>
              <Icon name="phone" size={13} /> {ceramicSite.contact.phoneInternational}
            </a>
            <span>
              <Icon name="mapPin" size={13} /> {ceramicSite.contact.address.city}, Gujarat
            </span>
          </div>
        </div>
      </aside>
    </>
  )
}
