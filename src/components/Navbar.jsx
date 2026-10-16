import { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './common/Logo'
import Button from './ui/Button'
import useScrolled from '../hooks/useScrolled'
import useActiveSection from '../hooks/useActiveSection'
import { siteConfig, whatsappLink } from '../config/siteConfig'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(10)
  const location = useLocation()
  const menuId = useId()

  const isHome = location.pathname === '/'
  const activeId = useActiveSection(SECTION_IDS, { enabled: isHome })

  // Close the mobile menu whenever the route or hash changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  // Escape closes the menu; body scroll is locked while it is open.
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

  // The header is transparent over the dark hero and solid once scrolled.
  const solid = scrolled || !isHome || open

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-ink-100 bg-white/95 shadow-[0_8px_28px_-20px_rgba(8,13,22,0.5)] backdrop-blur-md'
          : 'border-b border-white/5 bg-transparent',
      ].join(' ')}
    >
      <a
        href="#home"
        className="focus:bg-ink-900 sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center rounded-lg"
          aria-label={`${siteConfig.brand.fullName} home`}
        >
          <Logo variant={solid ? 'dark' : 'light'} size="md" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isHome && activeId === item.id
              return (
                <li key={item.id}>
                  <Link
                    to={`/#${item.id}`}
                    aria-current={active ? 'true' : undefined}
                    className={[
                      'relative block rounded-full px-3.5 py-2 text-sm font-semibold transition-colors',
                      solid
                        ? active
                          ? 'text-brand-700 bg-brand-50'
                          : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                        : active
                          ? 'bg-white/15 text-white'
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

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.contact.telHref}
            aria-label="Call Milan Soni"
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

          <Button to="/#contact" size="md" iconRight="ArrowRight">
            Get a Free Quote
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.contact.telHref}
            aria-label="Call Milan Soni"
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

      {/* Mobile menu panel */}
      <div id={menuId} hidden={!open} className="max-h-[85vh] overflow-y-auto border-t border-ink-100 bg-white lg:hidden">
        <nav aria-label="Mobile navigation" className="container-page py-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-ink-700 hover:bg-ink-50 hover:text-brand-700 block rounded-xl px-4 py-3 text-base font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid gap-2 pb-2">
            <Button to="/#contact" size="lg" iconRight="ArrowRight" fullWidth>
              Get a Free Quote
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
            <Button
              href={siteConfig.contact.telHref}
              variant="outline"
              size="lg"
              icon="Phone"
              fullWidth
            >
              Call {siteConfig.contact.phoneInternational}
            </Button>
          </div>
        </nav>
      </div>

    </header>
  )
}
