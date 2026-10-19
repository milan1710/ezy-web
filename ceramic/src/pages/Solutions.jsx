import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'
import { growthSolutions } from '../data/solutions'

const distinctions = [
  {
    label: 'Website development',
    what: 'Design and build of pages, catalogue structure and inquiry forms.',
    doesNot: 'Does not create demand on its own or guarantee inquiries.',
  },
  {
    label: 'Campaign setup',
    what: 'Account structure, audiences, tracking and initial creative direction.',
    doesNot: 'Does not include ongoing optimisation or media spend.',
  },
  {
    label: 'Ongoing marketing management',
    what: 'Campaign optimisation, reporting, testing and inquiry review.',
    doesNot: 'Does not guarantee a fixed cost per lead or sales outcome.',
  },
  {
    label: 'Lead-generation strategy',
    what: 'Buyer profiles, channel choices, offers and inquiry paths.',
    doesNot: 'Does not include a verified buyer database or guaranteed buyers.',
  },
  {
    label: 'Buyer qualification',
    what: 'Agreed criteria and fields to help the sales team prioritise inquiries.',
    doesNot: 'A qualified inquiry is not a confirmed order.',
  },
  {
    label: 'Sales conversion',
    what: 'The client sales team’s conversations, samples, quotations and negotiation.',
    doesNot: 'Cannot be guaranteed by a marketing agency or a website.',
  },
]

