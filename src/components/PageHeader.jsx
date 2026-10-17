import { Link } from 'react-router-dom'
import Button from './ui/Button'
import { siteConfig } from '../config/siteConfig'

/**
 * Shared dark page header for every service page. Keeps a semantic h1,
 * breadcrumb navigation and consistent conversion actions.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  quoteService,
}) {
  const quoteHref = quoteService ? `/contact?service=${quoteService}` : '/contact'

  return (
    <header className="bg-ink-950 relative isolate overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full bg-brand-600/20 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="text-ink-400 mb-5 text-sm">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          {breadcrumb.map((item) => (
            <span key={item.label}>
              <span className="mx-2">/</span>
              {item.to ? (
                <Link to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink-200">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow ? (
          <p className="text-brand-400 text-xs font-semibold tracking-[0.22em] uppercase">{eyebrow}</p>
        ) : null}

        <h1 className="mt-3 max-w-4xl text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h1>
        <p className="text-ink-300 mt-5 max-w-2xl text-base leading-relaxed">{description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button to={quoteHref} size="lg" iconRight="ArrowRight">
            Get a Quote
          </Button>
          <Button href={siteConfig.contact.telHref} variant="outlineLight" size="lg" icon="Phone">
            Call Now
          </Button>
        </div>
      </div>
    </header>
  )
}
