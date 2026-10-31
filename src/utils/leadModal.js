/**
 * Global lead-form opener.
 *
 * Any CTA on the site (sticky bar, header, hero, page headers) can call
 * `openLeadForm()` without passing props through the tree. `LeadModal` listens
 * for the event and renders the one real CRM-connected form.
 */
export const LEAD_FORM_EVENT = 'ezy:open-lead-form'

/** Ad-ready entry point: `https://ezydigital.in/?form=1` opens the form. */
export const LEAD_FORM_QUERY_PARAM = 'form'

/**
 * Opens the lead modal.
 *
 * @param {{ service?: string, source?: string }} [detail]
 *   `service`  - catalogue/pricing id to preselect in the dropdown
 *   `source`   - where the visitor opened it from (stored with the lead)
 */
export function openLeadForm(detail = {}) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(LEAD_FORM_EVENT, { detail }))
}

/** True when the current URL asks for the form to open (used by Meta ad URLs). */
export function isLeadFormRequested(search = '') {
  if (!search) return false
  try {
    const params = new URLSearchParams(search)
    return params.get(LEAD_FORM_QUERY_PARAM) === '1'
  } catch {
    return false
  }
}
