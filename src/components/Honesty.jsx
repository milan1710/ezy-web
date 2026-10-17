import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'
import { honestyIntro, honestyPillars } from '../data/trust'
import { siteConfig, whatsappLink } from '../config/siteConfig'

/**
 * The honesty section.
 *
 * Instead of borrowing credibility with invented proof, this section states
 * plainly what is not on the website and why - which is the strongest trust
 * signal available to a business without a long public track record.
 */
export default function Honesty() {
  return (
    <section
      id="honesty"
      aria-labelledby="honesty-heading"
      className="relative isolate overflow-hidden bg-ink-950 py-20 lg:py-28"
    >
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Straight talk"
          titleId="honesty-heading"
          tone="dark"
          title="No fake reviews. No invented numbers. Here's why."
          description={honestyIntro}
          level={2}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {honestyPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06} className="h-full">
              <article className="hover:border-brand-500/40 flex h-full gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 sm:p-7">
                <span className="border-brand-500/30 bg-brand-600/15 text-brand-300 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
                  <Icon name={pillar.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">{pillar.title}</h3>
                  <p className="text-ink-300 mt-2.5 text-sm leading-relaxed">{pillar.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-10">
            <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              &ldquo;Judge us by the clarity of our quotation and the quality of the work you can see
              on this page - then decide.&rdquo;
            </p>
            <p className="text-ink-400 text-sm font-semibold">
              {siteConfig.brand.owner} &middot; {siteConfig.brand.fullName}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={siteConfig.contact.telHref} size="lg" icon="Phone">
                Call {siteConfig.contact.phoneDisplay}
              </Button>
              <Button
                href={whatsappLink(
                  'Hello Ezy Digital, I have a question about how you work before I decide on a website.',
                )}
                external
                variant="outlineLight"
                size="lg"
                icon="Sparkles"
              >
                Ask a Question First
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
