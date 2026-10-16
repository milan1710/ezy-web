import { Phone } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'

/**
 * MANDATORY fixed direct-call button.
 *
 * Always visible on every page and every screen size, anchored bottom-right.
 * Uses the exact business number and a `tel:` link so supported devices open
 * the phone dialer (mobile) or the default calling app (desktop).
 */
export default function FloatingCallButton() {
  return (
    <a
      href={siteConfig.contact.telHref}
      aria-label="Call Milan Soni"
      title="Call Milan Soni"
      className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 relative inline-flex items-center"
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="bg-brand-600/60 animate-pulse-ring absolute inset-0 rounded-full"
      />

      <span className="bg-brand-600 shadow-glow ring-brand-500/40 relative inline-flex h-14 w-14 items-center justify-center rounded-full text-white ring-1 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <Phone className="h-6 w-6" aria-hidden="true" />

        {/* Desktop hover label */}
        <span className="bg-ink-950 pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
          Call Milan Soni
        </span>
      </span>
    </a>
  )
}
