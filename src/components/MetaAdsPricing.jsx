import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import Icon from './ui/Icon'
import { Link } from 'react-router-dom'
import {
  formatINR,
  metaAdsBudgetDisclaimer,
  metaAdsPackages,
  metaAdsPricingNote,
  metaAdsUnlimitedConditions,
} from '../data/pricing'
import { whatsappLink } from '../config/siteConfig'

function MetaCard({ pkg, index }) {
  return (
    <Reveal delay={index * 0.07} className="h-full">
      <article
        className={[
          'relative flex h-full flex-col rounded-3xl border p-6 sm:p-7',
          pkg.highlight
            ? 'border-brand-300 bg-white shadow-lift ring-2 ring-brand-500/25'
            : 'border-ink-100 bg-white hover:border-brand-200 hover:shadow-soft',
        ].join(' ')}
      >
        {pkg.badge ? (
          <span className="bg-brand-600 absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
            {pkg.badge}
          </span>
        ) : null}

        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg leading-snug font-bold text-ink-900">{pkg.name}</h3>
          </div>
          <span className="bg-brand-50 text-brand-600 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
            <Icon name={pkg.icon} className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-5 border-t border-ink-100 pt-5">
          <span className="text-ink-400 text-xs font-semibold tracking-[0.18em] uppercase">
            {pkg.billing === 'monthly' ? 'Monthly charge' : 'One-time charge'}
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {formatINR(pkg.startingPrice)}
            </span>
            <span className="text-ink-400 text-sm font-semibold">
              {pkg.billing === 'monthly' ? '/month' : 'one-time'}
            </span>
          </div>
          <p className="text-ink-500 mt-2 text-sm leading-relaxed">{pkg.audience}</p>
        </div>

        <ul className="mt-5 flex flex-1 flex-col gap-2.5">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-600">
              <Icon name="CheckCircle2" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {pkg.clarification ? (
          <p className="bg-ink-50 text-ink-600 mt-5 rounded-xl p-3.5 text-xs leading-relaxed">
            {pkg.clarification}
          </p>
        ) : null}

        <div className="mt-5 border-t border-ink-100 pt-4">
          <p className="text-ink-400 text-xs font-semibold tracking-[0.16em] uppercase">
            Not included
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {pkg.excludes.map((item) => (
              <li key={item} className="text-ink-500 rounded-full bg-ink-50 px-2.5 py-1 text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 grid gap-2">
          <Button
            href={whatsappLink(
              `Hello Ezy Digital, I am interested in the ${pkg.name} package (${formatINR(
                pkg.startingPrice,
              )}${pkg.billing === 'monthly' ? ' per month' : ' one-time'}). Please share the details.`,
            )}
            external
            variant={pkg.highlight ? 'primary' : 'outline'}
            size="lg"
            iconRight="ArrowRight"
            fullWidth
          >
            {pkg.ctaLabel}
          </Button>
          <Link
            to={`/contact?service=${pkg.id}`}
            className="text-ink-600 hover:text-brand-700 text-center text-sm font-semibold"
          >
            Request a Quote
          </Link>
        </div>
      </article>
    </Reveal>
  )
}

export default function MetaAdsPricing({ showConditions = true }) {
  return (
    <section
      id="meta-ads-pricing"
      aria-labelledby="meta-ads-pricing-heading"
      className="bg-ink-50 py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Meta Ads pricing"
          titleId="meta-ads-pricing-heading"
          title="Facebook & Instagram advertising with transparent service charges"
          description="Choose a one-time campaign setup or monthly social media and Meta Ads management. Advertising spend is always paid separately through your own Meta ad account."
          level={2}
        />

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Icon name="Info" className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <div>
              <p className="font-bold text-amber-900">Meta Ads budget is separate</p>
              <p className="mt-1 text-sm leading-relaxed text-amber-900/90">{metaAdsBudgetDisclaimer}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {metaAdsPackages
            .filter((pkg) => pkg.active)
            .map((pkg, index) => (
              <MetaCard key={pkg.id} pkg={pkg} index={index} />
            ))}
        </div>

        <p className="text-ink-500 mt-8 text-center text-sm leading-relaxed">{metaAdsPricingNote}</p>

        {showConditions ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink-200 bg-white p-6">
              <h3 className="text-base font-bold text-ink-900">
                What &ldquo;unlimited campaign setup&rdquo; actually means
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {metaAdsUnlimitedConditions.map((condition) => (
                  <li key={condition} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600">
                    <Icon name="Check" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-200 bg-white p-6">
              <h3 className="text-base font-bold text-ink-900">Before a campaign can start</h3>
              <p className="text-ink-500 mt-2 text-sm leading-relaxed">
                The client provides business information, creative approvals and access to their own
                Meta Business Portfolio and ad account. We do not ask for your Facebook password, and
                ad spend is never charged to us on your behalf.
              </p>
              <p className="text-ink-500 mt-3 text-sm leading-relaxed">
                No fixed number of leads, sales, calls or conversions is promised. Results depend on
                your offer, budget, audience and market conditions.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button to="/contact?service=meta-single-campaign" size="md" iconRight="ArrowRight">
                  Request a Quote
                </Button>
                <Button href={whatsappLink('Hello Ezy Digital, I would like to discuss Meta Ads management for my business.')} external variant="outline" size="md" icon="Sparkles">
                  WhatsApp Enquiry
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

