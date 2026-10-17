import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from './ui/Button'
import Icon from './ui/Icon'
import { additionalServices, metaAdsPackages, websitePackages } from '../data/pricing'
import { siteConfig, whatsappLink } from '../config/siteConfig'
import { buildEnquiryMessage, validateEnquiry } from '../utils/enquiry'

const BUDGETS = [
  'Not decided yet',
  'Under ₹5,000',
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  'Above ₹50,000',
]

const serviceOptions = [
  ...websitePackages.map((pkg) => ({ id: pkg.id, label: `${pkg.name} (website)` })),
  ...metaAdsPackages.map((pkg) => ({ id: pkg.id, label: `${pkg.name} (Meta Ads)` })),
  ...additionalServices.map((service) => ({ id: service.id, label: service.name })),
  { id: 'other', label: 'Something else / not sure' },
]

const initialForm = {
  name: '',
  phone: '',
  business: '',
  service: '',
  budget: 'Not decided yet',
  requirements: '',
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-xs font-semibold text-brand-700" role="alert">
      {message}
    </p>
  )
}

const inputClass =
  'mt-1.5 w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none'

export default function EnquiryForm() {
  const [searchParams] = useSearchParams()
  const requestedService = searchParams.get('service') ?? ''
  const knownService = serviceOptions.some((option) => option.id === requestedService)

  const [form, setForm] = useState({
    ...initialForm,
    service: knownService ? requestedService : '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [failedLink, setFailedLink] = useState('')

  const selectedLabel = useMemo(
    () => serviceOptions.find((option) => option.id === form.service)?.label ?? '',
    [form.service],
  )

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateEnquiry(form)
    setErrors(nextErrors)
    setFailedLink('')

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please correct the highlighted fields and try again.' })
      return
    }

    const message = buildEnquiryMessage({ form, serviceLabel: selectedLabel })
    const url = whatsappLink(message)
    setStatus({ type: 'opening', message: 'Opening WhatsApp with your enquiry…' })

    const opened = window.open(url, '_blank', 'noopener,noreferrer')
    if (opened) {
      setStatus({
        type: 'handoff',
        message:
          'WhatsApp has opened in a new tab. Your enquiry is not sent until you press Send in WhatsApp.',
      })
    } else {
      setFailedLink(url)
      setStatus({
        type: 'error',
        message:
          'Your browser blocked the new tab. Use the WhatsApp button below to send the same enquiry.',
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-8"
    >
      <h2 className="text-xl font-bold text-ink-900">Tell us about your project</h2>
      <p className="text-ink-500 mt-2 text-sm leading-relaxed">
        Fill in the details and the form will prepare a WhatsApp enquiry for you. Nothing is stored
        on this website and no account is created.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="text-ink-800 text-sm font-semibold">
            Your name <span className="text-brand-600">*</span>
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
            className={inputClass}
            placeholder="Your full name"
          />
          <FieldError id="enquiry-name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="enquiry-phone" className="text-ink-800 text-sm font-semibold">
            Phone number <span className="text-brand-600">*</span>
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
            className={inputClass}
            placeholder="10-digit mobile number"
          />
          <FieldError id="enquiry-phone-error" message={errors.phone} />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-business" className="text-ink-800 text-sm font-semibold">
            Business name <span className="text-ink-400 font-normal">(optional)</span>
          </label>
          <input
            id="enquiry-business"
            name="business"
            type="text"
            autoComplete="organization"
            value={form.business}
            onChange={update('business')}
            className={inputClass}
            placeholder="Your shop or company name"
          />
        </div>

        <div>
          <label htmlFor="enquiry-service" className="text-ink-800 text-sm font-semibold">
            Service required <span className="text-brand-600">*</span>
          </label>
          <select
            id="enquiry-service"
            name="service"
            value={form.service}
            onChange={update('service')}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'enquiry-service-error' : undefined}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <FieldError id="enquiry-service-error" message={errors.service} />
        </div>

        <div>
          <label htmlFor="enquiry-budget" className="text-ink-800 text-sm font-semibold">
            Budget range <span className="text-ink-400 font-normal">(optional)</span>
          </label>
          <select
            id="enquiry-budget"
            name="budget"
            value={form.budget}
            onChange={update('budget')}
            className={inputClass}
          >
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enquiry-requirements" className="text-ink-800 text-sm font-semibold">
            Brief requirements <span className="text-brand-600">*</span>
          </label>
          <textarea
            id="enquiry-requirements"
            name="requirements"
            rows={4}
            value={form.requirements}
            onChange={update('requirements')}
            aria-invalid={Boolean(errors.requirements)}
            aria-describedby={errors.requirements ? 'enquiry-requirements-error' : undefined}
            className={inputClass}
            placeholder="What does your business do, what pages or features do you need, and when would you like to launch?"
          />
          <FieldError id="enquiry-requirements-error" message={errors.requirements} />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          icon="Sparkles"
          iconRight="ArrowRight"
          disabled={status.type === 'opening'}
        >
          Send Enquiry on WhatsApp
        </Button>
        <a
          href={siteConfig.contact.telHref}
          className="text-ink-700 hover:text-brand-700 text-sm font-semibold"
        >
          Or call {siteConfig.contact.phoneInternational}
        </a>
      </div>

      <p className="text-ink-400 mt-4 text-xs leading-relaxed">
        This form does not send data to a server. It opens WhatsApp with your details prefilled; you
        can review and edit the message before sending.
      </p>

      {status.message ? (
        <div
          role="status"
          aria-live="polite"
          className={[
            'mt-4 rounded-xl border p-4 text-sm leading-relaxed',
            status.type === 'error'
              ? 'border-brand-200 bg-brand-50 text-brand-900'
              : status.type === 'handoff'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                : 'border-ink-200 bg-ink-50 text-ink-700',
          ].join(' ')}
        >
          <span className="flex items-start gap-2">
            <Icon
              name={
                status.type === 'handoff'
                  ? 'CheckCircle2'
                  : status.type === 'error'
                    ? 'Info'
                    : 'Loader2'
              }
              className={
                status.type === 'opening'
                  ? 'mt-0.5 h-4 w-4 shrink-0 animate-spin'
                  : 'mt-0.5 h-4 w-4 shrink-0'
              }
            />
            <span>{status.message}</span>
          </span>
          {failedLink ? (
            <a
              href={failedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex font-semibold underline"
            >
              Open WhatsApp manually
            </a>
          ) : null}
        </div>
      ) : null}
    </form>
  )
}

