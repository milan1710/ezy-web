import PageHeader from '../components/PageHeader'
import PackageSpotlight from '../components/PackageSpotlight'
import MetaAdsPricing from '../components/MetaAdsPricing'
import FinalCTA from '../components/FinalCTA'
import Icon from '../components/ui/Icon'
import useSeo from '../hooks/useSeo'

const deliverables = [
  'Ongoing Meta Ads campaign management',
  'Audience and creative testing where applicable',
  'Campaign optimization and performance review',
  'Facebook and Instagram page thinking within the agreed scope',
  'Social media posters quoted separately through the additional services list',
]

export default function SocialMediaManagement() {
  useSeo({
    title: 'Social Media & Meta Ads Management in Gujarat | Ezy Digital',
    description:
      'Monthly Meta Ads management from ₹4,999 with audience and creative testing, campaign optimization and performance review. Social media posters are quoted separately.',
    path: '/social-media-management',
  })

  return (
    <>
      <PageHeader
        eyebrow="Social media & ads management"
        title="Monthly Facebook and Instagram advertising management"
        description="A defined monthly management plan covering campaign monitoring, audience and creative testing where applicable, optimization and a performance review. Ad spend is separate."
        breadcrumb={[{ label: 'Social Media Management' }]}
        quoteService="meta-growth-management"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <PackageSpotlight id="meta-growth-management" />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h2 className="text-lg font-bold text-ink-900">What the management plan covers</h2>
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
                The management plan covers the campaigns and ad sets listed in the agreed scope. It
                is a defined service, not unlimited creative production or unlimited brands and ad
                accounts. Social media posters, Reels and video editing are quoted through the
                additional services list.
              </p>
              <p className="text-ink-500 mt-3 text-sm leading-relaxed">
                Campaign restructuring, additional creative production and substantial extra work
                may require a separate quotation. You keep ownership of the Meta Business Portfolio
                and ad account.
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
