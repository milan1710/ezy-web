import { Link } from 'react-router-dom'
import Icon from './ui/Icon'

export default function PricingCard({ pkg, ctaLabel = 'Discuss This Option' }) {
  const inquiryPath = `/contact?interest=${encodeURIComponent(pkg.id)}&package=${encodeURIComponent(pkg.name)}`

  return (
    <article className={`pricing-card${pkg.featured ? ' pricing-card--featured' : ''}`}>
      {pkg.featured ? <span className="pricing-card__badge">Popular starting point</span> : null}
      <h3>{pkg.name}</h3>
      <p className="pricing-card__tagline">{pkg.tagline}</p>
      <p className="pricing-card__price">
        {pkg.priceLabel} <small>starting price</small>
      </p>
      <p className="pricing-card__best">{pkg.bestFor}</p>
      <ul className="list-check">
        {pkg.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link className="btn btn--block btn--sm" to={inquiryPath}>
        {ctaLabel} <Icon name="arrowRight" size={14} />
      </Link>
      <p className="pricing-card__note">{pkg.note}</p>
    </article>
  )
}
