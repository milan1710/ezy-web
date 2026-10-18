import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCatalogue from '../components/ProductCatalogue'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'

const capabilityAreas = [
  { icon: 'layers', title: 'Category range', text: 'A place to present wall tiles, floor tiles, vitrified tiles, porcelain, slabs and sanitaryware.' },
  { icon: 'sparkles', title: 'Finishes & formats', text: 'Product detail areas for client-approved finishes, formats and application context.' },
  { icon: 'package', title: 'Packaging & dispatch', text: 'A capability section for packaging, dispatch and supply information provided by the manufacturer.' },
  { icon: 'handshake', title: 'Channel support', text: 'Dealer, distributor and export inquiry paths with clear next steps.' },
]

const inquiryCards = [
  {
    icon: 'network',
    title: 'Dealer inquiry',
    text: 'A concept path for a dealer or distributor interested in the product range and territory discussion.',
    to: '/contact?interest=dealer-network&product=Floor%20Tiles',
    label: 'Open dealer inquiry demo',
  },
  {
    icon: 'globe',
    title: 'Export inquiry',
    text: 'A concept path for an international buyer requesting product details or a bulk quotation.',
    to: '/contact?interest=export-visibility&product=Vitrified%20%2F%20Porcelain%20Tiles',
    label: 'Open export inquiry demo',
  },
  {
    icon: 'clipboard',
    title: 'Bulk requirement',
    text: 'A concept path for project or bulk buyers who need multiple products and quantities.',
    to: '/contact?interest=buyer-inquiries&product=Slabs',
    label: 'Open bulk inquiry demo',
  },
]

