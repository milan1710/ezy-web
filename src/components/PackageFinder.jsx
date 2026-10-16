import { useMemo, useState } from 'react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import Icon from './ui/Icon'
import SectionHeading from './ui/SectionHeading'
import { packages, formatINR } from '../data/pricing'
import {
  baseOptions,
  buildFinderMessage,
  featureOptions,
  pageOptions,
  recommendPackage,
} from '../data/estimator'
import { firstCallSteps } from '../data/trust'
import { whatsappLink } from '../config/siteConfig'

const chipBase =
  'rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-200'
const chipOn = 'border-brand-600 bg-brand-600 text-white shadow-[0_10px_24px_-14px_rgba(220,31,44,0.8)]'
const chipOff = 'border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50'

/**
 * Package Finder.
 *
 * An interactive scope guide (deliberately NOT a price calculator): it
 * recommends the smallest published package that covers the visitor's answers
 * and sends the structured requirement straight to WhatsApp.
 */
export default function PackageFinder() {
  const [base, setBase] = useState('business-website')
  const [pageId, setPageId] = useState('p2')
  const [features, setFeatures] = useState([])

  const pageOption = pageOptions.find((option) => option.id === pageId) ?? pageOptions[0]

  const recommendation = useMemo(
    () => recommendPackage({ base, pages: pageOption.pages, features }),
    [base, pageOption.pages, features],
  )

  const recommended = packages.find((pkg) => pkg.id === recommendation.packageId)
  const priceLabel = recommended
    ? `${formatINR(recommended.startingPrice)}${recommended.priceSuffix === 'per month' ? ' per month' : ''}`
    : ''

  const toggleFeature = (id) =>
    setFeatures((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )

  const message = buildFinderMessage({
    baseLabel: baseOptions.find((option) => option.id === base)?.label ?? 'Website',
    pageLabel: pageOption.label,
    featureLabels: features.map(
      (id) => featureOptions.find((option) => option.id === id)?.label ?? id,
    ),
    recommendation: recommended ? recommended.name : 'Custom quotation',
    priceLabel,
  })

  return (
    <section
      id="finder"
      aria-labelledby="finder-heading"
      className="bg-ink-50 py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Package finder"
          titleId="finder-heading"
          title="Answer three quick questions, get a recommended starting point"
          description="This is a scope guide, not a quotation. It points you to the smallest published package that fits your answers, then sends the details to Milan so you get an accurate written quotation."
          level={2}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Questions */}
          <Reveal>
            <div className="flex flex-col gap-7 rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
              <fieldset>
                <legend className="text-ink-900 mb-3 text-sm font-bold">
                  1. What do you need?
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {baseOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setBase(option.id)}
                      aria-pressed={base === option.id}
                      className={[chipBase, base === option.id ? chipOn : chipOff].join(' ')}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-ink-900 mb-3 text-sm font-bold">
                  2. Roughly how many pages?
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {pageOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setPageId(option.id)}
                      aria-pressed={pageId === option.id}
                      className={[chipBase, pageId === option.id ? chipOn : chipOff].join(' ')}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-ink-900 mb-3 text-sm font-bold">
                  3. Anything else you need?{' '}
                  <span className="text-ink-400 font-normal">(optional)</span>
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {featureOptions.map((option) => {
                    const on = features.includes(option.id)
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleFeature(option.id)}
                        aria-pressed={on}
                        className={[chipBase, on ? chipOn : chipOff].join(' ')}
                      >
                        {on ? (
                          <span className="inline-flex items-center gap-2">
                            <Icon name="Check" className="h-4 w-4" />
                            {option.label}
                          </span>
                        ) : (
                          option.label
                        )}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <p className="text-ink-400 border-t border-dashed border-ink-200 pt-5 text-xs leading-relaxed">
                Nothing here is charged automatically, and no price is calculated for you. These
                answers only help us recommend a starting point - the final quotation always depends
                on the agreed scope.
              </p>
            </div>
          </Reveal>

          {/* Result */}
          <Reveal delay={0.1}>
            <div className="from-ink-950 to-ink-900 sticky top-28 flex flex-col rounded-3xl bg-gradient-to-br p-7 sm:p-8">
              <p className="text-brand-400 text-xs font-semibold tracking-[0.22em] uppercase">
                Suggested starting point
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                {recommended ? recommended.name : 'Custom quotation'}
              </h3>

              {recommended ? (
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-ink-300 text-sm font-semibold">Starting at</span>
                  <span className="text-3xl font-extrabold text-white">
                    {formatINR(recommended.startingPrice)}
                  </span>
                  <span className="text-ink-400 text-sm font-semibold">
                    {recommended.priceSuffix}
                  </span>
                </div>
              ) : null}

              <p className="text-ink-300 mt-4 text-sm leading-relaxed">
                {recommended ? recommended.audience : 'Your requirement needs a scoped quotation.'}
              </p>

              {/* Selection summary */}
              <dl className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-ink-400">Requirement</dt>
                  <dd className="text-right font-semibold text-white">
                    {baseOptions.find((option) => option.id === base)?.note}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-ink-400">Size</dt>
                  <dd className="text-right font-semibold text-white">{pageOption.label}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-ink-400">Extras</dt>
                  <dd className="text-right font-semibold text-white">
                    {features.length
                      ? features
                          .map((id) => featureOptions.find((option) => option.id === id)?.label)
                          .join(', ')
                      : 'None selected'}
                  </dd>
                </div>
              </dl>

              {recommendation.customScope ? (
                <p className="text-ink-200 mt-5 flex items-start gap-2.5 rounded-xl border border-amber-400/25 bg-amber-400/10 p-3.5 text-xs leading-relaxed">
                  <Icon name="Info" className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  <span>This selection needs a scoped quotation rather than a fixed package.</span>
                </p>
              ) : null}

              {recommendation.notes.length ? (
                <ul className="mt-4 flex flex-col gap-2">
                  {recommendation.notes.map((note) => (
                    <li key={note} className="text-ink-400 flex items-start gap-2 text-xs leading-relaxed">
                      <Icon name="Info" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-7 grid gap-2">
                <Button
                  href={whatsappLink(message)}
                  external
                  size="lg"
                  icon="Sparkles"
                  fullWidth
                >
                  Send These Details on WhatsApp
                </Button>
                <Button to="/#contact" variant="outlineLight" size="lg" iconRight="ArrowRight" fullWidth>
                  See All Contact Options
                </Button>
              </div>

              <p className="text-ink-500 mt-5 text-xs leading-relaxed">
                Domain, hosting, paid plugins or themes, premium APIs, payment gateway charges and
                taxes may be extra. Your final quotation is confirmed in writing before any work
                starts.
              </p>
            </div>
          </Reveal>

        </div>

        {/* What happens when you call */}
        <div className="mt-16 border-t border-ink-200 pt-14">
          <Reveal>
            <h3 className="text-center text-2xl font-bold text-ink-900 sm:text-3xl">
              What happens when you call
            </h3>
            <p className="text-ink-500 mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed sm:text-base">
              No obligation, no sales script and no payment before the scope is agreed in writing.
            </p>
          </Reveal>

          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {firstCallSteps.map((step, index) => (
              <li key={step.title} className="h-full">
                <Reveal delay={index * 0.07} className="h-full">
                  <div className="group hover:border-brand-200 h-full rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <div className="flex items-center justify-between">
                      <span className="bg-brand-50 text-brand-600 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105">
                        <Icon name={step.icon} className="h-5 w-5" />
                      </span>
                      <span className="text-ink-200 text-3xl font-extrabold tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h4 className="text-ink-900 mt-5 text-base font-bold">{step.title}</h4>
                    <p className="text-ink-500 mt-2 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  )
}
