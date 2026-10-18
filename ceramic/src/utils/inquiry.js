/**
 * Ceramic inquiry form helpers.
 *
 * This site has no backend. The form validates locally, then prepares a
 * prefilled WhatsApp message that the visitor sends from their own WhatsApp.
 * Nothing is stored by this website.
 */

export function normalizeIndianMobile(value = '') {
  const digits = String(value).replace(/\D/g, '')
  const local = digits.replace(/^91(?=\d{10}$)/, '')
  return /^[6-9]\d{9}$/.test(local) ? local : null
}

export function isValidEmail(value = '') {
  if (!value.trim()) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}

export function validateInquiry(form) {
  const errors = {}

  if (!form.name || form.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!form.company || form.company.trim().length < 2) {
    errors.company = 'Please enter your company name.'
  }

  if (!normalizeIndianMobile(form.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  }

  if (!isValidEmail(form.email)) {
    errors.email = 'Enter a valid email address, or leave this field empty.'
  }

  if (!form.product) {
    errors.product = 'Please select a product category.'
  }

  if (!form.goal) {
    errors.goal = 'Please select your primary business goal.'
  }

  if (!form.geography) {
    errors.geography = 'Please select a target geography.'
  }

  if (!form.description || form.description.trim().length < 10) {
    errors.description = 'Please describe your requirement in at least 10 characters.'
  }

  if (!form.consent) {
    errors.consent = 'Please confirm that Ezy Digital may contact you about this inquiry.'
  }

  return errors
}

export function buildInquiryMessage(form) {
  const phone = normalizeIndianMobile(form.phone) ?? form.phone

  return [
    'Hello Ezy Digital, I would like to discuss digital growth for my ceramic business.',
    '',
    `Name: ${form.name.trim()}`,
    `Company: ${form.company.trim()}`,
    `Phone: +91 ${phone}`,
    form.email.trim() ? `Email: ${form.email.trim()}` : null,
    form.website.trim() ? `Website: ${form.website.trim()}` : null,
    `Product category: ${form.product}`,
    `Primary goal: ${form.goal}`,
    `Target geography: ${form.geography}`,
    form.budget ? `Monthly advertising budget: ${form.budget}` : null,
    '',
    `Requirement: ${form.description.trim()}`,
    '',
    'This inquiry was prepared from the Ezy Digital ceramic growth website.',
  ]
    .filter((line) => line !== null)
    .join('\n')
}

export const productOptions = [
  'Wall Tiles',
  'Floor Tiles',
  'Vitrified / Porcelain Tiles',
  'Slabs',
  'Sanitaryware',
  'Other Ceramic Products',
]

export const goalOptions = [
  'Find Domestic Buyers',
  'Build Dealer Network',
  'Find Distributor Inquiries',
  'Export Market Visibility',
  'Improve Product Catalogue',
  'Improve Existing Website',
  'Digital Marketing',
  'Discuss a Custom Growth Plan',
]

export const geographyOptions = [
  'Morbi / Gujarat',
  'Other Indian States',
  'International Markets',
  'India and International Markets',
  'Not Sure Yet',
]

export const budgetOptions = [
  'Not decided yet',
  'Up to ₹10,000 / month',
  '₹10,000 – ₹25,000 / month',
  '₹25,000 – ₹50,000 / month',
  '₹50,000+ / month',
]

export const emptyInquiry = {
  name: '',
  company: '',
  phone: '',
  email: '',
  website: '',
  product: '',
  goal: '',
  geography: '',
  budget: '',
  description: '',
  consent: false,
}
