/**
 * Central configuration for the ceramic micro-site.
 *
 * The site is intentionally self-contained and deployed under /ceramic/.
 * All contact details, canonical URLs and WhatsApp copy live here.
 */

const PHONE_LOCAL = '9512648085'
const PHONE_COUNTRY_CODE = '91'
const PHONE_E164 = `+${PHONE_COUNTRY_CODE}${PHONE_LOCAL}`

export const ceramicSite = {
  brand: {
    name: 'Ezy Digital',
    ceramicName: 'Ezy Digital Ceramic Growth',
    tagline: 'Digital Growth Partner for Ceramic Manufacturers & Exporters',
    shortDescription:
      'Ezy Digital helps ceramic manufacturers improve their digital presence, reach potential buyers, develop dealer and distributor inquiry channels, and build a more structured system for domestic and export business development.',
  },

  /** Deployment path of this separate micro-site. */
  basePath: '/ceramic',
  domain: 'https://ezydigital.in',
  baseUrl: 'https://ezydigital.in/ceramic',

  contact: {
    phoneDisplay: '9512648085',
    phoneInternational: '+91 9512648085',
    phoneLocal: PHONE_LOCAL,
    phoneE164: PHONE_E164,
    telHref: `tel:${PHONE_E164}`,
    whatsappNumber: `${PHONE_COUNTRY_CODE}${PHONE_LOCAL}`,
    whatsappHref: `https://wa.me/${PHONE_COUNTRY_CODE}${PHONE_LOCAL}`,
    email: 'hello@ezydigital.in',
    address: {
      city: 'Upleta',
      state: 'Gujarat',
      country: 'India',
      full: 'Upleta, Gujarat, India',
    },
  },

  whatsappMessages: {
    general:
      'Hello Ezy Digital, I would like to discuss digital growth for my ceramic business.',
    audit:
      'Hello Ezy Digital, I would like to request a free ceramic growth audit for my business.',
    dealer:
      'Hello Ezy Digital, I would like to discuss dealer and distributor inquiry development for my ceramic business.',
    export:
      'Hello Ezy Digital, I would like to discuss an export-focused website and international buyer visibility.',
    catalogue:
      'Hello Ezy Digital, I would like to discuss a ceramic product catalogue and website.',
    pricing:
      'Hello Ezy Digital, I would like details about ceramic website and digital marketing pricing.',
  },
}

/** Builds a wa.me link with a safely URL-encoded prefilled message. */
export function whatsappLink(message) {
  const base = ceramicSite.contact.whatsappHref
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

/** Builds the absolute canonical URL for a ceramic route. */
export function canonicalUrl(path = '/') {
  const clean = path === '/' || path === '' ? '/' : `/${String(path).replace(/^\/+|\/+$/g, '')}`
  return `${ceramicSite.baseUrl}${clean === '/' ? '/' : clean}`
}

export default ceramicSite
