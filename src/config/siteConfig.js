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
      'We build professional websites, e-commerce stores and custom web applications, manage Facebook and Instagram advertising, and edit promotional videos and Reels for businesses across Gujarat.',
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

  /**
   * Lead generation form -> Perfex CRM.
   *
   * The browser never posts to the CRM directly: the CRM's web-to-lead endpoint
   * sends no CORS headers, so a browser could not read the result and would have
   * to guess whether the lead was stored. `endpoint` is the same-origin proxy
   * (`public/api/lead.php`) that forwards the lead server-side and returns the
   * CRM's answer. `thankYouPath` is only reached after that confirmation.
   */
  crm: {
    endpoint: '/api/lead.php',
  },
  thankYouPath: '/thank-you/',

  /** SEO / canonical configuration. CHANGE THIS to the confirmed live domain. */
  domain: 'https://ezydigital.in',

  /** Prefilled WhatsApp messages used by the content-level WhatsApp links. */
  whatsappMessages: {
    general:
      'Hello Ezy Digital, I would like to discuss digital solutions for my business.',
    website:
      'Hello Ezy Digital, I am interested in Website Development. Please share the available packages starting at \u20b93,999.',
    metaAds:
      'Hello Ezy Digital, I am interested in Meta Ads Campaign Setup starting at \u20b9999. Please share the details.',
    videoEditing:
      'Hello Ezy Digital, I am interested in Video Editing starting at \u20b9499 per Reel. Please share the packages.',
    quote:
      'Hello Ezy Digital, I would like a quotation for my website or digital marketing requirement.',
    customQuote:
      'Hello Ezy Digital, my requirements are outside the standard packages. I would like a custom quotation.',
    maintenance:
      'Hello Ezy Digital, I am interested in the Website Maintenance plan for an existing website.',
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
