import { Phone } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

/**
 * Fixed "Call Now" button (secondary action under the Fill Form button).
 *
 * Always visible on desktop; on mobile the same action lives in the fixed bottom
 * bar rendered by `FloatingActions`. Uses the exact business number and a `tel:`
 * link so supported devices open the dialer. Clicks are counted as a Meta `Lead`
 * with `lead_source: call_click` by `hooks/useAnalytics.js`.
 */
export default function FloatingCallButton() {
  return (
    <a
      href={siteConfig.contact.telHref}
      aria-label={`Call Now ${siteConfig.contact.phoneInternational}`}
      title={`Call Now ${siteConfig.contact.phoneInternational}`}
      className="group focus-visible:outline-brand-400 relative inline-flex items-center"
    >
      <span className="bg-ink-950 ring-white/10 hover:bg-ink-800 relative inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-white ring-1 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <Phone className="h-4 w-4" aria-hidden="true" />
        <span className="text-sm font-bold tracking-wide">Call Now</span>
      </span>
    </a>
  )
}
