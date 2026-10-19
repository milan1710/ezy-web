import { useCallback, useEffect, useRef, useState } from 'react'
import { presentationNav } from '../../data/presentationContent'
import Icon from '../ui/Icon'

const LOGO_SRC = `${import.meta.env.BASE_URL}images/ezy-digital-logo.png`
const HEADER_OFFSET = 78

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const menuRef = useRef(null)

  const scrollToSection = useCallback(
    (id) => {
      const element = document.getElementById(id)
      if (!element) return

      const performScroll = () => {
        const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
        window.scrollTo({
          top: Math.max(top, 0),
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        })
      }

      setActive(id)
      setOpen(false)

      // When the mobile drawer is open the body is scroll-locked. Release it
      // before starting the smooth scroll so the target offset is reached.
      if (open) {
        window.setTimeout(performScroll, 140)
      } else {
        performScroll()
      }

      if (window.history?.replaceState) {
        window.history.replaceState(null, '', `#${id}`)
      }
    },
    [open],
  )

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 24)

      const position = window.scrollY + HEADER_OFFSET + 110
      let current = presentationNav[0].id
      for (const item of presentationNav) {
        const element = document.getElementById(item.id)
        if (element && element.offsetTop <= position) current = item.id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('cn-menu-open', open)
    if (open) {
      window.setTimeout(() => closeRef.current?.focus(), 60)
    }
    return () => document.body.classList.remove('cn-menu-open')
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }
      if (event.key !== 'Tab' || !menuRef.current) return
      const focusable = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled])',
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <header className={`cn-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="cn-container cn-header__inner">
          <a
            className="cn-brand"
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('home')
            }}
            aria-label="Ezy Digital — back to top"
          >
            <span className="cn-brand__plate">
              <img
                src={LOGO_SRC}
                alt="Ezy Digital Marketing Agency logo"
                width="930"
                height="386"
                decoding="async"
              />
            </span>
            <span className="cn-brand__text">
              <strong>Ezy Digital</strong>
              <small>Marketing Agency</small>
            </span>
          </a>

          <nav className="cn-nav" aria-label="Ceramic presentation sections">
            {presentationNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cn-nav__link${active === item.id ? ' is-active' : ''}`}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="cn-btn cn-btn--primary cn-header__cta"
            href="#contact"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('contact')
            }}
          >
            Get Free Growth Audit
            <Icon name="arrowRight" size={15} />
          </a>

          <button
            type="button"
            className="cn-menu-btn"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="cn-mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={21} />
          </button>
        </div>
      </header>

      <div
        className={`cn-mobile${open ? ' is-open' : ''}`}
        id="cn-mobile-navigation"
        aria-hidden={!open}
      >
        <button
          type="button"
          className="cn-mobile__backdrop"
          aria-label="Close navigation menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <nav className="cn-mobile__panel" aria-label="Mobile presentation navigation" ref={menuRef}>
          <div className="cn-mobile__head">
            <span className="cn-mobile__eyebrow">Ceramic Business Growth</span>
            <button
              type="button"
              className="cn-mobile__close"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              ref={closeRef}
            >
              <Icon name="close" size={20} />
            </button>
          </div>
          <div className="cn-mobile__links">
            {presentationNav.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : ''}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(item.id)
                }}
                tabIndex={open ? 0 : -1}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.label}
                <Icon name="arrowRight" size={15} />
              </a>
            ))}
          </div>
          <a
            className="cn-btn cn-btn--primary cn-btn--block"
            href="#contact"
            tabIndex={open ? 0 : -1}
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('contact')
            }}
          >
            Get Free Growth Audit
            <Icon name="arrowRight" size={15} />
          </a>
          <p className="cn-mobile__note">Upleta, Gujarat, India · +91 95126 48085</p>
        </nav>
      </div>
    </>
  )
}

