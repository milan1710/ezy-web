import Icon from './ui/Icon'
import { pricingConditions, websitePricingExclusions, websitePricingNote } from '../data/pricing'

/**
 * Visible pricing conditions. Used below every pricing grid so the
 * "starting at" nature of the prices is never hidden.
 */
export default function PricingConditions({ id = 'pricing-conditions', compact = false }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={compact ? 'mt-10' : 'bg-ink-50 py-16 lg:py-20'}
    >
      <div className={compact ? '' : 'container-page'}>
        <div className="rounded-3xl border border-ink-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-brand-600 text-xs font-semibold tracking-[0.2em] uppercase">
                Pricing conditions
              </p>
              <h2
                id={`${id}-heading`}
                className="mt-2 text-xl font-bold text-ink-900 sm:text-2xl"
              >
                Please read this before requesting a quote
              </h2>
            </div>
            <span className="text-ink-500 inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-200 px-3 py-1.5 text-xs font-semibold">
              <Icon name="FileText" className="h-4 w-4" />
              Written quotation
            </span>
          </div>

          <p className="text-ink-600 mt-4 max-w-3xl text-sm leading-relaxed">
            {websitePricingNote}
          </p>
          <p className="text-ink-600 mt-2 max-w-3xl text-sm leading-relaxed">
            {websitePricingExclusions}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {pricingConditions.map((condition) => (
              <li key={condition} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600">
                <Icon name="CheckCircle2" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                <span>{condition}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-xl bg-brand-50 p-4 text-sm leading-relaxed text-brand-900">
            The final price depends on your requirements and the approved scope. Domain, hosting,
            paid tools, payment gateway charges and other third-party costs may be additional.
          </p>
        </div>
      </div>
    </section>
  )
}
