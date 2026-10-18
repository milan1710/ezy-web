import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'

const systemSteps = [
  { title: 'Identify the target buyer profile', text: 'Define the buyer types, regions and product categories worth pursuing.' },
  { title: 'Select suitable digital channels', text: 'Choose search, social or content channels based on the buyer and budget.' },
  { title: 'Create buyer-focused landing pages', text: 'Give each product or buyer type a page with a clear next step.' },
  { title: 'Present products and capabilities', text: 'Show the range, business context and inquiry options without unverified claims.' },
  { title: 'Capture relevant inquiry details', text: 'Ask for business type, product interest, geography and requirement.' },
  { title: 'Review and qualify inquiries', text: 'Use agreed criteria to separate relevant business inquiries from noise.' },
  { title: 'Track source, status and follow-up', text: 'Record where the inquiry came from and what happened next.' },
  { title: 'Improve based on actual results', text: 'Adjust targeting, pages and follow-up using real inquiry data.' },
]

const sampleRows = [
  { id: 'Sample record 01', source: 'Search ad (sample)', buyer: 'Dealer', product: 'Floor tiles', geography: 'Gujarat', qualification: 'Review', follow: 'Call scheduled' },
  { id: 'Sample record 02', source: 'Product page (sample)', buyer: 'Distributor', product: 'Wall tiles', geography: 'Maharashtra', qualification: 'Qualified', follow: 'Details shared' },
  { id: 'Sample record 03', source: 'Bulk form (sample)', buyer: 'Project buyer', product: 'Slabs', geography: 'Delhi NCR', qualification: 'New', follow: 'Pending' },
  { id: 'Sample record 04', source: 'Meta campaign (sample)', buyer: 'Importer', product: 'Porcelain tiles', geography: 'International', qualification: 'Follow-up', follow: 'Awaiting response' },
]

const statusClass = {
  New: 'status--new',
  Review: 'status--review',
  Qualified: 'status--qualified',
  'Follow-up': 'status--follow',
}

