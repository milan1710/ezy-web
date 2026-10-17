/**
 * Central site configuration.
 *
 * Everything that is likely to change (contact details, domain, SEO defaults,
 * form wiring) lives here so nothing is hardcoded across the codebase.
 */

const PHONE_LOCAL = '9512648085'
const PHONE_COUNTRY_CODE = '91' // India
const PHONE_E164 = `+${PHONE_COUNTRY_CODE}${PHONE_LOCAL}` // +919512648085

export const siteConfig = {
  brand: {
    name: 'Ezy Digital',
    fullName: 'Ezy Digital',
    tagline: 'Grow Your Business Digitally',
    owner: 'Milan Soni',
    shortDescription:
      'We build professional websites, e-commerce stores and custom web applications, and manage Facebook and Instagram advertising for businesses across Gujarat.',
  },

  contact: {
    /** Displayed exactly as supplied by the business. */
    phoneDisplay: '9512648085',
    phoneInternational: '+91 9512648085',
    phoneLocal: PHONE_LOCAL,
    /** Used by every `tel:` link on the site. */
    phoneE164: PHONE_E164,
    telHref: `tel:${PHONE_E164}`,
    whatsappNumber: `${PHONE_COUNTRY_CODE}${PHONE_LOCAL}`,
    whatsappHref: `https://wa.me/${PHONE_COUNTRY_CODE}${PHONE_LOCAL}`,
    /**
     * Business email used in the footer and legal pages.
     * Update this to the real inbox before launch - it is not invented proof,
     * just the project's placeholder contact address.
     */
    email: 'hello@ezydigital.in',
    address: {
      line1: 'Nilkamal Complex',
      city: 'Upleta',
      state: 'Gujarat',
      postalCode: '360490',
      country: 'India',
      full: 'Nilkamal Complex, Upleta, Gujarat 360490, India',
    },
  },

  /** SEO / canonical configuration. CHANGE THIS to the confirmed live domain. */
  domain: 'https://ezydigital.in',

  /**
   * The enquiry form does not submit to a server. It composes a WhatsApp
   * message locally so no lead data is stored by this website.
   */

  /** Prefilled WhatsApp messages, URL-encoded when used. */
  whatsappMessages: {
    general:
      'Hello Ezy Digital, I would like to know more about your website development and digital marketing services.',
    quote:
      'Hello Ezy Digital, I would like a quotation for my website or digital marketing requirement.',
    customQuote:
      'Hello Ezy Digital, my requirements are outside the standard packages. I would like a custom quotation.',
    maintenance:
      'Hello Ezy Digital, I am interested in the Website Maintenance plan for an existing website.',
    metaAds:
      'Hello Ezy Digital, I would like to know more about Meta Ads management for my business.',
  },
}

/** Builds a `wa.me` link with a safely URL-encoded prefilled message. */
export function whatsappLink(message) {
  const base = siteConfig.contact.whatsappHref
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

/** Builds an absolute canonical URL for a route path. */
export function canonicalUrl(path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.domain}${clean === '/' ? '/' : clean}`
}

export default siteConfig
