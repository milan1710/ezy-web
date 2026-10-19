import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  businessTypeOptions,
  growthGoalOptions,
  targetMarketOptions,
} from '../../data/presentationContent'
import { ceramicSite } from '../../config/ceramicSite'
import { buildAuditDescription, buildLeadPayload, submitLeadToCrm } from '../../utils/crm'
import Icon from '../ui/Icon'

const EMPTY_FORM = {
  name: '',
  company: '',
  phone: '',
  email: '',
  website: '',
  businessType: '',
  targetMarket: '',
  growthGoal: '',
  consent: false,
}

function validate(form) {
  const errors = {}
  const digits = form.phone.replace(/\D/g, '')

  if (form.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (form.company.trim().length < 2) errors.company = 'Please enter your company name.'
  if (digits.length < 10 || digits.length > 15) {
    errors.phone = 'Enter a valid phone number with 10–15 digits.'
  }
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address or leave this field blank.'
  }
  if (form.website.trim() && !/^[^\s.]+\.[^\s]{2,}/.test(form.website.trim())) {
    errors.website = 'Enter a valid website address or leave this field blank.'
  }
  if (!form.businessType) errors.businessType = 'Please select your business type.'
  if (!form.targetMarket) errors.targetMarket = 'Please select your target market.'
  if (!form.growthGoal) errors.growthGoal = 'Please select your main growth goal.'
  if (!form.consent) errors.consent = 'Please confirm that we may contact you about this request.'

  return errors
}

export default function AuditForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const summaryRef = useRef(null)
  const statusRef = useRef(null)

  const update = (field) => (event) => {
    const value = field === 'consent' ? event.target.checked : event.target.value
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      window.requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    setStatus('submitting')

    try {
      await submitLeadToCrm(buildLeadPayload(form, buildAuditDescription(form)))
      const submissionId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      navigate('/thank-you', { replace: true, state: { submitted: true, submissionId } })
    } catch {
      setStatus('error')
      window.requestAnimationFrame(() => statusRef.current?.focus())
    }
  }

  const errorCount = Object.keys(errors).length
  const isSubmitting = status === 'submitting'
  const fieldError = (field) => (errors[field] ? `audit-${field}-error` : undefined)
  const fieldClass = (field) => `cn-field${errors[field] ? ' has-error' : ''}`

  return (
    <form className="cn-audit-form" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
      {errorCount > 0 ? (
        <div className="cn-form-summary" ref={summaryRef} tabIndex={-1} role="alert">
          Please review the highlighted field{errorCount === 1 ? '' : 's'} below. Nothing has been
          sent yet.
        </div>
      ) : null}

      <div className="cn-form-grid">
        <div className={fieldClass('name')}>
          <label htmlFor="audit-name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="audit-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            placeholder="Your full name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={fieldError('name')}
          />
          {errors.name ? (
            <p className="cn-field__error" id="audit-name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className={fieldClass('company')}>
          <label htmlFor="audit-company">
            Company name <span aria-hidden="true">*</span>
          </label>
          <input
            id="audit-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={update('company')}
            placeholder="Manufacturer / brand name"
            required
            aria-invalid={Boolean(errors.company)}
            aria-describedby={fieldError('company')}
          />
          {errors.company ? (
            <p className="cn-field__error" id="audit-company-error">
              {errors.company}
            </p>
          ) : null}
        </div>

        <div className={fieldClass('phone')}>
          <label htmlFor="audit-phone">
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input
            id="audit-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="+91 00000 00000"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={fieldError('phone')}
          />
          {errors.phone ? (
            <p className="cn-field__error" id="audit-phone-error">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className={fieldClass('email')}>
          <label htmlFor="audit-email">Email (optional)</label>
          <input
            id="audit-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={fieldError('email')}
          />
          {errors.email ? (
            <p className="cn-field__error" id="audit-email-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className={fieldClass('website')}>
          <label htmlFor="audit-website">Website (optional)</label>
          <input
            id="audit-website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            value={form.website}
            onChange={update('website')}
            placeholder="www.yourcompany.com"
            aria-invalid={Boolean(errors.website)}
            aria-describedby={fieldError('website')}
          />
          {errors.website ? (
            <p className="cn-field__error" id="audit-website-error">
              {errors.website}
            </p>
          ) : null}
        </div>


        <div className={fieldClass('businessType')}>
          <label htmlFor="audit-business-type">
            Business type <span aria-hidden="true">*</span>
          </label>
          <select
            id="audit-business-type"
            name="businessType"
            value={form.businessType}
            onChange={update('businessType')}
            required
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby={fieldError('businessType')}
          >
            <option value="">Select business type</option>
            {businessTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.businessType ? (
            <p className="cn-field__error" id="audit-businessType-error">
              {errors.businessType}
            </p>
          ) : null}
        </div>

        <div className={fieldClass('targetMarket')}>
          <label htmlFor="audit-target-market">
            Target market <span aria-hidden="true">*</span>
          </label>
          <select
            id="audit-target-market"
            name="targetMarket"
            value={form.targetMarket}
            onChange={update('targetMarket')}
            required
            aria-invalid={Boolean(errors.targetMarket)}
            aria-describedby={fieldError('targetMarket')}
          >
            <option value="">Select target market</option>
            {targetMarketOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.targetMarket ? (
            <p className="cn-field__error" id="audit-targetMarket-error">
              {errors.targetMarket}
            </p>
          ) : null}
        </div>

        <div className={`${fieldClass('growthGoal')} cn-field--full`}>
          <label htmlFor="audit-growth-goal">
            Main growth goal <span aria-hidden="true">*</span>
          </label>
          <select
            id="audit-growth-goal"
            name="growthGoal"
            value={form.growthGoal}
            onChange={update('growthGoal')}
            required
            aria-invalid={Boolean(errors.growthGoal)}
            aria-describedby={fieldError('growthGoal')}
          >
            <option value="">Select your main growth goal</option>
            {growthGoalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.growthGoal ? (
            <p className="cn-field__error" id="audit-growthGoal-error">
              {errors.growthGoal}
            </p>
          ) : null}
        </div>
      </div>

      <label className={`cn-checkbox${errors.consent ? ' has-error' : ''}`} htmlFor="audit-consent">
        <input
          id="audit-consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={update('consent')}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={fieldError('consent')}
        />
        <span>
          I agree to be contacted about this request and have read the{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>. <span aria-hidden="true">*</span>
        </span>
      </label>
      {errors.consent ? (
        <p className="cn-field__error" id="audit-consent-error">
          {errors.consent}
        </p>
      ) : null}

      <button
        className="cn-btn cn-btn--primary cn-btn--block cn-btn--lg"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting your request…' : 'Submit My Audit Request'}
        {!isSubmitting ? <Icon name="arrowRight" size={17} /> : null}
      </button>

      <p className="cn-audit-form__privacy">
        Your details are submitted to our CRM so the team can respond to your request. We do not
        sell your information.
      </p>

      {status === 'error' ? (
        <div
          className="cn-form-status cn-form-status--error"
          role="alert"
          tabIndex={-1}
          ref={statusRef}
          aria-live="assertive"
        >
          <span className="cn-form-status__icon">
            <Icon name="alert" size={22} />
          </span>
          <div>
            <strong>We could not submit your request.</strong>
            <p>
              Please check your connection and try again, or call us directly on{' '}
              {ceramicSite.contact.phoneDisplay}.
            </p>
            <div className="cn-form-status__actions">
              <a className="cn-btn cn-btn--outline cn-btn--sm" href={ceramicSite.contact.telHref}>
                <Icon name="phone" size={14} />
                Call instead
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  )
}

