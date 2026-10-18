/** Central navigation configuration for the ceramic micro-site. */

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'Growth Solutions', to: '/solutions' },
  { label: 'Dealer & Distributor', to: '/solutions/dealer-distributor-growth' },
  { label: 'Export Growth', to: '/solutions/export-growth' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Ceramic Demo', to: '/ceramic-demo' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const solutionNav = [
  {
    label: 'Buyer Inquiry Generation',
    to: '/solutions/buyer-lead-generation',
    description: 'A structured path from product discovery to a qualified inquiry.',
  },
  {
    label: 'Dealer & Distributor Growth',
    to: '/solutions/dealer-distributor-growth',
    description: 'Landing pages and qualification forms for new channel partners.',
  },
  {
    label: 'Export Business Growth',
    to: '/solutions/export-growth',
    description: 'An English export website and inquiry paths for international buyers.',
  },
  {
    label: 'Ceramic Website & Catalogue',
    to: '/solutions/ceramic-website',
    description: 'Category-wise product presentation with usable inquiry actions.',
  },
  {
    label: 'Digital Marketing',
    to: '/solutions/digital-marketing',
    description: 'Search, social and campaign support with clear limitations.',
  },
]

export const footerSolutionLinks = [
  { label: 'All Growth Solutions', to: '/solutions' },
  ...solutionNav.map(({ label, to }) => ({ label, to })),
]

export const footerCompanyLinks = [
  { label: 'About Ezy Digital', to: '/about' },
  { label: 'Ceramic Website Demo', to: '/ceramic-demo' },
  { label: 'Ceramic Pricing', to: '/pricing' },
  { label: 'Contact & Growth Audit', to: '/contact' },
]

export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

export default primaryNav
