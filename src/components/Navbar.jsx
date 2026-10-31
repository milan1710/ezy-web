import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import Logo from './common/Logo'
import Button from './ui/Button'
import Icon from './ui/Icon'
import LeadFormTrigger from './LeadFormTrigger'
import useScrolled from '../hooks/useScrolled'
import useActiveSection from '../hooks/useActiveSection'
import { siteConfig, whatsappLink } from '../config/siteConfig'

/** Full service list - every destination already exists on the site. */
const SERVICE_LINKS = [
  {
    to: '/website-development',
    label: 'Website Development',
    icon: 'Laptop',
    text: 'Business websites, landing pages and custom builds.',
  },
  {
    to: '/ecommerce-website-development',
    label: 'E-commerce Websites',
    icon: 'ShoppingCart',
    text: 'Catalogues, cart, checkout and order management.',
  },
  {
    to: '/custom-web-applications',
    label: 'Custom Web Applications',
    icon: 'LayoutDashboard',
    text: 'Portals, dashboards and business workflow systems.',
  },
  {
    to: '/meta-ads-management',
    label: 'Meta Ads Management',
    icon: 'Megaphone',
    text: 'Facebook & Instagram campaigns, targeting and reporting.',
  },
  {
    to: '/video-editing',
    label: 'Video Editing & Reels',
    icon: 'Clapperboard',
    text: 'Promotional videos, product films and social Reels.',
  },
  {
    to: '/social-media-management',
    label: 'Social Media Management',
    icon: 'Share2',
    text: 'Monthly page management with a defined post allowance.',
  },
  {
    to: '/additional-digital-services',
    label: 'Additional Digital Services',
    icon: 'Palette',
    text: 'Design, content, SEO groundwork and maintenance.',
  },
  {
    to: '/website-development/pricing',
    label: 'Website Packages & Pricing',
    icon: 'FileText',
    text: 'Published website packages with starting prices.',
  },
]

const SERVICE_PATHS = SERVICE_LINKS.map((link) => link.to)

