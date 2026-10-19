import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import ProductCatalogue from '../components/ProductCatalogue'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'
import demoProducts from '../data/demoProducts'
import { websitePackages, pricingExclusions } from '../data/pricing'
import { processSteps } from '../data/solutions'

export default function CeramicWebsite() {
  useSeo({
    title: 'Ceramic Website & Product Catalogue Development | Ezy Digital',
    description:
      'Ceramic website development with approved monthly growth packages: business websites, product catalogue sites, export websites and advanced catalogue builds with clear scope, exclusions and inquiry paths.',
    path: '/solutions/ceramic-website',
    image: `${import.meta.env.BASE_URL}images/tile-samples.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Ceramic website and product catalogue development',
      provider: { '@type': 'Organization', name: 'Ezy Digital', url: 'https://ezydigital.in/' },
      areaServed: [
        { '@type': 'City', name: 'Morbi' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      url: 'https://ezydigital.in/ceramic/solutions/ceramic-website',
    },
  })

  return (
    <>
      <PageHero
        eyebrow="Ceramic website & catalogue"
        title="A Ceramic Website Built to Present Products and Start Conversations."
        lead="Make your product range easy to browse, share and inquire about — on mobile, desktop and with dealers or international buyers."
        image={ceramicImages.tileSamples.src}
        imageAlt={ceramicImages.tileSamples.alt}
        breadcrumbs={[
          { label: 'Growth Solutions', to: '/solutions' },
          { label: 'Ceramic Website & Catalogue' },
        ]}
        meta={['Mobile-first', 'Category structure', 'Product inquiry actions']}
        stamp="Included in monthly growth packages"
        actions={
          <>
            <Link className="btn" to="/contact?interest=ceramic-website">
              Discuss Your Website <Icon name="arrowRight" size={16} />
            </Link>
            <Link className="btn btn--outline-light" to="/ceramic-demo">
              Open the Ceramic Demo
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">The business case</p>
              <h2>A Website Is a Sales Tool, Not a Digital Brochure.</h2>
              <p>
                A ceramic buyer needs to understand categories, finishes, formats and business
                credibility quickly. If the range is buried in PDFs or WhatsApp images, the sales team
                repeats the same explanation every day.
              </p>
              <p>
                We structure the website around how buyers browse: category, product, detail, inquiry.
                Every product page has a clear action — request details, ask for a bulk quotation or
                speak to the sales team.
              </p>
              <ul className="list-check mt-16">
                <li>Category-wise product presentation</li>
                <li>Consistent product cards and detail pages</li>
                <li>Dealer and export inquiry paths</li>
                <li>Mobile-first performance and readable layouts</li>
                <li>Basic SEO structure using client-approved content</li>
              </ul>
            </div>
            <div className="split__media">
              <div className="image-frame">
                <img
                  src={ceramicImages.showroom.src}
                  alt={ceramicImages.showroom.alt}
                  width={ceramicImages.showroom.width}
                  height={ceramicImages.showroom.height}
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
            eyebrow="Growth packages"
            title="Ceramic Website Options Within Growth Packages."
            text="Website and catalogue deliverables are included in the approved monthly growth packages. Scope, content and revision limits are defined in writing."
            action={
              <Link className="btn btn--outline" to="/pricing">
                See full pricing page <Icon name="arrowRight" size={15} />
              </Link>
            }
          />
          <div className="pricing-grid">
            {websitePackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} ctaLabel="Discuss This Website" />
            ))}
          </div>
          <div className="notice mt-24">
            <Icon name="info" size={16} />
            <p>
              Domain and hosting may be extra. Professional product photography, copywriting,
              translation and custom software integrations are quoted separately. Every published
              package is scoped for ceramic product presentation and inquiry actions.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Catalogue preview"
            title="A Product Experience Buyers Can Navigate."
            text="The preview below is an illustrative concept. Real catalogue content, product images and specifications must be supplied and approved by the manufacturer."
          />
          <ProductCatalogue products={demoProducts} limit={6} label="Concept Demo — Illustrative Products and Layout" />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">Scope clarity</p>
              <h2>What Is Usually Not Included.</h2>
              <p>
                A website price should not hide the extras. These items are quoted separately unless
                the proposal explicitly includes them.
              </p>
              <ul className="list-dash mt-16">
                {pricingExclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="notice mt-24">
                <Icon name="alert" size={16} />
                <p>
                  A website can improve presentation and inquiry flow. It cannot guarantee buyer
                  inquiries, rankings or sales. Product competitiveness, pricing and follow-up remain
                  essential.
                </p>
              </div>
            </div>
            <div className="split__media">
              <div className="panel panel--dark">
                <p className="mini-heading">Before the project starts</p>
                <ul className="list-check list-check--light">
                  <li>Product categories and approved product names</li>
                  <li>Product images and specification sheets</li>
                  <li>Company information, contact details and brand assets</li>
                  <li>Dealer terms or export information where relevant</li>
                  <li>A single point of contact for approvals</li>
                </ul>
                <Link
                  className="btn mt-24"
                  to="/contact?interest=ceramic-website&package=Ceramic%20Product%20Catalogue%20Website"
                >
                  Discuss Your Catalogue <Icon name="arrowRight" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery process"
            title="A Structured Build, Not an Endless Redesign."
            text="Scope, milestones, revision limits and content responsibilities are agreed before development starts."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <p className="process-step__detail">{step.detail}</p>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <p className="small muted" style={{ maxWidth: '62ch' }}>
              Need to see the layout in context? Open the standalone ceramic manufacturer concept to
              explore the catalogue, dealer inquiry and export inquiry sections.
            </p>
            <Link className="btn btn--outline" to="/ceramic-demo">
              Open Ceramic Demo <Icon name="arrowRight" size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Choose a Website Scope That Fits Your Product Range."
        text="Tell us how many product categories you have, what content is ready and whether you need dealer or export inquiry paths."
        primaryLabel="Discuss Your Ceramic Website"
        primaryTo="/contact?interest=ceramic-website"
        secondaryLabel="View All Packages"
        secondaryTo="/pricing"
      />
    </>
  )
}
