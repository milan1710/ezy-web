/**
 * Package Finder configuration.
 *
 * Deliberately NOT a price calculator. It recommends the smallest published
 * package that covers the visitor's answers and hands the details to WhatsApp.
 * All prices come from src/data/pricing.js, so nothing is duplicated here.
 */

export const baseOptions = [
  { id: 'landing-page', label: 'One page / a campaign', note: 'Landing page' },
  { id: 'business-website', label: 'A company or shop website', note: 'Business website' },
  { id: 'professional-website', label: 'A larger, design-heavy website', note: 'Professional website' },
  { id: 'ecommerce', label: 'An online store', note: 'E-commerce website' },
  { id: 'full-stack-application', label: 'A custom web application', note: 'Full-stack application' },
]

export const pageOptions = [
  { id: 'p1', label: 'Just 1 page', pages: 1 },
  { id: 'p2', label: '2 - 5 pages', pages: 5 },
  { id: 'p3', label: '6 - 8 pages', pages: 8 },
  { id: 'p4', label: '9 - 15 pages', pages: 15 },
  { id: 'p5', label: 'More than 15 pages', pages: 99 },
]

/**
 * `minPackage` is the smallest package that can carry the feature.
 * `null` means it is an add-on rather than a package upgrade.
 */
export const featureOptions = [
  { id: 'payments', label: 'Online payments', minPackage: 'ecommerce' },
  { id: 'dashboard', label: 'Admin dashboard', minPackage: 'ecommerce' },
  { id: 'cms', label: 'Editable content (CMS)', minPackage: 'professional-website' },
  { id: 'accounts', label: 'User accounts / login', minPackage: 'full-stack-application' },
  { id: 'integrations', label: 'Third-party or API integrations', minPackage: 'full-stack-application' },
  { id: 'maintenance', label: 'Maintenance after launch', minPackage: null },
]

export const PACKAGE_ORDER = [
  'landing-page',
  'business-website',
  'professional-website',
  'ecommerce',
  'full-stack-application',
]

/**
 * Works out the recommended starting package.
 *
 * @returns {{ packageId: string, customScope: boolean, notes: string[] }}
 */
export function recommendPackage({ base, pages, features }) {
  const notes = []
  let index = PACKAGE_ORDER.indexOf(base)
  if (index < 0) index = 0

  // Page count can only push the recommendation up, never down.
  if (pages > 1) index = Math.max(index, PACKAGE_ORDER.indexOf('business-website'))
  if (pages > 5) index = Math.max(index, PACKAGE_ORDER.indexOf('professional-website'))

  let customScope = false

  if (pages > 8) {
    customScope = true
    notes.push(
      'Nine or more pages usually needs a scoped quotation rather than a standard package.',
    )
  }

  features.forEach((feature) => {
    const minPackage = featureOptions.find((option) => option.id === feature)?.minPackage
    if (minPackage) index = Math.max(index, PACKAGE_ORDER.indexOf(minPackage))
  })

  const packageId = PACKAGE_ORDER[index]

  if (packageId === 'full-stack-application') {
    customScope = true
    notes.push(
      'The published application price covers a limited, clearly scoped build. Compiling the exact features you need will confirm the final quotation.',
    )
  }

  if (features.includes('maintenance')) {
    notes.push('The monthly maintenance plan is added separately for eligible websites.')
  }

  if (features.includes('cms')) {
    notes.push('An editable CMS setup is included from the Professional Website package upwards.')
  }

  return { packageId, customScope, notes }
}

/** Builds the structured WhatsApp summary for the selections. */
export function buildFinderMessage({ baseLabel, pageLabel, featureLabels, recommendation, priceLabel }) {
  return [
    "Hello Milan, I used the package finder on the EzyDigital website.",
    `What I need: ${baseLabel}`,
    `Approximate size: ${pageLabel}`,
    `Also needed: ${featureLabels.length ? featureLabels.join(', ') : 'Nothing else'}`,
    `Suggested package: ${recommendation}${priceLabel ? ` (starting at ${priceLabel})` : ''}`,
    'Please confirm the scope and the final quotation.',
  ].join('\n')
}
