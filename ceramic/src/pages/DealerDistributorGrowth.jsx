import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'

const dealerFields = [
  'Name',
  'Company',
  'Phone',
  'Email (optional)',
  'City and state',
  'Business type',
  'Current distribution area',
  'Product categories of interest',
  'Existing showroom / warehouse (optional)',
  'Inquiry details',
]

const systemParts = [
  {
    icon: 'target',
    title: 'Dealer acquisition strategy',
    text: 'Define the partner profile, priority territories and the product categories you want to distribute.',
  },
  {
    icon: 'layout',
    title: 'Distributor inquiry landing page',
    text: 'A focused page that explains the opportunity, product support and next step for a potential partner.',
  },
  {
    icon: 'layers',
    title: 'Product catalogue for partners',
    text: 'Category-wise product pages and a shareable range so dealers can understand what they would sell.',
  },
  {
    icon: 'clipboard',
    title: 'Business qualification form',
    text: 'Fields for business type, current distribution coverage and product interest help your team prioritise.',
  },
  {
    icon: 'mapPin',
    title: 'Target geography',
    text: 'Territory selection and state-level questions make routing and coverage conversations easier.',
  },
  {
    icon: 'chart',
    title: 'Lead tracking & follow-up',
    text: 'A simple source and status workflow so partner inquiries are not lost between calls and WhatsApp.',
  },
]

const workflowSteps = [
  { title: 'Partner inquiry received', text: 'The application records business type, territory and product interest.' },
  { title: 'Initial relevance check', text: 'Your team reviews coverage, category fit and basic business information.' },
  { title: 'Qualification call', text: 'A conversation confirms investment capacity, showroom or warehouse setup and expectations.' },
  { title: 'Product and terms discussion', text: 'Your approved product range, pricing and dealer terms are shared where appropriate.' },
  { title: 'Onboarding decision', text: 'The client decides whether to proceed. Ezy Digital does not approve or guarantee partners.' },
]

