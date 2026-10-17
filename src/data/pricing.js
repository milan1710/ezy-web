/**
 * CENTRAL PRICING & SERVICE CATALOGUE
 * ---------------------------------------------------------------------------
 * This is the single source of truth for every price shown on the website:
 * homepage pricing sections, service pages, comparison matrix, enquiry form
 * options and WhatsApp enquiry messages.
 *
 * Change a number here once and it updates everywhere. Prices are PROPOSED
 * "starting at" prices in Indian rupees, not verified market averages.
 *
 * To add or retire a package, set `active` to true/false and keep `order`
 * sequential. Components filter on `active`.
 */

/* -------------------------------------------------------------------------- */
/* Shared pricing copy                                                        */
/* -------------------------------------------------------------------------- */

export const websitePricingNote =
  'All website prices are "starting at" prices in Indian rupees. The final quotation depends on your exact requirements, number of pages, design depth, functionality and the approved scope.'

export const websitePricingExclusions =
  'Domain registration, hosting, premium themes or plugins, paid third-party APIs, payment gateway charges, content creation, maintenance and applicable taxes may be charged separately.'

export const pricingConditions = [
  'Every package shows a "Starting at" price. It is not a fixed price for every possible feature.',
  'The final price is confirmed in a written quotation after the requirement and scope are agreed.',
  'Domain, hosting, premium plugins, paid APIs, third-party subscriptions, payment gateway fees, content creation and maintenance may be additional.',
  'Work outside the approved scope is quoted separately before it is started.',
  'No package guarantees a fixed number of leads, sales, calls, conversions or search rankings.',
]

export const metaAdsBudgetDisclaimer =
  'Meta Ads budget is not included in the service fee. The client pays advertising charges separately through their own Meta advertising account.'

export const metaAdsPricingNote =
  'Service charges below cover setup and/or management work only. They do not include the amount you spend on Meta advertising, video production, or third-party tools.'

export const metaAdsUnlimitedConditions = [
  'Campaign setup is available as required during the subscription period, within the agreed service scope.',
  'Campaign setup does not mean unlimited new businesses, brands, ad accounts or unrelated projects.',
  'Major campaign restructuring, repeated changes, additional creative production and substantial additional work may require a separate quotation.',
  'The client must provide the necessary Meta Business Portfolio, ad account access, payment method, business information and creative approvals.',
  'No guarantee of a fixed number of leads, sales, calls or conversions is made or implied.',
]

export const additionalServicesNote =
  'Amounts shown as "onwards" depend on complexity, quantity and turnaround time. Video shooting, advanced animation, voice-over, complex editing and out-of-scope revisions may cost extra.'

export const seoDisclaimer =
  'SEO work follows sound on-page and technical practices. Google rankings, traffic and lead volumes are not guaranteed.'

export const googleBusinessDisclaimer =
  'Google Business Profile setup assistance does not guarantee profile verification, ranking or review results. Verification decisions are made by Google.'

export const maintenanceNote =
  'Website maintenance includes routine fixes, updates, backups and a clearly limited monthly support allowance. New features, redesigns and large content updates are quoted separately.'

/* -------------------------------------------------------------------------- */
/* Website development packages                                               */
/* -------------------------------------------------------------------------- */

