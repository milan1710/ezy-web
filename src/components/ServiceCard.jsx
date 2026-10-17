import { Link } from 'react-router-dom'
import Icon from './ui/Icon'
import { whatsappLink } from '../config/siteConfig'

/**
 * Single service card. Also used by the Services section grid.
 * `ctaLabel` / `ctaMessage` make the card's action open a package-specific
 * WhatsApp conversation instead of being decorative.
 */
export default function ServiceCard({ service, ctaLabel = 'Discuss Your Project', ctaMessage }) {
  const isAdvanced = service.tier === 'advanced'
  const isMarketing = service.tier === 'marketing'
  const label = service.ctaLabel ?? ctaLabel

  return (
    <article
      id={service.id}
      className="group hover:border-brand-200 flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={[
            'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105',
            isAdvanced
              ? 'bg-azure-500/12 text-azure-600'
              : 'bg-brand-50 text-brand-600',
          ].join(' ')}
        >
          <Icon name={service.icon} className="h-6 w-6" />
        </span>

        <span
          className={[
            'rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase',
            isAdvanced ? 'bg-ink-100 text-ink-600' : 'bg-brand-50 text-brand-700',
          ].join(' ')}
        >
          {isAdvanced ? 'Advanced' : isMarketing ? 'Marketing' : 'Standard'}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-ink-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.summary}</p>

      <ul className="mt-5 flex flex-col gap-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-600">
            <Icon name="Check" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {service.to ? (
        <Link
          to={service.to}
          className="group/link text-brand-700 mt-6 inline-flex items-center gap-2 border-t border-ink-100 pt-5 text-sm font-semibold"
        >
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
          className="group/link text-brand-700 mt-6 inline-flex items-center gap-2 border-t border-ink-100 pt-5 text-sm font-semibold"
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
