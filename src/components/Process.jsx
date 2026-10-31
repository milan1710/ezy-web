import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import Button from './ui/Button'
import { processNote, processSteps } from '../data/process'

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-ink-50/70 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How we work"
          titleId="process-heading"
          title="A clear six-step process, from first call to handover"
          description="You always know which stage the project is in, what is expected from you and what happens next."
          level={2}
        />

        <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.id} className="h-full">
              <Reveal delay={(index % 3) * 0.05} className="h-full">
                <div className="group border-ink-100 hover:border-brand-200 relative h-full overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(17,17,17,0.5)]">
                  <span
                    className="bg-brand-600 absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between">
                    <span className="bg-ink-950 group-hover:bg-brand-600 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors">
                      <Icon name={step.icon} className="h-4.5 w-4.5" />
                    </span>
                    <span className="font-display text-ink-200 text-3xl leading-none font-extrabold tabular-nums">
                      {String(step.id).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display text-ink-950 mt-5 text-base font-bold">{step.title}</h3>
                  <p className="text-ink-500 mt-2 text-[0.8125rem] leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-ink-400 mt-4 border-t border-dashed border-ink-200 pt-3 text-[0.7rem] leading-relaxed font-medium">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="border-ink-100 mt-10 flex flex-col items-start gap-5 rounded-2xl border bg-white p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-ink-500 max-w-3xl text-sm leading-relaxed">
              <span className="text-ink-950 font-semibold">Timelines: </span>
              {processNote}
            </p>
            <Button to="/contact" size="lg" iconRight="ArrowRight" className="shrink-0">
              Start My Website
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
