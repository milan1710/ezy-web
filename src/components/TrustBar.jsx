import Icon from './ui/Icon'
import { trustPromises } from '../data/trust'

/**
 * Thin strip of concrete promises directly under the hero.
 * These are process and ownership commitments, not invented statistics.
 * Rendered as a slow marquee with a duplicated list for seamless looping; the
 * duplicate is aria-hidden so screen readers hear each promise once.
 */
function PromiseList({ duplicate = false }) {
  return (
    <ul
      className="flex w-max shrink-0 items-center gap-10 pr-10"
      aria-hidden={duplicate ? 'true' : undefined}
    >
      {trustPromises.map((promise) => (
        <li key={`${promise.label}${duplicate ? '-copy' : ''}`} className="flex items-center gap-2.5">
          <span className="bg-brand-50 text-brand-600 ring-brand-100 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1">
            <Icon name={promise.icon} className="h-3.5 w-3.5" />
          </span>
          <span className="text-ink-700 text-[0.8125rem] font-semibold whitespace-nowrap">
            {promise.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function TrustBar() {
  return (
    <section aria-label="What you can expect" className="border-ink-100 bg-white">
      <div className="container-page flex items-center gap-6 py-4">
        <span className="text-ink-400 hidden shrink-0 items-center gap-2 text-[0.65rem] font-bold tracking-[0.22em] uppercase sm:flex">
          <span className="bg-brand-600 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
          What you get
        </span>

        <div className="mask-fade-x relative flex-1 overflow-hidden">
          <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
            <PromiseList />
            <PromiseList duplicate />
          </div>
        </div>
      </div>
    </section>
  )
}
