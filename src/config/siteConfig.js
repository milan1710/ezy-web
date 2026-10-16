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
    name: 'EzyDigital',
    fullName: 'EzyDigital Web Development',
    tagline: 'Website Design & Full-Stack Web Development',
    owner: 'Milan Soni',
    shortDescription:
      'We design and develop custom, fast and mobile-friendly websites and web applications for businesses that want to be found, trusted and contacted online.',
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
   * This website intentionally has no enquiry form. Visitors contact EzyDigital
   * by phone, WhatsApp or email - see `contactMethods` in Contact.jsx.
   */

  /** Prefilled WhatsApp messages, URL-encoded when used. */
  whatsappMessages: {
    general: 'Hello Milan, I want to discuss a website development project with EzyDigital.',
    quote: 'Hello Milan, I would like a free quote for a website development project.',
    customQuote:
      'Hello Milan, my requirements are outside the standard packages. I would like a custom quote.',
    maintenance:
      'Hello Milan, I am interested in the Website Maintenance plan for an existing website.',
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
