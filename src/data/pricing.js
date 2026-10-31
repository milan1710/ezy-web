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
  'Management plans cover the campaigns and ad sets listed in the agreed scope, not unlimited businesses, brands, ad accounts or unrelated projects.',
  'Campaign restructuring, additional creative production and substantial extra work may require a separate quotation.',
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
    startingPrice: 3999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience:
      'Small businesses and individuals who need a professional online presence.',
    description:
      'A compact, mobile-friendly website that presents your business clearly and makes it easy for customers to call or message you.',
    features: [
      '3–5 website pages',
      'Mobile-responsive layout',
      'Basic business information',
      'Services or product information',
      'WhatsApp contact button',
      'Contact details',
      'Basic on-page SEO structure',
    ],
    excludes:
      'Domain registration, hosting, premium themes or plugins, content writing, paid integrations and ongoing maintenance are not included.',
    ctaLabel: 'Choose Basic Website',
    route: '/website-development/pricing',
  },
  {
    id: 'professional-website',
    order: 2,
    active: true,
    category: 'website',
    name: 'Professional Website',
    icon: 'PenTool',
    startingPrice: 7999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    highlight: true,
    badge: 'Recommended option',
    audience:
      'Growing businesses that need a more customized design and a conversion-focused layout.',
    description:
      'A more customized business website with clear service sections, a contact form and a layout built around enquiries.',
    features: [
      '5–8 website pages',
      'More customized design',
      'Business and service sections',
      'Contact form',
      'WhatsApp integration',
      'Basic on-page SEO',
      'Improved navigation and conversion-focused layout',
    ],
    excludes:
      'Domain registration, hosting, premium plugins, paid API access, content writing and maintenance are not included. Scope is confirmed in writing.',
    ctaLabel: 'Choose Professional Website',
    route: '/website-development/pricing',
  },
  {
    id: 'business-website',
    order: 3,
    active: true,
    category: 'website',
    name: 'Business Website',
    icon: 'Building2',
    startingPrice: 14999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience:
      'Established businesses that need detailed service sections and lead-generation forms.',
    description:
      'An advanced business website with custom page layouts, detailed service content and enquiry-focused lead generation.',
    features: [
      'Advanced business website design',
      'Detailed service sections',
      'Lead-generation forms',
      'Custom page layouts',
      'WhatsApp integration',
      'Basic SEO configuration',
      'Additional business-focused sections',
    ],
    excludes:
      'Domain registration, hosting, premium plugins, paid APIs, content writing, payment gateway charges and maintenance are quoted separately.',
    ctaLabel: 'Choose Business Website',
    route: '/website-development/pricing',
  },
  {
    id: 'ecommerce',
    order: 4,
    active: true,
    category: 'website',
    name: 'E-commerce Website',
    icon: 'ShoppingCart',
    startingPrice: 19999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience: 'Businesses that want to sell products online.',
    description:
      'An online store with a product catalogue, cart, checkout and order management, built to work on phones as well as desktops.',
    features: [
      'Product catalogue and categories',
      'Product detail pages',
      'Shopping cart',
      'Checkout functionality',
      'Order management',
      'Payment gateway integration where included in the agreed scope',
      'Mobile-responsive shopping experience',
    ],
    excludes:
      'Payment gateway charges, third-party subscriptions, hosting, domain and other external service fees may be additional. Product photography and catalogue content are not included.',
    ctaLabel: 'Discuss E-commerce Project',
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
    name: 'Campaign Setup',
    icon: 'Rocket',
    startingPrice: 999,
    priceSuffix: 'one-time',
    billing: 'one-time',
    startingAt: true,
    audience: 'A business that needs its first Facebook or Instagram campaign configured.',
    description:
      'One Meta advertising campaign configured and ready to launch, including one ad set, targeting and basic campaign settings.',
    features: [
      'Setup of one Meta advertising campaign',
      'One ad set',
      'Audience and location targeting',
      'Ad copy setup',
      'Basic campaign configuration',
      'Basic optimization settings',
    ],
    excludes: [
      'Meta advertising spend',
      'Creative production or video editing',
      'Advanced tracking and pixel configuration',
      'Ongoing management and optimization',
      'Additional campaigns or ad sets',
    ],
    clarification:
      'The ₹999 fee covers campaign setup only. Creative production, advanced tracking, ongoing optimization and additional campaigns are scoped and quoted separately.',
    ctaLabel: 'Start Campaign Setup',
    highlight: false,
    route: '/meta-ads-management',
  },
  {
    id: 'meta-basic-management',
    order: 2,
    active: true,
    category: 'meta-ads',
    name: 'Basic Ads Management',
    icon: 'Target',
    startingPrice: 2999,
    priceSuffix: 'per month',
    billing: 'monthly',
    startingAt: false,
    audience: 'Businesses running a small, focused campaign that needs regular monitoring.',
    description:
      'Basic ongoing campaign management with monitoring, routine optimization and reporting within the agreed scope.',
    features: [
      'Basic ongoing campaign management',
      'Campaign monitoring',
      'Basic optimization',
      'Reporting according to the agreed scope',
    ],
    excludes: [
      'Meta advertising spend',
      'Video production and editing',
      'Additional campaigns outside the agreed scope',
      'Landing page or website development',
    ],
    ctaLabel: 'Discuss My Advertising Requirements',
    highlight: false,
    route: '/meta-ads-management',
  },
  {
    id: 'meta-growth-management',
    order: 3,
    active: true,
    category: 'meta-ads',
    name: 'Growth Ads Management',
    icon: 'TrendingUp',
    startingPrice: 4999,
    priceSuffix: 'per month',
    billing: 'monthly',
    startingAt: false,
    audience: 'Businesses that want structured audience and creative testing on their campaigns.',
    description:
      'Ongoing campaign management with audience and creative testing where applicable, optimization and a performance review.',
    features: [
      'Ongoing campaign management',
      'Audience and creative testing where applicable',
      'Campaign optimization',
      'Performance review',
    ],
    excludes: [
      'Meta advertising spend',
      'Video production and editing',
      'Additional creatives beyond the agreed scope',
      'Landing page or website development',
    ],
    ctaLabel: 'Discuss My Advertising Requirements',
    highlight: true,
    badge: 'Most practical for growth',
    route: '/meta-ads-management',
  },
  {
    id: 'meta-professional-management',
    order: 4,
    active: true,
    category: 'meta-ads',
    name: 'Professional Ads Management',
    icon: 'LayoutDashboard',
    startingPrice: 7999,
    priceSuffix: 'per month',
    billing: 'monthly',
    startingAt: false,
    audience: 'Businesses running multiple campaigns that need structured testing and analysis.',
    description:
      'More comprehensive campaign management with structured testing, optimization, performance analysis and reporting within scope.',
    features: [
      'More comprehensive campaign management',
      'Structured testing and optimization',
      'Performance analysis',
      'Reporting according to the agreed scope',
    ],
    excludes: [
      'Meta advertising spend',
      'Video production and editing',
      'Unlimited campaigns or ad accounts',
      'Landing page or website development',
    ],
    ctaLabel: 'Discuss My Advertising Requirements',
    highlight: false,
    route: '/meta-ads-management',
  },
].sort((a, b) => a.order - b.order)

