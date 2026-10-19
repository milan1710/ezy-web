import { ceramicImages } from '../../data/ceramicImages'
import {
  auditScope,
  solutions,
  trackingSolution,
  whyPoints,
} from '../../data/presentationContent'
import Icon from '../ui/Icon'
import Reveal from './Reveal'

const inquiryRows = [
  { source: 'Website', type: 'Buyer inquiry', status: 'New' },
  { source: 'Meta Ads', type: 'Dealer inquiry', status: 'Follow-up' },
  { source: 'Google Ads', type: 'Export inquiry', status: 'Contacted' },
]

export default function Solutions() {
  return (
    <section
      className="cn-section cn-section--soft"
      id="solutions"
      aria-labelledby="cn-solutions-title"
    >
      <div className="cn-container">
        <div className="cn-section-head cn-section-head--split">
          <Reveal>
            <p className="cn-eyebrow">
              <span>06</span> Ceramic Solutions
            </p>
            <h2 className="cn-h2" id="cn-solutions-title">
              Ceramic business growth solutions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="cn-lead">
              We help ceramic manufacturers, exporters, dealers and showrooms improve digital
              visibility and build a structured process for attracting, tracking and following up
              with potential customers.
            </p>
          </Reveal>
        </div>

        <Reveal className="cn-solutions__tagline" delay={120}>
          <span>More Inquiries.</span>
          <span>More Dealers.</span>
          <span>More Markets.</span>
        </Reveal>

        <div className="cn-solutions__grid">
          {solutions.map((solution, index) => (
            <Reveal
              as="article"
              className="cn-solution-card"
              delay={index * 80}
              key={solution.title}
            >
              <div className="cn-solution-card__media">
                <img
                  src={solution.image.src}
                  alt={solution.image.alt}
                  width={solution.image.width}
                  height={solution.image.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="cn-solution-card__body">
                <span className="cn-solution-card__icon">
                  <Icon name={solution.icon} size={18} />
                </span>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="cn-tracking">
          <div className="cn-tracking__copy">
            <span className="cn-tracking__icon">
              <Icon name={trackingSolution.icon} size={23} />
            </span>
            <div>
              <h3>{trackingSolution.title}</h3>
              <p>{trackingSolution.text}</p>
            </div>
          </div>
          <div className="cn-tracking__mock" aria-hidden="true">
            <div className="cn-tracking__mock-head">
              <span>Lead overview</span>
              <i>Illustrative</i>
            </div>
            {inquiryRows.map((row) => (
              <div className="cn-tracking__row" key={row.type}>
                <span>{row.source}</span>
                <strong>{row.type}</strong>
                <em>{row.status}</em>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="cn-why">
          <Reveal className="cn-why__head">
            <p className="cn-eyebrow">
              <span>07</span> Why Ezy Digital
            </p>
            <h3 className="cn-h3">Why choose Ezy Digital?</h3>
            <p>
              A practical partner for businesses that want a clearer, more connected approach to
              digital growth.
            </p>
          </Reveal>
          <div className="cn-why__grid">
            {whyPoints.map((point, index) => (
              <Reveal className="cn-why__item" delay={index * 55} key={point.title}>
                <span className="cn-why__icon">
                  <Icon name={point.icon} size={18} />
                </span>
                <h4>{point.title}</h4>
                <p>{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="cn-audit-banner">
          <div className="cn-audit-banner__media" aria-hidden="true">
            <img
              src={ceramicImages.showroom.src}
              alt=""
              width={ceramicImages.showroom.width}
              height={ceramicImages.showroom.height}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="cn-audit-banner__content">
            <span className="cn-audit-banner__icon">
              <Icon name="sparkles" size={22} />
            </span>
            <p className="cn-eyebrow cn-eyebrow--light">
              <span>08</span> Free Ceramic Growth Audit
            </p>
            <h3>Get Your Free Ceramic Growth Audit</h3>
            <p>
              We will review your current digital presence, understand your business goals and
              suggest practical opportunities for your ceramic business.
            </p>
            <ul className="cn-audit-banner__list">
              {auditScope.map((item) => (
                <li key={item}>
                  <Icon name="checkCircle" size={15} />
                  {item}
                </li>
              ))}
            </ul>
            <a className="cn-btn cn-btn--primary" href="#contact">
              Request My Free Audit
              <Icon name="arrowRight" size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
