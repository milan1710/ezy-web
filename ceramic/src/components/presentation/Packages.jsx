import {
  buildPackageMessage,
  ceramicPackages,
  packageCommercialNote,
  packageInquiryNote,
} from '../../data/ceramicPackages'
import { whatsappLink } from '../../config/ceramicSite'
import Icon from '../ui/Icon'
import Reveal from './Reveal'

export default function Packages() {
  return (
    <section
      className="cn-section cn-section--black cn-packages"
      id="packages"
      aria-labelledby="cn-packages-title"
    >
      <span className="cn-packages__glow" aria-hidden="true" />
      <div className="cn-container">
        <div className="cn-section-head cn-section-head--split">
          <Reveal>
            <p className="cn-eyebrow cn-eyebrow--light">
              <span>09</span> Ceramic Growth Packages
            </p>
            <h2 className="cn-h2" id="cn-packages-title">
              Choose the right plan to grow your ceramic business.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="cn-packages__intro">
              <p className="cn-lead cn-lead--light">
                Website, marketing, content and lead generation packages designed around the way
                ceramic businesses build visibility and inquiry flow.
              </p>
              <div className="cn-packages__chips">
                <span>
                  <Icon name="users" size={14} /> More inquiries
                </span>
                <span>
                  <Icon name="handshake" size={14} /> More dealers
                </span>
                <span>
                  <Icon name="globe" size={14} /> More markets
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="cn-packages__grid">
          {ceramicPackages.map((pkg, index) => (
            <Reveal
              as="article"
              className={`cn-package${pkg.recommended ? ' is-featured' : ''}`}
              delay={(index % 3) * 80}
              key={pkg.id}
            >
              {pkg.recommended ? (
                <span className="cn-package__badge">Recommended</span>
              ) : null}

              <div className="cn-package__top">
                <span className="cn-package__number">{pkg.number}</span>
                <h3>{pkg.name}</h3>
              </div>

              <p className="cn-package__positioning">{pkg.positioning}</p>

              <div className="cn-package__price-row">
                <p className="cn-package__price">
                  {pkg.price}
                  <small>{pkg.priceSuffix}</small>
                </p>
                <span className="cn-package__gst">GST extra</span>
              </div>

              <div className="cn-package__estimate">
                <span>Estimated inquiries</span>
                <strong>
                  {pkg.inquiries}
                  <small>{pkg.inquiriesSuffix}</small>
                </strong>
              </div>

              <div className="cn-package__include">What&apos;s included</div>
              <ul className="cn-package__list">
                {pkg.deliverables.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={12} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                className={`cn-btn cn-btn--block ${pkg.recommended ? 'cn-btn--primary' : 'cn-btn--outline-light'}`}
                href={whatsappLink(buildPackageMessage(pkg))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={16} />
                Discuss This Package
              </a>
            </Reveal>
          ))}
        </div>

        <div className="cn-packages__notes">
          <Reveal className="cn-packages__note">
            <Icon name="info" size={17} />
            <p>{packageInquiryNote}</p>
          </Reveal>
          <Reveal className="cn-packages__note" delay={80}>
            <Icon name="file" size={17} />
            <p>{packageCommercialNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
