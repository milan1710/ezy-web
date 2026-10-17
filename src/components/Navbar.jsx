import { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import Logo from './common/Logo'
import Button from './ui/Button'
import useScrolled from '../hooks/useScrolled'
import useActiveSection from '../hooks/useActiveSection'
import { siteConfig, whatsappLink } from '../config/siteConfig'

const SERVICE_LINKS = [
  { to: '/website-development', label: 'Website Development' },
  { to: '/website-development/pricing', label: 'Website Pricing' },
  { to: '/ecommerce-website-development', label: 'E-commerce Websites' },
  { to: '/custom-web-applications', label: 'Custom Web Applications' },
  { to: '/meta-ads-management', label: 'Meta Ads Management' },
  { to: '/social-media-management', label: 'Social Media Management' },
  { to: '/additional-digital-services', label: 'Additional Digital Services' },
]

const NAV_ITEMS = [
  { id: 'home', label: 'Home', to: '/', section: 'home' },
  { id: 'services', label: 'Services', section: 'services' },
  { id: 'portfolio', label: 'Portfolio', to: '/portfolio', section: 'portfolio' },
  { id: 'pricing', label: 'Pricing', to: '/website-development/pricing', section: 'pricing' },
  { id: 'about', label: 'About', to: '/about', section: 'about' },
  { id: 'contact', label: 'Contact', to: '/contact', section: 'contact' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.section)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const scrolled = useScrolled(10)
  const location = useLocation()
  const menuId = useId()

  const isHome = location.pathname === '/'
  const activeId = useActiveSection(SECTION_IDS, { enabled: isHome })

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const solid = scrolled || !isHome || open || servicesOpen

  const isActive = (item) => {
    if (item.to === '/') return location.pathname === '/'
    if (item.id === 'services') return location.pathname === '/website-development'
    if (item.to) return location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)
    return false
  }

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-ink-100 border-b bg-white/95 shadow-[0_8px_28px_-20px_rgba(8,13,22,0.5)] backdrop-blur-md'
          : 'border-b border-white/5 bg-transparent',
      ].join(' ')}
    >
      <a
        href="#main"
        className="focus:bg-ink-900 sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          to="/"
          className="flex shrink-0 items-center rounded-lg"
          aria-label={`${siteConfig.brand.fullName} home`}
        >
          <Logo variant={solid ? 'dark' : 'light'} size="md" />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const active = isHome ? activeId === item.section : isActive(item)

              if (item.id === 'services') {
                return (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setServicesOpen(false)
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      onClick={() => setServicesOpen((value) => !value)}
                      className={[
                        'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors',
                        solid
                          ? active || servicesOpen
                            ? 'text-brand-700 bg-brand-50'
                            : 'text-ink-700 hover:bg-ink-50 hover:text-ink-900'
                          : 'text-white/85 hover:bg-white/10 hover:text-white',
                      ].join(' ')}
                    >
                      Services
                      <ChevronDown
                        className={[
                          'h-4 w-4 transition-transform',
                          servicesOpen ? 'rotate-180' : '',
                        ].join(' ')}
                      />
                    </button>

                    <div
                      id="services-menu"
                      hidden={!servicesOpen}
                      className="border-ink-100 shadow-lift absolute top-full left-0 mt-2 w-64 rounded-2xl border bg-white p-2"
                    >
                      <ul>
                        {SERVICE_LINKS.map((link) => (
                          <li key={link.to}>
                            <Link
                              to={link.to}
                              className={[
                                'block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors',
                                location.pathname === link.to
                                  ? 'text-brand-700 bg-brand-50'
                                  : 'text-ink-700 hover:bg-ink-50 hover:text-ink-900',
                              ].join(' ')}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              }

              return (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'relative block rounded-full px-3 py-2 text-sm font-semibold transition-colors',
                      solid
                        ? active
                          ? 'text-brand-700 bg-brand-50'
                          : 'text-ink-700 hover:bg-ink-50 hover:text-ink-900'
                        : active
                          ? 'bg-white/10 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.contact.telHref}
            className={[
              'inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors',
              solid
                ? 'border-ink-200 text-ink-800 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700'
                : 'border-white/25 text-white hover:border-white/60 hover:bg-white/10',
            ].join(' ')}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xl:inline">{siteConfig.contact.phoneDisplay}</span>
          </a>

          <Button to="/contact" size="md" iconRight="ArrowRight">
            Get a Quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.contact.telHref}
            aria-label="Call Ezy Digital"
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
              solid ? 'border-ink-200 text-ink-800' : 'border-white/25 text-white',
            ].join(' ')}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
              solid ? 'border-ink-200 text-ink-900' : 'border-white/25 text-white',
            ].join(' ')}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="border-ink-100 max-h-[85vh] overflow-y-auto border-t bg-white lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="container-page py-4">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-ink-700 hover:bg-ink-50 hover:text-brand-700 block rounded-xl px-4 py-3 text-base font-semibold"
              >
                Home
              </Link>
            </li>
          </ul>

          <p className="text-ink-400 mt-4 px-4 text-xs font-semibold tracking-[0.18em] uppercase">
            Services
          </p>
          <ul className="mt-1 flex flex-col gap-1">
            {SERVICE_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-ink-700 hover:bg-ink-50 hover:text-brand-700 block rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="border-ink-100 mt-3 flex flex-col gap-1 border-t pt-3">
            {NAV_ITEMS.filter((item) => item.id !== 'home' && item.id !== 'services').map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-ink-700 hover:bg-ink-50 hover:text-brand-700 block rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid gap-2 pb-2">
            <Button to="/contact" size="lg" iconRight="ArrowRight" fullWidth>
              Get a Quote
            </Button>
            <Button
              href={whatsappLink(siteConfig.whatsappMessages.general)}
              variant="whatsapp"
              size="lg"
              icon="Sparkles"
              external
              fullWidth
            >
              Chat on WhatsApp
            </Button>
            <Button href={siteConfig.contact.telHref} variant="outline" size="lg" icon="Phone" fullWidth>
              Call {siteConfig.contact.phoneInternational}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
