import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import ServiceCard from './ServiceCard'
import Button from './ui/Button'
import Icon from './ui/Icon'
import { services } from '../data/services'

const groups = [
  {
    tier: 'website',
    title: 'Website development',
    note: 'Fixed-scope website builds priced from the published packages - ideal for businesses that need a strong, fast, professional presence online.',
  },
  {
    tier: 'advanced',
    title: 'Advanced & custom development',
    note: 'Backend systems, databases, user accounts and third-party integrations. These are quoted individually after a requirements discussion.',
  },
  {
    tier: 'marketing',
    title: 'Digital marketing & creative',
    note: 'Facebook and Instagram advertising, monthly social media management and individual design or content services, with transparent starting prices.',
  },
]

export default function Services() {
  return (
    <section id="all-services" aria-labelledby="services-heading" className="section-y bg-ink-50/70">
      <div className="container-page">
        <SectionHeading
          eyebrow="Full service catalogue"
          titleId="services-heading"
          title="Website, advertising and creative services in one place"
          description="From a small business website to a custom web application, plus Facebook and Instagram advertising, social media management, video editing and creative support. Choose what matches your requirements today."
          level={2}
        />

        <div className="mt-16 flex flex-col gap-16">
          {groups.map((group, groupIndex) => {
            const items = services.filter((service) => service.tier === group.tier)

            return (
              <div key={group.tier}>
                <div className="flex flex-col gap-4 border-b border-ink-200/70 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-ink-300 text-3xl leading-none font-extrabold tabular-nums sm:text-4xl">
                      {String(groupIndex + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-ink-950 text-xl font-bold sm:text-[1.4rem]">
                        {group.title}
                      </h3>
                      <p className="text-ink-500 mt-2 max-w-2xl text-[0.8125rem] leading-relaxed">
                        {group.note}
                      </p>
                    </div>
                  </div>
                  <span className="text-ink-400 border-ink-200 shrink-0 rounded-full border bg-white px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] uppercase">
                    {items.length} services
                  </span>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((service, index) => (
                    <Reveal key={service.id} delay={(index % 3) * 0.05}>
                      <ServiceCard service={service} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <Reveal>
          <div className="from-ink-950 via-ink-900 to-ink-800 relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r p-8 sm:p-10">
            <div
              className="surface-grid pointer-events-none absolute inset-0 opacity-50"
              aria-hidden="true"
            />
            <div className="glow-red pointer-events-none absolute -top-24 right-0 h-72 w-72" aria-hidden="true" />
            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-brand-400 text-[0.65rem] font-bold tracking-[0.22em] uppercase">
                  Not sure where to start?
                </p>
                <h3 className="font-display mt-3 text-[1.4rem] font-bold text-white sm:text-[1.65rem]">
                  Tell us the outcome. We will recommend the right scope.
                </h3>
                <p className="text-ink-300 mt-2 text-sm leading-relaxed">
                  Describe what your business does and what the website should achieve. We recommend
                  the smallest package that does the job properly - and say so honestly if a bigger
                  scope is genuinely required.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <Button to="/contact" size="lg" iconRight="ArrowRight">
                  Get a Recommendation
                </Button>
                <Button to="/pricing" variant="outlineLight" size="lg" icon="FileText">
                  See Pricing
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-ink-400 mt-8 flex items-center justify-center gap-2 text-center text-xs">
            <Icon name="Info" className="h-3.5 w-3.5" />
            Every service is delivered in a written scope. Nothing is started before you approve it.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
