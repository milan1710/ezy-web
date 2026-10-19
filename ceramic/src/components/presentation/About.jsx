import { ceramicImages } from '../../data/ceramicImages'
import {
  approachSteps,
  brandValues,
  industries,
} from '../../data/presentationContent'
import Icon from '../ui/Icon'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="cn-section cn-section--light" id="about" aria-labelledby="cn-about-title">
      <div className="cn-container">
        <div className="cn-about__top">
          <Reveal className="cn-about__copy">
            <p className="cn-eyebrow">
              <span>02</span> About Ezy Digital
            </p>
            <h2 className="cn-h2" id="cn-about-title">
              A digital growth partner for ambitious ceramic businesses.
            </h2>
            <p className="cn-lead">
              Ezy Digital is a digital marketing agency focused on helping businesses grow online.
              We combine creative design, modern technology and data-driven marketing to strengthen
              brand presence, generate business inquiries and create new business opportunities.
            </p>
            <div className="cn-about__fact-row">
              <div>
                <span className="cn-about__fact-icon">
                  <Icon name="target" size={18} />
                </span>
                <div>
                  <strong>Industry focus</strong>
                  <p>Ceramic manufacturers, exporters, dealers and showrooms.</p>
                </div>
              </div>
              <div>
                <span className="cn-about__fact-icon">
                  <Icon name="globe" size={18} />
                </span>
                <div>
                  <strong>Domestic + export</strong>
                  <p>Digital structures that can support both market directions.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="cn-about__media" delay={120}>
            <div className="cn-about__image">
              <img
                src={ceramicImages.slabFactory.src}
                alt={ceramicImages.slabFactory.alt}
                width={ceramicImages.slabFactory.width}
                height={ceramicImages.slabFactory.height}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="cn-about__caption">
              <span className="cn-about__caption-icon">
                <Icon name="layers" size={19} />
              </span>
              <div>
                <strong>Built around your product range</strong>
                <p>Presentation, campaigns and inquiry paths in one direction.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="cn-mvv">
          <Reveal className="cn-mvv__card" delay={0}>
            <span className="cn-mvv__icon">
              <Icon name="route" size={21} />
            </span>
            <h3>Our Mission</h3>
            <p>
              To help businesses grow with smart digital solutions and create long-term value
              through measurable marketing and continuous improvement.
            </p>
          </Reveal>
          <Reveal className="cn-mvv__card" delay={80}>
            <span className="cn-mvv__icon">
              <Icon name="globe" size={21} />
            </span>
            <h3>Our Vision</h3>
            <p>
              To become a trusted digital growth partner for ceramic businesses and other
              industries in India and global markets.
            </p>
          </Reveal>
          <Reveal className="cn-mvv__card" delay={160}>
            <span className="cn-mvv__icon">
              <Icon name="sparkles" size={21} />
            </span>
            <h3>Our Values</h3>
            <ul className="cn-mvv__values">
              {brandValues.map((value) => (
                <li key={value}>
                  <Icon name="check" size={13} />
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="cn-industries">
          <Reveal className="cn-industries__head">
            <p className="cn-eyebrow cn-eyebrow--light">
              <span>03</span> Industries We Serve
            </p>
            <h3 className="cn-h3">Focused on the ceramic ecosystem.</h3>
            <p>
              We work with ceramic manufacturers, sanitaryware brands, exporters, dealers,
              distributors, wholesalers and showrooms — along with other related businesses.
            </p>
          </Reveal>
          <div className="cn-industries__grid">
            {industries.map((industry, index) => (
              <Reveal
                as="article"
                className="cn-industry-card"
                delay={index * 60}
                key={industry.title}
              >
                <div className="cn-industry-card__media">
                  <img
                    src={industry.image.src}
                    alt={industry.image.alt}
                    width={industry.image.width}
                    height={industry.image.height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="cn-industry-card__body">
                  <h4>{industry.title}</h4>
                  <p>{industry.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="cn-approach">
          <Reveal className="cn-approach__head">
            <p className="cn-eyebrow">
              <span>04</span> Our Approach
            </p>
            <h3 className="cn-h3">Our approach to digital growth</h3>
            <p>
              A strategic, data-informed process that connects your business goals with the right
              website, content, campaigns and follow-up systems.
            </p>
          </Reveal>
          <div className="cn-approach__list">
            {approachSteps.map((step, index) => (
              <Reveal className="cn-approach__step" delay={index * 70} key={step.title}>
                <span className="cn-approach__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="cn-approach__icon">
                  <Icon name={step.icon} size={20} />
                </span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

