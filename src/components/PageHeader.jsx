import { Link, useLocation } from 'react-router-dom'
import Button from './ui/Button'
import LeadFormTrigger from './LeadFormTrigger'
import { siteConfig } from '../config/siteConfig'
import { breadcrumbSchema } from '../utils/schema'

const CAPABILITIES = ['Website Development', 'Meta Ads', 'Video Editing']

/**
 * Shared page header for every inner page. Keeps the semantic h1, breadcrumb
 * navigation and conversion actions, and adds a decorative capability orbit so
 * every deep page feels part of the same premium system.
 *
 * It also emits BreadcrumbList structured data, which Google uses to show the
 * Home > Section path instead of a bare URL in search results.
 */
export default function PageHeader({ eyebrow, title, description, breadcrumb = [], quoteService }) {
  const { pathname } = useLocation()

  return (
    <header className="bg-ink-950 relative isolate overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumb, pathname)),
        }}
      />
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="glow-red pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm">
              <Link
                to="/"
                className="text-ink-300 hover:border-white/30 hover:text-white inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 transition-colors"
              >
                Home
              </Link>
              {breadcrumb.map((item) => (
                <span key={item.label} className="text-ink-500 flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-ink-300 hover:border-white/30 hover:text-white inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-ink-100 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                      {item.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>

            {eyebrow ? (
              <p className="text-brand-400 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.22em] uppercase">
                <span className="bg-brand-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                {eyebrow}
              </p>
            ) : null}

            <h1 className="font-display mt-4 max-w-3xl text-[2.1rem] leading-[1.06] font-extrabold tracking-[-0.03em] text-white sm:text-[2.6rem] lg:text-[3.05rem]">
              {title}
            </h1>
            <p className="text-ink-300 mt-5 max-w-2xl text-[0.975rem] leading-relaxed sm:text-lg">
              {description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <LeadFormTrigger
                size="lg"
                iconRight="ArrowRight"
                service={quoteService}
                source="page_header"
              >
                Get a Quote
              </LeadFormTrigger>
              <Button
                href={siteConfig.contact.telHref}
                variant="outlineLight"
                size="lg"
                icon="Phone"
              >
                Call Now
              </Button>
              <Link
                to={quoteService ? `/contact?service=${quoteService}` : '/contact'}
                className="text-ink-400 hover:text-ink-100 inline-flex items-center self-center text-[0.75rem] font-semibold underline decoration-white/25 underline-offset-4 transition-colors"
              >
                Or use the full contact page
              </Link>
            </div>
          </div>

          {/* Decorative capability orbit - purely visual */}
          <div className="relative hidden aspect-square lg:block" aria-hidden="true">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/[0.07]" />
            <div className="absolute inset-16 rounded-full border border-white/[0.05]" />
            <div className="bg-brand-600/20 absolute inset-24 rounded-full blur-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-white/10 bg-ink-900/80 flex h-28 w-28 flex-col items-center justify-center rounded-3xl border shadow-2xl backdrop-blur">
                <span className="font-display text-brand-400 text-3xl font-extrabold">EZ</span>
                <span className="text-ink-400 mt-1 text-[0.6rem] font-bold tracking-[0.2em] uppercase">
                  Digital
                </span>
              </div>
            </div>
            {CAPABILITIES.map((label, index) => {
              const positions = [
                'top-2 left-1/2 -translate-x-1/2',
                'bottom-8 -left-2',
                'bottom-8 -right-2',
              ]
              return (
                <span
                  key={label}
                  className={`border-white/12 bg-ink-900/85 text-ink-100 absolute ${positions[index]} rounded-full border px-3.5 py-2 text-[0.7rem] font-semibold whitespace-nowrap shadow-lg backdrop-blur`}
                >
                  {label}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
