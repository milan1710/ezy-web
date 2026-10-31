import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import Icon from './ui/Icon'
import {
  formatINR,
  packageEnquiryMessage,
  videoEditingNote,
  videoEditingScopeConditions,
  videoMonthlyPackages,
  videoPackages,
} from '../data/pricing'
import { whatsappLink } from '../config/siteConfig'

function VideoCard({ pkg, index }) {
  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <article
        className={[
          'relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7',
          pkg.highlight
            ? 'border-brand-300 shadow-lift ring-2 ring-brand-500/20'
            : 'border-ink-100 hover:border-brand-200',
        ].join(' ')}
      >
        {pkg.badge ? (
          <span className="bg-brand-600 absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase shadow-glow">
            {pkg.badge}
          </span>
        ) : null}

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-snug font-bold text-ink-900">{pkg.name}</h3>
          <span className="bg-brand-50 text-brand-600 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
            <Icon name={pkg.icon} className="h-5 w-5" />
          </span>
        </div>

        <p className="text-ink-500 mt-3 text-sm leading-relaxed">{pkg.audience}</p>

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
          <p className="text-ink-400 mt-1 text-xs">Final price depends on the agreed scope.</p>
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
            variant={pkg.highlight ? 'primary' : 'outline'}
            size="lg"
            iconRight="ArrowRight"
            fullWidth
            data-fb-event="PricingInquiry"
            data-fb-label={pkg.id}
          >
            {pkg.ctaLabel}
          </Button>
        </div>
      </article>
    </Reveal>
  )
}


export default function VideoPricing({ showHeading = true, showConditions = true }) {
  return (
    <section
      id="video-pricing"
      aria-labelledby="video-pricing-heading"
      className="border-t border-ink-100 bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        {showHeading ? (
          <SectionHeading
            eyebrow="Video editing pricing"
            titleId="video-pricing-heading"
            title="Promotional videos and Reels with clear starting prices"
            description="Choose a per-video edit or a monthly Reel plan. Every package lists what is included, what is not, and the starting price before you contact us."
            level={2}
          />
        ) : (
          <h2 id="video-pricing-heading" className="sr-only">
            Video editing pricing
          </h2>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videoPackages
            .filter((pkg) => pkg.active)
            .map((pkg, index) => (
              <VideoCard key={pkg.id} pkg={pkg} index={index} />
            ))}
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-ink-900 sm:text-2xl">Monthly Reel packages</h3>
                <p className="text-ink-500 mt-2 max-w-2xl text-sm leading-relaxed">
                  For businesses posting consistently. Footage is supplied by you; editing and
                  delivery are handled by Ezy Digital within the agreed content plan.
                </p>
              </div>
              <span className="text-ink-400 shrink-0 text-xs font-semibold tracking-[0.18em] uppercase">
                Billed monthly
              </span>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {videoMonthlyPackages
              .filter((pkg) => pkg.active)
              .map((pkg, index) => (
                <Reveal key={pkg.id} delay={index * 0.06}>
                  <article className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 sm:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h4 className="text-lg font-bold text-ink-900">{pkg.name}</h4>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold text-ink-900">
                          {formatINR(pkg.startingPrice)}
                        </span>
                        <span className="text-ink-400 text-sm font-semibold">{pkg.priceSuffix}</span>
                      </div>
                    </div>
                    <p className="text-ink-500 mt-2 text-sm leading-relaxed">{pkg.description}</p>
                    <ul className="mt-4 flex flex-1 flex-col gap-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-600">
                          <Icon name="Check" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-ink-400 mt-4 text-xs leading-relaxed">{pkg.note}</p>
                    <div className="mt-5">
                      <Button
                        href={whatsappLink(packageEnquiryMessage(pkg))}
                        external
                        variant="outline"
                        size="md"
                        iconRight="ArrowRight"
                        fullWidth
                        data-fb-event="PricingInquiry"
                        data-fb-label={pkg.id}
                      >
                        Get Video Editing Quote
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
          </div>
        </div>

        <p className="text-ink-500 mt-8 text-center text-sm leading-relaxed">{videoEditingNote}</p>

        {showConditions ? (
          <Reveal>
            <div
              id="video-pricing-conditions"
              className="mt-10 rounded-2xl border border-ink-200 bg-white p-6 sm:p-7"
            >
              <h3 className="text-base font-bold text-ink-900">Video editing scope conditions</h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {videoEditingScopeConditions.map((condition) => (
                  <li
                    key={condition}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600"
                  >
                    <Icon name="Info" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
