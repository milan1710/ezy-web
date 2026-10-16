import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import Icon from './ui/Icon'
import { packages, formatINR, pricingNote, pricingExclusions } from '../data/pricing'
import { siteConfig, whatsappLink } from '../config/siteConfig'

function PricingCard({ pkg, index }) {
  const featured = Boolean(pkg.highlight)

  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <article
        className={[
          'relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7',
          featured
            ? 'border-brand-300 bg-white shadow-lift ring-2 ring-brand-500/25'
            : 'border-ink-100 bg-white hover:border-brand-200 hover:shadow-soft',
        ].join(' ')}
      >
        {pkg.badge ? (
          <span className="bg-brand-600 absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase shadow-glow">
            {pkg.badge}
          </span>
        ) : null}

        <h3 className="text-lg font-bold text-ink-900">{pkg.name}</h3>
        <p className="text-ink-500 mt-2 min-h-[2.75rem] text-sm leading-relaxed">{pkg.audience}</p>

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
        </div>

        <ul className="mt-6 flex flex-1 flex-col gap-2.5">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-600">
              <Icon name="CheckCircle2" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {pkg.excludes ? (
          <p className="text-ink-400 mt-5 rounded-xl bg-ink-50 p-3.5 text-xs leading-relaxed">
            {pkg.excludes}
          </p>
        ) : null}

        <div className="mt-6">
          <Button
            href={whatsappLink(
              `Hello Milan, I am interested in the ${pkg.name} package (starting at ${formatINR(
                pkg.startingPrice,
              )}${pkg.priceSuffix === 'per month' ? ' per month' : ''}). Please share the details and a quotation.`,
            )}
            external
            variant={featured ? 'primary' : 'outline'}
            size="lg"
            iconRight="ArrowRight"
            fullWidth
          >
            Discuss Your Project
          </Button>
        </div>
      </article>
    </Reveal>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          titleId="pricing-heading"
          title="Affordable website packages with clear starting prices"
          description="Straightforward, entry-level packages in Indian rupees. Every card shows exactly what is included and what is not, so there are no surprises later."
          level={2}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Notes, custom quote and CTA */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="bg-ink-50 h-full rounded-2xl border border-ink-100 p-6 sm:p-7">
              <h3 className="flex items-center gap-2 text-base font-bold text-ink-900">
                <Icon name="FileText" className="text-brand-600 h-5 w-5" />
                Please read before requesting a quote
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-ink-600">
                <li className="flex gap-2.5">
                  <Icon name="Check" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                  <span>{pricingNote}</span>
                </li>
                <li className="flex gap-2.5">
                  <Icon name="Check" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                  <span>{pricingExclusions}</span>
                </li>
                <li className="flex gap-2.5">
                  <Icon name="Check" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    These are proposed introductory prices set by EzyDigital - not verified market
                    averages - and they are reviewed from time to time.
                  </span>
                </li>
              </ul>

              <div className="mt-6 border-t border-dashed border-ink-200 pt-5">
                <Button
                  to="/#finder"
                  variant="outline"
                  size="md"
                  icon="ArrowRight"
                  className="mt-0"
                >
                  Not sure which package fits? Use the package finder
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="from-ink-950 to-ink-900 flex h-full flex-col rounded-2xl bg-gradient-to-br p-6 sm:p-7">
              <h3 className="text-base font-bold text-white">Need something bigger?</h3>
              <p className="text-ink-300 mt-2 flex-1 text-sm leading-relaxed">
                Larger stores, multi-role portals, dashboards with complex workflows and extensive
                integrations need a custom quote. Describe the requirement and you will get a written
                scope and price.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  href={whatsappLink(siteConfig.whatsappMessages.customQuote)}
                  external
                  size="lg"
                  iconRight="ArrowRight"
                  fullWidth
                >
                  Get a Custom Quote
                </Button>
                <a
                  href={siteConfig.contact.telHref}
                  className="text-ink-200 rounded-full px-4 py-2 text-sm font-semibold underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
                >
                  Or call {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
