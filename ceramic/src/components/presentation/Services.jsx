import { services } from '../../data/presentationContent'
import Icon from '../ui/Icon'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section
      className="cn-section cn-section--dark cn-services"
      id="services"
      aria-labelledby="cn-services-title"
    >
      <span className="cn-services__watermark" aria-hidden="true">
        SERVICES
      </span>
      <div className="cn-container">
        <div className="cn-section-head cn-section-head--split">
          <Reveal>
            <p className="cn-eyebrow cn-eyebrow--light">
              <span>05</span> Our Services
            </p>
            <h2 className="cn-h2" id="cn-services-title">
              Complete digital growth solutions for ceramic businesses.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="cn-lead cn-lead--light">
              From website to advertising, from creative content to lead management — we provide
              end-to-end digital support designed to help ceramic businesses create more inquiries,
              reach more dealers and explore more markets.
            </p>
          </Reveal>
        </div>

        <div className="cn-services__grid">
          {services.map((service, index) => (
            <Reveal
              as="article"
              className="cn-service-card"
              delay={(index % 4) * 70}
              key={service.title}
            >
              <div className="cn-service-card__media">
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="cn-service-card__number">{service.number}</span>
                <span className="cn-service-card__icon">
                  <Icon name={service.icon} size={19} />
                </span>
              </div>
              <div className="cn-service-card__body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul className="cn-service-card__list">
                  {service.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={12} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="cn-services__note">
          <Icon name="info" size={17} />
          <p>
            Actual scope depends on the selected package and agreed deliverables. Specific features,
            campaign volumes and reporting frequency are confirmed in writing before work begins.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
