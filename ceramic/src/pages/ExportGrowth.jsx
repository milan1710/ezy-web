import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'

const exportParts = [
  { icon: 'globe', title: 'Export-focused website', text: 'An English-first structure built around what an international buyer needs to understand.' },
  { icon: 'layers', title: 'English product catalogue', text: 'Category-wise products with client-approved descriptions, formats and finishes.' },
  { icon: 'file', title: 'Product & company presentation', text: 'Clear capability, capacity and product-range information without unverified claims.' },
  { icon: 'messages', title: 'Buyer inquiry forms', text: 'Fields for company, country, product interest and requirement details.' },
  { icon: 'clipboard', title: 'Bulk quotation requests', text: 'A structured request path for buyers evaluating larger quantities or multiple products.' },
  { icon: 'search', title: 'Category search visibility', text: 'Product and category pages structured around relevant buyer search language.' },
  { icon: 'chart', title: 'Inquiry source tracking', text: 'Understand which pages, markets and channels produce relevant inquiries.' },
  { icon: 'route', title: 'Follow-up process', text: 'A practical next step for the sales team so export inquiries do not stall.' },
]

const buyerTypes = [
  'Importers',
  'Overseas distributors',
  'International wholesalers',
  'Project procurement companies',
  'Buyers searching for specific ceramic products',
]

const buyerQuestions = [
  'What products and formats are available?',
  'Which finishes and sizes can be discussed?',
  'What are the company’s supply and packaging capabilities?',
  'How can a buyer request a quotation or sample?',
  'Which certifications and compliance documents are available?',
]

const exportProcess = [
  { step: '01', title: 'Export readiness review', text: 'Review product range, target markets, certifications, packaging and quotation capacity.' },
  { step: '02', title: 'English catalogue structure', text: 'Organise categories and product pages using information approved by your business.' },
  { step: '03', title: 'Buyer inquiry paths', text: 'Add product-specific and bulk quotation forms with qualification fields.' },
  { step: '04', title: 'Visibility & review', text: 'Support discovery through market research, category content and suitable campaigns where agreed.' },
]

const notClaimed = [
  'A verified database of international importers',
  'Guaranteed export orders or buyer meetings',
  'Guaranteed inclusion in overseas marketplaces',
  'Invented certifications, client names or trade relationships',
  'Shipping, customs clearance or compliance services',
]

