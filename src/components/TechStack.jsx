import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'
import { heroTechLabels, techDisclaimer, techGroups } from '../data/techStack'

export default function TechStack() {
  return (
    <section id="tech" aria-labelledby="tech-heading" className="relative isolate overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-azure-500/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Technology"
          titleId="tech-heading"
          tone="dark"
          title="The tools we use to build reliable websites"
          description={techDisclaimer}
          level={2}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.07} className="h-full">
              <div className="hover:border-brand-500/40 flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="border-brand-500/30 bg-brand-600/15 text-brand-300 inline-flex h-10 w-10 items-center justify-center rounded-xl border">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold text-white">{group.title}</h3>
                </div>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5"
                    >
                      <span className="text-ink-200 border-white/10 bg-ink-900/70 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-mono text-[11px] font-bold">
                        {item.mono}
                      </span>
                      <span className="text-ink-100 text-sm font-medium">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {heroTechLabels.map((label) => (
              <li
                key={label}
                className="text-ink-200 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold"
              >
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
