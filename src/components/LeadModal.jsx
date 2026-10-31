import { useEffect, useRef, useState } from 'react'
import Icon from './ui/Icon'
import LeadForm from './LeadForm'
import { LEAD_FORM_EVENT, isLeadFormRequested } from '../utils/leadModal'
import { resolveLeadService } from '../data/leadFormServices'
import { siteConfig } from '../config/siteConfig'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Lead form modal.
 *
 * Why a modal: Meta Ads traffic lands on many different pages, so the form has to
 * be reachable in one tap from anywhere. The modal renders the same `LeadForm`
 * component used on `/contact` - same validation, same CRM proxy, same Lead
 * event - so there is only ever one submission path.
 *
 * Opens from:
 *   - any `LeadFormTrigger` / `openLeadForm()` call (sticky bar, header, hero)
 *   - `?form=1` in the URL, which is convenient as a Meta ad final URL
 */
export default function LeadModal() {
  const [open, setOpen] = useState(false)
  const [presetService, setPresetService] = useState('')
  const [source, setSource] = useState('modal')
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const handleOpen = (event) => {
      const detail = event.detail || {}
      setPresetService(resolveLeadService(detail.service))
      setSource(typeof detail.source === 'string' ? detail.source : 'modal')
      setOpen(true)
    }

    window.addEventListener(LEAD_FORM_EVENT, handleOpen)
    return () => window.removeEventListener(LEAD_FORM_EVENT, handleOpen)
  }, [])

  // Ad-ready deep link: /?form=1 (or any route with ?form=1)
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (isLeadFormRequested(window.location.search)) {
      setSource('url')
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }

      // Simple focus trap so keyboard users stay inside the dialog.
      if (event.key === 'Tab' && panelRef.current) {
        const nodes = Array.from(panelRef.current.querySelectorAll(FOCUSABLE))
        if (nodes.length === 0) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)

    const focusTimer = window.setTimeout(() => {
      const input = panelRef.current?.querySelector('input')
      input?.focus({ preventScroll: true })
    }, 120)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close the lead form"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className="bg-ink-950/70 absolute inset-0 cursor-default backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className="animate-rise relative max-h-[92dvh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-[0_50px_120px_-40px_rgba(0,0,0,0.7)] sm:max-w-[34rem] sm:rounded-3xl"
      >
        <div className="from-ink-950 to-ink-900 relative overflow-hidden rounded-t-3xl bg-gradient-to-br px-5 pt-5 pb-5 sm:px-6">
          <div
            className="surface-grid pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div
            className="bg-brand-600/30 pointer-events-none absolute -top-16 -right-10 h-36 w-36 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-brand-400 inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.2em] uppercase">
                <span className="bg-brand-500 h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                Free consultation
              </p>
              <h2
                id="lead-modal-title"
                className="font-display mt-2 text-[1.35rem] leading-tight font-extrabold text-white sm:text-[1.5rem]"
              >
                Get a free quotation
              </h2>
              <p className="text-ink-300 mt-1 text-[0.8rem] leading-relaxed">
                4 details · our team calls you back
              </p>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-ink-300 hover:bg-white/10 hover:text-white inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors"
            >
              <Icon name="X" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="px-5 pt-5 pb-6 sm:px-6">
          <LeadForm compact idPrefix="lead-modal" presetService={presetService} source={source} />

          <div className="border-ink-100 mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-4">
            <a
              href={siteConfig.contact.telHref}
              className="text-ink-600 hover:text-brand-700 inline-flex items-center gap-1.5 text-[0.75rem] font-semibold"
            >
              <Icon name="Phone" className="h-3.5 w-3.5" />
              Prefer to call? {siteConfig.contact.phoneInternational}
            </a>
            <a
              href="/contact"
              className="text-ink-500 hover:text-brand-700 text-[0.75rem] font-semibold underline underline-offset-4"
            >
              Open the full page
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

