import PageHeader from '../components/PageHeader'
import PackageSpotlight from '../components/PackageSpotlight'
import MetaAdsPricing from '../components/MetaAdsPricing'
import FinalCTA from '../components/FinalCTA'
import Icon from '../components/ui/Icon'
import useSeo from '../hooks/useSeo'

const deliverables = [
  'Facebook and Instagram page management',
  'Up to 12 static posters each month',
  'Campaign setup within the agreed service scope',
  'Ad copy, audience and location targeting',
  'Campaign monitoring and basic optimization',
  'One monthly performance report',
]

export default function SocialMediaManagement() {
  useSeo({
    title: 'Social Media Management in Gujarat | Facebook & Instagram | Ezy Digital',
    description:
      'Monthly social media and Meta Ads management from ₹5,000 per month, including Facebook and Instagram page management, up to 12 posters and one performance report.',
    path: '/social-media-management',
  })

  return (
    <>
      <PageHeader
        eyebrow="Social media management"
        title="Monthly Facebook and Instagram management for your business"
        description="A defined monthly service with up to 12 static posters, page management, campaign setup within scope and one performance report. Ad spend is separate."
        breadcrumb={[{ label: 'Social Media Management' }]}
        quoteService="meta-social-management"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <PackageSpotlight id="meta-social-management" />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h2 className="text-lg font-bold text-ink-900">What you receive each month</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <Icon name="CheckCircle2" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <h2 className="text-lg font-bold text-ink-900">How the monthly scope works</h2>
              <p className="text-ink-500 mt-3 text-sm leading-relaxed">
                The monthly plan is a defined service, not unlimited creative production. The 12
                static posters are a monthly limit; extra posters, reels and video editing are
                quoted separately.
              </p>
              <p className="text-ink-500 mt-3 text-sm leading-relaxed">
                &ldquo;Unlimited campaign setup&rdquo; means campaign setup as required within the
                agreed service scope. It does not mean unlimited brands, ad accounts or unrelated
                projects, and major restructuring may need a separate quotation.
              </p>
              <p className="text-ink-500 mt-3 text-sm leading-relaxed">
                No fixed number of leads, sales, calls or conversions is guaranteed. Results depend
                on your offer, budget, audience and market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MetaAdsPricing showConditions />
      <FinalCTA />
    </>
  )
}