const NAV_ITEMS = [
  { id: 'home', label: 'Home', to: '/', section: 'home' },
  { id: 'services', label: 'Services', section: 'services' },
  { id: 'portfolio', label: 'Portfolio', to: '/portfolio', section: 'portfolio' },
  { id: 'pricing', label: 'Pricing', to: '/pricing', section: 'pricing' },
  { id: 'about', label: 'About', to: '/about', section: 'about' },
  { id: 'contact', label: 'Contact', to: '/contact', section: 'contact' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.section)
const SERVICES_INDEX = NAV_ITEMS.findIndex((item) => item.id === 'services')
const NAV_BEFORE_SERVICES = NAV_ITEMS.slice(0, SERVICES_INDEX)
const NAV_AFTER_SERVICES = NAV_ITEMS.slice(SERVICES_INDEX + 1)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const scrolled = useScrolled(10)
  const location = useLocation()
  const menuId = useId()
  const servicesId = useId()
  const closeTimer = useRef(null)

  const isHome = location.pathname === '/'
  const activeId = useActiveSection(SECTION_IDS, { enabled: isHome })

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open && !servicesOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setServicesOpen(false)
      }
    }

    const onClickOutside = (event) => {
      if (!event.target.closest?.('[data-services-menu]')) setServicesOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('click', onClickOutside)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('click', onClickOutside)
    }
  }, [open, servicesOpen])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  const solid = scrolled || !isHome || open || servicesOpen

  const isActive = (item) => {
    if (item.id === 'home') return location.pathname === '/'
    if (item.id === 'services') {
      return location.pathname === '/website-development' || SERVICE_PATHS.includes(location.pathname)
    }
    if (item.to) return location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)
    return false
  }

  const activeSection = isHome ? activeId : null

  const renderNavItem = (item) => {
    const active = isActive(item) || activeSection === item.section
    return (
      <li key={item.id}>
        <Link
          to={item.to}
          aria-current={active ? 'page' : undefined}
          className={[
            'relative inline-flex items-center rounded-full px-3.5 py-2 text-[0.875rem] font-semibold transition-colors',
            solid
              ? active
                ? 'text-ink-950 bg-ink-100/80'
                : 'text-ink-600 hover:bg-ink-100/60 hover:text-ink-950'
              : active
                ? 'bg-white/10 text-white'
                : 'text-white/70 hover:bg-white/[0.06] hover:text-white',
          ].join(' ')}
        >
          {item.label}
        </Link>
      </li>
    )
  }

  const openServices = () => {
    window.clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const scheduleCloseServices = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140)
  }

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-ink-100/80 border-b bg-white/85 shadow-[0_10px_40px_-28px_rgba(17,17,17,0.55)] backdrop-blur-xl'
          : 'border-b border-white/[0.06] bg-transparent',
      ].join(' ')}
    >
      <a
        href="#main"
        className="focus:bg-ink-950 sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Ezy Digital home">
          <Logo variant={solid ? 'dark' : 'light'} size="md" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_BEFORE_SERVICES.map(renderNavItem)}

            <li
              className="relative"
              data-services-menu
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                aria-expanded={servicesOpen}
                aria-controls={servicesId}
                className={[
                  'inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.875rem] font-semibold transition-colors',
                  solid
                    ? servicesOpen
                      ? 'text-ink-950 bg-ink-100/80'
                      : 'text-ink-600 hover:bg-ink-100/60 hover:text-ink-950'
                    : servicesOpen
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/[0.06] hover:text-white',
                ].join(' ')}
              >
                Services
                <ChevronDown
                  className={[
                    'h-3.5 w-3.5 transition-transform duration-200',
                    servicesOpen ? 'rotate-180' : '',
                  ].join(' ')}
                  aria-hidden="true"
                />
              </button>


              {servicesOpen ? (
                <div
                  id={servicesId}
                  className="border-ink-100 shadow-lift absolute top-[calc(100%+0.9rem)] left-1/2 w-[42rem] -translate-x-1/2 overflow-hidden rounded-3xl border bg-white p-3"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {SERVICE_LINKS.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setServicesOpen(false)}
                        className="group hover:bg-ink-50 flex items-start gap-3 rounded-2xl p-3 transition-colors"
                      >
                        <span className="bg-brand-50 text-brand-600 group-hover:bg-brand-600 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:text-white">
                          <Icon name={link.icon} className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="text-ink-950 block text-[0.8125rem] font-bold">
                            {link.label}
                          </span>
                          <span className="text-ink-500 mt-0.5 block text-xs leading-relaxed">
                            {link.text}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="from-ink-950 to-ink-900 mt-2 flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r px-4 py-3">
                    <p className="text-ink-300 text-xs leading-relaxed">
                      Not sure what you need? We will recommend the smallest scope that does the job.
                    </p>
                    <Link
                      to="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="text-brand-300 hover:text-brand-200 inline-flex shrink-0 items-center gap-1 text-xs font-bold"
                    >
                      Ask us
                      <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ) : null}
            </li>

            {NAV_AFTER_SERVICES.map(renderNavItem)}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.contact.telHref}
            className={[
              'inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.8125rem] font-semibold transition-colors',
              solid
                ? 'text-ink-700 hover:bg-ink-100 hover:text-ink-950'
                : 'text-white/75 hover:bg-white/[0.07] hover:text-white',
            ].join(' ')}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phoneInternational}
          </a>
          <LeadFormTrigger size="md" iconRight="ArrowRight" source="navbar">
            Get a Quote
          </LeadFormTrigger>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.contact.telHref}
            aria-label={`Call Ezy Digital on ${siteConfig.contact.phoneInternational}`}
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
              solid
                ? 'border-ink-200 text-ink-900 hover:bg-ink-100'
                : 'border-white/25 text-white hover:bg-white/10',
            ].join(' ')}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
              solid
                ? 'border-ink-200 text-ink-900 hover:bg-ink-100'
                : 'border-white/25 text-white hover:bg-white/10',
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


      {/* Mobile sheet */}
      <div
        id={menuId}
        hidden={!open}
        className="border-ink-100 mobile-sheet overflow-y-auto border-t bg-white lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="container-page py-5">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-ink-900 hover:bg-ink-50 block rounded-xl px-4 py-3 text-base font-bold"
              >
                Home
              </Link>
            </li>
          </ul>

          <p className="text-ink-400 mt-5 px-4 text-[0.7rem] font-bold tracking-[0.2em] uppercase">
            Services
          </p>
          <ul className="mt-1 grid gap-1">
            {SERVICE_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-ink-700 hover:bg-ink-50 hover:text-ink-950 flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  <Icon name={link.icon} className="text-brand-600 h-4 w-4 shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="border-ink-100 mt-4 grid gap-1 border-t pt-4">
            {NAV_ITEMS.filter((item) => item.id !== 'home' && item.id !== 'services').map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-ink-700 hover:bg-ink-50 hover:text-ink-950 block rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 grid gap-2 pb-3">
            <LeadFormTrigger size="lg" iconRight="ArrowRight" fullWidth source="mobile_menu">
              Get a Free Quote
            </LeadFormTrigger>
            <Button
              href={siteConfig.contact.telHref}
              variant="dark"
              size="lg"
              icon="Phone"
              fullWidth
            >
              Call {siteConfig.contact.phoneInternational}
            </Button>
            <Button
              href={whatsappLink(siteConfig.whatsappMessages.general)}
              variant="outline"
              size="lg"
              icon="Sparkles"
              external
              fullWidth
            >
              Chat on WhatsApp
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

