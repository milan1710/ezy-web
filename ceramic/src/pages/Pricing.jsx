import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'
import {
  websitePackages,
  marketingServices,
  pricingNotes,
  pricingExclusions,
  customProposalPoints,
} from '../data/pricing'

export default function Pricing() {
  useSeo({
    title: 'Ceramic Website & Digital Marketing Pricing | Ezy Digital',
    description:
      'Transparent starting prices for ceramic websites (₹9,999+), catalogue websites (₹14,999+), export websites (₹24,999+) and digital marketing management. Ad spend is separate.',
    path: '/pricing',
    image: `${import.meta.env.BASE_URL}images/slab-factory.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Ezy Digital ceramic website and digital marketing starting prices',
      url: 'https://ezydigital.in/ceramic/pricing',
      itemListElement: [
        ...websitePackages.map((pkg) => ({
          '@type': 'Offer',
          name: pkg.name,
          price: String(pkg.price),
          priceCurrency: 'INR',
          description: `${pkg.tagline} Starting price; final scope confirmed in a proposal.`,
        })),
        ...marketingServices.map((service) => ({
          '@type': 'Offer',
          name: service.name,
          priceCurrency: 'INR',
          description: `${service.description} ${service.considerations}`,
        })),
      ],
    },
  })

  return (
    <>
      <PageHero
        eyebrow="Ceramic pricing"
        title="Clear Starting Prices for Ceramic Digital Work."
        lead="No hidden scope, no vague “guaranteed growth” package. Choose a website or marketing starting point, then confirm the exact deliverables in a written proposal."
        image={ceramicImages.slabFactory.src}
        imageAlt={ceramicImages.slabFactory.alt}
        breadcrumbs={[{ label: 'Pricing' }]}
        meta={['Website from ₹9,999+', 'Marketing from ₹3,000+', 'Ad spend separate']}
        stamp="Starting prices, not final quotations."
        actions={
          <>
            <Link className="btn" to="/contact">
              Request a Growth Proposal <Icon name="arrowRight" size={16} />
            </Link>
            <Link className="btn btn--outline-light" to="/ceramic-demo">
              View the Ceramic Demo
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Ceramic website development"
            title="Website Packages Built for Ceramic Businesses."
            text="Prices are starting points. Product count, page count, filters, integrations, content and revision limits determine the final quotation."
          />
          <div className="pricing-grid">
            {websitePackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} ctaLabel="Request a Proposal" />
            ))}
          </div>
          <div className="notice mt-24">
            <Icon name="info" size={16} />
            <p>
              These are proposed starting prices, not guaranteed fixed quotations. Domain, hosting,
              product photography, professional copywriting, translation, premium tools and
              third-party integrations may cost extra.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Digital marketing"
            title="Campaign and Visibility Starting Points."
            text="Advertising media spend is paid to the platform and is separate from the fees below. Campaign count, reporting frequency and scope are agreed before work begins."
          />
          <div className="marketing-list">
            {marketingServices.map((service) => (
              <div className="marketing-item" key={service.id}>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="marketing-item__price">
                  {service.priceLabel}
                  <small>{service.priceSuffix}</small>
                </div>
                <p className="marketing-item__note">{service.considerations}</p>
                <Link className="btn btn--outline btn--sm" to={`/contact?interest=${encodeURIComponent(service.id)}`}>
                  Discuss
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Scope and exclusions"
            title="What the Starting Price Covers — and What It Does Not."
            text="A clear quotation protects both sides. These exclusions are standard unless a written proposal says otherwise."
          />
          <div className="grid grid-2">
            <div className="panel">
              <p className="mini-heading">Usually included in a quoted scope</p>
              <ul className="list-check">
                <li>Agreed website pages and product templates</li>
                <li>Responsive layout and basic on-page SEO structure</li>
                <li>Contact and product inquiry forms</li>
                <li>Agreed campaign setup or management</li>
                <li>Reporting at the agreed frequency</li>
                <li>An agreed number of revision rounds</li>
              </ul>
            </div>
            <div className="panel panel--soft">
              <p className="mini-heading">Usually excluded unless stated</p>
              <ul className="list-dash">
                {pricingExclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pricing-note-grid">
            {pricingNotes.map((note) => (
              <div className="pricing-note" key={note}>
                <Icon name="info" size={15} />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">Custom growth proposal</p>
              <h2>Need Buyer Acquisition or Dealer Development Work?</h2>
              <p>
                Custom engagements are scoped around your products, target markets, sales capacity and
                budget. We do not promise a fixed number of leads or dealers for a fixed fee.
              </p>
              <p>
                Instead, we define the system, the deliverables, the reporting and the responsibilities
                of both teams. Then we agree a retainer or project fee that matches the actual scope.
              </p>
              <ul className="list-check mt-16">
                {customProposalPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="row mt-24">
                <Link className="btn" to="/contact?interest=custom-growth">
                  Request a Growth Proposal <Icon name="arrowRight" size={16} />
                </Link>
                <Link className="btn btn--outline" to="/solutions">
                  Review Solution Scope
                </Link>
              </div>
            </div>
            <div className="split__media">
              <div className="panel panel--dark">
                <p className="mini-heading">What we will not promise</p>
                <ul className="list-check list-check--light">
                  <li>A guaranteed number of genuine buyer inquiries</li>
                  <li>A guaranteed number of dealers, distributors or export orders</li>
                  <li>Guaranteed Google rankings or a fixed cost per lead</li>
                  <li>Unlimited campaigns, pages or revisions</li>
                  <li>Access to a verified international buyer database</li>
                </ul>
                <p className="small mt-16" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Outcomes depend on product competitiveness, pricing, target market, available
                  budget, response time and sales follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Payment and delivery"
            title="A Simple, Written Engagement Process."
            text="No work begins until the scope, price, timeline, exclusions and payment schedule are confirmed in writing."
          />
          <div className="process-grid">
            {[
              { number: '01', title: 'Requirement discussion', text: 'Understand products, markets, sales process and budget range.' },
              { number: '02', title: 'Written proposal', text: 'Deliverables, timeline, exclusions, revision limits and fees.' },
              { number: '03', title: 'Build or campaign launch', text: 'Work begins after approval and the agreed advance payment.' },
              { number: '04', title: 'Review and handover', text: 'Testing, reporting, training or handover as included in scope.' },
            ].map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="notice mt-24">
            <Icon name="shield" size={16} />
            <p>
              Prices on this page can change as scope or platform costs change. The written proposal
              is the binding commercial document for any engagement.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Get a Proposal Based on Your Actual Product Range."
        text="Share your categories, number of products, target markets and inquiry goals. We will reply with a realistic scope and starting price."
        primaryLabel="Request a Growth Proposal"
        primaryTo="/contact?interest=custom-growth"
        secondaryLabel="Explore Growth Solutions"
        secondaryTo="/solutions"
      />
    </>
  )
}
