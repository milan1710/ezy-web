import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Icon from './ui/Icon'
import { siteConfig, whatsappLink } from '../config/siteConfig'
import {
  LEAD_SERVICE_GROUPS,
  LEAD_SERVICE_PLACEHOLDER,
  leadServiceLabel,
  resolveLeadService,
} from '../data/leadFormServices'
import { buildLeadPayload, readAttribution, validateLeadForm } from '../utils/leadForm'
import { trackFormLead } from '../utils/analytics'

const emptyForm = {
  name: '',
  phone: '',
  city: '',
  service: '',
  website: '', // honeypot - never shown to a real visitor
}

const inputClass =
  'mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-950 placeholder:text-ink-400 transition-shadow focus:border-brand-500 focus:ring-4 focus:ring-brand-500/12 focus:outline-none disabled:bg-ink-50'

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="text-brand-700 mt-1.5 text-xs font-semibold" role="alert">
      {message}
    </p>
  )
}

/**
 * Lead generation form.
 *
 * The visitor's details are posted to the same-origin proxy (`/api/lead.php`),
 * which forwards them to the Perfex web-to-lead form server-side and returns the
 * CRM result. Success is only shown - and the Meta `Lead` event is only fired -
 * when that proxy confirms the CRM accepted the lead. Validation errors, network
 * errors and CRM errors never produce a success state.
 *
 * Props:
 *   compact       - removes the card shell/heading (used inside `LeadModal`)
 *   idPrefix      - keeps DOM ids unique when a page form and the modal coexist
 *   presetService - catalogue id to preselect (from a CTA or `?service=`)
 *   source        - where the form was opened from (stored with the lead)
 */
