import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { primaryNav, solutionNav } from '../data/navigation'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'
import Icon from './ui/Icon'
import Logo from './Logo'
import MobileNavigation from './MobileNavigation'

/** Returns the route path without the deployment basename, if present. */
function useRoutePath() {
  const { pathname } = useLocation()
  return pathname.replace(/^\/ceramic/, '') || '/'
}

function isRouteActive(path, to) {
  if (to === '/') return path === '/'
  return path === to || path.startsWith(`${to}/`)
}

export default function Header() {
  const path = useRoutePath()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
    setSolutionsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen)
    return () => document.body.classList.remove('menu-open')
  }, [mobileOpen])

  useEffect(() => {
    if (!solutionsOpen) return undefined

    const onPointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsOpen(false)
      }
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSolutionsOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [solutionsOpen])

  const others = primaryNav.filter(
    (item) => item.to !== '/' && item.to !== '/solutions' && item.label !== 'Home',
  )

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__note">
            <span className="topbar__dot" aria-hidden="true" />
            Digital growth for <strong>Morbi&apos;s ceramic industry</strong>
          </p>
          <div className="topbar__links">
            <a href={ceramicSite.contact.telHref}>
              <Icon name="phone" size={13} /> {ceramicSite.contact.phoneInternational}
            </a>
            <a href={whatsappLink(ceramicSite.whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <Logo />
          <span className="brand__sub" aria-hidden="true">
            Ceramic Growth
            <br />
            Partner
          </span>

          <nav className="header__nav" aria-label="Primary navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item" ref={dropdownRef}>
                <button
                  type="button"
                  className={`nav-link nav-toggle${isRouteActive(path, '/solutions') ? ' is-active' : ''}`}
                  aria-expanded={solutionsOpen}
                  aria-controls="solutions-menu"
                  onClick={() => setSolutionsOpen((open) => !open)}
                >
                  Growth Solutions <Icon name="chevronDown" size={13} />
                </button>
                {solutionsOpen ? (
                  <div className="nav-dropdown" id="solutions-menu">
                    {solutionNav.map((item) => (
                      <Link key={item.to} to={item.to}>
                        <strong>{item.label}</strong>
                        <span>{item.description}</span>
                      </Link>
                    ))}
                    <Link className="nav-dropdown__all" to="/solutions">
                      View all solutions and delivery scope →
                    </Link>
                  </div>
                ) : null}
              </li>
              {others.map((item) => (
                <li key={item.to} className="nav-item">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link className="btn btn--sm header__cta" to="/contact">
            Discuss Your Growth Plan <Icon name="arrowRight" size={15} />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation menu"
          >
            <Icon name="menu" size={21} />
          </button>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} path={path} />
    </>
  )
}
