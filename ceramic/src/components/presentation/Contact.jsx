import { ceramicSite, whatsappLink } from '../../config/ceramicSite'
import { terms } from '../../data/presentationContent'
import Icon from '../ui/Icon'
import AuditForm from './AuditForm'
import Reveal from './Reveal'

const contactItems = [
  {
    icon: 'phone',
    label: 'Phone',
    value: '+91 95126 48085',
    href: ceramicSite.contact.telHref,
  },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: '+91 95126 48085',
    href: whatsappLink(ceramicSite.whatsappMessages.general),
    external: true,
  },
  {
    icon: 'globe',
    label: 'Main website',
    value: 'ezydigital.in',
    href: ceramicSite.domain,
    external: true,
  },
  {
    icon: 'layout',
    label: 'Ceramic website',
    value: 'ezydigital.in/ceramic',
    href: `${ceramicSite.baseUrl}/`,
    external: true,
  },
  {
    icon: 'mapPin',
    label: 'Location',
    value: 'Upleta, Gujarat, India',
    href: null,
  },
]

export default function Contact() {
  return (
    <section
      className="cn-section cn-section--black cn-contact"
      id="contact"
      aria-labelledby="cn-contact-title"
    >
      <span className="cn-contact__glow" aria-hidden="true" />
      <div className="cn-container">
        <div className="cn-section-head cn-section-head--split">
          <Reveal>
            <p className="cn-eyebrow cn-eyebrow--light">
              <span>11</span> Terms, Free Audit &amp; Contact
            </p>
            <h2 className="cn-h2" id="cn-contact-title">
              Let&apos;s Grow Your Ceramic Business Together
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="cn-lead cn-lead--light">
              Start with a free Ceramic Growth Audit and discover practical ways to improve your
              digital presence.
            </p>
          </Reveal>
        </div>

        <div className="cn-terms">
          <Reveal className="cn-terms__head">
            <span className="cn-terms__icon">
              <Icon name="shield" size={21} />
            </span>
            <div>
              <h3>Terms &amp; Important Notes</h3>
              <p>Clear commercial and delivery expectations before any engagement begins.</p>
            </div>
          </Reveal>
          <div className="cn-terms__grid">
            {terms.map((term, index) => (
              <Reveal className="cn-term" delay={index * 55} key={term.title}>
                <span className="cn-term__icon">
                  <Icon name={term.icon} size={17} />
                </span>
                <h4>{term.title}</h4>
                <p>{term.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="cn-contact__grid">
          <Reveal className="cn-contact__info">
            <p className="cn-eyebrow cn-eyebrow--light">
              <span>12</span> Book Your Free Audit
            </p>
            <h3>Tell us where your ceramic business wants to grow.</h3>
            <p className="cn-contact__intro">
              Share a few details about your business and target market. Free audit slots are
              limited this week, so the sooner you send your request, the sooner we can review it.
            </p>

            <a className="cn-btn cn-btn--primary cn-btn--lg" href="#audit-form">
              Book Your Free Ceramic Growth Audit
              <Icon name="arrowRight" size={17} />
            </a>

            <div className="cn-contact__details">
              <p className="cn-contact__brand">Ezy Digital Marketing Agency</p>
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="cn-contact__detail-icon">
                      <Icon name={item.icon} size={17} />
                    </span>
                    <span>
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </span>
                    {item.href ? <Icon name="arrowUpRight" size={14} /> : null}
                  </>
                )
                return item.href ? (
                  <a
                    className="cn-contact__detail"
                    href={item.href}
                    key={item.label}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="cn-contact__detail" key={item.label}>
                    {content}
                  </div>
                )
              })}
            </div>

            <p className="cn-contact__note">
              This presentation shares only verified contact details. No street address, email,
              business hours or social profiles are displayed unless confirmed.
            </p>
          </Reveal>

          <Reveal className="cn-contact__form-wrap" delay={120}>
            <div className="cn-contact__form-head" id="audit-form">
              <span className="cn-contact__form-icon">
                <Icon name="clipboard" size={19} />
              </span>
              <div>
                <h3>Request your free Ceramic Growth Audit</h3>
                <p>
                  Fields marked <span aria-hidden="true">*</span> are required. Your details are
                  submitted to our CRM and the team will contact you.
                </p>
              </div>
            </div>
            <AuditForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