export default function CeramicDemo() {
  useSeo({
    title: 'Ceramic Manufacturer Website Concept | Ezy Digital Demo',
    description:
      'Explore an illustrative ceramic manufacturer website concept: product catalogue, company profile, manufacturing capability sections, dealer inquiries and export inquiry paths. Demo content only.',
    path: '/ceramic-demo',
    image: `${import.meta.env.BASE_URL}images/large-format-slab.jpg`,
  })

  return (
    <div>
      <div className="demo-banner">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <p>
            <strong>Ceramic Manufacturer Website Concept.</strong> Demo content — not a real company,
            client or product catalogue.
          </p>
          <Link className="text-link" to="/solutions/ceramic-website">
            View website packages <Icon name="arrowRight" size={14} />
          </Link>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 22 }}>
        <Breadcrumbs
          light
          items={[{ label: 'Ceramic Demo' }]}
        />
      </div>

      {/* Fictional demo brand bar */}
      <div className="demo-brandbar">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div className="demo-brandbar__brand">
            <span className="demo-brandbar__mark" aria-hidden="true">
              MC
            </span>
            <p className="demo-brandbar__name">
              Morbi Ceramica
              <span>Concept brand — demo only</span>
            </p>
          </div>
          <nav className="demo-brandbar__nav" aria-label="Demo website sections">
            <a href="#demo-collection">Collection</a>
            <a href="#demo-company">Company</a>
            <a href="#demo-capabilities">Capabilities</a>
            <a href="#demo-inquiries">Inquiries</a>
            <a href="#demo-contact">Contact</a>
          </nav>
          <Link className="btn btn--dark btn--sm" to="/contact?interest=ceramic-website">
            Build Something Like This <Icon name="arrowRight" size={14} />
          </Link>
        </div>
      </div>

      {/* Demo hero */}
      <section className="demo-hero">
        <img
          src={ceramicImages.largeFormatSlab.src}
          alt={ceramicImages.largeFormatSlab.alt}
          width={ceramicImages.largeFormatSlab.width}
          height={ceramicImages.largeFormatSlab.height}
          fetchPriority="high"
          decoding="async"
        />
        <div className="container">
          <div className="demo-hero__content">
            <span className="tag tag--dark">Concept demo · illustrative content</span>
            <h1 style={{ marginTop: 16 }}>Large-Format Surfaces for Modern Spaces.</h1>
            <p>
              A demonstration of how a ceramic manufacturer can present its range, capabilities and
              inquiry paths online. The brand, products and details on this page are fictional.
            </p>
            <div className="demo-hero__actions">
              <a className="btn" href="#demo-collection">
                Explore the Collection <Icon name="arrowRight" size={16} />
              </a>
              <a className="btn btn--outline-light" href="#demo-inquiries">
                View Inquiry Paths
              </a>
            </div>
            <div className="demo-stats" aria-label="Illustrative demo categories">
              <div>
                <strong>Wall &amp; floor</strong>
                <span>Illustrative category</span>
              </div>
              <div>
                <strong>Vitrified &amp; porcelain</strong>
                <span>Illustrative category</span>
              </div>
              <div>
                <strong>Slabs &amp; sanitaryware</strong>
                <span>Illustrative category</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Company profile */}
      <section className="section" id="demo-company">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <span className="demo-label">
                <Icon name="info" size={12} /> Demo company profile
              </span>
              <h2 style={{ marginTop: 14 }}>A Manufacturer Story, Told Clearly.</h2>
              <p>
                This section demonstrates where a manufacturer can explain its business, product
                philosophy and approach to domestic and export supply. In a real project, every claim
                would be written and approved by the client.
              </p>
              <p>
                The concept copy is intentionally generic. No real production capacity, certifications,
                client names or export relationships are claimed.
              </p>
              <ul className="list-check mt-16">
                <li>Company introduction and product focus</li>
                <li>Manufacturing capability areas</li>
                <li>Packaging and dispatch context</li>
                <li>Dealer and export inquiry paths</li>
              </ul>
            </div>
            <div className="split__media">
              <div className="image-frame">
                <img
                  src={ceramicImages.tileFactory.src}
                  alt={ceramicImages.tileFactory.alt}
                  width={ceramicImages.tileFactory.width}
                  height={ceramicImages.tileFactory.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="image-frame__caption">Illustrative factory image — not a client facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--soft" id="demo-capabilities">
        <div className="container">
          <div className="demo-section-title">
            <span className="demo-label">
              <Icon name="info" size={12} /> Illustrative capability areas
            </span>
            <h2 style={{ marginTop: 14 }}>Manufacturing Capabilities</h2>
            <p>
              A real manufacturer would provide verified details for this section. Here, the cards only
              show the types of information a buyer might look for.
            </p>
          </div>
          <div className="demo-capability-grid">
            {capabilityAreas.map((area) => (
              <article className="demo-capability" key={area.title}>
                <Icon name={area.icon} size={20} />
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="section" id="demo-collection">
        <div className="container">
          <div className="demo-section-title">
            <span className="demo-label">
              <Icon name="info" size={12} /> Concept Demo — Illustrative Products and Layout
            </span>
            <h2 style={{ marginTop: 14 }}>The Collection</h2>
            <p>
              Browse sample categories and product cards. None of these are real products, prices or
              technical specifications.
            </p>
          </div>
          <ProductCatalogue label="Concept Demo — Illustrative Products and Layout" />
        </div>
      </section>
      {/* Inquiries */}
      <section className="section section--soft" id="demo-inquiries">
        <div className="container">
          <div className="demo-section-title">
            <span className="demo-label">
              <Icon name="info" size={12} /> Demo inquiry paths
            </span>
            <h2 style={{ marginTop: 14 }}>Dealer, Export &amp; Bulk Inquiries</h2>
            <p>
              Each inquiry path is a concept demonstration. The buttons below open the real Ezy Digital
              contact form with a sample product and interest preselected — they do not submit anything
              to a fictional manufacturer.
            </p>
          </div>
          <div className="demo-inquiry-grid">
            {inquiryCards.map((card) => (
              <article className="demo-inquiry-card" key={card.title}>
                <span className="demo-inquiry-card__icon">
                  <Icon name={card.icon} size={18} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link className="btn btn--outline btn--sm" to={card.to}>
                  {card.label} <Icon name="arrowRight" size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Demo contact */}
      <section className="section" id="demo-contact">
        <div className="container">
          <div className="demo-section-title">
            <span className="demo-label">
              <Icon name="info" size={12} /> Demo contact block
            </span>
            <h2 style={{ marginTop: 14 }}>Contact Section Concept</h2>
            <p>The contact details below are placeholders and are not connected to any business.</p>
          </div>
          <div className="demo-contact-strip">
            <div>
              <Icon name="phone" size={16} />
              <span>
                <strong>Demo line</strong>
                <br />
                Not connected — no real phone number
              </span>
            </div>
            <div>
              <Icon name="mail" size={16} />
              <span>
                <strong>Demo email</strong>
                <br />
                demo@example.com — not monitored
              </span>
            </div>
            <div>
              <Icon name="mapPin" size={16} />
              <span>
                <strong>Demo location</strong>
                <br />
                Morbi, Gujarat — concept only
              </span>
            </div>
          </div>
          <div className="notice mt-24">
            <Icon name="info" size={16} />
            <p>
              This page is a design demonstration by Ezy Digital. The brand, product names, product
              details and contact information are fictional. No certifications, production capacity,
              clients or export relationships are claimed.
            </p>
          </div>
          <div className="section-cta">
            <div>
              <p className="mini-heading" style={{ marginBottom: 4 }}>
                Want a concept like this for your business?
              </p>
              <p className="small muted">
                We can build a real catalogue around your approved products, images and inquiry process.
              </p>
            </div>
            <div className="row">
              <Link className="btn" to="/contact?interest=ceramic-website">
                Discuss Your Website <Icon name="arrowRight" size={15} />
              </Link>
              <Link className="btn btn--outline" to="/solutions/ceramic-website">
                Compare Website Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
