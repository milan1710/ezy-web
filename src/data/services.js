/**
 * Service catalogue.
 *
 * `tier` separates standard website development from advanced backend /
 * integration work so visitors can tell the difference at a glance.
 */
export const serviceTiers = {
  website: { label: 'Website development', tone: 'brand' },
  advanced: { label: 'Advanced & custom development', tone: 'ink' },
  marketing: { label: 'Digital marketing & creative', tone: 'brand' },
}

export const services = [
  {
    id: 'business-website',
    tier: 'website',
    icon: 'Building2',
    title: 'Business Website Development',
    summary:
      'A credible online home for your company that explains what you do and makes it easy to get in touch.',
    features: [
      'Professional company websites',
      'Company profile and service pages',
      'Contact and inquiry forms',
      'Mobile-responsive layouts',
    ],
  },
  {
    id: 'landing-pages',
    tier: 'website',
    icon: 'Rocket',
    title: 'Landing Page Development',
    summary:
      'Focused single-page builds for a product, service or campaign, structured around one clear action.',
    features: [
      'Product and service landing pages',
      'Campaign-specific layouts',
      'Lead generation forms',
      'Conversion-focused design',
    ],
  },
  {
    id: 'ecommerce',
    tier: 'website',
    icon: 'ShoppingCart',
    title: 'E-commerce Website Development',
    summary:
      'Sell online with a storefront that is easy to browse and simple for customers to buy from.',
    features: [
      'Product catalogues',
      'Product detail pages',
      'Shopping cart and checkout integration',
      'Payment gateway integration',
      'Order management',
      'Admin dashboard',
    ],
  },
  {
    id: 'react-websites',
    tier: 'website',
    icon: 'Atom',
    title: 'Custom React Website Development',
    summary:
      'Modern React interfaces built from reusable components for smooth, app-like browsing.',
    features: [
      'Modern React interfaces',
      'Reusable components',
      'Interactive user experiences',
      'API integrations',
    ],
  },
  {
    id: 'wordpress-cms',
    tier: 'website',
    icon: 'LayoutTemplate',
    title: 'WordPress & CMS Websites',
    summary:
      'Editable websites powered by a content management system, so your team can update content without a developer.',
    features: [
      'Editable business websites',
      'Blog and content management',
      'CMS configuration',
      'Theme customization where appropriate',
    ],
  },
  {
    id: 'redesign',
    tier: 'website',
    icon: 'Paintbrush',
    title: 'Website Redesign',
    summary:
      'Bring an outdated website up to modern standards without losing the content that already works.',
    features: [
      'Modern UI/UX',
      'Improved responsiveness',
      'Better content structure',
      'Performance and accessibility improvements',
    ],
  },
  {
    id: 'full-stack',
    tier: 'advanced',
    icon: 'Server',
    title: 'Full-Stack Web Development',
    summary:
      'Frontend and backend developed together - including the data, business logic and admin tools behind the interface.',
    features: [
      'Frontend and backend development',
      'REST APIs',
      'Authentication and authorization',
      'Database integration',
      'Admin dashboards',
      'Business logic and custom functionality',
    ],
  },
  {
    id: 'web-applications',
    tier: 'advanced',
    icon: 'LayoutDashboard',
    title: 'Web Application Development',
    summary:
      'Custom software in the browser for the workflows a normal website cannot handle.',
    features: [
      'Customer portals',
      'Business management systems',
      'Booking applications',
      'Reporting dashboards',
      'Custom workflow applications',
    ],
  },
  {
    id: 'integrations',
    tier: 'advanced',
    icon: 'Plug',
    title: 'API & Third-Party Integrations',
    summary:
      'Connecting your website to the services your business already depends on.',
    features: [
      'Payment providers',
      'CRM integrations',
      'Email integrations',
      'External API connections',
      'Analytics integrations',
    ],
  },
  {
    id: 'maintenance',
    tier: 'advanced',
    icon: 'Wrench',
    title: 'Website Maintenance',
    summary:
      'Ongoing care for a website that is already live, so it stays fast, current and secure.',
    features: [
      'Bug fixes',
      'Updates and backups',
      'Security maintenance',
      'Technical support',
    ],
  },
  {
    id: 'meta-ads',
    tier: 'marketing',
    icon: 'Megaphone',
    title: 'Meta Ads Management',
    summary:
      'Facebook and Instagram campaign setup, audience targeting, monitoring and monthly management through Meta Ads Manager.',
    features: [
      'Single and multiple campaign setup',
      'Audience and location targeting',
      'Ad copy and static creatives',
      'Campaign monitoring and optimization',
      'Monthly performance report',
    ],
    ctaLabel: 'View Meta Ads Pricing',
    to: '/meta-ads-management',
  },
  {
    id: 'social-media-management',
    tier: 'marketing',
    icon: 'Share2',
    title: 'Social Media Management',
    summary:
      'Monthly Facebook and Instagram page management with a defined poster allowance and reporting.',
    features: [
      'Facebook and Instagram pages',
      'Up to 12 static posters per month',
      'Ad copy preparation',
      'Campaign monitoring',
      'One monthly report',
    ],
    ctaLabel: 'View Social Media Plan',
    to: '/social-media-management',
  },
  {
    id: 'creative-services',
    tier: 'marketing',
    icon: 'Palette',
    title: 'Creative & Additional Digital Services',
    summary:
      'Poster design, basic video or reel editing, logo design, brochures, visiting cards and content writing.',
    features: [
      'Social media poster design',
      'Logo and brochure design',
      'Basic video / reel editing',
      'Website content writing',
      'Landing pages and SEO groundwork',
    ],
    ctaLabel: 'View Additional Services',
    to: '/additional-digital-services',
  },
]
