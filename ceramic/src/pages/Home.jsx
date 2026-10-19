import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import IndustryCard from '../components/IndustryCard'
import GrowthSolutionCard from '../components/GrowthSolutionCard'
import ProcessSteps from '../components/ProcessSteps'
import ProductCatalogue from '../components/ProductCatalogue'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'
import demoProducts from '../data/demoProducts'
import { growthSolutions, businessChallenges, growthFocus, processSteps, whyPoints } from '../data/solutions'
import { homeFaqs } from '../data/faqs'
import { websitePackages } from '../data/pricing'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'

const auditScope = [
  'Existing website and mobile experience',
  'Product catalogue structure',
  'Dealer and distributor inquiry path',
  'Export visibility',
  'Search and advertising opportunities',
  'Inquiry form and contact flow',
  'Three practical improvement recommendations',
]

export default function Home() {
  useSeo({
    title: 'Ezy Digital | Ceramic Business Growth Solutions',
    description:
      'Ezy Digital helps ceramic manufacturers reach potential buyers, develop dealer and distributor inquiries, improve export visibility and manage business inquiries. Ceramic growth packages start at ₹1,00,000 per month plus GST.',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Ceramic business growth solutions',
      serviceType: [
        'Buyer inquiry generation',
        'Dealer and distributor inquiry systems',
        'Export-focused website development',
        'Ceramic product catalogue websites',
        'Digital marketing for ceramic manufacturers',
      ],
      provider: {
        '@type': 'Organization',
        name: 'Ezy Digital',
        url: 'https://ezydigital.in/',
        telephone: '+919512648085',
      },
      areaServed: [
        { '@type': 'City', name: 'Morbi' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      url: 'https://ezydigital.in/ceramic/',
    },
  })

  return (
    <>
      <HeroSection />

      {/* 01 — Business growth focus */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="01 / Business growth focus"
            title="Your Next Stage of Ceramic Business Growth Starts With the Right Digital System."
            text="These are the business objectives Ezy Digital can support. They are objectives, not guaranteed results — outcomes depend on your products, pricing, market, budget and follow-up."
          />
          <div className="notice mb-24" lang="gu">
            <Icon name="sparkles" size={16} />
            <p className="gu">
              Morbiની Ceramic Companiesને નવા Buyer, Dealer, Distributor અને Export Inquiry મેળવવામાં
              મદદરૂપ થતી Digital Growth Solutions.
            </p>
          </div>
          <div className="grid grid-4">
            {growthFocus.map((item) => (
              <IndustryCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.text}
                to={item.to}
                linkLabel={item.linkLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Challenges */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="02 / Common challenges"
            title="Are These Challenges Limiting Your Growth?"
            text="These are common patterns we hear from manufacturers. They are not universal, and the right response depends on your business model."
          />
          <div className="challenge-layout">
            <div className="challenge-list">
              {businessChallenges.map((challenge) => (
                <div className="challenge-item" key={challenge}>
                  <Icon name="alert" size={16} />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
            <div className="challenge-media">
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
              <p className="challenge-media__note">
                Illustrative showroom image. A strong catalogue is useful only when buyers can find
                it and act on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Solutions */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="03 / Growth solutions"
            title="Solutions Designed Around Your Business Goals."
            text="Website, product catalogue, digital marketing and inquiry tracking are tools. The objective is a clearer route from product discovery to a relevant business conversation."
            action={
              <Link className="btn btn--outline" to="/solutions">
                Compare all solutions <Icon name="arrowRight" size={15} />
              </Link>
            }
          />
          <div className="grid grid-3">
            {growthSolutions.map((solution, index) => (
              <GrowthSolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
          <div className="notice mt-32 gu" lang="gu">
            <Icon name="sparkles" size={16} />
            <p>
              માત્ર Website નહીં — તમારા Ceramic Businessના વિકાસ માટે Digital Strategy, Product
              Catalogue, Buyer Inquiry System અને Marketing Support.
            </p>
          </div>
        </div>
      </section>
      {/* 04 — Process */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="04 / How the growth system works"
            title="A Practical Process From Understanding to Improvement."
            text="The system is built in stages. Not every inquiry is a qualified buyer, and not every qualified buyer will place an order."
          />
          <ProcessSteps steps={processSteps} />
          <div className="notice mt-24">
            <Icon name="info" size={16} />
            <p>
              Inquiry quality depends on targeting, the offer, product competitiveness, pricing,
              response time and consistent sales follow-up. We review these factors with you rather
              than promising a fixed lead count.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — Domestic vs export */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="05 / Buyer markets"
            title="Domestic Buyers and Export Buyers Need Different Approaches."
            text="Buyer targeting depends on product category, pricing, shipping capability, certifications and market suitability. Not every buyer type is suitable for every manufacturer."
          />
          <div className="compare-grid">
            <article className="compare-card">
              <div className="compare-card__media">
                <img
                  src={ceramicImages.businessMeeting.src}
                  alt={ceramicImages.businessMeeting.alt}
                  width={ceramicImages.businessMeeting.width}
                  height={ceramicImages.businessMeeting.height}
                  loading="lazy"
                  decoding="async"
                />
                <div className="compare-card__label">
                  <strong>Domestic growth</strong>
                  <span>India · channel and project buyers</span>
                </div>
              </div>
              <div className="compare-card__body">
                <p>
                  Build product visibility and inquiry paths for businesses that buy, stock or specify
                  ceramic products within India.
                </p>
                <ul>
                  <li>Wholesalers</li>
                  <li>Dealers</li>
                  <li>Distributors</li>
                  <li>Builders &amp; contractors</li>
                  <li>Retailers</li>
                  <li>Bulk purchasers</li>
                  <li>Regional &amp; national buyers</li>
                </ul>
                <div className="compare-card__foot">
                  Relevant when you have clear domestic pricing, supply capacity and a sales contact
                  for follow-up.
                </div>
              </div>
            </article>

            <article className="compare-card">
              <div className="compare-card__media">
                <img
                  src={ceramicImages.containerPort.src}
                  alt={ceramicImages.containerPort.alt}
                  width={ceramicImages.containerPort.width}
                  height={ceramicImages.containerPort.height}
                  loading="lazy"
                  decoding="async"
                />
                <div className="compare-card__label">
                  <strong>Export growth</strong>
                  <span>International · English-first visibility</span>
                </div>
              </div>
              <div className="compare-card__body">
                <p>
                  Help international buyers understand your range, capabilities and how to request a
                  quotation.
                </p>
                <ul>
                  <li>Importers</li>
                  <li>Overseas distributors</li>
                  <li>International wholesalers</li>
                  <li>Project procurement companies</li>
                  <li>Buyers searching specific ceramic products</li>
                </ul>
                <div className="compare-card__foot">
                  Export orders depend on buyer requirements, product suitability, commercial terms,
                  shipping, compliance and negotiation.
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 06 — Catalogue concept */}
      <section className="section section--soft" id="catalogue-preview">
        <div className="container">
          <SectionHeading
            eyebrow="06 / Ceramic catalogue concept"
            title="A Digital Product Range Buyers Can Actually Browse."
            text="Wall tiles, floor tiles, vitrified and porcelain tiles, slabs and sanitaryware can be organised into a consistent catalogue with clear inquiry actions."
            action={
              <Link className="btn btn--outline" to="/solutions/ceramic-website">
                Explore catalogue websites <Icon name="arrowRight" size={15} />
              </Link>
            }
          />
          <ProductCatalogue products={demoProducts} limit={6} label="Concept Demo — Illustrative Products and Layout" />
        </div>
      </section>
      {/* 07 — Why Ezy Digital */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="07 / Why Ezy Digital"
            title="A Practical, Transparent Approach to Digital Business Growth."
            text="No invented client numbers, no fake testimonials and no guaranteed buyers. A clear process, defined scope and honest reporting."
          />
          <div className="why-layout">
            <div className="why-media">
              <div className="image-frame">
                <img
                  src={ceramicImages.marbleHands.src}
                  alt={ceramicImages.marbleHands.alt}
                  width={ceramicImages.marbleHands.width}
                  height={ceramicImages.marbleHands.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="why-media__quote">
                <strong>Our position</strong>
                Buyer acquisition is a business process, not a single webpage or advertisement.
              </div>
            </div>
            <div className="why-grid">
              {whyPoints.map((point, index) => (
                <div className="why-item" key={point.title}>
                  <span className="why-item__index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Free audit */}
      <section className="section audit">
        <div className="container audit__inner">
          <div>
            <p className="eyebrow">08 / Free ceramic growth audit</p>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', marginBottom: 16 }}>
              Discover Where Your Ceramic Business Can Grow Online.
            </h2>
            <p className="lead" style={{ marginBottom: 22 }}>
              Request an initial review of your digital presence and receive practical recommendations
              for product presentation, buyer inquiries and online visibility.
            </p>
            <ul className="audit__scope">
              {auditScope.map((item) => (
                <li key={item}>
                  <Icon name="checkCircle" size={15} /> {item}
                </li>
              ))}
            </ul>
            <p className="small" style={{ marginTop: 16, color: 'rgba(255,255,255,0.45)' }}>
              The free audit is an initial review, not a complete paid market research report.
            </p>
          </div>
          <div className="audit__card">
            <h3>Start with a practical conversation.</h3>
            <p>
              Tell us what you manufacture, which market you want to target and what is not working
              today. We will review the visible digital experience and identify three practical
              improvements.
            </p>
            <Link className="btn" to="/contact">
              Request My Free Growth Audit <Icon name="arrowRight" size={16} />
            </Link>
            <a
              className="btn btn--outline-light btn--block"
              style={{ marginTop: 10 }}
              href={whatsappLink(ceramicSite.whatsappMessages.audit)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={16} /> WhatsApp Ezy Digital
            </a>
            <p className="small" style={{ marginTop: 14, color: 'rgba(255,255,255,0.42)' }}>
              Ceramic growth packages start at {websitePackages[0].priceLabel} per month. GST extra.
            </p>
          </div>
        </div>
      </section>

      {/* 09 — FAQ */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <p className="eyebrow">09 / Questions, answered honestly</p>
              <h2 style={{ fontSize: 'clamp(2rem, 3.3vw, 2.9rem)', marginBottom: 14 }}>
                Frequently Asked Questions
              </h2>
              <p className="lead">
                Clear answers about buyer inquiries, dealer development, export visibility, pricing
                and timelines.
              </p>
              <div className="panel panel--soft mt-24">
                <p className="mini-heading">Still need clarity?</p>
                <p className="small muted" style={{ marginBottom: 14 }}>
                  Share your product range and target market. We will tell you what is realistic and
                  what is not.
                </p>
                <Link className="btn btn--dark btn--sm" to="/contact">
                  Ask about your requirement <Icon name="arrowRight" size={14} />
                </Link>
              </div>
            </div>
            <FAQAccordion items={homeFaqs} idPrefix="home-faq" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
