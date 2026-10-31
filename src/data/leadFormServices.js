/**
 * Service options for the lead generation form.
 *
 * The dropdown is generated from the same service catalogue that powers the
 * Services section, the service pages and the footer (`src/data/services.js`),
 * so a visitor can only choose a service that Ezy Digital actually offers.
 * Nothing is invented here and nothing is removed.
 *
 * Links across the site deep-link into the form with a pricing / add-on id
 * (`/contact?service=basic-website`, `?service=basic-reel`, ...). Those ids are
 * not service-catalogue ids, so `resolveLeadService` maps them onto the matching
 * catalogue service instead of silently dropping the preselection.
 */
import { serviceTiers, services } from './services.js'

/** Label of the empty first option in the dropdown. */
export const LEAD_SERVICE_PLACEHOLDER = 'Select Your Required Service'

/** Flat list of dropdown options: { id, label, group }. */
export const LEAD_SERVICE_OPTIONS = services.map((service) => ({
  id: service.id,
  label: service.title,
  group: serviceTiers[service.tier]?.label ?? 'Other services',
}))

/** Options grouped for <optgroup> rendering, in catalogue order. */
export const LEAD_SERVICE_GROUPS = Object.entries(serviceTiers).map(([tier, meta]) => ({
  tier,
  label: meta.label,
  options: LEAD_SERVICE_OPTIONS.filter((option) => option.group === meta.label),
}))

/**
 * Pricing / additional-service ids used in existing deep links, mapped to the
 * matching catalogue service.
 */
export const LEAD_SERVICE_QUERY_MAP = {
  // Website packages
  'basic-website': 'business-website',
  'professional-website': 'business-website',
  'business-website': 'business-website',
  ecommerce: 'ecommerce',
  'custom-website': 'web-applications',
  // Meta Ads packages
  'meta-single-campaign': 'meta-ads',
  'meta-basic-management': 'meta-ads',
  'meta-growth-management': 'meta-ads',
  'meta-professional-management': 'meta-ads',
  // Video packages
  'basic-reel': 'video-editing',
  'promotional-reel': 'video-editing',
  'premium-ad-video': 'video-editing',
  'video-monthly-8': 'video-editing',
  'video-monthly-12': 'video-editing',
  'video-reel-editing': 'video-editing',
  // Additional services
  'single-social-poster': 'creative-services',
  'ten-social-posters': 'creative-services',
  'logo-design': 'creative-services',
  'banner-brochure': 'creative-services',
  'visiting-card': 'creative-services',
  'google-business-profile': 'creative-services',
  'website-content-writing': 'creative-services',
  'landing-page-design': 'landing-pages',
  'seo-optimization': 'creative-services',
  'website-maintenance': 'maintenance',
}

/**
 * Resolves a `?service=` value to a catalogue service id.
 *
 * @param {string | null | undefined} value
 * @returns {string} catalogue service id, or '' when it cannot be resolved
 */
export function resolveLeadService(value) {
  if (!value) return ''
  const key = String(value).trim()
  if (!key) return ''

  if (LEAD_SERVICE_OPTIONS.some((option) => option.id === key)) return key

  const mapped = LEAD_SERVICE_QUERY_MAP[key]
  return mapped && LEAD_SERVICE_OPTIONS.some((option) => option.id === mapped) ? mapped : ''
}

/** Returns the display label for a catalogue service id, or '' when unknown. */
export function leadServiceLabel(id) {
  return LEAD_SERVICE_OPTIONS.find((option) => option.id === id)?.label ?? ''
}

export default LEAD_SERVICE_OPTIONS
