/**
 * Pricing configuration — single source of truth for every price displayed.
 * All prices are starting prices, not final quotations.
 */

export const websitePackages = [
  {
    id: 'business',
    name: 'Ceramic Business Website',
    price: 9999,
    priceLabel: '₹9,999+',
    tagline: 'A professional foundation for a ceramic business.',
    bestFor: 'Manufacturers who need a credible website with essential product presentation.',
    features: [
      'Professional responsive website',
      'Company introduction and essential business pages',
      'Basic product presentation',
      'Contact and inquiry options',
      'Basic on-page SEO structure',
    ],
    note: 'Product count and revision limits are defined in the approved proposal.',
  },
  {
    id: 'catalogue',
    name: 'Ceramic Product Catalogue Website',
    price: 14999,
    priceLabel: '₹14,999+',
    tagline: 'Make the product range easier to browse and inquire about.',
    bestFor: 'Manufacturers with a wider range who need category-wise product pages.',
    features: [
      'Product categories and product cards',
      'Product detail pages',
      'Product specifications provided by the client',
      'Bulk inquiry options',
      'Dealer inquiry paths',
    ],
    note: 'Product photography, copywriting and translation are quoted separately.',
    featured: true,
  },
  {
    id: 'export',
    name: 'Ceramic Export Website',
    price: 24999,
    priceLabel: '₹24,999+',
    tagline: 'An English-first structure for international buyer discovery.',
    bestFor: 'Exporters and manufacturers targeting importers and overseas distributors.',
    features: [
      'Export-focused website structure',
      'English product pages',
      'Buyer inquiry forms',
      'Product catalogue',
      'Bulk quotation requests',
      'SEO-friendly structure',
    ],
    note: 'Actual export orders are not guaranteed; suitability and commercial terms matter.',
  },
  {
    id: 'advanced',
    name: 'Advanced Ceramic Website',
    price: 39999,
    priceLabel: '₹39,999+',
    tagline: 'For larger catalogues and more complex inquiry workflows.',
    bestFor: 'Brands needing custom filtering, larger catalogues or agreed integrations.',
    features: [
      'Advanced product catalogue',
      'Custom filtering',
      'Larger product management requirements',
      'Custom inquiry workflows',
      'Possible CRM or third-party integrations',
      'Admin features where included in the approved scope',
    ],
    note: 'Custom software integrations and admin panels are quoted separately.',
  },
]

export const marketingServices = [
  {
    id: 'meta-setup',
    name: 'Meta Ads Setup',
    priceLabel: '₹3,000+',
    priceSuffix: 'one-time',
    description:
      'Campaign structure, audiences, creative direction and conversion tracking setup for Facebook and Instagram.',
    considerations: 'Ad spend is separate. Creative production may be additional.',
  },
  {
    id: 'meta-management',
    name: 'Meta Ads Management',
    priceLabel: '₹8,000+',
    priceSuffix: 'per month',
    description:
      'Ongoing campaign management, audience and creative testing, inquiry review and monthly reporting.',
    considerations: 'Ad spend is separate. Scope and campaign count are agreed in writing.',
  },
  {
    id: 'google-management',
    name: 'Google Ads Management',
    priceLabel: '₹8,000+',
    priceSuffix: 'per month',
    description:
      'Search campaign structure, keyword and landing page alignment, negative keyword review and reporting.',
    considerations: 'Ad spend is separate. Account access and tracking requirements apply.',
  },
  {
    id: 'seo',
    name: 'Ceramic SEO',
    priceLabel: '₹8,000+',
    priceSuffix: 'per month',
    description:
      'On-page and technical improvements, product category structure, content planning and search visibility work.',
    considerations: 'Rankings and traffic outcomes are not guaranteed.',
  },
  {
    id: 'growth-package',
    name: 'Customized Digital Growth Package',
    priceLabel: '₹15,000+',
    priceSuffix: 'per month',
    description:
      'A scoped combination of website improvements, landing pages, campaigns, inquiry tracking and review.',
    considerations: 'Defined after understanding products, markets, budget and sales capacity.',
  },
]

export const pricingNotes = [
  'All prices are starting prices and not final quotations. Final scope is confirmed in a written proposal.',
  'Advertising budget is separate from campaign setup and management fees.',
  'Domain, hosting, premium tools, professional photography, video production, translation and third-party integrations may cost extra.',
  'Product count, page count, feature set, revision limits and campaign limits are defined before work begins.',
  'No agency can responsibly guarantee buyers, sales, dealer sign-ups, search rankings or export orders.',
  'Inquiry quality depends on targeting, offer, product competitiveness, pricing, response time and follow-up.',
]

export const pricingExclusions = [
  'Advertising media spend (Google, Meta or other platforms).',
  'Domain registration and hosting unless explicitly included.',
  'Professional product photography and videography.',
  'Copywriting or translation beyond the agreed scope.',
  'Paid stock assets, premium plugins and third-party licences.',
  'CRM subscriptions and custom software development.',
  'Ongoing content publishing unless included in the retainer.',
]

export const customProposalPoints = [
  'Your product categories and available product information.',
  'Target markets and priority buyer types.',
  'Current sales process and response capacity.',
  'Existing website, advertising accounts and tracking access.',
  'A realistic working budget for website, management and ad spend.',
]

export const getPackageById = (id) => websitePackages.find((item) => item.id === id)
