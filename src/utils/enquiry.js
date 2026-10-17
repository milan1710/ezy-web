/**
 * Enquiry form helpers.
 *
 * These functions are deliberately pure so they can be verified by
 * `npm run verify` without a browser. The form never posts to a server; it
 * validates locally and builds a WhatsApp message for the visitor to send.
 */

/** Returns a valid 10-digit Indian mobile number, or null. */
export function normalizeIndianMobile(value = '') {
  const digits = String(value).replace(/\D/g, '')
  const local = digits.replace(/^91(?=\d{10}$)/, '')
  return /^[6-9]\d{9}$/.test(local) ? local : null
}

/** Validates the enquiry fields and returns a field -> message map. */
export function validateEnquiry(form) {
  const errors = {}

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!normalizeIndianMobile(form.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  }

  if (!form.service) {
    errors.service = 'Please choose the service you need.'
  }

  if (!form.requirements || form.requirements.trim().length < 10) {
    errors.requirements = 'Please describe your requirement in at least 10 characters.'
  }

  return errors
}

/** Builds the WhatsApp message for a validated enquiry. */
export function buildEnquiryMessage({ form, serviceLabel }) {
  const phone = normalizeIndianMobile(form.phone) ?? form.phone

  return [
    'Hello Ezy Digital, I would like a quotation.',
    `Name: ${form.name.trim()}`,
    `Phone: +91 ${phone}`,
    form.business.trim() ? `Business: ${form.business.trim()}` : null,
    `Service required: ${serviceLabel}`,
    `Budget range: ${form.budget}`,
    `Requirement: ${form.requirements.trim()}`,
  ]
    .filter(Boolean)
    .join('\n')
}
