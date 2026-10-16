/**
 * Service catalogue.
 *
 * `tier` separates standard website development from advanced backend /
 * integration work so visitors can tell the difference at a glance.
 */
export const serviceTiers = {
  website: { label: 'Website development', tone: 'brand' },
  advanced: { label: 'Advanced & custom development', tone: 'ink' },
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
]
