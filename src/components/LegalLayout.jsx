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
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="glow-red pointer-events-none absolute -top-32 right-[-10%] h-[30rem] w-[30rem]"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-ink-300 hover:border-white/30 hover:text-white inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 transition-colors"
            >
              Home
            </Link>
            <span className="text-ink-500" aria-hidden="true">
              /
            </span>
            <span className="text-ink-100 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
              {title}
            </span>
          </nav>

          <h1 className="font-display max-w-3xl text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-white sm:text-[2.6rem] lg:text-[2.95rem]">
            {title}
          </h1>
          <p className="text-ink-300 mt-5 max-w-2xl text-[0.975rem] leading-relaxed">{lead}</p>
          {updated ? (
            <p className="text-ink-500 mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] uppercase">
              Last updated: {updated}
            </p>
          ) : null}
        </div>
      </header>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_20rem]">
          <div className="legal-prose max-w-3xl">{children}</div>

          <aside className="border-ink-100 bg-ink-50 h-max rounded-2xl border p-6 lg:sticky lg:top-28">
            <h2 className="font-display text-ink-950 text-base font-bold">Questions about this page?</h2>
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
