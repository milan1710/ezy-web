import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Icon from '../components/ui/Icon'
import ceramicImages from '../data/ceramicImages'
import { marketingServices } from '../data/pricing'

const channels = [
  {
    icon: 'search',
    title: 'Google Search Ads',
    text: 'Can capture buyers actively searching for specific tile, slab or sanitaryware categories. Requires relevant keywords, landing pages and budget.',
    limit: 'Limited by search volume, competition and the relevance of your offer.',
  },
  {
    icon: 'megaphone',
    title: 'Meta Ads',
    text: 'Can build awareness and reach business profiles on Facebook and Instagram with product-led creative.',
    limit: 'Industrial buying intent is harder to capture. Meta Ads alone does not guarantee buyers or export orders.',
  },
  {
    icon: 'trending',
    title: 'SEO',
    text: 'Improves the structure and discoverability of product and category pages over time.',
    limit: 'Rankings and traffic cannot be guaranteed. SEO usually needs consistent work.',
  },
  {
    icon: 'layout',
    title: 'Product landing pages',
    text: 'Give campaigns and search traffic a focused page with product details and an inquiry action.',
    limit: 'Page performance depends on product information, offer clarity and user intent.',
  },
  {
    icon: 'network',
    title: 'Dealer campaign funnels',
    text: 'Use landing pages and forms designed for potential channel partners rather than retail buyers.',
    limit: 'A dealer inquiry is not a confirmed appointment.',
  },
  {
    icon: 'globe',
    title: 'Export-focused campaigns',
    text: 'Structure campaigns around buyer questions and English category pages for international markets.',
    limit: 'Orders depend on product suitability, pricing, compliance, shipping and negotiation.',
  },
]

const comparison = [
  { channel: 'Google Search Ads', objective: 'Capture active product or category searches', considerations: 'Keyword relevance, landing page quality, competition, budget', deliverables: 'Campaign setup, search terms, negative keywords, reporting' },
  { channel: 'Meta Ads', objective: 'Reach business profiles and promote product ranges', considerations: 'Creative quality, audience relevance, lead quality review', deliverables: 'Campaign structure, audience setup, creative direction, reporting' },
  { channel: 'SEO', objective: 'Build category and product search visibility', considerations: 'Technical foundation, content quality, time, competition', deliverables: 'On-page improvements, structure, content plan, search reporting' },
  { channel: 'Landing pages', objective: 'Turn traffic into a relevant inquiry', considerations: 'Product clarity, form length, trust, response process', deliverables: 'Page structure, copy direction, forms, conversion tracking' },
  { channel: 'Analytics & tracking', objective: 'Understand inquiry sources and quality', considerations: 'Consent, platform limitations, data access, attribution', deliverables: 'Conversion events, source fields, reporting notes' },
]

const measured = [
  'Inquiry source and campaign',
  'Product or category interest',
  'Buyer type and geography',
  'Call and WhatsApp actions where tracking is possible',
  'Qualification status from your sales team',
  'Follow-up status and response time',
]

export default function DigitalMarketing() {
  useSeo({
    title: 'Ceramic Digital Marketing: Google Ads, Meta Ads & SEO | Ezy Digital',
    description:
      'Digital marketing for ceramic manufacturers: Google Ads, Meta Ads, SEO, product landing pages, dealer funnels and inquiry tracking. Advertising spend is separate. No guaranteed rankings or sales.',
    path: '/solutions/digital-marketing',
    image: `${import.meta.env.BASE_URL}images/business-meeting.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Digital marketing for ceramic manufacturers',
      provider: { '@type': 'Organization', name: 'Ezy Digital', url: 'https://ezydigital.in/' },
      areaServed: [
        { '@type': 'City', name: 'Morbi' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      url: 'https://ezydigital.in/ceramic/solutions/digital-marketing',
    },
  })

  return (
    <>
      <PageHero
        eyebrow="Digital marketing"
        title="Marketing Channels Chosen for Ceramic Buyer Behaviour."
        lead="Google Ads, Meta Ads, SEO and product landing pages can support buyer discovery. Each channel has a role — and a limitation. We do not treat them as interchangeable."
        image={ceramicImages.businessMeeting.src}
        imageAlt={ceramicImages.businessMeeting.alt}
        breadcrumbs={[
          { label: 'Growth Solutions', to: '/solutions' },
          { label: 'Digital Marketing' },
        ]}
        meta={['Google Ads', 'Meta Ads', 'SEO', 'Inquiry tracking']}
        stamp="Ad spend is separate from fees."
        actions={
          <>
            <Link className="btn" to="/contact?interest=digital-marketing">
              Discuss Marketing <Icon name="arrowRight" size={16} />
            </Link>
            <Link className="btn btn--outline-light" to="/pricing">
              View Marketing Pricing
            </Link>
          </>
        }
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Channels and roles"
            title="Each Channel Has a Job — and a Limit."
            text="The right mix depends on whether you need active search visibility, broader awareness, dealer interest or export discovery."
          />
          <div className="grid grid-3">
            {channels.map((channel) => (
              <article className="content-card" key={channel.title}>
                <Icon name={channel.icon} size={20} className="text-red" style={{ marginBottom: 12 }} />
                <h3>{channel.title}</h3>
                <p>{channel.text}</p>
                <p className="small muted mt-16">
                  <strong>Limitation:</strong> {channel.limit}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Channel comparison"
            title="What Each Channel Can and Cannot Do."
            text="This comparison is a planning aid, not a performance guarantee. Results vary by product, market, competition, budget and sales follow-up."
          />
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Channel</th>
                  <th scope="col">Suitable objective</th>
                  <th scope="col">Main considerations</th>
                  <th scope="col">Typical deliverables</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.channel}>
                    <td>
                      <strong>{row.channel}</strong>
                    </td>
                    <td>{row.objective}</td>
                    <td>{row.considerations}</td>
                    <td>{row.deliverables}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__content">
              <p className="eyebrow">Measurement</p>
              <h2>Measure Inquiries, Not Just Clicks.</h2>
              <p>
                A campaign can look successful in an ad platform and still produce irrelevant
                inquiries. We review source, buyer type, product interest and the sales team&apos;s
                qualification feedback.
              </p>
              <ul className="list-check mt-16">
                {measured.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="notice notice--red mt-24">
                <Icon name="alert" size={16} />
                <p>
                  We do not promise guaranteed rankings, a fixed number of leads, a fixed cost per
                  lead or sales. Tracking is also limited by platform rules, consent and the access
                  you provide.
                </p>
              </div>
            </div>
            <div className="split__media">
              <div className="image-frame">
                <img
                  src={ceramicImages.catalogueFlatlay.src}
                  alt={ceramicImages.catalogueFlatlay.alt}
                  width={ceramicImages.catalogueFlatlay.width}
                  height={ceramicImages.catalogueFlatlay.height}
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
            eyebrow="Engagement options"
            title="Marketing Support Within Approved Growth Packages."
            text="Meta Ads, Google Ads and SEO support are included according to package scope. Advertising media spend is separate and is confirmed in writing."
            action={
              <Link className="btn btn--outline" to="/pricing">
                View full pricing <Icon name="arrowRight" size={15} />
              </Link>
            }
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

      <CTASection
        title="Choose Channels Based on Your Buyer, Not a Template."
        text="Tell us your product categories, priority markets and current inquiry quality. We will recommend a realistic channel mix and budget range."
        primaryLabel="Discuss Digital Marketing"
        primaryTo="/contact?interest=digital-marketing"
        secondaryLabel="View Growth Packages"
        secondaryTo="/pricing"
      />
    </>
  )
}
