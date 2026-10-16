/**
 * Portfolio showcase.
 *
 * IMPORTANT: these are ORIGINAL in-house concept designs / demo builds created
 * to demonstrate our design and front-end development capability. They are not
 * presented as delivered client projects, and no client names, revenue figures
 * or performance statistics are attached to them.
 *
 * `variant` selects the hand-coded layout rendered inside the browser frame
 * (see src/components/mockups/MockupApp.jsx). No stock imagery is used.
 */
export const projectNotice =
  'Every preview below is an original concept design created by EzyDigital to demonstrate our design and front-end development work. They are clearly labelled as concept designs, not delivered client projects.'

export const portfolioCategories = [
  { id: 'all', label: 'All work' },
  { id: 'business', label: 'Business Website' },
  { id: 'ecommerce', label: 'E-commerce Store' },
  { id: 'dashboard', label: 'SaaS Dashboard' },
  { id: 'restaurant', label: 'Restaurant Website' },
  { id: 'real-estate', label: 'Real Estate Website' },
  { id: 'education', label: 'Educational Website' },
  { id: 'healthcare', label: 'Healthcare Website' },
  { id: 'web-app', label: 'Custom Web Application' },
]

export const projects = [
  {
    id: 'northline-consulting',
    category: 'business',
    variant: 'business',
    name: 'Northline Consulting',
    kind: 'Concept Design',
    url: 'northline-consulting.example',
    description:
      'Corporate profile layout with a clear service breakdown, credibility strip and a prominent enquiry call to action.',
    stack: ['React', 'Tailwind CSS', 'Contact form'],
  },
  {
    id: 'kettle-and-co',
    category: 'ecommerce',
    variant: 'ecommerce',
    name: 'Kettle & Co.',
    kind: 'Demo Project',
    url: 'kettle-and-co.example',
    description:
      'Product grid, detail view and a basket flow wired for a catalogue-based storefront with payment gateway integration.',
    stack: ['React', 'Node.js', 'Payment gateway'],
  },
  {
    id: 'pulseboard',
    category: 'dashboard',
    variant: 'dashboard',
    name: 'Pulseboard',
    kind: 'Concept Design',
    url: 'pulseboard.example',
    description:
      'SaaS analytics dashboard with KPI cards, a trend chart, sidebar navigation and a data table for records.',
    stack: ['React', 'REST API', 'Dashboard'],
  },
  {
    id: 'saffron-table',
    category: 'restaurant',
    variant: 'restaurant',
    name: 'Saffron Table',
    kind: 'Concept Design',
    url: 'saffron-table.example',
    description:
      'Restaurant site with an image-led hero, menu highlights and a table reservation form above the fold.',
    stack: ['React', 'Booking form', 'Responsive'],
  },
  {
    id: 'courtyards-realty',
    category: 'real-estate',
    variant: 'real-estate',
    name: 'Courtyards Realty',
    kind: 'Concept Design',
    url: 'courtyards-realty.example',
    description:
      'Property listing experience with search filters, listing cards and an enquiry panel for each property.',
    stack: ['React', 'Filters', 'Lead capture'],
  },
  {
    id: 'scholars-path',
    category: 'education',
    variant: 'education',
    name: 'Scholars Path',
    kind: 'Concept Design',
    url: 'scholars-path.example',
    description:
      'Institute website with course cards, admission enquiry form and a structured information hierarchy.',
    stack: ['React', 'CMS ready', 'Forms'],
  },
  {
    id: 'carepoint-clinic',
    category: 'healthcare',
    variant: 'healthcare',
    name: 'CarePoint Clinic',
    kind: 'Concept Design',
    url: 'carepoint-clinic.example',
    description:
      'Clinic website with department listing, doctor profiles and an appointment request flow.',
    stack: ['React', 'Appointment form', 'Accessible UI'],
  },
  {
    id: 'fieldflow-ops',
    category: 'web-app',
    variant: 'web-app',
    name: 'FieldFlow Ops',
    kind: 'Demo Project',
    url: 'fieldflow-ops.example',
    description:
      'Internal operations application with authenticated access, job tracking, status workflows and role-based views.',
    stack: ['React', 'Express.js', 'PostgreSQL', 'Auth'],
  },
]