export default function Solutions() {
  useSeo({
    title: 'Digital Growth for Morbi Ceramic Manufacturers | Ezy Digital',
    description:
      'Explore Ezy Digital growth solutions for ceramic manufacturers: buyer inquiries, dealer and distributor development, export visibility, product catalogues and digital marketing with clear scope and dependencies.',
    path: '/solutions',
    image: `${import.meta.env.BASE_URL}images/showroom.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Ceramic business growth solutions',
      itemListElement: growthSolutions.map((solution, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: solution.title,
        url: `https://ezydigital.in/ceramic${solution.path}`,
      })),
    },
  })

  return (
    <>
      <PageHero
        eyebrow="Ceramic growth solutions"
        title="Digital Systems Built Around Ceramic Business Goals."
        lead="Understand the business problem, the proposed approach, what is delivered, what depends on you and what is not guaranteed — before any project begins."
        image={ceramicImages.showroom.src}
        imageAlt={ceramicImages.showroom.alt}
        breadcrumbs={[{ label: 'Growth Solutions' }]}
        meta={['Buyer inquiries', 'Dealer networks', 'Export visibility', 'Inquiry management']}
        stamp="Clear scope. Honest dependencies."
        actions={
          <>
            <Link className="btn" to="/contact">
              Discuss Your Growth Plan <Icon name="arrowRight" size={16} />
            </Link>
            <Link className="btn btn--outline-light" to="/pricing">
              View Growth Packages
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="page-intro">
            <p className="eyebrow">What you are buying</p>
            <h2>Different Pieces of Work. Different Responsibilities.</h2>
            <p>
              Growth is not one deliverable. A website, campaign setup, ongoing management, buyer
              qualification and sales conversion are different activities. We keep them separate so
              expectations stay clear.
            </p>
          </div>

          <div className="distinction mt-32">
            <div className="distinction__row distinction__row--head">
              <div className="distinction__cell">Workstream</div>
              <div className="distinction__cell">What it includes</div>
              <div className="distinction__cell">What it does not include</div>
            </div>
            {distinctions.map((row) => (
              <div className="distinction__row" key={row.label}>
                <div className="distinction__cell">
                  <strong>{row.label}</strong>
                </div>
                <div className="distinction__cell" data-label="Includes">
                  {row.what}
                </div>
                <div className="distinction__cell" data-label="Does not include">
                  {row.doesNot}
                </div>
              </div>
            ))}
          </div>

          <div className="notice mt-24">
            <Icon name="info" size={16} />
            <p>
              All solution areas below are proposed approaches. Final deliverables, timelines, pricing
              and revision limits are confirmed in a written proposal. Advertising media spend is
              always separate from management fees.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="page-intro" style={{ marginBottom: 38 }}>
            <p className="eyebrow">Solution detail</p>
            <h2>The Full Scope, Without the Vague Promises.</h2>
            <p>
              Browse each solution to see the business problem it addresses, who it suits, what is
              proposed and what Ezy Digital needs from your team.
            </p>
          </div>

          {growthSolutions.map((solution, index) => (
            <article className="solution-detail" key={solution.id} id={solution.id}>
              <div className="solution-detail__aside">
                <span className="tag tag--red">{String(index + 1).padStart(2, '0')}</span>
                <h2>{solution.title}</h2>
                <p>{solution.summary}</p>
                {solution.path !== '/solutions' ? (
                  <Link className="text-link mt-16" to={solution.path}>
                    Open the dedicated page <Icon name="arrowRight" size={14} />
                  </Link>
                ) : null}
              </div>

              <div>
                <div className="solution-detail__grid">
                  <div className="solution-block solution-block--wide">
                    <h3>
                      <Icon name="alert" size={15} /> Business problem
                    </h3>
                    <p>{solution.problem}</p>
                  </div>

                  <div className="solution-block">
                    <h3>
                      <Icon name="users" size={15} /> Suitable for
                    </h3>
                    <ul className="list-dash">
                      {solution.suitableFor.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-block">
                    <h3>
                      <Icon name="target" size={15} /> Proposed approach
                    </h3>
                    <ul className="list-dash">
                      {solution.approach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-block">
                    <h3>
                      <Icon name="checkCircle" size={15} /> Proposed deliverables
                    </h3>
                    <ul className="list-check">
                      {solution.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-block">
                    <h3>
                      <Icon name="clipboard" size={15} /> What Ezy Digital needs from you
                    </h3>
                    <ul className="list-dash">
                      {solution.clientProvides.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-block solution-block--wide">
                    <h3>
                      <Icon name="info" size={15} /> Dependencies &amp; honest limits
                    </h3>
                    <ul className="list-dash">
                      {solution.dependencies.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="solution-detail__actions">
                  <Link className="btn" to={`/contact?interest=${encodeURIComponent(solution.id)}`}>
                    {solution.cta} <Icon name="arrowRight" size={15} />
                  </Link>
                  <Link className="btn btn--outline" to="/pricing">
                    View growth packages
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="page-intro">
            <p className="eyebrow">Choose the right starting point</p>
            <h2>Not Sure Which Solution Comes First?</h2>
            <p>
              Most ceramic businesses benefit from fixing product presentation and inquiry handling
              before increasing traffic. If your catalogue is unclear or inquiries are not followed
              up, advertising can amplify the problem rather than solve it.
            </p>
          </div>
          <div className="grid grid-3 mt-32">
            <div className="content-card">
              <h3>Start with the website</h3>
              <p>
                If buyers cannot understand the range, compare categories or request details, start
                with a structured ceramic catalogue.
              </p>
              <Link className="text-link mt-16" to="/solutions/ceramic-website">
                Ceramic website options <Icon name="arrowRight" size={14} />
              </Link>
            </div>
            <div className="content-card">
              <h3>Start with dealer partners</h3>
              <p>
                If growth depends on new channel partners, build a clear dealer proposition and a
                structured application path.
              </p>
              <Link className="text-link mt-16" to="/solutions/dealer-distributor-growth">
                Dealer &amp; distributor growth <Icon name="arrowRight" size={14} />
              </Link>
            </div>
            <div className="content-card">
              <h3>Start with visibility</h3>
              <p>
                If the website and sales process are ready, use search and campaigns to reach buyer
                profiles and review inquiry quality.
              </p>
              <Link className="text-link mt-16" to="/solutions/digital-marketing">
                Digital marketing <Icon name="arrowRight" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Tell Us Which Growth Problem Matters Most."
        text="Share your product category, target market and current bottleneck. We will recommend a practical starting point — or tell you if a project is not the right next step."
        primaryLabel="Discuss Your Growth Plan"
        secondaryLabel="View Ceramic Pricing"
        secondaryTo="/pricing"
      />
    </>
  )
}