export default function BuyerLeadGeneration() {
  useSeo({
    title: 'Ceramic Buyer Inquiry Generation | Ezy Digital',
    description:
      'A structured ceramic buyer inquiry system: target buyer profiles, product landing pages, qualification fields, source tracking and follow-up. Illustrative dashboard included.',
    path: '/solutions/buyer-lead-generation',
    image: `${import.meta.env.BASE_URL}images/business-meeting.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Ceramic buyer inquiry generation',
      provider: { '@type': 'Organization', name: 'Ezy Digital', url: 'https://ezydigital.in/' },
      areaServed: [
        { '@type': 'City', name: 'Morbi' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      url: 'https://ezydigital.in/ceramic/solutions/buyer-lead-generation',
    },
  })

  return (
    <>
      <PageHero
        eyebrow="Buyer inquiry generation"
        title="Create a More Structured Path From Online Discovery to Buyer Inquiry."
        lead="Bring together buyer targeting, product landing pages, inquiry qualification and follow-up tracking — so digital interest has a clear route to your sales team."
        image={ceramicImages.businessMeeting.src}
        imageAlt={ceramicImages.businessMeeting.alt}
        breadcrumbs={[
          { label: 'Growth Solutions', to: '/solutions' },
          { label: 'Buyer Inquiry Generation' },
        ]}
        meta={['Buyer profiles', 'Landing pages', 'Qualification', 'Lead tracking']}
        stamp="A system, not a promise of buyers."
        actions={
          <>
            <Link className="btn" to="/contact?interest=buyer-inquiries">
              Discuss Buyer Inquiries <Icon name="arrowRight" size={16} />
            </Link>
            <Link className="btn btn--outline-light" to="/solutions/ceramic-website">
              Start With a Catalogue
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The eight-step system"
            title="From Buyer Profile to Follow-Up."
            text="Every step can be scoped. Advertising is optional; the inquiry path and qualification process matter even without paid campaigns."
          />
          <div className="system-steps">
            {systemSteps.map((step, index) => (
              <article className="system-step" key={step.title}>
                <span className="system-step__num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="notice mt-24">
            <Icon name="alert" size={16} />
            <p>
              Not every inquiry is a qualified buyer. Not every qualified buyer will place an order.
              Ezy Digital can support targeting, inquiry structure and review — not guarantee a
              specific number of buyers.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">Qualification reality</p>
              <h2>A Lead Is a Conversation Starter — Not Revenue.</h2>
              <p>
                Inquiry quality varies. Some form fills are students, job seekers or competitors.
                Others are genuine trade buyers with a live requirement. Qualification fields and a
                quick response process help your team spend time on the second group.
              </p>
              <p>
                We agree what a relevant inquiry means for your business before campaigns begin. The
                sales team then confirms the commercial opportunity through a call, product
                discussion and quotation.
              </p>
              <div className="funnel mt-24" aria-label="Illustrative inquiry flow, not performance data">
                <div className="funnel__bar">
                  <span>Product or campaign impression</span>
                  <small>Illustrative</small>
                </div>
                <div className="funnel__bar">
                  <span>Landing page visit</span>
                  <small>Illustrative</small>
                </div>
                <div className="funnel__bar">
                  <span>Inquiry submitted</span>
                  <small>Illustrative</small>
                </div>
                <div className="funnel__bar">
                  <span>Qualified conversation</span>
                  <small>Illustrative</small>
                </div>
              </div>
              <p className="small muted mt-16">
                This diagram shows the intended flow only. It does not represent actual campaign
                results or conversion rates.
              </p>
            </div>
            <div className="split__media">
              <div className="image-frame">
                <img
                  src={ceramicImages.warehouseBoxes.src}
                  alt={ceramicImages.warehouseBoxes.alt}
                  width={ceramicImages.warehouseBoxes.width}
                  height={ceramicImages.warehouseBoxes.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Illustrative dashboard"
            title="A Clear View of Inquiry Source and Follow-Up."
            text="This is a layout concept for discussion. It is not a screenshot of real client performance."
          />
          <div className="dashboard-shell">
            <div className="dashboard-bar">
              <strong>Ceramic inquiry tracker — concept layout</strong>
              <span className="demo-label">
                <Icon name="info" size={12} /> Illustrative Demo — Not Real Client Data
              </span>
            </div>
            <div className="dashboard-body">
              <div className="table-wrap">
                <table className="data-table">
                  <caption>
                    Sample records only. Values are placeholders used to demonstrate the fields.
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Inquiry date</th>
                      <th scope="col">Source</th>
                      <th scope="col">Buyer type</th>
                      <th scope="col">Product interest</th>
                      <th scope="col">Geography</th>
                      <th scope="col">Qualification</th>
                      <th scope="col">Follow-up</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleRows.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.source}</td>
                        <td>{row.buyer}</td>
                        <td>{row.product}</td>
                        <td>{row.geography}</td>
                        <td>
                          <span className={`status ${statusClass[row.qualification] || 'status--sample'}`}>
                            {row.qualification}
                          </span>
                        </td>
                        <td>{row.follow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dashboard-foot">
              <span>Fields shown are proposed. Final fields depend on your sales process.</span>
              <span>No performance claims are made from this sample.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Before we begin"
            title="What Must Be Agreed for a Buyer Inquiry Engagement."
            text="Advertising spend, management fees, data access and qualification criteria are separate decisions. We document them before campaigns or forms go live."
          />
          <div className="grid grid-3">
            <div className="content-card">
              <h3>Advertising budget</h3>
              <p>
                Media spend is paid to Google, Meta or another platform. It is separate from our
                campaign setup and management fees.
              </p>
            </div>
            <div className="content-card">
              <h3>Account &amp; website access</h3>
              <p>
                We need appropriate access to advertising accounts, analytics, the website and any
                agreed CRM to implement tracking and inquiry flow.
              </p>
            </div>
            <div className="content-card">
              <h3>Qualification criteria</h3>
              <p>
                Your team confirms what a relevant inquiry looks like, who follows up and how quickly.
                We can help structure this, but we cannot replace the sales conversation.
              </p>
            </div>
          </div>
          <div className="notice mt-24">
            <Icon name="shield" size={16} />
            <p>
              Data collection must respect applicable consent and privacy requirements. We do not
              claim a verified international buyer database, and we do not sell or guarantee buyer
              contacts.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Build a Buyer Inquiry Path You Can Measure."
        text="Tell us your product category, target buyer types and how inquiries are currently handled. We will propose a scoped starting point."
        primaryLabel="Discuss Buyer Inquiry Generation"
        primaryTo="/contact?interest=buyer-inquiries"
        secondaryLabel="View Pricing"
        secondaryTo="/pricing"
      />
    </>
  )
}
