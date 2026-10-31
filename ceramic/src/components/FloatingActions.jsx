import { Link } from 'react-router-dom'
import ceramicSite from '../config/ceramicSite'
import Icon from './ui/Icon'

export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick actions">
      <Link
        className="is-form"
        to="/contact"
        aria-label="Fill the ceramic growth inquiry form"
        title="Fill the inquiry form"
      >
        <Icon name="clipboard" size={20} />
        <span className="floating-actions__label">Fill Form</span>
      </Link>
      <a
        className="is-call"
        href={ceramicSite.contact.telHref}
        aria-label={`Call Ezy Digital on ${ceramicSite.contact.phoneInternational}`}
        title={`Call ${ceramicSite.contact.phoneInternational}`}
      >
        <Icon name="phone" size={20} />
        <span className="floating-actions__label">Call Now</span>
      </a>
    </div>
  )
}

export function InquiryShortcut() {
  return (
    <Link className="btn btn--outline btn--sm" to="/contact">
      Request a Growth Audit <Icon name="arrowRight" size={14} />
    </Link>
  )
}
