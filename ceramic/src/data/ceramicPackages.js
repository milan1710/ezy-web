/**
 * Ceramic growth packages — the single source of truth for every monthly
 * service charge shown on the ceramic presentation and sent to WhatsApp.
 *
 * All service charges are monthly. GST is charged extra wherever applicable.
 * Advertising budget is separate from the monthly service charge. No specific
 * number of inquiries, leads or sales is guaranteed.
 */

export const ceramicPackages = [
  {
    id: 'ceramic-starter',
    number: '01',
    name: 'Starter',
    price: '₹30,000',
    priceValue: 30000,
    priceSuffix: '/ month',
    positioning:
      'Ideal for ceramic businesses beginning a structured digital growth programme.',
    deliverables: [
      'Ceramic business website and product catalogue',
      '12 social media creatives per month',
      '4 product videos / reels per month',
      'Meta Ads management',
      'Buyer and dealer inquiry campaigns',
      'WhatsApp integration and lead tracking',
      'Monthly performance report',
    ],
    recommended: false,
  },
  {
    id: 'ceramic-growth',
    number: '02',
    name: 'Growth',
    price: '₹75,000',
    priceValue: 75000,
    priceSuffix: '/ month',
    positioning:
      'Ideal for businesses seeking broader reach and market expansion.',
    deliverables: [
      'Advanced website and product catalogue',
      '20 social media creatives per month',
      '8 product videos / reels per month',
      'Meta Ads and Google Ads management',
      'Buyer and dealer inquiry campaigns',
      'Buyer/dealer landing pages',
      'CRM lead tracking and remarketing',
      'Detailed monthly performance report',
    ],
    recommended: true,
  },
  {
    id: 'ceramic-advanced',
    number: '03',
    name: 'Advanced',
    price: '₹1,50,000',
    priceValue: 150000,
    priceSuffix: '/ month',
    positioning:
      'For businesses seeking stronger digital visibility and a broader growth programme.',
    deliverables: [
      'Advanced website and catalogue management',
      '30 social media creatives per month',
      '12 product videos / reels per month',
      'Meta Ads and Google Ads management',
      'Domestic buyer and dealer acquisition',
      'CRM automation and lead tracking',
      'SEO and conversion tracking',
      'Monthly strategy review and reporting',
    ],
    recommended: false,
  },
  {
    id: 'ceramic-premium',
    number: '04',
    name: 'Premium',
    price: '₹2,25,000',
    priceValue: 225000,
    priceSuffix: '/ month',
    positioning:
      'For ceramic businesses focused on international buyer discovery and export markets.',
    deliverables: [
      'Export-focused website and product catalogue',
      '30 social media creatives per month',
      '12 product videos / reels per month',
      'International buyer campaigns',
      'Meta Ads and Google Ads management',
      'Selected-country landing pages',
      'Export inquiry forms',
      'CRM, lead tracking and reporting',
    ],
    recommended: false,
  },
  {
    id: 'ceramic-enterprise',
    number: '05',
    name: 'Enterprise',
    price: '₹3,00,000',
    priceValue: 300000,
    priceSuffix: '/ month',
    positioning:
      'For established businesses seeking a comprehensive domestic, dealer and export programme.',
    deliverables: [
      'Custom website and advanced product catalogue',
      '40 social media creatives per month',
      '16 product videos / reels per month',
      'Domestic, dealer and export campaigns',
      'Meta Ads and Google Ads management',
      'SEO and CRM automation',
      'Dedicated account management',
      'Detailed reporting and growth reviews',
    ],
    recommended: false,
  },
]

export const packageResultsNote =
  'No specific number of inquiries, leads or sales is guaranteed. Results depend on targeting, competition, market conditions, campaign execution, landing-page conversion and lead qualification.'

export const packageCommercialNote =
  'GST extra wherever applicable. Advertising budget is separate from the monthly service charge and is paid directly to the advertising platform. Third-party expenses and additional production or travel requirements must be agreed separately where applicable.'

/**
 * Prefilled WhatsApp copy for a selected package.
 *
 * Always includes the selected package name and its updated monthly service
 * charge. Advertising budget and GST are called out separately, and no result
 * is promised.
 */
export function buildPackageMessage(pkg) {
  return [
    'Hello Ezy Digital,',
    '',
    'I am interested in your Ceramic Industry Marketing Package.',
    '',
    `Package: ${pkg.name}`,
    `Monthly Service Charge: ${pkg.price} ${pkg.priceSuffix.replace('/', 'per').trim()}`,
    '',
    'Advertising budget is separate from the service charge. GST is extra.',
    '',
    'Please share the complete details.',
  ].join('\n')
}

export default ceramicPackages
