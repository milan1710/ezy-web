import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import InquiryForm from '../components/InquiryForm'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'
import ceramicSite, { whatsappLink } from '../config/ceramicSite'

const auditScope = [
  'Existing website and mobile experience',
  'Product catalogue structure',
  'Dealer / distributor inquiry path',
  'Export visibility',
  'Search and advertising opportunities',
  'Inquiry form and contact flow',
  'Three practical improvement recommendations',
]

const productMap = {
  'Wall Tiles': 'Wall Tiles',
  'Floor Tiles': 'Floor Tiles',
  'Vitrified Tiles': 'Vitrified / Porcelain Tiles',
  'Porcelain Tiles': 'Vitrified / Porcelain Tiles',
  'Vitrified / Porcelain Tiles': 'Vitrified / Porcelain Tiles',
  Slabs: 'Slabs',
  Sanitaryware: 'Sanitaryware',
}

const interestGoalMap = {
  'dealer-network': 'Build Dealer Network',
  'dealer-inquiry-form': 'Find Distributor Inquiries',
  'export-visibility': 'Export Market Visibility',
  'buyer-inquiries': 'Find Domestic Buyers',
  'ceramic-website': 'Improve Product Catalogue',
  catalogue: 'Improve Product Catalogue',
  'digital-marketing': 'Digital Marketing',
  'meta-setup': 'Digital Marketing',
  'meta-management': 'Digital Marketing',
  'google-management': 'Digital Marketing',
  seo: 'Digital Marketing',
  'growth-package': 'Digital Marketing',
  'custom-growth': 'Discuss a Custom Growth Plan',
  website: 'Improve Existing Website',
  business: 'Improve Product Catalogue',
  export: 'Improve Product Catalogue',
  advanced: 'Improve Product Catalogue',
}

export default function Contact() {
  useSeo({
    title: 'Contact Ezy Digital | Ceramic Growth Consultation',
    description:
      'Tell Ezy Digital about your ceramic business growth goals: buyers, dealer network, export visibility, product catalogue or digital marketing. Call or WhatsApp +91 95126 48085.',
    path: '/contact',
    image: `${import.meta.env.BASE_URL}images/showroom.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Ezy Digital — ceramic growth consultation',
      url: 'https://ezydigital.in/ceramic/contact',
      mainEntity: {
        '@type': 'Organization',
        name: 'Ezy Digital Marketing Agency',
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

  const [searchParams] = useSearchParams()

  const defaults = useMemo(() => {
    const rawProduct = searchParams.get('product') || ''
    const interest = searchParams.get('interest') || ''
    const item = searchParams.get('item') || ''
    const packageName = searchParams.get('package') || ''

    const parts = []
    if (item) parts.push(`I am interested in the sample product "${item}" shown in the ceramic demo.`)
    if (packageName) parts.push(`I would like to discuss the ${packageName} option.`)
    if (interest === 'bulk-inquiry') parts.push('I would like to discuss a bulk product inquiry.')
    if (interest === 'product-details') parts.push('I would like more product details.')

    return {
      product: productMap[rawProduct] || '',
      goal: interestGoalMap[interest] || '',
      description: parts.join(' '),
    }
  }, [searchParams])

  return (
    <>
      <PageHero
        eyebrow="Contact & growth audit"
        title="Tell Us About Your Ceramic Business Growth Goals."
        lead="Share what you manufacture, the market you want to reach and the kind of buyers or distributors you want to attract. We will respond with a practical next step — or tell you if something is not realistic."
        image={ceramicImages.showroom.src}
        imageAlt={ceramicImages.showroom.alt}
        breadcrumbs={[{ label: 'Contact' }]}
        meta={['Free initial audit', 'No guaranteed buyer promises', 'Morbi / Gujarat focus']}
        stamp="A real conversation, not a sales script."
        actions={
          <>
            <a className="btn" href={ceramicSite.contact.telHref}>
              <Icon name="phone" size={16} /> Call {ceramicSite.contact.phoneInternational}
            </a>
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
          <div className="contact-layout">
            <div className="contact-form-card">
              <h2>Request a Free Ceramic Growth Audit</h2>
              <p>
                Required fields are marked with an asterisk. Your details are submitted to our CRM so
                the team can review your requirement and contact you.
              </p>
              <InquiryForm key={searchParams.toString()} defaults={defaults} />
            </div>

            <aside className="contact-side">
              <div className="contact-card contact-card--dark">
                <h2>Talk Directly</h2>
                <p>Prefer a call or WhatsApp? Use the details below.</p>
                <div className="contact-lines">
                  <a href={ceramicSite.contact.telHref}>
                    <Icon name="phone" size={15} /> {ceramicSite.contact.phoneInternational}
                  </a>
                  <a
                    href={whatsappLink(ceramicSite.whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="whatsapp" size={15} /> WhatsApp Ezy Digital
                  </a>
                  <span>
                    <Icon name="mapPin" size={15} /> {ceramicSite.contact.address.full}
                  </span>
                </div>
              </div>

              <div className="contact-card">
                <h3>What the free audit covers</h3>
                <ul className="contact-checklist" style={{ marginTop: 10 }}>
                  {auditScope.map((item) => (
                    <li key={item} style={{ color: 'var(--gray-600)' }}>
                      <Icon name="checkCircle" size={14} style={{ color: 'var(--red)' }} /> {item}
                    </li>
                  ))}
                </ul>
                <p className="small muted mt-16">
                  This is an initial review, not a complete paid market research report.
                </p>
              </div>

              <div className="contact-card">
                <h3>What happens after you send</h3>
                <p>
                  We review your requirement and respond on WhatsApp or by phone. If there is a fit,
                  we propose a suitable package scope. If there is no fit, we will say so.
                </p>
                <p className="small muted mt-16">
                  We do not promise a fixed number of buyers, dealers or export orders.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="notice">
            <Icon name="shield" size={16} />
            <p>
              <strong>How this form works:</strong> after validation, your details are submitted to our
              CRM as a lead and you are taken to a confirmation page. Our team can then review and
              contact you. If you prefer, call or WhatsApp us directly.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
