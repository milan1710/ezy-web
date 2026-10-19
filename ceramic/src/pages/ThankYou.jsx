import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import Icon from '../components/ui/Icon'
import { ceramicSite } from '../config/ceramicSite'
import { trackLead } from '../utils/analytics'

export default function ThankYou() {
  const location = useLocation()
  const tracked = useRef(false)

  useSeo({
    title: 'Thank You | Ezy Digital Ceramic Growth',
    description:
      'Your ceramic growth request has been received. The Ezy Digital team will review your details and contact you.',
    path: '/thank-you',
    noindex: true,
  })

  /**
   * The Lead event is fired only when the visitor arrives here after a
   * successful form submission, never on a direct visit or a page refresh.
   * The submission id keeps React StrictMode and refreshes from double-counting.
   */
  useEffect(() => {
    if (tracked.current) return

    const state = location.state
    if (!state?.submitted) return

    tracked.current = true

    const storageKey = `ceramic-lead-${state.submissionId || 'form'}`
    try {
      if (window.sessionStorage.getItem(storageKey)) return
      window.sessionStorage.setItem(storageKey, '1')
    } catch {
      // Storage can be unavailable in private mode; still count the lead.
    }

    trackLead('form')
  }, [location.state])

  return (
    <section className="section thankyou">
      <div className="container">
        <div className="thankyou__card">
          <span className="thankyou__icon" aria-hidden="true">
            <Icon name="checkCircle" size={34} />
          </span>
          <p className="eyebrow">Request received</p>
          <h1>Thank you. Your details are with us.</h1>
          <p className="thankyou__lead">
            Our team will review your ceramic business requirement and contact you on the phone
            number or email address you shared.
          </p>
          <div className="thankyou__actions">
            <a className="btn" href={ceramicSite.contact.telHref}>
              <Icon name="phone" size={16} /> Call {ceramicSite.contact.phoneDisplay}
            </a>
            <Link className="btn btn--outline" to="/">
              Back to Home <Icon name="arrowRight" size={15} />
            </Link>
          </div>
          <p className="thankyou__note">
            Need to add something? Call us on {ceramicSite.contact.phoneDisplay} and mention that
            you just submitted the ceramic growth form.
          </p>
        </div>
      </div>
    </section>
  )
}
