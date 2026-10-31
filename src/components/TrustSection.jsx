import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import Button from './ui/Button'
import { siteConfig } from '../config/siteConfig'

const benefits = [
  {
    icon: 'PenTool',
    title: 'Custom designs',
    text: 'Every layout is designed around your business, your content and your customers - not a recycled template.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile-first development',
    text: 'Built for phone screens first, then scaled up, so the majority of your visitors get a smooth experience.',
  },
  {
    icon: 'Gauge',
    title: 'Fast-loading pages',
    text: 'Lean front-end code, optimised images and sensible asset loading keep pages quick to open.',
  },
  {
    icon: 'Sparkles',
    title: 'SEO-friendly foundations',
    text: 'Semantic markup, clean headings, metadata, sitemap and technical structure search engines can read.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Secure coding practices',
    text: 'Input validation, safe form handling and careful handling of any credentials or API keys.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Clear communication',
    text: 'You speak directly with Milan Soni - one point of contact from the first call to handover.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Affordable packages',
    text: 'Transparent starting prices in Indian rupees, with the scope written down before work begins.',
  },
  {
    icon: 'Wrench',
    title: 'Support & maintenance',
    text: 'Optional maintenance for eligible live websites covering fixes, updates, backups and security.',
  },
]

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why choose Ezy Digital"
          titleId="trust-heading"
          title="A digital partner focused on clarity, craft and results"
          description="Good design is only part of the job. A website also has to load quickly, work on every screen, be readable by search engines and make contacting you effortless."
          level={2}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const featured = index < 2
            return (
              <Reveal
                key={benefit.title}
                delay={index * 0.04}
                className={featured ? 'sm:col-span-2' : ''}
              >
                <article
                  className={[
                    'group relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1',
                    featured
                      ? 'from-ink-950 via-ink-900 to-ink-800 border-white/10 bg-gradient-to-br text-white'
                      : 'border-ink-100 hover:border-brand-200 bg-white hover:shadow-[0_24px_60px_-40px_rgba(17,17,17,0.5)]',
                  ].join(' ')}
                >
                  {featured ? (
                    <>
                      <div
                        className="surface-grid pointer-events-none absolute inset-0 opacity-50"
                        aria-hidden="true"
                      />
                      <div
                        className="bg-brand-600/25 pointer-events-none absolute -top-10 -right-8 h-32 w-32 rounded-full blur-3xl"
                        aria-hidden="true"
                      />
                    </>
                  ) : null}

                  <span
                    className={[
                      'relative inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105',
                      featured
                        ? 'border-brand-500/30 bg-brand-600/20 text-brand-300 border'
                        : 'bg-ink-950 text-white',
                    ].join(' ')}
                  >
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </span>

                  <h3
                    className={[
                      'font-display relative mt-5 font-bold',
                      featured ? 'text-lg text-white' : 'text-ink-950 text-base',
                    ].join(' ')}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={[
                      'relative mt-2 text-[0.8125rem] leading-relaxed',
                      featured ? 'text-ink-300' : 'text-ink-500',
                    ].join(' ')}
                  >
                    {benefit.text}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="border-ink-100 mt-10 flex flex-col items-start gap-4 rounded-2xl border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink-600 max-w-2xl text-sm leading-relaxed">
              Prefer to talk it through first? A short call is usually enough to recommend a package,
              a realistic timeline and an honest price.
            </p>
            <div className="flex shrink-0 gap-2">
              <Button href={siteConfig.contact.telHref} size="md" icon="Phone">
                Call {siteConfig.contact.phoneDisplay}
              </Button>
              <Button to="/contact" variant="outline" size="md" iconRight="ArrowRight">
                Contact
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