export const websitePackages = [
  {
    id: 'basic-website',
    order: 1,
    active: true,
    category: 'website',
    name: 'Basic Website',
    icon: 'Rocket',
    startingPrice: 2999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience:
      'Small businesses, local shops, freelancers and service providers who need a clean presence online.',
    description:
      'A compact, mobile-friendly website that explains what you do and makes it easy for customers to call or message you.',
    features: [
      '1–5 website pages',
      'Mobile-friendly responsive design',
      'Business information section',
      'Services section',
      'WhatsApp contact button',
      'Click-to-call button',
      'Contact form',
      'Basic website layout and navigation',
    ],
    excludes:
      'Domain, hosting, paid plugins, content writing, advanced integrations and ongoing maintenance are not included.',
    ctaLabel: 'Get Basic Website',
    route: '/website-development/pricing',
  },
  {
    id: 'business-website',
    order: 2,
    active: true,
    category: 'website',
    name: 'Business Website',
    icon: 'Building2',
    startingPrice: 5999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience: 'Growing businesses and professional service providers.',
    description:
      'A complete business website with a premium layout, service pages and the contact tools most local businesses need.',
    features: [
      '5–8 website pages',
      'Premium business-focused design',
      'Services and products sections',
      'WhatsApp integration',
      'Contact form',
      'Google Maps integration',
      'Basic on-page SEO',
      'Responsive mobile and desktop layout',
    ],
    excludes:
      'Domain, hosting, paid plugins, paid API access and ongoing maintenance are not included. Content writing is quoted separately.',
    ctaLabel: 'Choose Business Website',
    route: '/website-development/pricing',
  },
  {
    id: 'professional-website',
    order: 3,
    active: true,
    category: 'website',
    name: 'Professional Website',
    icon: 'PenTool',
    startingPrice: 9999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience: 'Established businesses that need a more advanced online presence.',
    description:
      'A custom-designed website with a larger page structure, catalogue sections and enquiry-focused lead generation.',
    features: [
      '8–12 website pages',
      'Custom design',
      'Product or service catalogue',
      'Enquiry and lead generation forms',
      'SEO-friendly website structure',
      'Google Analytics integration, subject to access and configuration',
      'Responsive website layout',
    ],
    excludes:
      'Google Analytics access must be provided by the client. Domain, hosting, paid tools, content writing and maintenance are extra.',
    ctaLabel: 'Get Professional Website',
    route: '/website-development/pricing',
  },
  {
    id: 'ecommerce',
    order: 4,
    active: true,
    category: 'website',
    name: 'E-commerce Website',
    icon: 'ShoppingCart',
    startingPrice: 14999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience: 'Businesses that want to sell products online.',
    description:
      'An online store with product listings, cart, checkout and order management, built to work on phones as well as desktops.',
    features: [
      'Online product selling functionality',
      'Product listing and categories',
      'Shopping cart',
      'Checkout flow',
      'Order management functionality',
      'Payment gateway integration',
      'Mobile-friendly design',
      'Product catalogue and product details pages',
    ],
    excludes:
      'Payment gateway charges, third-party subscriptions, hosting, domain and other external service fees may be additional. Product photography and content are not included.',
    ctaLabel: 'Build My Online Store',
    route: '/ecommerce-website-development',
  },
  {
    id: 'custom-website',
    order: 5,
    active: true,
    category: 'website',
    name: 'Custom Website / Web Application',
    icon: 'Server',
    startingPrice: 25000,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience: 'Businesses requiring custom workflows or application functionality.',
    description:
      'A scoped custom build with an admin panel, database and the workflows your business actually needs.',
    features: [
      'Custom functionality',
      'Admin panel',
      'Database integration',
      'Customer and lead management',
      'API integration',
      'Custom business workflow development',
      'Feature scope determined by project requirements',
    ],
    excludes:
      'This starting price covers a limited, clearly scoped build. Large systems, complex workflows and extensive integrations need a project-specific quotation.',
    ctaLabel: 'Discuss Custom Project',
    route: '/custom-web-applications',
  },
].sort((a, b) => a.order - b.order)

/** Backwards-compatible alias used by existing website components. */
export const packages = websitePackages.filter((pkg) => pkg.active)

/* -------------------------------------------------------------------------- */
/* Meta Ads packages                                                          */
/* -------------------------------------------------------------------------- */

