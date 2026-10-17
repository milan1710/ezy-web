import { Link } from 'react-router-dom'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import Icon from './ui/Icon'
import PricingConditions from './PricingConditions'
import { formatINR, packageEnquiryMessage, websitePackages } from '../data/pricing'
import { whatsappLink } from '../config/siteConfig'

function PricingCard({ pkg, index }) {
  const featured = pkg.id === 'business-website'

  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <article
        className={[
          'relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7',
          featured
            ? 'border-brand-300 shadow-lift ring-2 ring-brand-500/20'
            : 'border-ink-100 hover:border-brand-200',
        ].join(' ')}
      >
        {featured ? (
          <span className="bg-brand-600 absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase shadow-glow">
            Recommended for growing businesses
          </span>
        ) : null}

        <div className="flex items-start gap-3">
          <span className="bg-brand-50 text-brand-600 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
            <Icon name={pkg.icon} className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg leading-snug font-bold text-ink-900">{pkg.name}</h3>
          </div>
        </div>

        <p className="text-ink-500 mt-4 text-sm leading-relaxed">{pkg.audience}</p>

        <div className="mt-5 border-t border-ink-100 pt-5">
          <span className="text-ink-400 text-xs font-semibold tracking-[0.18em] uppercase">
            Starting at
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {formatINR(pkg.startingPrice)}
            </span>
            <span className="text-ink-400 text-sm font-semibold">{pkg.priceSuffix}</span>
          </div>
          <p className="text-ink-400 mt-1 text-xs">Final price depends on the approved scope.</p>
        </div>

        <ul className="mt-6 flex flex-1 flex-col gap-2.5">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-600">
              <Icon name="CheckCircle2" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="text-ink-400 mt-5 rounded-xl bg-ink-50 p-3.5 text-xs leading-relaxed">
          <span className="text-ink-600 font-semibold">Not included: </span>
          {pkg.excludes}
        </p>

        <div className="mt-6 grid gap-2">
          <Button
            href={whatsappLink(packageEnquiryMessage(pkg))}
            external
            variant={featured ? 'primary' : 'outline'}
            size="lg"
            iconRight="ArrowRight"
            fullWidth
          >
            {pkg.ctaLabel}
          </Button>
          <Link
            to={`/contact?service=${pkg.id}`}
            className="text-ink-600 hover:text-brand-700 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            to="/website-development/pricing#pricing-conditions"
            className="text-ink-400 hover:text-ink-700 inline-flex items-center justify-center gap-1.5 text-xs font-semibold underline decoration-ink-200 underline-offset-4 transition-colors"
          >
            <Icon name="Info" className="h-3.5 w-3.5" />
            Pricing conditions
          </Link>
        </div>
      </article>
    </Reveal>
  )
}

export default function Pricing({ withConditions = true }) {
  return (
    <>
      <section id="pricing" aria-labelledby="pricing-heading" className="bg-white py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Website development pricing"
            titleId="pricing-heading"
            title="Professional websites with clear starting prices"
            description="Five website packages for different stages of business. Every card shows the starting price, who it is for, what is included and what is not included."
            level={2}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {websitePackages
              .filter((pkg) => pkg.active)
              .map((pkg, index) => (
                <PricingCard key={pkg.id} pkg={pkg} index={index} />
              ))}
          </div>

          <div className="bg-ink-50 mt-10 flex flex-col items-start gap-4 rounded-2xl border border-ink-100 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink-600 max-w-2xl text-sm leading-relaxed">
              Not sure which package fits? Tell us what your business does and what the website must
              achieve. You will get a written recommendation, scope and quotation.
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button to="/website-development/pricing" size="md" iconRight="ArrowRight">
                Compare Packages
              </Button>
              <Button to="/contact" variant="outline" size="md" icon="FileText">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {withConditions ? <PricingConditions /> : null}
    </>
  )
}

