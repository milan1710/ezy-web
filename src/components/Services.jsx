import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import ServiceCard from './ServiceCard'
import Button from './ui/Button'
import { services } from '../data/services'

const groups = [
  {
    tier: 'website',
    title: 'Standard website development',
    note: 'Fixed-scope website builds priced from the published packages - ideal for businesses that need a strong, fast, professional presence online.',
  },
  {
    tier: 'advanced',
    title: 'Advanced & custom development',
    note: 'Backend systems, databases, user accounts and third-party integrations. These are quoted individually after a requirements discussion.',
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-ink-50 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          titleId="services-heading"
          title="Website development services, from a landing page to a custom web platform"
          description="We focus on one thing: designing and developing websites and web applications. Choose the level that matches your requirements today - and grow into the next one later."
          level={2}
        />

        <div className="mt-14 flex flex-col gap-14">
          {groups.map((group) => {
            const items = services.filter((service) => service.tier === group.tier)

            return (
              <div key={group.tier}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-ink-900 sm:text-2xl">{group.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">
                      {group.note}
                    </p>
                  </div>
                  <span className="text-ink-400 shrink-0 text-xs font-semibold tracking-[0.18em] uppercase">
                    {items.length} services
                  </span>
                </div>

                <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((service, index) => (
                    <Reveal key={service.id} delay={(index % 3) * 0.06}>
                      <ServiceCard service={service} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <Reveal>
          <div className="from-ink-950 to-ink-900 mt-16 flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-r p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Not sure which service you need?
              </h3>
              <p className="text-ink-300 mt-2 max-w-2xl text-sm leading-relaxed">
                Tell us what your business does and what the website should achieve. We will
                recommend the smallest package that does the job properly - and say so honestly if a
                bigger scope is genuinely required.
              </p>
            </div>
            <Button to="/#contact" size="lg" iconRight="ArrowRight" className="shrink-0">
              Get a Website Quote
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
