/**
 * Shared JSON-LD builders.
 *
 * Structured data is generated from the same values that are rendered on the
 * page (site config, route paths, published prices), so the markup can never
 * claim something the visitor cannot see. No ratings, reviews, awards or
 * "X clients served" numbers are produced here.
 */
import { siteConfig } from '../config/siteConfig'

/** Absolute URL for a route path. */
function absolute(path = '/') {
  return `${siteConfig.domain}${path === '/' ? '/' : path}`
}

/**
 * BreadcrumbList for an inner page.
 *
 * @param {Array<{label: string, to?: string}>} items trail after "Home"
 * @param {string} path current route, used for the last (link-less) crumb
 */
export function breadcrumbSchema(items = [], path = '/') {
  const trail = [{ label: 'Home', to: '/' }, ...items]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absolute(item.to ?? path),
    })),
  }
}

/**
 * Service schema for a service page, with the published starting price.
 *
 * @param {object} service
 * @param {string} service.name
 * @param {string} service.description
 * @param {string} service.path
 * @param {string|number} [service.price] published starting price in INR
 */
export function serviceSchema({ name, description, path, price }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    description,
    url: absolute(path),
    provider: { '@id': `${siteConfig.domain}/#organization` },
    areaServed: [
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'Country', name: 'India' },
    ],
    ...(price
      ? {
          offers: {
            '@type': 'Offer',
            url: absolute(path),
            price: String(price),
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  }
}
