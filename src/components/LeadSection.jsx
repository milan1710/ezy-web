import Reveal from './ui/Reveal'
import LeadForm from './LeadForm'
import Icon from './ui/Icon'
import { firstCallSteps } from '../data/trust'
import { siteConfig, whatsappLink } from '../config/siteConfig'

/**
 * Homepage lead capture band.
 *
 * The form is the real CRM-connected `LeadForm` (same component as the contact
 * page), so there is exactly one submission path: validation -> /api/lead.php ->
 * Perfex CRM -> Thank You page + Meta Lead event.
 */
export default function LeadSection() {
  return (
    <section
      id="contact"
      aria-labelledby="lead-section-heading"
      className="bg-ink-950 relative isolate overflow-hidden py-20 lg:py-28"
    >
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="glow-red pointer-events-none absolute -bottom-48 -left-24 h-[34rem] w-[34rem]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-brand-400 inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.24em] uppercase">
                <span className="bg-brand-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                Start your project
              </p>
              <h2
                id="lead-section-heading"
                className="font-display mt-4 text-[2rem] leading-[1.1] font-extrabold tracking-[-0.03em] text-white sm:text-[2.6rem]"
              >
                Tell us what you need.
                <span className="text-ink-400 block">We will call you back.</span>
              </h2>
              <p className="text-ink-300 mt-5 max-w-xl text-[0.95rem] leading-relaxed">
                Four details are enough to get started. Your enquiry goes straight into our CRM, and
                the person who builds your project replies personally - no call centre in between.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <ol className="mt-9 flex flex-col gap-5">
                {firstCallSteps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-3.5">
                    <span className="border-white/10 bg-white/[0.06] text-ink-200 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <p className="text-ink-400 mt-1 text-[0.8rem] leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-7">
                <a
                  href={siteConfig.contact.telHref}
                  className="hover:text-brand-300 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors"
                >
                  <Icon name="Phone" className="h-4 w-4" />
                  {siteConfig.contact.phoneInternational}
                </a>
                <a
                  href={whatsappLink(siteConfig.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-300 hover:text-brand-300 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                >
                  <Icon name="MessagesSquare" className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-ink-300 hover:text-brand-300 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                >
                  <Icon name="Mail" className="h-4 w-4" />
                  {siteConfig.contact.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div
                className="border-brand-500/30 absolute -inset-3 rounded-[2rem] border opacity-60 blur-[2px]"
                aria-hidden="true"
              />
              <div className="relative">
                <LeadForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