export const metaAdsPackages = [
  {
    id: 'meta-single-campaign',
    order: 1,
    active: true,
    category: 'meta-ads',
    name: 'Single Campaign Setup',
    icon: 'Rocket',
    startingPrice: 1000,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: false,
    audience: 'A business running its first Facebook or Instagram campaign.',
    description:
      'One Meta advertising campaign configured and ready to launch, including targeting and a static poster.',
    features: [
      'Setup of one Meta advertising campaign',
      'Basic campaign objective configuration',
      'Audience targeting',
      'Location targeting',
      'Ad copy setup',
      'One static ad poster',
      'Basic campaign configuration',
      'Basic optimization settings',
    ],
    excludes: [
      'Video editing',
      'Video shooting',
      'Meta advertising spend',
      'Additional creative work outside the agreed scope',
      'Ongoing monthly management unless separately purchased',
    ],
    ctaLabel: 'Start Single Campaign',
    highlight: false,
    route: '/meta-ads-management',
  },
  {
    id: 'meta-multiple-campaigns',
    order: 2,
    active: true,
    category: 'meta-ads',
    name: 'Multiple Campaign Setup',
    icon: 'LayoutDashboard',
    startingPrice: 1500,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: false,
    audience: 'Businesses that need two campaigns running at the same time.',
    description:
      'Two Meta campaigns set up with audience, location and copy configuration plus up to 2–3 basic posters.',
    features: [
      'Setup of two Meta ad campaigns',
      'Audience targeting',
      'Location targeting',
      'Ad copy and campaign configuration',
      'Up to 2–3 basic poster creatives, according to the approved scope',
      'Basic campaign optimization settings',
    ],
    excludes: [
      'Video editing',
      'Video shooting',
      'Meta advertising spend',
      'Ongoing monthly management unless separately purchased',
    ],
    clarification:
      '₹1,500 is a one-time charge for two campaign setups. It is not unlimited ongoing campaign management.',
    ctaLabel: 'Set Up Two Campaigns',
    highlight: false,
    route: '/meta-ads-management',
  },
  {
    id: 'meta-social-management',
    order: 3,
    active: true,
    category: 'meta-ads',
    name: 'Complete Social Media + Meta Ads Management',
    icon: 'Sparkles',
    startingPrice: 5000,
    priceSuffix: 'per month',
    billing: 'monthly',
    startingAt: false,
    audience: 'Businesses that want their Facebook and Instagram presence handled every month.',
    description:
      'Monthly page management, up to 12 static posters, campaign setup within the agreed scope, monitoring and one performance report.',
    features: [
      'Facebook page management',
      'Instagram page management',
      'Up to 12 static social media posters per month',
      'Unlimited campaign setup within the agreed service scope',
      'Ad copy preparation',
      'Audience and location targeting',
      'Campaign monitoring',
      'Campaign optimization',
      'Basic performance monitoring',
      'One monthly performance report',
    ],
    excludes: [
      'Meta ad spend',
      'Video shooting and video editing',
      'Reel production',
      'Additional posters beyond the agreed monthly limit',
      'Website development',
      'Landing page development',
      'Paid third-party tools and subscriptions',
      'Additional work outside the agreed scope',
    ],
    highlight: true,
    badge: 'Monthly management',
    ctaLabel: 'Start Monthly Management',
    route: '/meta-ads-management',
  },
].sort((a, b) => a.order - b.order)

/* -------------------------------------------------------------------------- */
/* Additional digital services                                               */
/* -------------------------------------------------------------------------- */

export const additionalServices = [
  {
    id: 'single-social-poster',
    name: 'Single Social Media Poster Design',
    startingPrice: 200,
    priceSuffix: 'one-time',
    startingAt: false,
    note: 'Price per approved static poster.',
  },
  {
    id: 'ten-social-posters',
    name: '10 Social Media Posters',
    startingPrice: 1000,
    priceSuffix: 'one-time',
    startingAt: false,
    note: 'Ten static posters within one agreed content batch.',
  },
  {
    id: 'video-reel-editing',
    name: 'Basic Video / Reel Editing',
    startingPrice: 500,
    priceSuffix: 'onwards',
    startingAt: true,
    note: 'Shooting, advanced animation, voice-over and complex editing may cost extra.',
  },
  {
    id: 'logo-design',
    name: 'Logo Design',
    startingPrice: 1000,
    priceSuffix: 'onwards',
    startingAt: true,
    note: 'Number of concepts and revisions is agreed before work starts.',
  },
  {
    id: 'banner-brochure',
    name: 'Banner / Brochure Design',
    startingPrice: 500,
    priceSuffix: 'onwards',
    startingAt: true,
    note: 'Final price depends on size, pages and complexity.',
  },
  {
    id: 'visiting-card',
    name: 'Visiting Card Design',
    startingPrice: 300,
    priceSuffix: 'one-time',
    startingAt: false,
    note: 'Printing charges are not included.',
  },
  {
    id: 'google-business-profile',
    name: 'Google Business Profile Setup',
    startingPrice: 500,
    priceSuffix: 'one-time',
    startingAt: false,
    note: 'Verification and ranking are decided by Google and are not guaranteed.',
  },
  {
    id: 'website-content-writing',
    name: 'Website Content Writing',
    startingPrice: 500,
    priceSuffix: 'onwards',
    startingAt: true,
    note: 'Price depends on the number of pages and depth of content.',
  },
  {
    id: 'landing-page-design',
    name: 'Landing Page Design',
    startingPrice: 2000,
    priceSuffix: 'onwards',
    startingAt: true,
    note: 'Campaign-specific copy, integrations and forms may affect the final quote.',
  },
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    startingPrice: 2000,
    priceSuffix: 'onwards',
    startingAt: true,
    note: 'Rankings are not guaranteed. Scope is agreed before work starts.',
  },
  {
    id: 'website-maintenance',
    name: 'Website Maintenance',
    startingPrice: 1000,
    priceSuffix: 'per month',
    startingAt: true,
    note: 'Routine fixes, updates and backups within a limited monthly allowance.',
  },
]

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Formats an integer rupee amount with Indian digit grouping. */
export function formatINR(amount) {
  return `\u20b9${new Intl.NumberFormat('en-IN').format(amount)}`
}

