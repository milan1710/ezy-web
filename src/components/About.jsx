import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import Button from './ui/Button'
import { siteConfig, whatsappLink } from '../config/siteConfig'

const reasons = [
  {
    icon: 'MessagesSquare',
    title: 'Direct communication with Milan Soni',
    text: 'No account managers and no ticket queues. You discuss requirements, revisions and timelines with the person actually building the website.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Affordable entry-level packages',
    text: 'Published starting prices in Indian rupees, so you can judge early whether a project fits your budget before spending time on calls.',
  },
  {
    icon: 'PenTool',
    title: 'Custom rather than generic designs',
    text: 'Layouts are designed for your content and your customers instead of being forced into a one-size-fits-all template.',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive layouts as standard',
    text: 'Every build is developed and tested against real mobile, tablet and desktop widths - not just the desktop view.',
  },
  {
    icon: 'FileText',
    title: 'Clear scope and deliverables',
    text: 'You receive a written scope listing pages, features, revision rounds and exclusions before development starts.',
  },
  {
    icon: 'Code2',
    title: 'Practical technical solutions',
    text: 'We recommend the simplest stack that solves the problem reliably, rather than adding complexity your business will not use.',
  },
  {
    icon: 'Megaphone',
    title: 'Campaign monitoring and reporting',
    text: 'Meta Ads management includes campaign monitoring, basic optimization and a monthly performance report within the agreed scope.',
  },
  {
    icon: 'Clapperboard',
    title: 'Video and Reel editing',
    text: 'Promotional videos and Reels edited from your footage, with the edit level, duration and revision allowance agreed up front.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Support after launch',
    text: 'Optional maintenance covers routine fixes, updates, backups and security checks within a clearly limited monthly allowance.',
  },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="About Ezy Digital"
              titleId="about-heading"
              align="left"
              className="mx-0"
              title="Your digital growth partner"
              description="Ezy Digital provides practical digital solutions for businesses looking to strengthen their online presence through website development, Meta Ads, and creative video content."
              level={2}
            />

            <p className="text-ink-600 mt-6 text-sm leading-relaxed">
              We work with small businesses, local shops, service providers and growing companies
              across Upleta, Rajkot district and Gujarat. A website, an advertising campaign and
              video content work best together: the website gives customers somewhere to land, Meta
              Ads bring relevant visitors, and short video content gives them a reason to stop and
              look. You can start with one service and add the others when it makes sense for your
              business.
            </p>
            <p className="text-ink-500 mt-3 text-sm leading-relaxed">
              Requirements are discussed directly, the scope is written down before work starts, and
              the final quotation reflects what you actually need rather than a fixed template.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <Reveal key={reason.title} delay={(index % 2) * 0.07}>
                  <li className="group border-ink-100 hover:border-brand-200 flex h-full gap-4 rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-38px_rgba(17,17,17,0.5)]">
                    <span className="bg-ink-950 group-hover:bg-brand-600 text-white inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors">
                      <Icon name={reason.icon} className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <h3 className="font-display text-ink-950 text-[0.9rem] leading-snug font-bold">
                        {reason.title}
                      </h3>
                      <p className="text-ink-500 mt-1.5 text-[0.8125rem] leading-relaxed">{reason.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Owner card */}
          <Reveal delay={0.12}>
            <aside className="from-ink-950 via-ink-900 to-ink-800 relative overflow-hidden rounded-3xl bg-gradient-to-br p-7 sm:p-8">
              <div
                className="surface-grid pointer-events-none absolute inset-0 opacity-50"
                aria-hidden="true"
              />
              <div
                className="bg-brand-600/25 pointer-events-none absolute -top-16 -right-14 h-44 w-44 rounded-full blur-3xl"
                aria-hidden="true"
              />
              <div className="flex items-center gap-4">
                <span className="border-brand-500/30 bg-brand-600/15 text-brand-300 inline-flex h-16 w-16 items-center justify-center rounded-2xl border text-xl font-extrabold">
                  MS
                </span>
                <div>
                  <p className="text-lg font-bold text-white">{siteConfig.brand.owner}</p>
                  <p className="text-ink-300 text-sm">
                    Website development &amp; digital marketing
                  </p>
                </div>
              </div>

              <p className="text-ink-300 mt-6 text-sm leading-relaxed">
                Have a question about your requirement, budget or timeline? Call or message directly
                - you will get a straight answer about what is possible and what it will cost.
              </p>

              <dl className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <dt className="text-ink-400 text-xs font-semibold tracking-wide uppercase">
                      Phone
                    </dt>
                    <dd>
                      <a
                        href={siteConfig.contact.telHref}
                        className="font-semibold text-white hover:underline"
                      >
                        {siteConfig.contact.phoneInternational}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <dt className="text-ink-400 text-xs font-semibold tracking-wide uppercase">
                      Studio
                    </dt>
                    <dd className="text-ink-100">{siteConfig.contact.address.full}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <dt className="text-ink-400 text-xs font-semibold tracking-wide uppercase">
                      Email
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-ink-100 hover:text-white hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-7 grid gap-2">
                <Button href={siteConfig.contact.telHref} size="lg" icon="Phone" fullWidth>
                  Call Milan Soni
                </Button>
                <Button
                  href={whatsappLink(siteConfig.whatsappMessages.general)}
                  external
                  variant="outlineLight"
                  size="lg"
                  icon="Sparkles"
                  fullWidth
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </aside>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
