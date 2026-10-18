import { Link } from 'react-router-dom'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'
import Icon from './ui/Icon'

export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact">
      <a
        className="is-whatsapp"
        href={whatsappLink(ceramicSite.whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ezy Digital on WhatsApp"
      >
        <Icon name="whatsapp" size={23} />
      </a>
      <a
        className="is-call"
        href={ceramicSite.contact.telHref}
        aria-label={`Call Ezy Digital on ${ceramicSite.contact.phoneInternational}`}
      >
        <Icon name="phone" size={20} />
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
