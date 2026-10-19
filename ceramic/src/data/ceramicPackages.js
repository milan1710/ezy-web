/**
 * Ceramic growth packages — the single source of truth for every price and
 * inquiry estimate shown on the ceramic presentation.
 *
 * All prices are monthly. GST is charged extra. Inquiry ranges are planning
 * estimates, not guaranteed results.
 */

export const ceramicPackages = [
  {
    id: 'ceramic-starter',
    number: '01',
    name: 'Ceramic Starter',
    price: '₹1,00,000',
    priceValue: 100000,
    priceSuffix: '/ month',
    inquiries: '200–500',
    inquiriesSuffix: '/ month',
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
    id: 'market-expansion',
    number: '02',
    name: 'Market Expansion',
    price: '₹2,50,000',
    priceValue: 250000,
    priceSuffix: '/ month',
    inquiries: '500–1,250',
    inquiriesSuffix: '/ month',
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
    id: 'ceramic-growth-pro',
    number: '03',
    name: 'Ceramic Growth Pro',
    price: '₹5,00,000',
    priceValue: 500000,
    priceSuffix: '/ month',
    inquiries: '1,000–2,500',
    inquiriesSuffix: '/ month',
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
    id: 'ceramic-export-growth',
    number: '04',
    name: 'Ceramic Export Growth',
    price: '₹7,50,000',
    priceValue: 750000,
    priceSuffix: '/ month',
    inquiries: '1,500–3,750',
    inquiriesSuffix: '/ month',
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
    id: 'ceramic-market-leadership',
    number: '05',
    name: 'Ceramic Market Leadership',
    price: '₹10,00,000',
    priceValue: 1000000,
    priceSuffix: '/ month',
    inquiries: '2,000–5,000',
    inquiriesSuffix: '/ month',
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

export const packageInquiryNote =
  'Inquiry figures are planning estimates, not guaranteed results. Actual performance depends on targeting, competition, market conditions, campaign execution, landing-page conversion and lead qualification.'

export const packageCommercialNote =
  'GST extra. Third-party expenses and additional production or travel requirements must be agreed upon separately where applicable.'

/** Prefilled WhatsApp copy for a selected package. */
export function buildPackageMessage(pkg) {
  return `Hello Ezy Digital, I am interested in the ${pkg.name} package at ${pkg.price} ${pkg.priceSuffix.replace('/', 'per')}. Please share the complete scope and next steps.`
}

export default ceramicPackages
