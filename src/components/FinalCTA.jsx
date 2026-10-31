import Reveal from './ui/Reveal'
import Button from './ui/Button'
import Icon from './ui/Icon'
import LeadFormTrigger from './LeadFormTrigger'
import { siteConfig, whatsappLink } from '../config/siteConfig'

/** Final conversion band placed just above the contact section. */
export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-ink-950 relative isolate overflow-hidden py-20 lg:py-24"
    >
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="glow-red pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="from-ink-900/90 to-ink-900/40 relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br px-6 py-12 text-center sm:px-12 sm:py-16">
            <span className="text-brand-400 inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.24em] uppercase">
              <span className="bg-brand-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
              Ready when you are
            </span>

            <h2
              id="final-cta-heading"
              className="font-display mt-5 text-[1.9rem] leading-[1.1] font-extrabold tracking-[-0.03em] text-white sm:text-[2.5rem]"
            >
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-ink-300 mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed sm:text-base">
              Let&apos;s build a stronger digital presence for your business with the right combination
              of website development, Meta Ads, and professional video editing.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <LeadFormTrigger size="lg" iconRight="ArrowRight" source="final_cta">
                Let&apos;s Talk
              </LeadFormTrigger>
              <Button href={siteConfig.contact.telHref} variant="light" size="lg" icon="Phone">
                {siteConfig.contact.phoneInternational}
              </Button>
              <Button
                href={whatsappLink(siteConfig.whatsappMessages.quote)}
                external
                variant="outlineLight"
                size="lg"
                icon="Sparkles"
              >
                WhatsApp
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-[0.75rem] text-ink-400">
              <span className="inline-flex items-center gap-2">
                <Icon name="MapPin" className="h-3.5 w-3.5" />
                {siteConfig.contact.address.full}
              </span>
              <a
                href={siteConfig.contact.telHref}
                className="hover:text-ink-100 inline-flex items-center gap-2 font-semibold text-white/85"
              >
                <Icon name="Phone" className="h-3.5 w-3.5" />
                {siteConfig.contact.phoneInternational}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-ink-100 inline-flex items-center gap-2 font-semibold text-white/85"
              >
                <Icon name="Mail" className="h-3.5 w-3.5" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