/* -------------------------------------------------------------------------- */
/* Video editing packages                                                     */
/* -------------------------------------------------------------------------- */

export const videoEditingNote =
  'All video prices are "starting at" prices per edited video. The final price depends on video duration, footage supplied, editing complexity, revisions and the agreed deliverables.'

export const videoEditingScopeConditions = [
  'Prices assume footage, brand assets and product information are supplied by the client in a usable format.',
  'Video shooting, voice-over, advanced animation and licensed music or stock footage may be quoted separately.',
  'Each package includes a defined revision allowance confirmed in writing before work starts. Unlimited revisions are not included.',
  'Final video duration and the number of output formats are agreed before editing begins.',
  'Social media posting, ad campaign setup and advertising spend are not included in video editing prices.',
]

export const videoPackages = [
  {
    id: 'basic-reel',
    order: 1,
    active: true,
    category: 'video',
    name: 'Basic Reel',
    icon: 'Video',
    startingPrice: 499,
    priceSuffix: 'per Reel',
    billing: 'per video',
    startingAt: true,
    audience: 'A straightforward short Reel cut from footage you already have.',
    description:
      'A clean, well-paced vertical Reel for social media, delivered from supplied footage with basic cuts and captions.',
    features: [
      'Vertical Reel edit from supplied footage',
      'Basic cuts and sequence assembly',
      'Basic text or captions where required',
      'Export in a social-media-ready format',
      'Revision allowance confirmed in writing',
    ],
    excludes:
      'Video shooting, advanced animation, voice-over, licensed music and unlimited revisions are not included.',
    ctaLabel: 'Get Video Editing Quote',
    route: '/video-editing',
  },
  {
    id: 'promotional-reel',
    order: 2,
    active: true,
    category: 'video',
    name: 'Promotional Reel',
    icon: 'Clapperboard',
    startingPrice: 999,
    priceSuffix: 'per Reel',
    billing: 'per video',
    startingAt: true,
    audience: 'Businesses that need a polished promotional Reel for a product, service or offer.',
    description:
      'A promotional Reel with a clear structure, branded text, transitions and pacing designed for social media viewing.',
    features: [
      'Promotional Reel structure and pacing',
      'Branded titles and text overlays',
      'Transitions and basic motion elements',
      'Background music where licensing allows',
      'Export in a social-media-ready format',
      'Revision allowance confirmed in writing',
    ],
    excludes:
      'Video shooting, advanced animation, voice-over, paid stock footage and unlimited revisions are not included.',
    ctaLabel: 'Get Video Editing Quote',
    highlight: true,
    badge: 'Popular format',
    route: '/video-editing',
  },
  {
    id: 'premium-ad-video',
    order: 3,
    active: true,
    category: 'video',
    name: 'Premium Ad Video',
    icon: 'Film',
    startingPrice: 1999,
    priceSuffix: 'per video',
    billing: 'per video',
    startingAt: true,
    audience: 'Businesses that need a longer, more detailed video for advertising or their website.',
    description:
      'A longer promotional or advertising video with a more detailed edit, branded graphics and multiple output formats.',
    features: [
      'Longer-form promotional or ad video edit',
      'Branded graphics and text treatment',
      'Multiple output formats where required',
      'Advertising-ready aspect ratios',
      'Revision allowance confirmed in writing',
    ],
    excludes:
      'Video shooting, advanced 3D animation, professional voice-over, paid stock footage and unlimited revisions are not included.',
    ctaLabel: 'Get Video Editing Quote',
    route: '/video-editing',
  },
].sort((a, b) => a.order - b.order)

