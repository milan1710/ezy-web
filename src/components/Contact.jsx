import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import Button from './ui/Button'
import { siteConfig, whatsappLink } from '../config/siteConfig'

/** The three ways to reach EzyDigital. All values come from siteConfig. */
const contactMethods = [
  {
    title: 'Call now',
    icon: 'Phone',
    tone: 'bg-brand-600 text-white',
    value: siteConfig.contact.phoneInternational,
    description: 'The fastest way to discuss scope, timeline and budget.',
    href: siteConfig.contact.telHref,
    external: false,
  },
  {
    title: 'WhatsApp',
    icon: 'Sparkles',
    tone: 'bg-[#25D366]/15 text-[#0f7a3f]',
    value: 'Message Milan directly',
    description: 'Send requirements, references or example websites at any time.',
    href: whatsappLink(siteConfig.whatsappMessages.general),
    external: true,
  },
  {
    title: 'Email',
    icon: 'Mail',
    tone: 'bg-azure-500/12 text-azure-600',
    value: siteConfig.contact.email,
    description: 'Best if you already have a written brief or a document to share.',
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
  },
]

const checklist = [
  'What your business or shop does',
  'Which pages or features you need',
  'Whether you already have a domain and hosting',
  'Your rough budget range',
  'When you would like the website live',
  'Any website you like the look of',
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          titleId="contact-heading"
          title="Tell us about your project"
          description="Call, message on WhatsApp or send an email. There is no form to fill in - you talk directly to Milan Soni at EzyDigital Web Development."
          level={2}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact details */}
          <Reveal>
            <div className="from-ink-950 to-ink-900 flex h-full flex-col gap-6 rounded-3xl bg-gradient-to-br p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="border-brand-500/30 bg-brand-600/15 text-brand-300 inline-flex h-14 w-14 items-center justify-center rounded-2xl border text-lg font-extrabold">
                  MS
                </span>
                <div>
                  <p className="text-lg font-bold text-white">{siteConfig.brand.owner}</p>
                  <p className="text-ink-300 text-sm">{siteConfig.brand.fullName}</p>
                </div>
              </div>

              <p className="text-ink-300 text-sm leading-relaxed">
                Working with businesses across Upleta, Rajkot district, Gujarat and the rest of India,
                remotely or with an in-person discussion for local clients.
              </p>

              <dl className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <dt className="text-ink-400 text-xs font-semibold tracking-wide uppercase">
                      Phone
                    </dt>
                    <dd>
                      <a
                        href={siteConfig.contact.telHref}
                        className="text-base font-semibold text-white hover:underline"
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
                      Address
                    </dt>
                    <dd className="text-ink-100 leading-relaxed">
                      {siteConfig.contact.address.line1}
                      <br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{' '}
                      {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}
                    </dd>
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

              <div className="mt-auto grid gap-2">
                <Button href={siteConfig.contact.telHref} size="lg" icon="Phone" fullWidth>
                  Call {siteConfig.contact.phoneDisplay}
                </Button>
                <Button
                  href={whatsappLink(siteConfig.whatsappMessages.general)}
                  external
                  variant="whatsapp"
                  size="lg"
                  icon="Sparkles"
                  fullWidth
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Direct contact methods */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="group hover:border-brand-200 flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span
                    className={[
                      'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105',
                      method.tone,
                    ].join(' ')}
                  >
                    <Icon name={method.icon} className="h-6 w-6" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="text-ink-400 block text-xs font-semibold tracking-[0.18em] uppercase">
                      {method.title}
                    </span>
                    <span className="text-ink-900 mt-1 block text-base font-bold">
                      {method.value}
                    </span>
                    <span className="text-ink-500 mt-1.5 block text-sm leading-relaxed">
                      {method.description}
                    </span>
                  </span>

                  <Icon
                    name="ArrowRight"
                    className="text-brand-600 mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </a>
              ))}

              {/* What to share */}
              <div className="bg-ink-50 mt-auto rounded-2xl border border-ink-100 p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-ink-900">
                  <Icon name="FileText" className="text-brand-600 h-5 w-5" />
                  What to tell us
                </h3>
                <p className="text-ink-500 mt-2 text-sm leading-relaxed">
                  It helps to know a few basics, but you can call even if you only have a rough idea.
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <Icon name="Check" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-ink-400 mt-4 border-t border-dashed border-ink-200 pt-4 text-xs leading-relaxed">
                  Every enquiry gets a personal reply from Milan Soni - there is no automated chatbot
                  or call centre in between.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
