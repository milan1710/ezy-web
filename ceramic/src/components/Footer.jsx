import { Link } from 'react-router-dom'
import { footerCompanyLinks, footerSolutionLinks, legalLinks } from '../data/navigation'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'
import Icon from './ui/Icon'

const LOGO_SRC = `${import.meta.env.BASE_URL}images/ezy-digital-logo.png`

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={LOGO_SRC} alt="Ezy Digital logo" width="930" height="386" />
            <p>
              Digital growth support for ceramic manufacturers, exporters and sanitaryware brands —
              buyer inquiries, dealer development, product catalogues and export visibility.
            </p>
            <p className="footer__location">
              <Icon name="mapPin" size={14} /> {ceramicSite.contact.address.full}
            </p>
          </div>

          <div>
            <p className="footer__title">Growth Solutions</p>
            <nav className="footer__links" aria-label="Growth solutions">
              {footerSolutionLinks.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer__title">Company</p>
            <nav className="footer__links" aria-label="Company pages">
              {footerCompanyLinks.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer__title">Talk to Ezy Digital</p>
            <div className="footer__contact">
              <a href={ceramicSite.contact.telHref}>
                <Icon name="phone" size={15} />
                <span>
                  <strong>{ceramicSite.contact.phoneInternational}</strong>
                  <br />
                  Monday to Saturday
                </span>
              </a>
              <a
                href={whatsappLink(ceramicSite.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={15} />
                <span>WhatsApp your requirement</span>
              </a>
              <a href={`mailto:${ceramicSite.contact.email}`}>
                <Icon name="mail" size={15} />
                <span>{ceramicSite.contact.email}</span>
              </a>
            </div>
            <Link className="footer__cta" to="/contact">
              Request a free ceramic growth audit <Icon name="arrowRight" size={14} />
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Ezy Digital. All rights reserved.</p>
          <div className="footer__legal">
            {legalLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
            <a href="https://ezydigital.in/" target="_blank" rel="noopener noreferrer">
              Main website ↗
            </a>
          </div>
        </div>
        <p className="small" style={{ paddingBottom: 22, color: 'rgba(255,255,255,0.35)' }}>
          Imagery is illustrative and does not depict Ezy Digital clients, projects or Morbi factories.
          Prices shown are starting prices, not final quotations.
        </p>
      </div>
    </footer>
  )
}
