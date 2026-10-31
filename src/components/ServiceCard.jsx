import { Link } from 'react-router-dom'
import Icon from './ui/Icon'
import { whatsappLink } from '../config/siteConfig'

/**
 * Single service card, used by the Services grid.
 * `ctaLabel` / `ctaMessage` make the card's action open a package-specific
 * WhatsApp conversation instead of being decorative.
 */
export default function ServiceCard({ service, ctaLabel = 'Discuss Your Project', ctaMessage }) {
  const isAdvanced = service.tier === 'advanced'
  const isMarketing = service.tier === 'marketing'
  const label = service.ctaLabel ?? ctaLabel

  const linkClasses =
    'group/link text-ink-950 mt-6 inline-flex items-center gap-2 border-t border-ink-100 pt-5 text-[0.8125rem] font-bold'

  return (
    <article
      id={service.id}
      className="group border-ink-100 hover:border-brand-200 relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-38px_rgba(17,17,17,0.45)] sm:p-7"
    >
      <span
        className="bg-brand-600 absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <span
          className={[
            'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105',
            isAdvanced ? 'bg-ink-100 text-ink-800' : 'bg-brand-50 text-brand-600',
          ].join(' ')}
        >
          <Icon name={service.icon} className="h-5 w-5" />
        </span>

        <span
          className={[
            'rounded-full px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.12em] uppercase',
            isAdvanced ? 'bg-ink-100 text-ink-600' : 'bg-brand-50 text-brand-700',
          ].join(' ')}
        >
          {isAdvanced ? 'Advanced' : isMarketing ? 'Marketing' : 'Standard'}
        </span>
      </div>

      <h3 className="font-display text-ink-950 mt-5 text-[1.0625rem] leading-snug font-bold">
        {service.title}
      </h3>
      <p className="text-ink-500 mt-2 text-[0.8125rem] leading-relaxed">{service.summary}</p>

      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="text-ink-600 flex items-start gap-2.5 text-[0.8125rem]">
            <Icon name="Check" className="text-brand-600 mt-0.5 h-3.5 w-3.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {service.to ? (
        <Link to={service.to} className={linkClasses}>
          {label}
          <Icon
            name="ArrowRight"
            className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      ) : (
        <a
          href={whatsappLink(
            ctaMessage ?? `Hello Ezy Digital, I am interested in ${service.title} for my business.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {label}
          <Icon
            name="ArrowRight"
            className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
          />
        </a>
      )}
    </article>
  )
}
