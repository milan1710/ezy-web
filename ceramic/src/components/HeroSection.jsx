import { Link } from 'react-router-dom'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'
import ceramicImages from '../data/ceramicImages'
import Icon from './ui/Icon'

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero__grid">
          <div className="home-hero__content fade-up">
            <p className="home-hero__eyebrow">
              <span>Morbi</span> Digital growth for the ceramic industry
            </p>

            <h1 className="home-hero__title">
              Reach More Buyers.
              <br />
              Build Stronger Dealer Networks.
              <br />
              Grow Your <em>Ceramic Business.</em>
            </h1>

            <p className="home-hero__gu gu" lang="gu">
              તમારા Ceramic Business માટે નવા Buyer, Dealer અને Export Inquiry મેળવવા Digital Growth
              System.
            </p>

            <p className="home-hero__lead">
              Ezy Digital helps ceramic manufacturers and exporters strengthen their online presence,
              showcase product ranges professionally, attract relevant business inquiries and build a
              structured process for domestic and international business development.
            </p>

            <div className="home-hero__actions">
              <Link className="btn" to="/contact">
                Get a Free Ceramic Growth Audit <Icon name="arrowRight" size={16} />
              </Link>
              <Link className="btn btn--outline" to="/solutions">
                Explore Growth Solutions
              </Link>
            </div>

            <p className="home-hero__note">
              <Icon name="info" size={15} />
              Website, product catalogue, digital marketing and inquiry tracking — aligned with your
              business growth goals. No guaranteed buyer or order promises.
            </p>

            <div className="hero-focus-strip">
              <div>
                <Icon name="users" size={15} /> Buyer inquiries
              </div>
              <div>
                <Icon name="network" size={15} /> Dealer networks
              </div>
              <div>
                <Icon name="globe" size={15} /> Export visibility
              </div>
            </div>
          </div>

          <div className="home-hero__visual fade-up fade-up--delay" aria-label="Ceramic product presentation concept">
            <div className="home-hero__photo">
              <img
                src={ceramicImages.heroInterior.src}
                alt={ceramicImages.heroInterior.alt}
                width={ceramicImages.heroInterior.width}
                height={ceramicImages.heroInterior.height}
                fetchPriority="high"
                decoding="async"
              />
              <span className="home-hero__photo-tag">Concept visual — premium tile interior</span>
            </div>

            <div className="hero-badge">
              <span className="hero-badge__dot" aria-hidden="true" />
              Built for Morbi&apos;s ceramic manufacturers
            </div>

            <div className="hero-catalogue">
              <div className="hero-catalogue__head">
                Product catalogue concept <Icon name="layout" size={15} />
              </div>
              <div className="hero-catalogue__grid">
                <div className="hero-catalogue__tile">
                  <img src={ceramicImages.tileSamples.src} alt="" loading="lazy" decoding="async" />
                  <span>Wall tiles</span>
                </div>
                <div className="hero-catalogue__tile">
                  <img src={ceramicImages.catalogueFlatlay.src} alt="" loading="lazy" decoding="async" />
                  <span>Floor tiles</span>
                </div>
                <div className="hero-catalogue__tile">
                  <img src={ceramicImages.backlitSlabs.src} alt="" loading="lazy" decoding="async" />
                  <span>Slabs</span>
                </div>
              </div>
              <div className="hero-catalogue__foot">
                <Icon name="info" size={11} /> Illustrative interface — not client data
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroWhatsAppLink() {
  return (
    <a
      className="btn btn--outline"
      href={whatsappLink(ceramicSite.whatsappMessages.audit)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" size={16} /> WhatsApp Ezy Digital
    </a>
  )
}