export const videoMonthlyPackages = [
  {
    id: 'video-monthly-8',
    active: true,
    category: 'video',
    name: '8 Reels',
    startingPrice: 5999,
    priceSuffix: 'per month',
    billing: 'monthly',
    startingAt: false,
    description: 'Eight edited Reels per month within one agreed content plan.',
    features: [
      '8 edited Reels per month',
      'Basic or promotional edit level, as agreed',
      'Consistent captions and brand styling',
      'Delivery across the month as scheduled',
    ],
    note: 'Footage supplied by the client. Extra Reels, shooting days and advanced animation are quoted separately.',
  },
  {
    id: 'video-monthly-12',
    active: true,
    category: 'video',
    name: '12 Reels',
    startingPrice: 8999,
    priceSuffix: 'per month',
    billing: 'monthly',
    startingAt: false,
    description: 'Twelve edited Reels per month for businesses posting consistently.',
    features: [
      '12 edited Reels per month',
      'Basic or promotional edit level, as agreed',
      'Consistent captions and brand styling',
      'Delivery across the month as scheduled',
    ],
    note: 'Footage supplied by the client. Extra Reels, shooting days and advanced animation are quoted separately.',
  },
]

/* -------------------------------------------------------------------------- */
/* Additional digital services                                                */
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
    startingPrice: 499,
    priceSuffix: 'onwards',
    startingAt: true,
    note: 'Shooting, advanced animation, voice-over and complex editing may cost extra. Full video packages are listed on the Video Editing page.',
    route: '/video-editing',
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
  return [...websitePackages, ...metaAdsPackages, ...videoPackages, ...videoMonthlyPackages].find(
    (pkg) => pkg.id === id,
  )
}

/** Builds the standard WhatsApp message used by pricing CTAs. */
export function packageEnquiryMessage(pkg) {
  const amount = `${formatINR(pkg.startingPrice)}${
    pkg.priceSuffix === 'per month' || pkg.priceSuffix === 'per Reel' || pkg.priceSuffix === 'per video'
      ? ` ${pkg.priceSuffix}`
      : ''
  }`
  return `Hello Ezy Digital, I am interested in the ${pkg.name} package starting at ${amount}. Please share the details and a quotation.`
}

/* -------------------------------------------------------------------------- */
/* Website package comparison matrix                                          */
/* -------------------------------------------------------------------------- */

const matrixColumns = [
  { id: 'basic-website', label: 'Basic' },
  { id: 'professional-website', label: 'Professional' },
  { id: 'business-website', label: 'Business' },
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
        'basic-website': '3–5',
        'professional-website': '5–8',
        'business-website': 'Custom layout',
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
        'basic-website': false,
        'professional-website': 'Contact form',
        'business-website': 'Lead forms',
        ecommerce: true,
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Google Maps integration',
      values: {
        'basic-website': false,
        'professional-website': 'Where agreed',
        'business-website': true,
        ecommerce: 'Where agreed',
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Basic on-page SEO',
      values: {
        'basic-website': 'Basic structure',
        'professional-website': true,
        'business-website': true,
        ecommerce: 'Basic',
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Custom premium design',
      values: {
        'basic-website': false,
        'professional-website': 'More customized',
        'business-website': true,
        ecommerce: true,
        'custom-website': true,
      },
    },
    {
      feature: 'Google Analytics setup',
      values: {
        'basic-website': false,
        'professional-website': 'With access',
        'business-website': 'With access',
        ecommerce: 'With access',
        'custom-website': 'By scope',
      },
    },
    {
      feature: 'Product catalogue & categories',
      values: {
        'basic-website': 'Services / products',
        'professional-website': true,
        'business-website': true,
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