export default function DealerDistributorGrowth() {
  useSeo({
    title: 'Dealer & Distributor Inquiry Solutions for Ceramic Businesses',
    description:
      'Build a structured dealer and distributor inquiry system for your ceramic business: partner landing pages, product catalogue, territory qualification, tracking and follow-up. No guaranteed dealer sign-ups.',
    path: '/solutions/dealer-distributor-growth',
    image: `${import.meta.env.BASE_URL}images/deal-signing.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Dealer and distributor inquiry solutions for ceramic manufacturers',
      provider: { '@type': 'Organization', name: 'Ezy Digital', url: 'https://ezydigital.in/' },
      areaServed: [
        { '@type': 'City', name: 'Morbi' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      url: 'https://ezydigital.in/ceramic/solutions/dealer-distributor-growth',
    },
  })

  return (
    <>
      <PageHero
        eyebrow="Dealer & distributor growth"
        title="Build New Dealer & Distributor Opportunities for Your Ceramic Business."
        lead="Present your channel opportunity professionally, collect structured partner inquiries and give your team a clearer process for territory, business type and follow-up."
        image={ceramicImages.dealSigning.src}
        imageAlt={ceramicImages.dealSigning.alt}
        breadcrumbs={[
          { label: 'Growth Solutions', to: '/solutions' },
          { label: 'Dealer & Distributor Growth' },
        ]}
        meta={['Territory qualification', 'Partner landing page', 'Inquiry tracking']}
        stamp="Built for the manufacturer, not the dealer."
        actions={
          <>
            <Link className="btn" to="/contact?interest=dealer-network">
              Discuss Dealer Growth <Icon name="arrowRight" size={16} />
            </Link>
            <Link className="btn btn--outline-light" to="/solutions">
              Compare All Solutions
            </Link>
          </>
        }
      />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">Who this page is for</p>
              <h2>You Are Building a Channel — Not Buying a Contact List.</h2>
              <p>
                This solution is for ceramic manufacturers and brands that want to attract relevant
                dealer or distributor inquiries. The website visitor may be a dealer, but Ezy
                Digital&apos;s client is the manufacturer.
              </p>
              <p>
                We help you present the opportunity, capture qualifying information and track what
                happens next. Your team still decides who to appoint, what terms to offer and which
                territories to open.
              </p>
              <ul className="list-check mt-16">
                <li>Clear dealer proposition and product presentation</li>
                <li>Territory and business-type qualification fields</li>
                <li>A follow-up workflow your sales team can actually use</li>
                <li>No invented dealer network, margins or exclusivity promises</li>
              </ul>
            </div>
            <div className="split__media">
              <div className="image-frame">
                <img
                  src={ceramicImages.tileSelection.src}
                  alt={ceramicImages.tileSelection.alt}
                  width={ceramicImages.tileSelection.width}
                  height={ceramicImages.tileSelection.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div className="notice mt-32">
            <Icon name="info" size={16} />
            <p>
              Ezy Digital does not claim to have a ready-made dealer or distributor network. We build
              the digital path that can attract and organise partner inquiries. Appointment decisions
              remain with your business.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="What we build"
            title="A Complete Dealer Inquiry Path."
            text="Each component can be scoped separately. Dealer terms, margins and territory policy are always provided and approved by the client."
          />
          <div className="grid grid-3">
            {systemParts.map((part, index) => (
              <article className="content-card" key={part.title}>
                <span className="why-item__index" style={{ color: 'var(--red)' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Icon name={part.icon} size={20} className="text-red" style={{ marginBottom: 12 }} />
                <h3>{part.title}</h3>
                <p>{part.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">Qualification</p>
              <h2>Collect Information Your Team Can Act On.</h2>
              <p>
                A dealer inquiry is only useful when your team can understand the partner quickly.
                The form structure should capture territory, business type, current distribution and
                product interest — without becoming so long that serious partners abandon it.
              </p>
              <p>
                Fields below are a proposed starting point. Final fields and any consent wording are
                agreed before launch.
              </p>
              <div className="dealer-form-preview mt-24">
                <h3>Proposed dealer inquiry fields</h3>
                <p>Illustrative form structure — not a live submission form.</p>
                <ul className="field-chips">
                  {dealerFields.map((field) => (
                    <li key={field}>
                      <span>{field}</span>
                    </li>
                  ))}
                </ul>
                <Link className="text-link mt-16" to="/contact?interest=dealer-inquiry-form">
                  Discuss your form fields <Icon name="arrowRight" size={14} />
                </Link>
              </div>
            </div>

            <div className="split__media">
              <p className="mini-heading">Follow-up workflow</p>
              <ol className="workflow">
                {workflowSteps.map((step) => (
                  <li key={step.title}>
                    <div>
                      <strong>{step.title}</strong>
                      <span>{step.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Clear responsibilities"
            title="What Ezy Digital Does — and What Your Team Owns."
            text="A partner inquiry path does not replace channel strategy, commercial terms or sales conversations."
          />
          <div className="grid grid-2">
            <div className="panel">
              <p className="mini-heading">Ezy Digital</p>
              <ul className="list-check">
                <li>Plan the landing page and inquiry structure</li>
                <li>Build product presentation and qualification fields</li>
                <li>Set up tracking and a basic follow-up workflow</li>
                <li>Review inquiry sources and recommend improvements</li>
                <li>Report honestly on what the data shows</li>
              </ul>
            </div>
            <div className="panel panel--soft">
              <p className="mini-heading">Your business</p>
              <ul className="list-check">
                <li>Approve dealer terms, margins and territory policy</li>
                <li>Provide accurate product and support information</li>
                <li>Respond to partner inquiries promptly</li>
                <li>Verify business details and conduct qualification calls</li>
                <li>Decide who to appoint and when</li>
              </ul>
            </div>
          </div>
          <div className="notice notice--red mt-24">
            <Icon name="alert" size={16} />
            <p>
              We do not guarantee dealer sign-ups, exclusive territories, a fixed number of partner
              inquiries or a specific commercial outcome. Territory availability and margins are your
              commercial decisions.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Build a Dealer Inquiry Path Your Team Can Use."
        text="Tell us which territories you want to open, which product categories you want to distribute and how your team currently follows up with channel partners."
        primaryLabel="Discuss Dealer Growth"
        primaryTo="/contact?interest=dealer-network"
        secondaryLabel="View Ceramic Pricing"
        secondaryTo="/pricing"
      />
    </>
  )
}
