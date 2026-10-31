import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import Button from './ui/Button'
import { faqs } from '../data/faqs'
import { siteConfig } from '../config/siteConfig'

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-ink-50 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          titleId="faq-heading"
          title="Questions we are asked before a project starts"
          description="Straight answers about cost, timelines, scope and maintenance."
          level={2}
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <ul className="flex flex-col gap-3">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={Math.min(index * 0.04, 0.24)}>
                <li className="border-ink-100 hover:border-brand-200 overflow-hidden rounded-2xl border bg-white transition-colors">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left sm:p-6">
                      <h3 className="font-display text-ink-950 text-[0.95rem] font-bold">{item.q}</h3>
                      <span className="bg-ink-50 text-ink-600 group-open:bg-brand-600 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-open:rotate-180 group-open:text-white">
                        <Icon name="ChevronDown" className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="text-ink-500 px-5 pb-5 text-[0.8125rem] leading-relaxed sm:px-6 sm:pb-6">
                      {item.a}
                    </p>
                  </details>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="from-ink-950 to-ink-900 relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br p-7 text-center sm:p-8">
              <div
                className="surface-grid pointer-events-none absolute inset-0 opacity-50"
                aria-hidden="true"
              />
              <div
                className="bg-brand-600/25 pointer-events-none absolute -top-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full blur-3xl"
                aria-hidden="true"
              />
              <p className="text-ink-300 relative text-sm leading-relaxed">
                Still unsure about something? Ask directly - you will get a clear answer, even if the
                answer is that we are not the right fit.
              </p>
              <div className="relative mt-5 flex flex-wrap justify-center gap-3">
                <Button href={siteConfig.contact.telHref} size="md" icon="Phone">
                  Call {siteConfig.contact.phoneDisplay}
                </Button>
                <Button to="/contact" variant="outlineLight" size="md" iconRight="ArrowRight">
                  Send an Enquiry
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
