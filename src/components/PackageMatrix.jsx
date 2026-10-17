import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'
import { formatINR, packageMatrix } from '../data/pricing'
import { whatsappLink } from '../config/siteConfig'

/** Renders one comparison cell: tick, dash, short text or a muted note. */
function MatrixCell({ value }) {
  if (value === true) {
    return <Icon name="Check" className="text-brand-600 mx-auto h-4 w-4" />
  }

  if (value === false) {
    return <Icon name="Minus" className="text-ink-300 mx-auto h-4 w-4" />
  }

  if (typeof value === 'string') {
    return (
      <span className="text-ink-700 inline-flex items-center gap-1.5 text-xs font-semibold">
        <Icon name="Check" className="text-brand-600 h-3.5 w-3.5 shrink-0" />
        {value}
      </span>
    )
  }

  return <span className="text-ink-400 text-xs font-medium">{value.text}</span>
}

/**
 * Full feature comparison across every published package.
 * Horizontally scrollable on small screens so nothing is squeezed or hidden.
 */
export default function PackageMatrix() {
  return (
    <section aria-labelledby="matrix-heading" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Compare packages"
          titleId="matrix-heading"
          title="Exactly what is included in every package"
          description="No vague feature lists. This is the same table we use to prepare a quotation, so you can see where one package ends and the next one begins."
          level={2}
        />

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-ink-100 shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left">
                <caption className="sr-only">
                  Feature comparison of Ezy Digital website packages with starting prices
                </caption>

                <thead>
                  <tr className="bg-ink-950">
                    <th
                      scope="col"
                      className="text-ink-300 bg-ink-950 sticky left-0 z-10 px-5 py-4 text-xs font-semibold tracking-[0.16em] uppercase"
                    >
                      Feature
                    </th>
                    {packageMatrix.columns.map((column) => (
                      <th key={column.id} scope="col" className="px-4 py-4 text-center align-bottom">
                        <span className="block text-sm font-bold text-white">{column.label}</span>
                        <span className="text-ink-300 mt-1 block text-xs font-semibold">
                          from {formatINR(column.price)}
                          {column.suffix === 'per month' ? '/mo' : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {packageMatrix.rows.map((row, rowIndex) => (
                    <tr key={row.feature} className={rowIndex % 2 === 1 ? 'bg-ink-50/70' : 'bg-white'}>
                      <th
                        scope="row"
                        className={[
                          'text-ink-800 sticky left-0 z-10 border-t border-ink-100 px-5 py-3.5 text-sm font-semibold',
                          rowIndex % 2 === 1 ? 'bg-ink-50' : 'bg-white',
                        ].join(' ')}
                      >
                        {row.feature}
                      </th>
                      {packageMatrix.columns.map((column) => (
                        <td key={column.id} className="border-t border-ink-100 px-4 py-3.5 text-center">
                          <MatrixCell value={row.values[column.id]} />
                        </td>
                      ))}
                    </tr>
                  ))}

                  <tr className="bg-white">
                    <th
                      scope="row"
                      className="text-ink-900 sticky left-0 z-10 border-t border-ink-100 bg-white px-5 py-4 text-sm font-bold"
                    >
                      Discuss this package
                    </th>
                    {packageMatrix.columns.map((column) => (
                      <td key={column.id} className="border-t border-ink-100 px-4 py-4 text-center">
                        <a
                          href={whatsappLink(
                            `Hello Ezy Digital, I compared the website packages and I am interested in the ${column.label} package (from ${formatINR(column.price)}). Please share the details and a quotation.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-700 hover:bg-brand-50 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold"
                        >
                          Enquire
                          <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-ink-100 bg-ink-50 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-ink-500 max-w-3xl text-sm leading-relaxed">
              <span className="text-ink-900 font-semibold">Table legend: </span>
              a tick means the feature is included in that package, a dash means it is not, and a note
              such as &ldquo;by scope&rdquo; or &ldquo;quoted separately&rdquo; means it is agreed in
              your written quotation. Prices are starting points - the final figure depends on your
              scope.
            </p>
            <Button
              to="/website-development/pricing#finder"
              size="lg"
              iconRight="ArrowRight"
              className="shrink-0"
            >
              Not Sure? Use the Finder
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
