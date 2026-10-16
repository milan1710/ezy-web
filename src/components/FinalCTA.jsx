import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { siteConfig, whatsappLink } from '../config/siteConfig'

/** Final conversion band placed just above the contact section. */
export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative isolate overflow-hidden bg-ink-950 py-20 lg:py-24">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-brand-400 text-xs font-semibold tracking-[0.22em] uppercase">
              Ready when you are
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 text-3xl leading-tight font-extrabold text-white sm:text-4xl"
            >
              Let&apos;s build a website your business deserves
            </h2>
            <p className="text-ink-200/85 mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              One short conversation is usually enough to recommend a package, a realistic timeline
              and an honest price. No obligation and no pressure.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button to="/#contact" size="lg" iconRight="ArrowRight">
                Get a Website Quote
              </Button>
              <Button href={siteConfig.contact.telHref} variant="outlineLight" size="lg" icon="Phone">
                Call Milan Soni
              </Button>
              <Button
                href={whatsappLink(siteConfig.whatsappMessages.quote)}
                external
                variant="whatsapp"
                size="lg"
                icon="Sparkles"
              >
                WhatsApp Quote
              </Button>
            </div>

            <p className="text-ink-400 mt-7 text-sm">
              {siteConfig.contact.address.full} &middot;{' '}
              <a href={siteConfig.contact.telHref} className="font-semibold text-white hover:underline">
                {siteConfig.contact.phoneInternational}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
