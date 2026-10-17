import { Link } from 'react-router-dom'
import Logo from './common/Logo'
import Icon from './ui/Icon'
import { siteConfig, whatsappLink } from '../config/siteConfig'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Ezy Digital' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/website-development/pricing', label: 'Website Pricing' },
  { href: '/meta-ads-management', label: 'Meta Ads Pricing' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/#faq', label: 'FAQ' },
]

const SERVICE_LINKS = [
  { href: '/website-development', label: 'Website Development' },
  { href: '/ecommerce-website-development', label: 'E-commerce Websites' },
  { href: '/custom-web-applications', label: 'Custom Web Applications' },
  { href: '/meta-ads-management', label: 'Meta Ads Management' },
  { href: '/social-media-management', label: 'Social Media Management' },
  { href: '/additional-digital-services', label: 'Additional Digital Services' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 pb-28 text-white lg:pb-14">
      <div className="container-page pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <Logo variant="light" size="md" />
            <p className="text-ink-300 mt-5 max-w-sm text-sm leading-relaxed">
              {siteConfig.brand.shortDescription}
            </p>
            <p className="text-ink-400 mt-4 text-xs font-semibold tracking-[0.18em] uppercase">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-ink-300 mt-4 text-sm">
              Website:{' '}
              <a
                href={siteConfig.domain}
                className="font-semibold text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ezydigital.in
              </a>
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold tracking-[0.14em] text-white uppercase">Company</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-ink-300 hover:text-brand-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-sm font-bold tracking-[0.14em] text-white uppercase">Services</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-ink-300 hover:text-brand-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold tracking-[0.14em] text-white uppercase">Get in touch</h2>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Icon name="Phone" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="text-ink-400 block text-xs font-semibold tracking-wide uppercase">
                    Phone
                  </span>
                  <a href={siteConfig.contact.telHref} className="text-sm font-semibold text-white hover:underline">
                    {siteConfig.contact.phoneInternational}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Icon name="Sparkles" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="text-ink-400 block text-xs font-semibold tracking-wide uppercase">
                    WhatsApp
                  </span>
                  <a
                    href={whatsappLink(siteConfig.whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-100 text-sm font-semibold hover:text-white hover:underline"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="text-ink-400 block text-xs font-semibold tracking-wide uppercase">
                    Address
                  </span>
                  <address className="text-ink-100 text-sm leading-relaxed not-italic">
                    {siteConfig.contact.address.full}
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Icon name="Mail" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <span className="text-ink-400 block text-xs font-semibold tracking-wide uppercase">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-ink-100 text-sm hover:text-white hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-400 text-sm">
            &copy; {year} {siteConfig.brand.fullName}. All rights reserved.
          </p>

          <ul className="text-ink-400 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <li>
              <Link to="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <a href={siteConfig.contact.telHref} className="transition-colors hover:text-white">
                Call {siteConfig.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <p className="text-ink-500 mt-6 text-xs leading-relaxed">
          Website design, e-commerce development, custom web applications and digital marketing. All
          prices shown are &ldquo;starting at&rdquo; prices; the final price is confirmed only in a
          written quotation after the scope is agreed. Domain, hosting, paid tools, payment gateway
          charges and Meta advertising spend may be additional.
        </p>
      </div>
    </footer>
  )
}
