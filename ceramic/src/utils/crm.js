/**
 * Perfex CRM lead submission helpers.
 *
 * The public web-to-lead endpoint accepts an application/x-www-form-urlencoded
 * POST. Only keys that exist as columns in the CRM `leads` table are stored,
 * so every extra answer from this website is composed into `description`
 * instead of being silently dropped.
 *
 * The endpoint does not send CORS headers, therefore the request is sent with
 * `mode: 'no-cors'`. The browser still delivers the POST; the (opaque)
 * response cannot be read, which is fine because the CRM returns a simple JSON
 * acknowledgement. CSRF protection is excluded for `forms/wtl/{key}` in
 * Perfex, so no token is required.
 */

import ceramicSite from '../config/ceramicSite'

const LEAD_FIELDS = [
  'name',
  'title',
  'email',
  'website',
  'phonenumber',
  'lead_value',
  'company',
  'address',
  'city',
  'state',
  'country',
  'zip',
  'default_language',
  'description',
]

/** Removes spaces and formatting characters from a phone number. */
export function cleanPhone(value = '') {
  return String(value).replace(/[^\d+]/g, '')
}

/** Current page URL, used to tell the CRM where the lead came from. */
function sourcePage() {
  if (typeof window === 'undefined') return ceramicSite.baseUrl
  return window.location.href
}

/** Builds the description block for a Ceramic Growth Audit submission. */
export function buildAuditDescription(form) {
  return [
    'Requested: Free Ceramic Growth Audit',
    `Business type: ${form.businessType}`,
    `Target market: ${form.targetMarket}`,
    `Main growth goal: ${form.growthGoal}`,
    'Consent to contact: Yes',
    `Source page: ${sourcePage()}`,
  ].join('\n')
}

/** Builds the description block for a general ceramic inquiry submission. */
export function buildInquiryDescription(form) {
  return [
    'Requested: Ceramic growth consultation',
    `Product category: ${form.product}`,
    `Primary goal: ${form.goal}`,
    `Target geography: ${form.geography}`,
    form.budget ? `Monthly advertising budget: ${form.budget}` : null,
    '',
    `Requirement: ${form.description}`,
    '',
    'Consent to contact: Yes',
    `Source page: ${sourcePage()}`,
  ]
    .filter((line) => line !== null)
    .join('\n')
}

/**
 * Maps a website form to standard Perfex lead columns.
 * Fields without a matching CRM column belong in `description`.
 */
export function buildLeadPayload(form, description) {
  return {
    name: form.name,
    company: form.company,
    email: form.email,
    website: form.website,
    phonenumber: cleanPhone(form.phone),
    description,
  }
}

/**
 * Posts a lead to the Perfex web-to-lead endpoint.
 *
 * @param {Record<string, string | number | undefined | null>} lead
 * @returns {Promise<boolean>} true when the browser delivered the request
 */
export async function submitLeadToCrm(lead) {
  const body = new URLSearchParams()
  body.set('key', ceramicSite.crm.formKey)

  for (const field of LEAD_FIELDS) {
    const value = lead[field]
    if (value === undefined || value === null) continue
    const text = String(value).trim()
    if (text) body.set(field, text)
  }

  await fetch(ceramicSite.crm.formUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: body.toString(),
  })

  return true
}
