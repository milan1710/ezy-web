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
              eyebrow="Why choose Ezy Digital"
              titleId="about-heading"
              align="left"
              className="mx-0"
              title="Why choose Ezy Digital?"
              description="Ezy Digital is built around one promise: honest scope, careful development work and a direct line to the person building your website."
              level={2}
            />

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <Reveal key={reason.title} delay={(index % 2) * 0.07}>
                  <li className="flex h-full gap-4 rounded-2xl border border-ink-100 bg-white p-5">
                    <span className="bg-brand-50 text-brand-600 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <Icon name={reason.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-ink-900">{reason.title}</h3>
                      <p className="text-ink-500 mt-1.5 text-sm leading-relaxed">{reason.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Owner card */}
          <Reveal delay={0.12}>
            <aside className="from-ink-950 to-ink-900 rounded-3xl bg-gradient-to-br p-7 sm:p-8">
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
