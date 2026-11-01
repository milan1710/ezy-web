/**
 * Legacy pricing exports kept for the existing solution pages.
 * The approved Ceramic Growth Packages are defined once in
 * `src/data/ceramicPackages.js`; no alternate or older prices live here.
 */

import { ceramicPackages } from './ceramicPackages'

export const websitePackages = ceramicPackages.map((pkg) => ({
  id: pkg.id,
  name: pkg.name,
  price: pkg.priceValue,
  priceLabel: pkg.price,
  priceSuffix: pkg.priceSuffix,
  tagline: pkg.positioning,
  bestFor: 'Monthly service charge. Advertising budget is separate.',
  features: pkg.deliverables,
  note: 'Monthly service charge. GST extra. Advertising budget is separate.',
  featured: pkg.recommended,
}))

/**
 * Individual service fees are not published separately. Scope and fees for
 * standalone work are confirmed in a written proposal.
 */
export const marketingServices = [
  {
    id: 'meta-management',
    name: 'Meta Ads Management',
    priceLabel: 'Package-based',
    priceSuffix: 'scope in writing',
    description:
      'Campaign structure, audiences, creative direction and conversion tracking setup for Facebook and Instagram.',
    considerations: 'Advertising spend is separate. Scope is agreed in writing.',
  },
  {
    id: 'google-management',
    name: 'Google Ads Management',
    priceLabel: 'Package-based',
    priceSuffix: 'scope in writing',
    description:
      'Search campaign structure, keyword and landing-page alignment, negative keyword review and reporting.',
    considerations: 'Advertising spend is separate. Account access and tracking requirements apply.',
  },
  {
    id: 'seo',
    name: 'Ceramic SEO',
    priceLabel: 'Package-based',
    priceSuffix: 'scope in writing',
    description:
      'On-page and technical improvements, product category structure, content planning and search visibility work.',
    considerations: 'Rankings and traffic outcomes are not guaranteed.',
  },
  {
    id: 'custom-growth',
    name: 'Customised Digital Growth Package',
    priceLabel: 'Custom proposal',
    priceSuffix: 'after scoping',
    description:
      'A scoped combination of website improvements, landing pages, campaigns, inquiry tracking and review.',
    considerations: 'Defined after understanding products, markets, budget and sales capacity.',
  },
]

export const pricingNotes = [
  'All Ceramic Growth Package service charges are monthly. GST is extra wherever applicable.',
  'Advertising budget is separate from the monthly service charge and is paid directly to the advertising platform.',
  'No specific number of inquiries, leads or sales is guaranteed.',
  'Third-party expenses and additional production or travel requirements must be agreed separately where applicable.',
  'Deliverables and reporting frequency are confirmed in writing before work begins.',
]

export const pricingExclusions = [
  'Advertising media spend (Google, Meta or other platforms).',
  'Third-party expenses unless explicitly included.',
  'Additional production or travel requirements.',
  'Custom software development beyond the agreed scope.',
  'Any deliverable not listed in the selected package or written proposal.',
]

export const customProposalPoints = [
  'Your product categories and available product information.',
  'Target markets and priority buyer types.',
  'Current sales process and response capacity.',
  'Existing website, advertising accounts and tracking access.',
  'A realistic working budget for website, management and ad spend.',
]

export const getPackageById = (id) => websitePackages.find((item) => item.id === id)
