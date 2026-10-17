import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import Button from './ui/Button'
import { processNote, processSteps } from '../data/process'

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-ink-50 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How we work"
          titleId="process-heading"
          title="A clear six-step development process"
          description="You always know which stage the project is in, what is expected from you and what happens next."
          level={2}
        />

        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.id} className="h-full">
              <Reveal delay={(index % 3) * 0.07} className="h-full">
                <div className="group hover:border-brand-200 relative h-full rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="bg-ink-900 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-ink-200 text-3xl font-extrabold tabular-nums sm:text-4xl">
                      {String(step.id).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
                  <p className="text-ink-400 mt-3 border-t border-dashed border-ink-200 pt-3 text-xs leading-relaxed font-medium">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12 flex flex-col items-start gap-5 rounded-2xl border border-ink-100 bg-white p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-ink-500 max-w-3xl text-sm leading-relaxed">
              <span className="font-semibold text-ink-900">Timelines: </span>
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
