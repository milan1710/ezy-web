import { ceramicImages } from '../../data/ceramicImages'
import { heroHighlights, heroProofPoints } from '../../data/presentationContent'
import Icon from '../ui/Icon'

export default function Hero() {
  return (
    <section className="cn-hero" id="home" aria-labelledby="cn-hero-title">
      <div className="cn-hero__bg" aria-hidden="true">
        <img
          src={ceramicImages.heroInterior.src}
          alt=""
          width={ceramicImages.heroInterior.width}
          height={ceramicImages.heroInterior.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="cn-hero__wash" aria-hidden="true" />
      <div className="cn-hero__accent" aria-hidden="true" />
      <span className="cn-hero__glow" aria-hidden="true" />

      <div className="cn-container cn-hero__grid">
        <div className="cn-hero__content">
          <p className="cn-eyebrow cn-hero__eyebrow">
            <span className="cn-eyebrow__line" aria-hidden="true" />
            Ezy Digital | Marketing Agency
          </p>

          <h1 className="cn-hero__title" id="cn-hero-title">
            Digital Growth Solutions for
            <span> Ceramic Businesses</span>
          </h1>

          <p className="cn-hero__sub">
            More Inquiries. More Dealers. More Markets. <strong>Real Growth.</strong>
          </p>

          <p className="cn-hero__lead">
            We help ceramic manufacturers, exporters, dealers and showrooms strengthen their
            digital presence through modern websites, targeted marketing campaigns, creative
            content and inquiry management systems.
          </p>

          <div className="cn-hero__actions">
            <a className="cn-btn cn-btn--primary cn-btn--lg" href="#contact">
              Get Your Free Ceramic Growth Audit
              <Icon name="arrowRight" size={17} />
            </a>
            <a className="cn-btn cn-btn--ghost cn-btn--lg" href="#packages">
              Explore Our Packages
            </a>
          </div>

          <ul className="cn-hero__services" aria-label="Primary service areas">
            {heroHighlights.map((item) => (
              <li key={item.title}>
                <span className="cn-hero__service-icon">
                  <Icon name={item.icon} size={18} />
                </span>
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="cn-hero__visual" aria-hidden="true">
          <div className="cn-hero__photo">
            <img
              src={ceramicImages.showroom.src}
              alt=""
              width={ceramicImages.showroom.width}
              height={ceramicImages.showroom.height}
              loading="eager"
              decoding="async"
            />
            <span className="cn-hero__photo-tag">Ceramic showroom · illustrative image</span>
          </div>

          <div className="cn-hero__floating-card">
            <div className="cn-hero__floating-image">
              <img
                src={ceramicImages.catalogueFlatlay.src}
                alt=""
                width={ceramicImages.catalogueFlatlay.width}
                height={ceramicImages.catalogueFlatlay.height}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <span className="cn-hero__floating-label">Built for ceramic growth</span>
              <strong>Website · Creative · Campaigns</strong>
              <p>One connected digital growth system.</p>
            </div>
          </div>

          <div className="cn-hero__mini-badge">
            <Icon name="globe" size={17} />
            <span>
              Domestic <br />&amp; Export
            </span>
          </div>
        </div>
      </div>

      <div className="cn-container cn-hero__bottom">
        <div className="cn-hero__proof">
          {heroProofPoints.map((point, index) => (
            <div className="cn-hero__proof-item" key={point.title}>
              <Icon name={point.icon} size={18} />
              <span>{point.title}</span>
              {index < heroProofPoints.length - 1 ? (
                <i className="cn-hero__proof-divider" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
        <a className="cn-hero__scroll" href="#about" aria-label="Scroll to About Ezy Digital">
          <span>Scroll to explore</span>
          <i aria-hidden="true">
            <Icon name="chevronDown" size={14} />
          </i>
        </a>
      </div>
    </section>
  )
}
