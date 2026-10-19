import { Link } from 'react-router-dom'
import { ceramicSite, whatsappLink } from '../../config/ceramicSite'
import { presentationNav } from '../../data/presentationContent'
import Icon from '../ui/Icon'

const LOGO_SRC = `${import.meta.env.BASE_URL}images/ezy-digital-logo.png`

const serviceLinks = [
  'Website Development',
  'Meta & Google Ads',
  'Creative & Video',
  'SEO & Visibility',
  'CRM & Lead Management',
]

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="cn-footer">
      <div className="cn-container">
        <div className="cn-footer__grid">
          <div className="cn-footer__brand">
            <span className="cn-footer__logo">
              <img
                src={LOGO_SRC}
                alt="Ezy Digital Marketing Agency logo"
                width="930"
                height="386"
                loading="lazy"
                decoding="async"
              />
            </span>
            <p>
              Digital growth solutions for ceramic manufacturers, exporters, dealers and
              showrooms. Website, creative, campaigns and inquiry systems built around your
              business.
            </p>
            <a
              className="cn-footer__whatsapp"
              href={whatsappLink(ceramicSite.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={16} />
              WhatsApp Ezy Digital
            </a>
          </div>

          <div className="cn-footer__col">
            <p className="cn-footer__title">Explore</p>
            <nav aria-label="Footer sections">
              {presentationNav.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="cn-footer__col">
            <p className="cn-footer__title">Services</p>
            <nav aria-label="Footer services">
              {serviceLinks.map((service) => (
                <a key={service} href="#services">
                  {service}
                </a>
              ))}
            </nav>
          </div>

          <div className="cn-footer__col">
            <p className="cn-footer__title">Contact</p>
            <a href={ceramicSite.contact.telHref}>
              <Icon name="phone" size={14} /> +91 95126 48085
            </a>
            <a href={ceramicSite.domain} target="_blank" rel="noopener noreferrer">
              <Icon name="globe" size={14} /> ezydigital.in
            </a>
            <span className="cn-footer__location">
              <Icon name="mapPin" size={14} /> Upleta, Gujarat, India
            </span>
            <a className="cn-footer__audit-link" href="#contact">
              Get your free growth audit
              <Icon name="arrowRight" size={14} />
            </a>
          </div>
        </div>

        <div className="cn-footer__bottom">
          <p>© {year} Ezy Digital Marketing Agency. All rights reserved.</p>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <a href="https://ezydigital.in/" target="_blank" rel="noopener noreferrer">
              Main website ↗
            </a>
          </div>
        </div>
        <p className="cn-footer__disclaimer">
          Imagery is illustrative and does not depict Ezy Digital clients, projects or specific
          ceramic factories. Package inquiry figures are planning estimates, not guaranteed results.
        </p>
      </div>
    </footer>
  )
}
