import { useMemo, useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import BrowserFrame from './mockups/BrowserFrame'
import MockupApp from './mockups/MockupApp'
import { portfolioCategories, projectNotice, projects } from '../data/portfolio'
import { whatsappLink } from '../config/siteConfig'

export default function Portfolio() {
  const [active, setActive] = useState('all')

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((project) => project.category === active)),
    [active],
  )

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-ink-950 relative isolate overflow-hidden py-20 lg:py-28"
    >
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="glow-red pointer-events-none absolute -top-32 right-[-8%] h-[34rem] w-[34rem]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Our work"
          titleId="portfolio-heading"
          tone="dark"
          title="Design and development work you can judge for yourself"
          description={projectNotice}
          level={2}
        />

        <Reveal>
          <div
            role="group"
            aria-label="Filter portfolio by project type"
            className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible"
          >
            {portfolioCategories.map((category) => {
              const selected = active === category.id
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  aria-pressed={selected}
                  className={[
                    'shrink-0 rounded-full border px-3.5 py-1.5 text-[0.775rem] font-semibold transition-colors',
                    selected
                      ? 'border-brand-500 bg-brand-600 text-white'
                      : 'border-white/12 bg-white/[0.04] text-white/70 hover:border-white/35 hover:text-white',
                  ].join(' ')}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <p className="text-ink-500 mt-4 text-center text-[0.7rem]" aria-live="polite">
          Showing {filtered.length} of {projects.length} concept previews
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.06}>
              <article className="group h-full">
                <div className="relative transition-transform duration-500 group-hover:-translate-y-1.5">
                  <div
                    className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <BrowserFrame url={project.url} className="relative ring-1 ring-white/10">
                    <MockupApp variant={project.variant} />
                  </BrowserFrame>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-[1.05rem] font-bold text-white">{project.name}</h3>
                  <span className="rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-0.5 text-[0.6rem] font-bold tracking-[0.1em] text-white/70 uppercase">
                    {project.kind}
                  </span>
                  <span className="text-ink-500 text-[0.7rem] font-semibold">
                    {portfolioCategories.find((c) => c.id === project.category)?.label}
                  </span>
                </div>

                <p className="text-ink-300 mt-2 text-[0.8125rem] leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="text-ink-300 rounded-md border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="from-ink-900 to-ink-800 mt-16 flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-gradient-to-r p-8 text-center sm:p-10">
            <h3 className="font-display max-w-2xl text-[1.35rem] font-bold text-white sm:text-[1.6rem]">
              Want a concept like this built for your business?
            </h3>
            <p className="text-ink-300 max-w-2xl text-sm leading-relaxed">
              Share your requirement and we will tell you which package fits, what the timeline looks
              like and what the final quotation will be - before any work starts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href={whatsappLink(
                  'Hello Ezy Digital, I saw the concept designs on the ezydigital.in website. I would like something similar built for my business.',
                )}
                external
                size="lg"
                icon="Sparkles"
              >
                Start My Website
              </Button>
              <Button
                to="/website-development/pricing"
                variant="outlineLight"
                size="lg"
                iconRight="ArrowRight"
              >
                See Packages &amp; Prices
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

