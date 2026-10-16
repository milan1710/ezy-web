import { Link } from 'react-router-dom'
import Icon from './ui/Icon'
import { siteConfig } from '../config/siteConfig'

/**
 * Shared shell for the legal pages: dark page header, readable prose column and
 * a direct-contact card so the page is useful rather than a dead end.
 */
export default function LegalLayout({ title, lead, updated, children }) {
  return (
    <>
      <header className="bg-ink-950 relative isolate overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-16">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[24rem] w-[24rem] rounded-full bg-brand-600/20 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="text-ink-400 mb-5 text-sm">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink-200">{title}</span>
          </nav>

          <h1 className="max-w-3xl text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="text-ink-300 mt-5 max-w-2xl text-base leading-relaxed">{lead}</p>
          {updated ? (
            <p className="text-ink-400 mt-6 text-xs font-semibold tracking-[0.18em] uppercase">
              Last updated: {updated}
            </p>
          ) : null}
        </div>
      </header>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_20rem]">
          <div className="legal-prose max-w-3xl">{children}</div>

          <aside className="h-max rounded-2xl border border-ink-100 bg-ink-50 p-6 lg:sticky lg:top-28">
            <h2 className="text-base font-bold text-ink-900">Questions about this page?</h2>
            <p className="text-ink-500 mt-2 text-sm leading-relaxed">
              Contact {siteConfig.brand.owner} at {siteConfig.brand.fullName} directly.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={siteConfig.contact.telHref}
                className="text-ink-800 inline-flex items-center gap-2 font-semibold hover:text-brand-700"
              >
                <Icon name="Phone" className="h-4 w-4" />
                {siteConfig.contact.phoneInternational}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-ink-800 inline-flex items-center gap-2 font-semibold hover:text-brand-700"
              >
                <Icon name="Mail" className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <p className="text-ink-500 mt-2 leading-relaxed">
                {siteConfig.contact.address.line1}, {siteConfig.contact.address.city},{' '}
                {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode},{' '}
                {siteConfig.contact.address.country}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