export default function ExportGrowth() {
  useSeo({
    title: 'Ceramic Export Website & Digital Growth Solutions',
    description:
      'Export-focused websites, English product catalogues, bulk quotation forms, category search visibility and inquiry tracking for ceramic manufacturers. Export orders are not guaranteed.',
    path: '/solutions/export-growth',
    image: `${import.meta.env.BASE_URL}images/container-port.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Ceramic export website and digital growth solutions',
      provider: { '@type': 'Organization', name: 'Ezy Digital', url: 'https://ezydigital.in/' },
      areaServed: [
        { '@type': 'City', name: 'Morbi' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      url: 'https://ezydigital.in/ceramic/solutions/export-growth',
    },
  })

  return (
    <>
      <PageHero
        eyebrow="Export business growth"
        title="Make Your Ceramic Products Easier for International Buyers to Discover."
        lead="Build an English-first product presence, clear specification pages and a structured inquiry path for importers, overseas distributors and international buyers."
        image={ceramicImages.containerPort.src}
        imageAlt={ceramicImages.containerPort.alt}
        breadcrumbs={[
          { label: 'Growth Solutions', to: '/solutions' },
          { label: 'Export Growth' },
        ]}
        meta={['English catalogue', 'Bulk quotation requests', 'Inquiry tracking']}
        stamp="Export visibility, built honestly."
        actions={
          <>
            <Link className="btn" to="/contact?interest=export-visibility">
              Discuss Export Visibility <Icon name="arrowRight" size={16} />
            </Link>
            <Link className="btn btn--outline-light" to="/pricing">
              View Export Website Pricing
            </Link>
          </>
        }
      />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">The starting point</p>
              <h2>International Buyers Need Clarity Before They Start a Conversation.</h2>
              <p>
                A buyer visiting from another country cannot visit your showroom easily. Product
                categories, finishes, company capabilities, packaging and the quotation request path
                need to be understandable without a long email thread.
              </p>
              <p>
                We build an export-focused digital presence around the questions buyers ask. That
                includes an English catalogue, product pages and a bulk inquiry flow that reaches the
                right person in your team.
              </p>
              <div className="export-disclaimer mt-24">
                <Icon name="info" size={17} />
                <p>
                  Digital marketing can support buyer discovery and inquiry generation. Export orders
                  depend on buyer requirements, product suitability, commercial terms, shipping,
                  compliance and negotiation.
                </p>
              </div>
            </div>
            <div className="split__media">
              <div className="image-frame">
                <img
                  src={ceramicImages.containerYard.src}
                  alt={ceramicImages.containerYard.alt}
                  width={ceramicImages.containerYard.width}
                  height={ceramicImages.containerYard.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="What we build"
            title="An Export Buyer Path, From Discovery to Quotation Request."
            text="Scope is defined around your actual export readiness. We do not invent market statistics, importer relationships or trade credentials."
          />
          <div className="grid grid-4">
            {exportParts.map((part) => (
              <article className="content-card" key={part.title}>
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
              <p className="eyebrow">Buyer context</p>
              <h2>Design the Pages Around Real Buyer Questions.</h2>
              <p>
                Buyers from different markets look for different details. A catalogue that only shows
                an image and a product name creates more questions than it answers.
              </p>
              <ul className="market-list mt-16">
                {buyerQuestions.map((question) => (
                  <li key={question}>
                    <Icon name="checkCircle" size={15} /> {question}
                  </li>
                ))}
              </ul>
              <div className="panel panel--soft mt-24">
                <p className="mini-heading">Typical export buyer types</p>
                <ul className="field-chips">
                  {buyerTypes.map((type) => (
                    <li key={type}>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
                <p className="small muted mt-16">
                  Not every buyer type is suitable for every manufacturer. Market fit depends on your
                  products, pricing, compliance and supply capability.
                </p>
              </div>
            </div>
            <div className="split__media">
              <div className="image-frame">
                <img
                  src={ceramicImages.exportPortAerial.src}
                  alt={ceramicImages.exportPortAerial.alt}
                  width={ceramicImages.exportPortAerial.width}
                  height={ceramicImages.exportPortAerial.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="A Measured Export Visibility Programme."
            text="No guaranteed orders and no invented buyer network. A structured digital foundation, then measurement and improvement."
          />
          <div className="process-grid">
            {exportProcess.map((step) => (
              <article className="process-step" key={step.step}>
                <span className="process-step__number">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="grid grid-2 mt-32">
            <div className="panel">
              <p className="mini-heading">What we will not claim</p>
              <ul className="list-dash">
                {notClaimed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="panel panel--dark">
              <p className="mini-heading">What we need from you</p>
              <ul className="list-check list-check--light">
                <li>Approved product list, specifications and images</li>
                <li>Certifications and compliance documents where relevant</li>
                <li>Pricing and commercial terms for quotations</li>
                <li>Packaging, shipping and supply capability information</li>
                <li>A sales contact who can respond to international inquiries</li>
              </ul>
              <Link className="btn mt-24" to="/contact?interest=export-visibility">
                Discuss Export Visibility <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Make Your Export Range Clearer for International Buyers."
        text="Tell us which markets interest you, which products are export-ready and how you currently handle international quotations."
        primaryLabel="Discuss Export Visibility"
        primaryTo="/contact?interest=export-visibility"
        secondaryLabel="Explore Export Website Pricing"
        secondaryTo="/solutions/ceramic-website"
      />
    </>
  )
}
