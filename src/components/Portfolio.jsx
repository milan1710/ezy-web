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
      className="relative isolate overflow-hidden bg-ink-950 py-20 lg:py-28"
    >
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-brand-600/20 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Portfolio"
          titleId="portfolio-heading"
          tone="dark"
          title="Design and development work you can judge for yourself"
          description={projectNotice}
          level={2}
        />

        {/* Filters */}
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
                    'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                    selected
                      ? 'border-brand-500 bg-brand-600 text-white'
                      : 'border-white/15 bg-white/5 text-white/75 hover:border-white/40 hover:text-white',
                  ].join(' ')}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <p className="text-ink-400 mt-4 text-center text-xs" aria-live="polite">
          Showing {filtered.length} of {projects.length} concept previews
        </p>

        {/* Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.08}>
              <article className="group h-full">
                <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                  <BrowserFrame
                    url={project.url}
                    className="ring-1 ring-white/10"
                  >
                    <MockupApp variant={project.variant} />
                  </BrowserFrame>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white/75 uppercase">
                    {project.kind}
                  </span>
                  <span className="text-ink-400 text-xs font-semibold">
                    {portfolioCategories.find((c) => c.id === project.category)?.label}
                  </span>
                </div>

                <p className="text-ink-300 mt-2 text-sm leading-relaxed">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="text-ink-200 rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-10">
            <h3 className="max-w-2xl text-xl font-bold text-white sm:text-2xl">
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
