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
    title: 'Ceramic Growth Packages | Ezy Digital',
    description:
      'Ceramic growth packages with websites, social creatives, product videos, Meta and Google Ads, inquiry campaigns and reporting. Monthly service charges from ₹30,000 plus GST. Advertising budget is separate.',
    path: '/pricing',
    image: `${import.meta.env.BASE_URL}images/slab-factory.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Ezy Digital ceramic growth packages',
      url: 'https://ezydigital.in/ceramic/pricing',
      itemListElement: [
        ...websitePackages.map((pkg) => ({
          '@type': 'Offer',
          name: pkg.name,
          price: String(pkg.price),
          priceCurrency: 'INR',
          description: `${pkg.tagline} Monthly service charge; advertising budget and GST extra.`,
        })),
      ],
    },
  })

  return (
    <>
      <PageHero
        eyebrow="Ceramic growth packages"
        title="Five Clear Packages for Ceramic Digital Growth."
        lead="Choose a monthly growth programme built around your website, content, campaigns and inquiry goals. Every package scope is confirmed in writing before work begins."
        image={ceramicImages.slabFactory.src}
        imageAlt={ceramicImages.slabFactory.alt}
        breadcrumbs={[{ label: 'Packages' }]}
        meta={['Monthly service charges', 'Advertising budget separate', 'GST extra']}
        stamp="Packages from ₹30,000 per month."
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
            eyebrow="Ceramic growth packages"
            title="Packages Built for Ceramic Businesses."
            text="Every package is a monthly programme. Deliverables, campaign volumes and reporting frequency are confirmed before work begins."
          />
          <div className="pricing-grid">
            {websitePackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} ctaLabel="Request a Proposal" />
            ))}
          </div>
          <div className="notice mt-24">
            <Icon name="info" size={16} />
            <p>
              All package service charges are monthly. GST is extra wherever applicable. Advertising
              budget is separate from the service charge and is paid directly to the advertising
              platform. Third-party expenses and additional production or travel requirements must be
              agreed separately where applicable.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Integrated campaign support"
            title="Marketing Support Within a Growth Package."
            text="Meta Ads, Google Ads and SEO support are included according to package scope. Advertising media spend is separate and is handled according to the written commercial agreement."
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
            title="What a Package Covers — and What It Does Not."
            text="A clear scope protects both sides. These exclusions are standard unless a written agreement says otherwise."
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
        text="Share your categories, number of products, target markets and inquiry goals. We will reply with a realistic package scope and recommended next step."
        primaryLabel="Request a Growth Proposal"
        primaryTo="/contact?interest=custom-growth"
        secondaryLabel="Explore Growth Solutions"
        secondaryTo="/solutions"
      />
    </>
  )
}
