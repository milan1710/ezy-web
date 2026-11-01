import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  budgetOptions,
  emptyInquiry,
  geographyOptions,
  goalOptions,
  productOptions,
  validateInquiry,
} from '../utils/inquiry'
import { buildInquiryDescription, buildLeadPayload, submitLeadToCrm } from '../utils/crm'
import { businessTypeOptions } from '../data/presentationContent'
import Icon from './ui/Icon'

export default function InquiryForm({ defaults = {} }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ ...emptyInquiry, ...defaults })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const summaryRef = useRef(null)
  const statusRef = useRef(null)

  const update = (field) => (event) => {
    const value = event.target.value
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
    const nextErrors = validateInquiry(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      window.requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    setStatus('submitting')

    try {
      await submitLeadToCrm(buildLeadPayload(form, buildInquiryDescription(form)))
      const submissionId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      navigate('/thank-you', {
        replace: true,
        state: { submitted: true, submissionId, form: 'ceramic-inquiry' },
      })
    } catch {
      setStatus('error')
      window.requestAnimationFrame(() => statusRef.current?.focus())
    }
  }

  const errorCount = Object.keys(errors).length
  const isSubmitting = status === 'submitting'
  const fieldError = (field) => (errors[field] ? `${field}-error` : undefined)

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
      {errorCount > 0 ? (
        <div className="form-error-summary" ref={summaryRef} tabIndex={-1} role="alert">
          Please review {errorCount === 1 ? 'the highlighted field' : `the ${errorCount} highlighted fields`} below
          and try again. Nothing has been sent yet.
        </div>
      ) : null}

      <div className="form-urgency">
        <span className="form-urgency__icon">
          <Icon name="clock" size={17} />
        </span>
        <div>
          <strong>Limited free audit slots this week</strong>
          <p>Only a few review slots are open. Requesting yours takes less than 60 seconds.</p>
        </div>
      </div>

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

        <div className={`field${errors.businessType ? ' has-error' : ''}`}>
          <label htmlFor="businessType">
            Business type <span className="field__req">*</span>
          </label>
          <select
            id="businessType"
            name="businessType"
            value={form.businessType}
            onChange={update('businessType')}
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby={fieldError('businessType')}
            required
          >
            <option value="">Select business type</option>
            {businessTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.businessType ? (
            <p className="field__error" id="businessType-error">{errors.businessType}</p>
          ) : null}
        </div>
      </div>

      <details className="form-extra">
        <summary>Add more details (optional)</summary>
        <div className="form-grid form-extra__grid">
          <div className="field">
            <label htmlFor="product">Product category</label>
            <select id="product" name="product" value={form.product} onChange={update('product')}>
              <option value="">Select a category</option>
              {productOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="goal">Primary business goal</label>
            <select id="goal" name="goal" value={form.goal} onChange={update('goal')}>
              <option value="">Select your goal</option>
              {goalOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className={`field${errors.email ? ' has-error' : ''}`}>
            <label htmlFor="email">Email</label>
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
            <label htmlFor="website">Website URL</label>
            <input
              id="website"
              name="website"
              type="url"
              value={form.website}
              onChange={update('website')}
              placeholder="https://"
            />
          </div>

          <div className={`field${errors.geography ? ' has-error' : ''}`}>
            <label htmlFor="geography">Target geography</label>
            <select
              id="geography"
              name="geography"
              value={form.geography}
              onChange={update('geography')}
              aria-invalid={Boolean(errors.geography)}
              aria-describedby={fieldError('geography')}
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
            <label htmlFor="budget">Monthly advertising budget</label>
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
            <label htmlFor="description">Anything else we should know?</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={update('description')}
              placeholder="For example: products you manufacture, markets you want to target or the problem you want to solve."
              aria-invalid={Boolean(errors.description)}
              aria-describedby={fieldError('description')}
            />
            {errors.description ? (
              <p className="field__error" id="description-error">{errors.description}</p>
            ) : null}
          </div>
        </div>
      </details>

      <div className="form-actions">
        <button className="btn btn--block" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Claiming your audit slot…' : 'Claim My Free Audit'}
          {!isSubmitting ? <Icon name="arrowRight" size={16} /> : null}
        </button>
        <p className="form-privacy">
          Free audit · No obligation · Reply within 1 business day. Your details are shared only
          with our team so we can respond to your inquiry.
        </p>
      </div>

      {status === 'error' ? (
        <div className="form-status" role="alert" tabIndex={-1} ref={statusRef}>
          <strong>We could not submit your inquiry.</strong>
          <p>
            Please check your connection and try again, or call us directly on +91 95126 48085.
          </p>
          <div className="row" style={{ marginTop: 12 }}>
            <a className="btn btn--outline btn--sm" href="tel:+919512648085">
              <Icon name="phone" size={14} /> Call instead
            </a>
          </div>
        </div>
      ) : null}
    </form>
  )
}
