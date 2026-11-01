import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import Icon from '../components/ui/Icon'
import { ceramicSite } from '../config/ceramicSite'
import { trackLead } from '../utils/analytics'

/**
 * Form ids that are allowed to produce a ceramic `Lead`.
 * The thank-you page is shared, so anything else is ignored.
 */
const CERAMIC_FORM_SOURCES = {
  'ceramic-audit': 'audit',
  'ceramic-inquiry': 'inquiry',
}

export default function ThankYou() {
  const location = useLocation()
  const navigate = useNavigate()
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
   * successful ceramic form submission, never on a direct visit, a refresh or
   * a failed submission.
   *
   * Three guards keep the count at exactly one per submission:
   *   1. `tracked` ref   - blocks React StrictMode double effect runs.
   *   2. sessionStorage  - blocks a refresh / back-forward cache restore.
   *   3. history reset   - the `submitted` flag is removed from history after
   *                        the event, so a refresh cannot replay it even when
   *                        storage is unavailable (private mode).
   */
  useEffect(() => {
    if (tracked.current) return

    const state = location.state
    if (!state?.submitted) return

    const source = CERAMIC_FORM_SOURCES[state.form]
    if (!source) return

    tracked.current = true

    const storageKey = `ceramic-lead-${state.form}-${state.submissionId || 'form'}`
    let alreadyTracked = false
    try {
      alreadyTracked = window.sessionStorage.getItem(storageKey) === '1'
      if (!alreadyTracked) window.sessionStorage.setItem(storageKey, '1')
    } catch {
      // Storage can be unavailable in private mode; the history reset below is
      // the fallback guard against a duplicate Lead.
    }

    if (!alreadyTracked) trackLead(source)

    // Drop the submission flag so refreshing the thank-you page does not fire
    // a second Lead.
    navigate('/thank-you', { replace: true, state: null })
  }, [location.state, navigate])

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
