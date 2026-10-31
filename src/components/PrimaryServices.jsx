import { Link } from 'react-router-dom'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import Icon from './ui/Icon'
import { formatINR } from '../data/pricing'
import { primaryServices } from '../data/primaryServices'
import { whatsappLink } from '../config/siteConfig'

/**
 * The three primary services, shown directly under the hero with their
 * published starting prices and honest actions: a service-specific WhatsApp
 * conversation or the full package details.
 */
export default function PrimaryServices() {
  return (
    <section
      id="services"
      aria-labelledby="primary-services-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            titleId="primary-services-heading"
            title="Three practical services to grow your business online"
            description="Build the website, bring the right visitors with Meta Ads, and present your products through video content. Start with one service or combine all three in one scope."
            align="left"
            className="mx-0"
            size="lg"
            level={2}
          />
          <Reveal>
            <Button to="/website-development" variant="outline" size="md" iconRight="ArrowRight">
              View All Services
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {primaryServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.07} className="h-full">
              <article className="group border-ink-100 hover:border-brand-200 relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(17,17,17,0.45)]">
                <div className="from-ink-950 via-ink-900 to-ink-800 relative overflow-hidden bg-gradient-to-br px-6 pt-7 pb-6 sm:px-7">
                  <div
                    className="surface-grid pointer-events-none absolute inset-0 opacity-50"
                    aria-hidden="true"
                  />
                  <div
                    className="bg-brand-600/25 pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full blur-3xl"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="border-white/15 bg-white/[0.07] text-brand-300 inline-flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-ink-400 text-[0.6rem] font-bold tracking-[0.2em] uppercase">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className="font-display relative mt-6 min-h-[3.4rem] text-[1.35rem] leading-snug font-bold text-white">
                    {service.title}
                  </h3>

                  <div className="relative mt-4 flex flex-wrap items-baseline gap-2 border-t border-white/10 pt-4">
                    <span className="text-ink-400 text-[0.65rem] font-bold tracking-[0.16em] uppercase">
                      From
                    </span>
                    <span className="font-display text-[1.75rem] font-extrabold tracking-[-0.03em] text-white">
                      {formatINR(service.price)}
                    </span>
                    <span className="text-ink-400 text-xs font-semibold">{service.priceSuffix}</span>
                  </div>
                  <p className="text-ink-500 relative mt-1.5 text-[0.7rem] leading-relaxed">
                    {service.priceNote}
                  </p>
                </div>
                <div className="flex flex-1 flex-col px-6 pt-6 pb-7 sm:px-7">
                  <p className="text-ink-600 text-sm leading-relaxed">{service.description}</p>

                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="text-ink-600 flex items-start gap-2.5 text-sm">
                        <Icon
                          name="CheckCircle2"
                          className="text-brand-600 mt-0.5 h-4 w-4 shrink-0"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {service.note ? (
                    <p className="bg-ink-50 text-ink-500 mt-5 rounded-xl p-3 text-[0.7rem] leading-relaxed">
                      {service.note}
                    </p>
                  ) : null}

                  <div className="mt-6 grid gap-2">
                    <Button
                      href={whatsappLink(service.message)}
                      external
                      size="lg"
                      variant="whatsapp"
                      icon="Sparkles"
                      fullWidth
                    >
                      {service.primaryCta}
                    </Button>
                    <Button
                      to={service.to}
                      variant="outline"
                      size="md"
                      iconRight="ArrowRight"
                      fullWidth
                      data-fb-event="ServiceCTAClick"
                      data-fb-label={service.id}
                    >
                      {service.priceLinkLabel}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-ink-400 mx-auto mt-10 max-w-3xl text-center text-[0.7rem] leading-relaxed">
            Every amount shown is a starting price. The final quotation depends on your exact
            requirements and the scope agreed in writing. Domain, hosting, premium plugins,
            third-party services, payment gateway charges and Meta advertising spend are separate.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-ink-400 mt-6 text-center text-xs">
            Need something else?{' '}
            <Link
              to="/additional-digital-services"
              className="text-brand-700 font-semibold underline underline-offset-4"
            >
              Browse all digital services
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

