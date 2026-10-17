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
                <li className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left sm:p-6">
                      <h3 className="text-base font-bold text-ink-900">{item.q}</h3>
                      <span className="bg-ink-50 text-ink-600 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-open:rotate-180">
                        <Icon name="ChevronDown" className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="text-ink-500 px-5 pb-5 text-sm leading-relaxed sm:px-6 sm:pb-6">
                      {item.a}
                    </p>
                  </details>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-white p-6 text-center sm:p-7">
              <p className="text-ink-600 text-sm leading-relaxed">
                Still unsure about something? Ask directly - you will get a clear answer, even if the
                answer is that we are not the right fit.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href={siteConfig.contact.telHref} size="md" icon="Phone">
                  Call {siteConfig.contact.phoneDisplay}
                </Button>
                <Button to="/contact" variant="outline" size="md" iconRight="ArrowRight">
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
