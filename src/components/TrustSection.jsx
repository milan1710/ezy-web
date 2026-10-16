import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'

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
          eyebrow="Why work with us"
          titleId="trust-heading"
          title="A website built to earn trust and start conversations"
          description="Good design is only part of the job. A website also has to load quickly, work on every screen, be readable by search engines and make contacting you effortless."
          level={2}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.05}>
              <article className="group hover:border-brand-200 h-full rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="from-ink-900 to-ink-700 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon name={benefit.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{benefit.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
