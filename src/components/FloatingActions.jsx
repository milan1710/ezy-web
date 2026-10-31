import { FileText, Phone } from 'lucide-react'
import FloatingCallButton from './FloatingCallButton'
import { openLeadForm } from '../utils/leadModal'
import { siteConfig } from '../config/siteConfig'

const formButtonBase =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 text-sm font-bold text-white ring-1 ring-brand-700/40 transition-transform duration-200 hover:bg-brand-700 active:scale-[0.98]'

/**
 * Static conversion actions, visible on every page.
 *
 * - Mobile / tablet: a fixed bottom bar with "Fill Form" (opens the lead modal)
 *   and "Call Now" (tel:). This is the pattern that converts best for paid
 *   Meta traffic - the form is always one tap away.
 * - Desktop: the same two actions stacked bottom-right, form first.
 *
 * Call links are counted as a Meta `Lead` by the delegated listener in
 * `hooks/useAnalytics.js`; the form Lead fires only after the CRM confirms.
 */
export default function FloatingActions() {
  return (
    <>
      {/* Mobile + tablet action bar */}
      <div
        className="border-ink-100 fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-3 pt-2.5 shadow-[0_-10px_30px_-24px_rgba(17,17,17,0.5)] backdrop-blur-md lg:hidden"
        style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openLeadForm({ source: 'mobile_bar' })}
            className={`${formButtonBase} h-11 flex-1`}
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Fill Form
          </button>
          <a
            href={siteConfig.contact.telHref}
            className="bg-ink-950 hover:bg-ink-800 inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-white ring-1 ring-white/10 transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>

      {/* Desktop floating stack */}
      <div
        className="fixed right-6 z-40 hidden flex-col items-end gap-3 lg:flex"
        style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
      >
        <button
          type="button"
          onClick={() => openLeadForm({ source: 'floating' })}
          aria-label="Open the free quotation form"
          className="group relative inline-flex items-center"
        >
          <span
            aria-hidden="true"
            className="bg-brand-600/30 animate-pulse-ring absolute inset-0 rounded-full"
          />
          <span className="bg-brand-600 shadow-glow ring-brand-500/40 relative inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-white ring-1 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Fill Form
          </span>
        </button>

        <FloatingCallButton />
      </div>
    </>
  )
}
