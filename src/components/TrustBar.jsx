import Icon from './ui/Icon'
import { trustPromises } from '../data/trust'

/**
 * Thin strip of concrete promises directly under the hero.
 * These are process and ownership commitments, not invented statistics.
 */
export default function TrustBar() {
  return (
    <section aria-label="What you can expect" className="border-y border-ink-100 bg-white">
      <div className="container-page py-5">
        <ul className="no-scrollbar flex items-center gap-3 overflow-x-auto sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:overflow-visible">
          {trustPromises.map((promise) => (
            <li key={promise.label} className="flex shrink-0 items-center gap-2.5">
              <span className="bg-brand-50 text-brand-600 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <Icon name={promise.icon} className="h-4 w-4" />
              </span>
              <span className="text-ink-700 text-sm font-semibold whitespace-nowrap">
                {promise.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
