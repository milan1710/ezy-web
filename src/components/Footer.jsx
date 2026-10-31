import { Link } from 'react-router-dom'
import Logo from './common/Logo'
import Icon from './ui/Icon'
import Button from './ui/Button'
import { siteConfig, whatsappLink } from '../config/siteConfig'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Ezy Digital' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/#faq', label: 'FAQ' },
]

const SERVICE_LINKS = [
  { href: '/website-development', label: 'Website Development' },
  { href: '/ecommerce-website-development', label: 'E-commerce Websites' },
  { href: '/custom-web-applications', label: 'Custom Web Applications' },
  { href: '/meta-ads-management', label: 'Meta Ads Management' },
  { href: '/video-editing', label: 'Video Editing & Reels' },
  { href: '/social-media-management', label: 'Social Media Management' },
  { href: '/additional-digital-services', label: 'Additional Digital Services' },
]

const linkClass = 'text-ink-400 hover:text-brand-300 text-[0.8125rem] transition-colors'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-page pt-16 pb-28 lg:pb-14">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr_1.3fr]">
          <div>
            <Logo variant="light" size="md" />
            <p className="text-ink-400 mt-5 max-w-sm text-[0.8125rem] leading-relaxed">
              {siteConfig.brand.shortDescription}
            </p>
            <p className="text-ink-500 mt-4 text-[0.65rem] font-bold tracking-[0.2em] uppercase">
              {siteConfig.brand.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button href={siteConfig.contact.telHref} size="md" icon="Phone">
                Call Now
              </Button>
              <Button to="/contact" variant="outlineLight" size="md" iconRight="ArrowRight">
                Get a Quote
              </Button>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[0.7rem] font-bold tracking-[0.16em] text-white uppercase">Company</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-[0.7rem] font-bold tracking-[0.16em] text-white uppercase">Services</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.7rem] font-bold tracking-[0.16em] text-white uppercase">
              Get in touch
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Icon name="Phone" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="text-ink-500 block text-[0.6rem] font-bold tracking-[0.14em] uppercase">
                    Phone
                  </span>
                  <a
                    href={siteConfig.contact.telHref}
                    className="hover:text-brand-300 mt-0.5 block text-[0.8125rem] font-semibold text-white transition-colors"
                  >
                    {siteConfig.contact.phoneInternational}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Icon name="Mail" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="text-ink-500 block text-[0.6rem] font-bold tracking-[0.14em] uppercase">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-brand-300 mt-0.5 block text-[0.8125rem] text-white/90 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="text-ink-500 block text-[0.6rem] font-bold tracking-[0.14em] uppercase">
                    Studio
                  </span>
                  <address className="text-ink-300 mt-0.5 text-[0.8125rem] leading-relaxed not-italic">
                    {siteConfig.contact.address.full}
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Icon name="Sparkles" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="text-ink-500 block text-[0.6rem] font-bold tracking-[0.14em] uppercase">
                    WhatsApp
                  </span>
                  <a
                    href={whatsappLink(siteConfig.whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-300 mt-0.5 block text-[0.8125rem] font-semibold text-white/90 transition-colors"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </li>
            </ul>

            <p className="text-ink-500 mt-5 text-[0.75rem]">
              Website:{' '}
              <a
                href={siteConfig.domain}
                className="hover:text-brand-300 font-semibold text-white/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ezydigital.in
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-500 text-[0.75rem]">
            &copy; {year} {siteConfig.brand.fullName}. All rights reserved.
          </p>

          <ul className="text-ink-400 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.75rem]">
            <li>
              <Link to="/privacy-policy" className="hover:text-brand-300 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-brand-300 transition-colors">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <a href={siteConfig.contact.telHref} className="hover:text-brand-300 transition-colors">
                Call {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div className="container-page pb-8 lg:pr-44">
          <p className="text-ink-600 text-[0.7rem] leading-relaxed">
            Website design, e-commerce development, custom web applications, Meta Ads management and
            video editing. All prices shown are &ldquo;starting at&rdquo; prices; the final price is
            confirmed only in a written quotation after the scope is agreed. Domain, hosting, paid
            tools, payment gateway charges and Meta advertising spend may be additional.
          </p>
        </div>
      </div>
    </footer>
  )
}

