import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'

const approach = [
  { number: '01', title: 'Understand the business model', text: 'How you manufacture, price, distribute and sell today — including the constraints your team works with.' },
  { number: '02', title: 'Identify target buyers and distribution goals', text: 'Which buyer types, territories and product categories are realistic priorities for the next stage.' },
  { number: '03', title: 'Select suitable digital systems', text: 'Website, catalogue, landing pages, campaigns and tracking — only where they serve a clear objective.' },
  { number: '04', title: 'Build product presentation and inquiry paths', text: 'Category structure, product detail pages, dealer forms and export inquiry flows.' },
  { number: '05', title: 'Implement appropriate marketing', text: 'Search, social, content or landing pages chosen for the buyer and budget — not applied by default.' },
  { number: '06', title: 'Review actual inquiry data and improve', text: 'Source, qualification, response time and follow-up gaps reviewed with your sales team.' },
]

const doList = [
  'Clarify the business objective before proposing tools',
  'Write down scope, exclusions and dependencies',
  'Build structured product and inquiry experiences',
  'Use client-approved product information',
  'Report honestly on what the data shows',
  'Recommend improvements based on actual inquiries',
]

const avoidList = [
  'Invented client logos, testimonials or ratings',
  'Guaranteed buyers, dealers or export orders',
  'Unverified international buyer databases',
  'Fake dashboards presented as client performance',
  'Unlimited scope at a fixed price',
  'Promises of guaranteed Google rankings',
]

export default function About() {
  useSeo({
    title: 'About Ezy Digital | Ceramic Business Growth Partner',
    description:
      'Ezy Digital is a digital growth partner for ceramic manufacturers and exporters, working from Upleta, Gujarat. We start with business goals, define clear scope and report honestly.',
    path: '/about',
    image: `${import.meta.env.BASE_URL}images/marble-hands.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Ezy Digital — Ceramic Business Growth',
      url: 'https://ezydigital.in/ceramic/about',
      mainEntity: {
        '@type': 'Organization',
        name: 'Ezy Digital',
        url: 'https://ezydigital.in/',
        telephone: '+919512648085',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Upleta',
          addressRegion: 'Gujarat',
          addressCountry: 'IN',
        },
      },
    },
  })

  return (
    <>
      <PageHero
        eyebrow="About Ezy Digital"
        title="A Digital Growth Partner for Ceramic Manufacturers & Exporters."
        lead="We help ceramic businesses improve their digital presence, reach potential buyers, develop dealer and distributor inquiry channels, and build a more structured system for domestic and export business development."
        image={ceramicImages.marbleHands.src}
        imageAlt={ceramicImages.marbleHands.alt}
        breadcrumbs={[{ label: 'About' }]}
        meta={['Upleta, Gujarat', 'Ceramic-focused growth', 'Transparent scope']}
        stamp="Business outcomes first. Tools second."
        actions={
          <>
            <Link className="btn" to="/contact">
              Discuss Your Growth Plan <Icon name="arrowRight" size={16} />
            </Link>
            <a
              className="btn btn--outline-light"
              href={whatsappLink(ceramicSite.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={16} /> WhatsApp Ezy Digital
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">Our approach</p>
              <h2>We Start With the Manufacturer&apos;s Business Model.</h2>
              <p>
                Ceramic businesses are not identical. A vitrified tile manufacturer selling through a
                dealer network faces different questions from an exporter targeting project buyers or
                a sanitaryware brand building a retail presence.
              </p>
              <p>
                We start with your products, pricing, markets, sales process and capacity. Then we
                decide which digital systems are actually useful. Sometimes that is a catalogue
                website. Sometimes it is a focused landing page and better inquiry handling. Sometimes
                the right advice is to fix the sales follow-up before spending more on advertising.
              </p>
              <ul className="list-check mt-16">
                <li>Business objective before service package</li>
                <li>Clear scope and written dependencies</li>
                <li>Product presentation built for buyer questions</li>
                <li>Honest reporting, including what did not work</li>
              </ul>
            </div>
            <div className="split__media">
              <div className="image-frame">
                <img
                  src={ceramicImages.slabFactory.src}
                  alt={ceramicImages.slabFactory.alt}
                  width={ceramicImages.slabFactory.width}
                  height={ceramicImages.slabFactory.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="image-frame__caption">Illustrative industry image — not a client facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="A Repeatable, Practical Growth Process."
            text="This is the working approach we apply to ceramic engagements. The level of depth depends on scope and budget."
          />
          <div className="about-values">
            {approach.map((step) => (
              <article className="about-value" key={step.number}>
                <span className="about-value__num">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Honest positioning"
            title="What We Do — and What We Deliberately Avoid."
            text="Trust is built by being clear about the limits of digital work, not by overstating what an agency can control."
          />
          <div className="about-note">
            <div className="panel">
              <p className="mini-heading">Our working commitments</p>
              <ul className="list-check">
                {doList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="panel panel--soft">
              <p className="mini-heading">What you will not see here</p>
              <ul className="list-dash">
                {avoidList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-3 mt-32">
            <div className="content-card">
              <h3>Location</h3>
              <p>{ceramicSite.contact.address.full}</p>
            </div>
            <div className="content-card">
              <h3>Phone &amp; WhatsApp</h3>
              <p>
                <a className="text-link" href={ceramicSite.contact.telHref}>
                  {ceramicSite.contact.phoneInternational}
                </a>
              </p>
            </div>
            <div className="content-card">
              <h3>Email</h3>
              <p>
                <a className="text-link" href={`mailto:${ceramicSite.contact.email}`}>
                  {ceramicSite.contact.email}
                </a>
              </p>
            </div>
          </div>
          <div className="notice mt-24">
            <Icon name="info" size={16} />
            <p>
              This ceramic growth site is a separate section of Ezy Digital and does not claim a
              ceramic client portfolio, awards, employee count or sector-specific success statistics.
              We are not publishing invented proof.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Start With a Conversation About Your Business."
        text="Tell us what you manufacture, how you currently sell and what you want to improve. We will be direct about where digital work can help and where it cannot."
        primaryLabel="Discuss Your Growth Plan"
        secondaryLabel="Request a Free Audit"
        secondaryTo="/contact"
      />
    </>
  )
}
