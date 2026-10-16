/**
 * Pricing packages.
 *
 * IMPORTANT: these are the business's proposed INTRODUCTORY prices, not market
 * averages. Edit the numbers here only - every price on the site (pricing cards,
 * structured data text, WhatsApp messages) is driven by this file.
 */

export const pricingNote =
  'All prices are "starting at" introductory prices in Indian rupees. They are indicative, not verified market averages, and the final quotation depends on your exact requirements and scope.'

export const pricingExclusions =
  'Domain registration, hosting, paid themes or plugins, premium third-party APIs, payment gateway charges and applicable taxes may be charged extra.'

export const packages = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    startingPrice: 2999,
    priceSuffix: 'one-time',
    audience: 'A small campaign, personal brand or single service.',
    highlight: false,
    features: [
      'One landing page',
      'Responsive design',
      'Contact CTA',
      'Basic on-page SEO setup',
      'One inquiry form',
      'Two rounds of revisions',
    ],
    excludes:
      'Complex integrations and custom backend functionality are not included in this package.',
  },
  {
    id: 'business-website',
    name: 'Business Website',
    startingPrice: 5999,
    priceSuffix: 'one-time',
    audience: 'Local businesses, consultants and startups.',
    highlight: true,
    badge: 'Most popular starting point',
    features: [
      'Up to five standard pages',
      'Responsive design',
      'Home, About, Services and Contact pages as applicable',
      'Inquiry form',
      'WhatsApp contact integration',
      'Basic technical SEO setup',
      'Social profile links',
      'Two rounds of revisions',
    ],
    excludes: 'Advanced custom features and third-party system integrations are quoted separately.',
  },
  {
    id: 'professional-website',
    name: 'Professional Website',
    startingPrice: 9999,
    priceSuffix: 'one-time',
    audience: 'Businesses that need a more polished, premium-looking website.',
    highlight: false,
    features: [
      'Up to eight standard pages',
      'Premium custom UI design',
      'Responsive layouts',
      'Enhanced interactions',
      'Contact forms',
      'Basic on-page SEO',
      'Analytics integration setup where access is provided',
      'Three rounds of revisions',
    ],
    excludes: 'Custom software features, user accounts and complex integrations are not included.',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Website',
    startingPrice: 14999,
    priceSuffix: 'one-time',
    audience: 'Businesses that want to sell products online.',
    highlight: false,
    features: [
      'Product catalogue setup',
      'Product detail pages',
      'Cart and checkout functionality',
      'Basic order management',
      'Payment gateway integration where technically and commercially feasible',
      'Responsive design',
      'Basic SEO setup',
    ],
    excludes:
      'Exact scope depends on the selected platform, the number of products and the required integrations. Third-party fees are additional.',
  },
  {
    id: 'full-stack-application',
    name: 'Full-Stack Web Application',
    startingPrice: 24999,
    priceSuffix: 'one-time',
    audience: 'Businesses that need custom software functionality.',
    highlight: false,
    features: [
      'Requirement analysis',
      'Custom React frontend',
      'Backend and database architecture',
      'Authentication if required',
      'Basic admin dashboard where agreed',
      'API integration according to the approved scope',
      'Deployment assistance',
    ],
    excludes:
      'This is an entry-level starting price for a limited, clearly scoped application. Complex SaaS platforms, advanced workflows, extensive integrations and large applications require a custom quote.',
  },
  {
    id: 'maintenance',
    name: 'Website Maintenance',
    startingPrice: 999,
    priceSuffix: 'per month',
    audience: 'Eligible existing websites that need routine care.',
    highlight: false,
    features: [
      'Bug fixes',
      'Routine updates and backups',
      'Security maintenance checks',
      'Technical support for eligible issues',
      'Clearly limited monthly support allowance',
    ],
    excludes:
      'Unlimited development, unlimited revisions, unlimited support and unlimited content changes are not included at this price. New feature development is quoted separately.',
  },
]

/**
 * Feature comparison across the packages.
 *
 * Cell values:
 *   true                          -> included (tick)
 *   false                         -> not included (dash)
 *   'text'                        -> short included description (tick)
 *   { text, muted: true }         -> plain note without a tick
 */
const findByld = (id) => packages.find((pkg) => pkg.id === id)

