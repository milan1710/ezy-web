import { Link } from 'react-router-dom'
import Button from './ui/Button'
import Icon from './ui/Icon'
import { findPackage, formatINR, packageEnquiryMessage } from '../data/pricing'
import { whatsappLink } from '../config/siteConfig'

/**
 * Detailed single-package card used on the e-commerce and custom application
 * pages. All content comes from the central pricing catalogue.
 */
export default function PackageSpotlight({ id }) {
  const pkg = findPackage(id)
  if (!pkg) return null

  return (
    <article className="grid gap-8 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_20rem]">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-brand-50 text-brand-600 inline-flex h-12 w-12 items-center justify-center rounded-xl">
            <Icon name={pkg.icon} className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-2xl font-bold text-ink-900">{pkg.name}</h2>
          </div>
        </div>

        <p className="text-ink-600 mt-5 text-sm leading-relaxed sm:text-base">{pkg.description}</p>
        <p className="text-ink-500 mt-2 text-sm leading-relaxed">
          <span className="font-semibold text-ink-700">Who it is for: </span>
          {pkg.audience}
        </p>

        <h3 className="mt-7 text-sm font-bold tracking-[0.14em] text-ink-900 uppercase">
          Included in the starting scope
        </h3>
        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-600">
              <Icon name="CheckCircle2" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs leading-relaxed text-amber-900">
            <span className="font-bold">Important: </span>
            {Array.isArray(pkg.excludes) ? pkg.excludes.join(' · ') : pkg.excludes}
          </p>
        </div>
      </div>

      <aside className="h-max rounded-2xl border border-ink-100 bg-ink-50 p-6 lg:sticky lg:top-28">
        <span className="text-ink-400 text-xs font-semibold tracking-[0.18em] uppercase">
          {pkg.startingAt ? 'Starting at' : pkg.billing === 'monthly' ? 'Monthly price' : 'One-time price'}
        </span>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-4xl font-extrabold text-ink-900">
            {formatINR(pkg.startingPrice)}
          </span>
          <span className="text-ink-400 text-sm font-semibold">{pkg.priceSuffix}</span>
        </div>
        <p className="text-ink-500 mt-2 text-xs leading-relaxed">
          Final pricing depends on requirements and the approved scope.
        </p>

        <div className="mt-5 grid gap-2">
          <Button
            href={whatsappLink(packageEnquiryMessage(pkg))}
            external
            size="lg"
            iconRight="ArrowRight"
            fullWidth
          >
            {pkg.ctaLabel}
          </Button>
          <Button to={`/contact?service=${pkg.id}`} variant="outline" size="lg" icon="FileText" fullWidth>
            Request a Quote
          </Button>
        </div>

        <Link
          to="/website-development/pricing#pricing-conditions"
          className="text-ink-500 hover:text-brand-700 mt-4 inline-flex items-center gap-1.5 text-xs font-semibold underline decoration-ink-200 underline-offset-4"
        >
          <Icon name="Info" className="h-3.5 w-3.5" />
          Read pricing conditions
        </Link>
      </aside>
    </article>
  )
}
