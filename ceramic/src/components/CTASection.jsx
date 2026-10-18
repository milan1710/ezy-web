import { Link } from 'react-router-dom'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'
import Icon from './ui/Icon'

export default function CTASection({
  title = "Let's Build a Better Growth System for Your Ceramic Business.",
  text = 'Tell us what you manufacture, which market you want to target and what kind of buyers or distributors you want to reach.',
  primaryLabel = 'Discuss Your Growth Plan',
  primaryTo = '/contact',
  showWhatsApp = true,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link className="btn" to={primaryTo}>
            {primaryLabel} <Icon name="arrowRight" size={16} />
          </Link>
          {secondaryLabel && secondaryTo ? (
            <Link className="btn btn--outline-light" to={secondaryTo}>
              {secondaryLabel}
            </Link>
          ) : null}
          {showWhatsApp ? (
            <a
              className="btn btn--outline-light"
              href={whatsappLink(ceramicSite.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={16} /> WhatsApp Ezy Digital
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