export const packageMatrix = {
  columns: [
    { id: 'landing-page', label: 'Landing Page' },
    { id: 'business-website', label: 'Business' },
    { id: 'professional-website', label: 'Professional' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'full-stack-application', label: 'Web App' },
    { id: 'maintenance', label: 'Maintenance' },
  ].map((column) => ({
    ...column,
    price: findByld(column.id)?.startingPrice,
    suffix: findByld(column.id)?.priceSuffix,
  })),

  rows: [
    {
      feature: 'Standard pages',
      values: {
        'landing-page': '1 page',
        'business-website': 'Up to 5',
        'professional-website': 'Up to 8',
        ecommerce: 'Catalogue-led',
        'full-stack-application': 'Scoped',
        maintenance: false,
      },
    },
    {
      feature: 'Mobile-first responsive design',
      values: {
        'landing-page': true,
        'business-website': true,
        'professional-website': true,
        ecommerce: true,
        'full-stack-application': true,
        maintenance: false,
      },
    },
    {
      feature: 'Premium custom UI design',
      values: {
        'landing-page': false,
        'business-website': false,
        'professional-website': true,
        ecommerce: true,
        'full-stack-application': true,
        maintenance: false,
      },
    },
    {
      feature: 'Basic on-page SEO setup',
      values: {
        'landing-page': true,
        'business-website': true,
        'professional-website': true,
        ecommerce: true,
        'full-stack-application': false,
        maintenance: false,
      },
    },
    {
      feature: 'Contact / inquiry form',
      values: {
        'landing-page': 'One form',
        'business-website': 'Inquiry form',
        'professional-website': 'Contact forms',
        ecommerce: true,
        'full-stack-application': 'Scoped',
        maintenance: false,
      },
    },
    {
      feature: 'WhatsApp contact integration',
      values: {
        'landing-page': false,
        'business-website': true,
        'professional-website': true,
        ecommerce: true,
        'full-stack-application': 'Scoped',
        maintenance: false,
      },
    },
    {
      feature: 'Product catalogue, cart & checkout',
      values: {
        'landing-page': false,
        'business-website': false,
        'professional-website': false,
        ecommerce: true,
        'full-stack-application': 'Scoped',
        maintenance: false,
      },
    },
    {
      feature: 'Payment gateway integration',
      values: {
        'landing-page': false,
        'business-website': false,
        'professional-website': false,
        ecommerce: 'Where feasible',
        'full-stack-application': 'By scope',
        maintenance: false,
      },
    },
    {
      feature: 'Admin dashboard',
      values: {
        'landing-page': false,
        'business-website': false,
        'professional-website': false,
        ecommerce: 'Basic order view',
        'full-stack-application': 'Where agreed',
        maintenance: false,
      },
    },
    {
      feature: 'User accounts / login',
      values: {
        'landing-page': false,
        'business-website': false,
        'professional-website': false,
        ecommerce: false,
        'full-stack-application': 'If required',
        maintenance: false,
      },
    },
    {
      feature: 'Backend, database & REST APIs',
      values: {
        'landing-page': false,
        'business-website': false,
        'professional-website': false,
        ecommerce: false,
        'full-stack-application': 'By scope',
        maintenance: false,
      },
    },
    {
      feature: 'Revision rounds',
      values: {
        'landing-page': '2',
        'business-website': '2',
        'professional-website': '3',
        ecommerce: 'In scope',
        'full-stack-application': 'In scope',
        maintenance: false,
      },
    },
    {
      feature: 'Deployment assistance & handover',
      values: {
        'landing-page': true,
        'business-website': true,
        'professional-website': true,
        ecommerce: true,
        'full-stack-application': true,
        maintenance: false,
      },
    },
    {
      feature: 'Routine fixes, updates & backups',
      values: {
        'landing-page': { text: 'Optional add-on', muted: true },
        'business-website': { text: 'Optional add-on', muted: true },
        'professional-website': { text: 'Optional add-on', muted: true },
        ecommerce: { text: 'Optional add-on', muted: true },
        'full-stack-application': { text: 'Optional add-on', muted: true },
        maintenance: true,
      },
    },
    {
      feature: 'New feature development',
      values: {
        'landing-page': { text: 'Quoted separately', muted: true },
        'business-website': { text: 'Quoted separately', muted: true },
        'professional-website': { text: 'Quoted separately', muted: true },
        ecommerce: { text: 'Quoted separately', muted: true },
        'full-stack-application': { text: 'Quoted separately', muted: true },
        maintenance: { text: 'Quoted separately', muted: true },
      },
    },
  ],
}

/** Formats an integer rupee amount with Indian digit grouping. */

export function formatINR(amount) {
  return `\u20b9${new Intl.NumberFormat('en-IN').format(amount)}`
}