/** Returns a package by id from any catalogue. */
export function findPackage(id) {
  return [...websitePackages, ...metaAdsPackages].find((pkg) => pkg.id === id)
}

/** Builds the standard WhatsApp message used by pricing CTAs. */
export function packageEnquiryMessage(pkg) {
  const amount = `${formatINR(pkg.startingPrice)}${
    pkg.priceSuffix === 'per month' ? ' per month' : ''
  }`
  return `Hello Ezy Digital, I am interested in the ${pkg.name} package starting at ${amount}. Please share the details and a quotation.`
}

/* -------------------------------------------------------------------------- */
/* Website package comparison matrix                                          */
/* -------------------------------------------------------------------------- */

const matrixColumns = [
  { id: 'basic-website', label: 'Basic' },
  { id: 'business-website', label: 'Business' },
  { id: 'professional-website', label: 'Professional' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'custom-website', label: 'Custom' },
]

export const packageMatrix = {
  columns: matrixColumns.map((column) => {
    const pkg = websitePackages.find((item) => item.id === column.id)
    return {
      ...column,
      price: pkg?.startingPrice,
      suffix: pkg?.priceSuffix,
    }
  }),

  rows: [
    {
      feature: 'Website pages',
      values: {
        'basic-website': '1–5',
        'business-website': '5–8',
        'professional-website': '8–12',
        ecommerce: 'Catalogue-led',
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Mobile-friendly responsive design',
      values: {
        'basic-website': true,
        'business-website': true,
        'professional-website': true,
        ecommerce: true,
        'custom-website': true,
      },
    },
    {
      feature: 'Business information & services sections',
      values: {
        'basic-website': true,
        'business-website': true,
        'professional-website': true,
        ecommerce: true,
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'WhatsApp contact button',
      values: {
        'basic-website': true,
        'business-website': true,
        'professional-website': true,
        ecommerce: true,
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Click-to-call button',
      values: {
        'basic-website': true,
        'business-website': true,
        'professional-website': true,
        ecommerce: true,
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Contact / enquiry form',
      values: {
        'basic-website': 'Basic form',
        'business-website': 'Contact form',
        'professional-website': 'Lead forms',
        ecommerce: true,
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Google Maps integration',
      values: {
        'basic-website': false,
        'business-website': true,
        'professional-website': true,
        ecommerce: 'Where agreed',
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Basic on-page SEO',
      values: {
        'basic-website': false,
        'business-website': true,
        'professional-website': true,
        ecommerce: 'Basic',
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Custom premium design',
      values: {
        'basic-website': false,
        'business-website': 'Premium layout',
        'professional-website': true,
        ecommerce: true,
        'custom-website': true,
      },
    },
    {
      feature: 'Google Analytics setup',
      values: {
        'basic-website': false,
        'business-website': false,
        'professional-website': 'With access',
        ecommerce: 'With access',
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Product catalogue & categories',
      values: {
        'basic-website': false,
        'business-website': 'Services / products',
        'professional-website': true,
        ecommerce: true,
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Cart, checkout & order management',
      values: {
        'basic-website': false,
        'business-website': false,
        'professional-website': false,
        ecommerce: true,
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Payment gateway integration',
      values: {
        'basic-website': false,
        'business-website': false,
        'professional-website': false,
        ecommerce: true,
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Admin panel & database',
      values: {
        'basic-website': false,
        'business-website': false,
        'professional-website': false,
        ecommerce: 'Order view',
        'custom-website': true,
      },
    },
    {
      feature: 'Customer & lead management',
      values: {
        'basic-website': false,
        'business-website': false,
        'professional-website': 'Enquiry forms',
        ecommerce: 'Orders',
        'custom-website': true,
      },
    },
    {
      feature: 'API & third-party integrations',
      values: {
        'basic-website': false,
        'business-website': { text: 'Quoted separately', muted: true },
        'professional-website': { text: 'Quoted separately', muted: true },
        ecommerce: 'Gateway included',
        'custom-website': true,
      },
    },
    {
      feature: 'Maintenance after launch',
      values: {
        'basic-website': { text: 'Optional add-on', muted: true },
        'business-website': { text: 'Optional add-on', muted: true },
        'professional-website': { text: 'Optional add-on', muted: true },
        ecommerce: { text: 'Optional add-on', muted: true },
        'custom-website': { text: 'Optional add-on', muted: true },
      },
    },
  ],
}





