import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  budgetOptions,
  buildInquiryMessage,
  emptyInquiry,
  geographyOptions,
  goalOptions,
  productOptions,
  validateInquiry,
} from '../utils/inquiry'
import { whatsappLink } from '../config/ceramicSite'
import Icon from './ui/Icon'

export default function InquiryForm({ defaults = {} }) {
  const [form, setForm] = useState({ ...emptyInquiry, ...defaults })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [waHref, setWaHref] = useState('')
  const [copied, setCopied] = useState(false)
  const summaryRef = useRef(null)
  const messageRef = useRef('')

  const update = (field) => (event) => {
    const value = field === 'consent' ? event.target.checked : event.target.value
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
    if (status === 'ready') setStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateInquiry(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      window.requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    const message = buildInquiryMessage(form)
    messageRef.current = message
    setStatus('preparing')

    // No backend is connected. We prepare a WhatsApp message locally; the
    // visitor explicitly sends it from their own WhatsApp application.
    window.setTimeout(() => {
      setWaHref(whatsappLink(message))
      setStatus('ready')
    }, 450)
  }

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(messageRef.current)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  const errorCount = Object.keys(errors).length
  const isPreparing = status === 'preparing'
  const fieldError = (field) => (errors[field] ? `${field}-error` : undefined)

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate aria-busy={isPreparing}>
      {errorCount > 0 ? (
        <div className="form-error-summary" ref={summaryRef} tabIndex={-1} role="alert">
          Please review {errorCount === 1 ? 'the highlighted field' : `the ${errorCount} highlighted fields`} below
          and try again. Nothing has been sent yet.
        </div>
      ) : null}

      <div className="form-grid">
        <div className={`field${errors.name ? ' has-error' : ''}`}>
          <label htmlFor="name">
            Your name <span className="field__req">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={fieldError('name')}
            required
          />
          {errors.name ? <p className="field__error" id="name-error">{errors.name}</p> : null}
        </div>

        <div className={`field${errors.company ? ' has-error' : ''}`}>
          <label htmlFor="company">
            Company name <span className="field__req">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={update('company')}
            placeholder="Manufacturer / brand name"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={fieldError('company')}
            required
          />
          {errors.company ? <p className="field__error" id="company-error">{errors.company}</p> : null}
        </div>

        <div className={`field${errors.phone ? ' has-error' : ''}`}>
          <label htmlFor="phone">
            Phone / WhatsApp <span className="field__req">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="10-digit mobile number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={fieldError('phone')}
            required
          />
          {errors.phone ? (
            <p className="field__error" id="phone-error">{errors.phone}</p>
          ) : (
            <p className="field__hint">Indian mobile number, with or without +91.</p>
          )}
        </div>

        <div className={`field${errors.email ? ' has-error' : ''}`}>
          <label htmlFor="email">Email (optional)</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={fieldError('email')}
          />
          {errors.email ? <p className="field__error" id="email-error">{errors.email}</p> : null}
        </div>

        <div className="field">
          <label htmlFor="website">Website URL (optional)</label>
          <input
            id="website"
            name="website"
            type="url"
            value={form.website}
            onChange={update('website')}
            placeholder="https://"
          />
        </div>

        <div className={`field${errors.product ? ' has-error' : ''}`}>
          <label htmlFor="product">
            Product category <span className="field__req">*</span>
          </label>
          <select
            id="product"
            name="product"
            value={form.product}
            onChange={update('product')}
            aria-invalid={Boolean(errors.product)}
            aria-describedby={fieldError('product')}
            required
          >
            <option value="">Select a category</option>
            {productOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.product ? <p className="field__error" id="product-error">{errors.product}</p> : null}
        </div>

        <div className={`field${errors.goal ? ' has-error' : ''}`}>
          <label htmlFor="goal">
            Primary business goal <span className="field__req">*</span>
          </label>
          <select
            id="goal"
            name="goal"
            value={form.goal}
            onChange={update('goal')}
            aria-invalid={Boolean(errors.goal)}
            aria-describedby={fieldError('goal')}
            required
          >
            <option value="">Select your goal</option>
            {goalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.goal ? <p className="field__error" id="goal-error">{errors.goal}</p> : null}
        </div>

        <div className={`field${errors.geography ? ' has-error' : ''}`}>
          <label htmlFor="geography">
            Target geography <span className="field__req">*</span>
          </label>
          <select
            id="geography"
            name="geography"
            value={form.geography}
            onChange={update('geography')}
            aria-invalid={Boolean(errors.geography)}
            aria-describedby={fieldError('geography')}
            required
          >
            <option value="">Select target market</option>
            {geographyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.geography ? <p className="field__error" id="geography-error">{errors.geography}</p> : null}
        </div>

        <div className="field">
          <label htmlFor="budget">Monthly advertising budget (optional)</label>
          <select id="budget" name="budget" value={form.budget} onChange={update('budget')}>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="field__hint">Media spend is separate from management fees.</p>
        </div>

        <div className={`field field--full${errors.description ? ' has-error' : ''}`}>
          <label htmlFor="description">
            Brief description <span className="field__req">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={update('description')}
            placeholder="What do you manufacture, which markets are you targeting and what would you like to improve?"
            aria-invalid={Boolean(errors.description)}
            aria-describedby={fieldError('description')}
            required
          />
          {errors.description ? (
            <p className="field__error" id="description-error">{errors.description}</p>
          ) : null}
        </div>
      </div>

      <label className={`checkbox${errors.consent ? ' has-error' : ''}`} htmlFor="consent">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={update('consent')}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={fieldError('consent')}
        />
        <span>
          I agree to be contacted about this inquiry and have read the{' '}
          <Link to="/privacy-policy" style={{ textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
          . <span className="field__req">*</span>
        </span>
      </label>
      {errors.consent ? <p className="field__error" id="consent-error">{errors.consent}</p> : null}

      <div className="form-actions">
        <button className="btn btn--block" type="submit" disabled={isPreparing}>
          {isPreparing ? 'Preparing your message…' : 'Prepare My WhatsApp Inquiry'}
          {!isPreparing ? <Icon name="arrowRight" size={16} /> : null}
        </button>
        <p className="form-privacy">
          This website does not store form submissions. Your details are used only to prepare a
          WhatsApp message that you choose to send.
        </p>
      </div>

      {status === 'ready' ? (
        <div className="form-status" role="status">
          <strong>Your inquiry is ready in WhatsApp.</strong>
          <p>
            This website has not saved your details. Open WhatsApp and press <strong>Send</strong> to
            deliver the inquiry to Ezy Digital. If WhatsApp does not open, use the call option below.
          </p>
          <div className="row" style={{ marginTop: 12 }}>
            <a className="btn btn--sm" href={waHref} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={15} /> Open WhatsApp
            </a>
            <button className="btn btn--outline btn--sm" type="button" onClick={copyMessage}>
              {copied ? 'Message copied' : 'Copy message'}
            </button>
            <a className="btn btn--outline btn--sm" href="tel:+919512648085">
              <Icon name="phone" size={14} /> Call instead
            </a>
          </div>
        </div>
      ) : null}
    </form>
  )
}