export default function LeadForm({
  compact = false,
  idPrefix = 'lead',
  presetService = '',
  source = 'page',
}) {
  const [searchParams] = useSearchParams()
  const requestedService =
    resolveLeadService(searchParams.get('service')) || resolveLeadService(presetService)

  const [form, setForm] = useState({ ...emptyForm, service: requestedService })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  // Guards against double submits (double click, Enter twice, slow network).
  const submittingRef = useRef(false)
  const leadSentRef = useRef(false)
  const [submitting, setSubmitting] = useState(false)

  const selectedLabel = useMemo(
    () => leadServiceLabel(form.service),
    [form.service],
  )

  const update = (field) => (event) => {
    const value = event.target.value
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status.type === 'error') setStatus({ type: 'idle', message: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (submittingRef.current || leadSentRef.current) return

    const nextErrors = validateLeadForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: 'error',
        message: 'Please correct the highlighted fields and try again.',
      })
      return
    }

    submittingRef.current = true
    setSubmitting(true)
    setStatus({ type: 'submitting', message: 'Sending your enquiry...' })

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 20000)

    try {
      const response = await fetch(siteConfig.crm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        credentials: 'same-origin',
        signal: controller.signal,
        body: JSON.stringify(
          buildLeadPayload({
            form,
            serviceLabel: selectedLabel,
            pageUrl: typeof window === 'undefined' ? '' : window.location.href,
            source,
            attribution: readAttribution(),
          }),
        ),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok || !result || result.success !== true) {
        // The CRM did not confirm the lead: no success state, no Lead event.
        const message =
          result && typeof result.message === 'string' && result.message
            ? result.message
            : 'We could not submit your enquiry right now. Please try again or call us directly.'

        setStatus({ type: 'error', message })
        submittingRef.current = false
        setSubmitting(false)
        return
      }

      // Confirmed by the CRM. Count the lead exactly once, then hand over to the
      // Thank You page. The flag stays set so a re-render cannot send it twice.
      leadSentRef.current = true
      trackFormLead(selectedLabel)
      setStatus({
        type: 'success',
        message: 'Your enquiry has been submitted. Taking you to the confirmation page...',
      })

      window.setTimeout(() => {
        window.location.assign(siteConfig.thankYouPath)
      }, 400)
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error && error.name === 'AbortError'
            ? 'The enquiry service took too long to respond. Please try again or call us directly.'
            : 'We could not reach our enquiry service. Please check your connection, try again, or call us directly.',
      })
      submittingRef.current = false
      setSubmitting(false)
    } finally {
      window.clearTimeout(timeout)
    }
  }

  return (
    <div
      id={compact ? 'lead-form-modal' : 'lead-form'}
      className={
        compact
          ? 'relative bg-white'
          : 'border-ink-100 relative overflow-hidden rounded-3xl border bg-white p-6 shadow-[0_40px_90px_-52px_rgba(0,0,0,0.85)] sm:p-8'
      }
    >
      {!compact ? (
        <>
          <span className="bg-brand-600 absolute inset-x-0 top-0 h-1" aria-hidden="true" />
          <div className="flex items-start gap-3.5">
            <span className="from-brand-600 to-brand-500 shadow-glow inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white">
              <Icon name="Sparkles" className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-ink-950 text-xl font-bold sm:text-2xl">
                Get a free quotation
              </h2>
              <p className="text-ink-500 mt-1 text-sm leading-relaxed">
                Share four quick details and our team will call you back to discuss your requirement.
              </p>
            </div>
          </div>
        </>
      ) : null}

      <form className={compact ? '' : 'mt-6'} noValidate onSubmit={handleSubmit} aria-busy={submitting}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}-name`} className="text-ink-800 text-sm font-semibold">
              Full Name <span className="text-brand-600">*</span>
            </label>
            <input
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={form.name}
              onChange={update('name')}
              maxLength={80}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
              disabled={submitting}
              className={inputClass}
            />
            <FieldError id={`${idPrefix}-name-error`} message={errors.name} />
          </div>

          <div>
            <label htmlFor={`${idPrefix}-phone`} className="text-ink-800 text-sm font-semibold">
              Mobile Number <span className="text-brand-600">*</span>
            </label>
            <div className="relative">
              <span className="text-ink-500 pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-sm font-semibold">
                +91
              </span>
              <input
                id={`${idPrefix}-phone`}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                placeholder="98765 43210"
                value={form.phone}
                onChange={update('phone')}
                maxLength={20}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
                disabled={submitting}
                className={`${inputClass} pl-12`}
              />
            </div>
            <FieldError id={`${idPrefix}-phone-error`} message={errors.phone} />
          </div>

          <div>
            <label htmlFor={`${idPrefix}-city`} className="text-ink-800 text-sm font-semibold">
              City <span className="text-brand-600">*</span>
            </label>
            <input
              id={`${idPrefix}-city`}
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Your city"
              value={form.city}
              onChange={update('city')}
              maxLength={60}
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? `${idPrefix}-city-error` : undefined}
              disabled={submitting}
              className={inputClass}
            />
            <FieldError id={`${idPrefix}-city-error`} message={errors.city} />
          </div>

          <div>
            <label htmlFor={`${idPrefix}-service`} className="text-ink-800 text-sm font-semibold">
              Service Required <span className="text-brand-600">*</span>
            </label>
            <select
              id={`${idPrefix}-service`}
              name="service"
              value={form.service}
              onChange={update('service')}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? `${idPrefix}-service-error` : undefined}
              disabled={submitting}
              className={inputClass}
            >
              <option value="">{LEAD_SERVICE_PLACEHOLDER}</option>
              {LEAD_SERVICE_GROUPS.map((group) => (
                <optgroup key={group.tier} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <FieldError id={`${idPrefix}-service-error`} message={errors.service} />
          </div>
        </div>

        {/* Honeypot: off-screen, ignored by real visitors, rejected by the proxy. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${idPrefix}-website`}>Website</label>
          <input
            id={`${idPrefix}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={update('website')}
          />
        </div>


        <button
          type="submit"
          disabled={submitting}
          className="bg-brand-600 hover:bg-brand-700 shadow-[0_16px_36px_-18px_rgba(229,57,53,0.8)] mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {submitting ? (
            <>
              <Icon name="Loader2" className="h-4 w-4 animate-spin" />
              <span>Sending your enquiry...</span>
            </>
          ) : (
            <>
              <span>Request a Callback</span>
              <Icon name="ArrowRight" className="h-4 w-4" />
            </>
          )}
        </button>

        <div className="text-ink-500 mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.68rem] font-semibold">
          <span className="inline-flex items-center gap-1">
            <Icon name="Check" className="text-brand-600 h-3.5 w-3.5" />
            No obligation
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="FileText" className="text-brand-600 h-3.5 w-3.5" />
            Written scope first
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon name="Phone" className="text-brand-600 h-3.5 w-3.5" />
            Direct reply from Milan
          </span>
        </div>

        <p className="text-ink-400 mt-2 text-center text-[0.68rem] leading-relaxed">
          <Icon name="Lock" className="mr-1 inline h-3 w-3 align-[-2px]" />
          Your details are sent to our CRM and used only to contact you about this enquiry.
        </p>

        {status.message ? (
          <div
            role="status"
            aria-live="polite"
            className={[
              'mt-4 rounded-xl border p-4 text-sm leading-relaxed',
              status.type === 'error'
                ? 'border-brand-200 bg-brand-50 text-brand-900'
                : status.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                  : 'border-ink-200 bg-ink-50 text-ink-700',
            ].join(' ')}
          >
            <div className="flex items-start gap-2">
              <Icon
                name={
                  status.type === 'success'
                    ? 'CheckCircle2'
                    : status.type === 'error'
                      ? 'Info'
                      : 'Loader2'
                }
                className={
                  status.type === 'submitting'
                    ? 'mt-0.5 h-4 w-4 shrink-0 animate-spin'
                    : 'mt-0.5 h-4 w-4 shrink-0'
                }
              />
              <span>{status.message}</span>
            </div>

            {status.type === 'error' ? (
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-semibold">
                <a
                  href={siteConfig.contact.telHref}
                  className="inline-flex items-center gap-1.5 underline"
                >
                  <Icon name="Phone" className="h-3.5 w-3.5" />
                  Call {siteConfig.contact.phoneInternational}
                </a>
                <a
                  href={whatsappLink(siteConfig.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 underline"
                >
                  Message on WhatsApp
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </form>
    </div>
  )
}

