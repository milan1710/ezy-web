import PageHeader from '../components/PageHeader'
import MetaAdsPricing from '../components/MetaAdsPricing'
import FinalCTA from '../components/FinalCTA'
import Icon from '../components/ui/Icon'
import { metaAdsBudgetDisclaimer } from '../data/pricing'
import useSeo from '../hooks/useSeo'
import { serviceSchema } from '../utils/schema'

const included = [
  'One Meta advertising campaign and one ad set configured',
  'Audience and location targeting',
  'Ad copy setup and basic campaign configuration',
  'Campaign monitoring and optimization on a management plan',
  'Performance review and reporting according to the agreed scope',
]

const notIncluded = [
  'Meta advertising spend',
  'Video shooting, video editing or creative production',
  'Advanced tracking and pixel configuration',
  'Ongoing management in the one-time setup fee',
  'Additional campaigns beyond the agreed scope',
  'Website or landing page development',
]

export default function MetaAdsManagement() {
  useSeo({
    title: 'Meta Ads Management in Gujarat | Facebook & Instagram Ads | Ezy Digital',
    description:
      'Meta Ads campaign setup from ₹999, with monthly management plans at ₹2,999, ₹4,999 and ₹7,999. The advertising budget is paid separately to Meta.',
    path: '/meta-ads-management',
    jsonLd: serviceSchema({
      name: 'Meta Ads Management',
      description:
        'Facebook and Instagram campaign setup from ₹999, with monthly management plans covering audience targeting, creative testing, optimization and reporting. Ad spend is separate.',
      path: '/meta-ads-management',
      price: 999,
    }),
  })

  return (
    <>
      <PageHeader
        eyebrow="Meta Ads management"
        title="Facebook and Instagram advertising with honest, itemised pricing"
        description="Campaign setup from ₹999, audience targeting and monthly management through Meta Ads Manager. The advertising budget is always separate and paid by you directly to Meta."
        breadcrumb={[{ label: 'Meta Ads Management' }]}
        quoteService="meta-single-campaign"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
              What Meta Ads means
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
              Advertising on Facebook and Instagram through Meta Ads Manager
            </h2>
            <p className="text-ink-500 mt-4 text-sm leading-relaxed sm:text-base">
              We configure campaigns in your own Meta advertising account, target the right audience
              and location, prepare the ad copy and monitor performance within the agreed scope. You
              keep ownership and control of the ad account and payment method at all times.
            </p>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900">Advertising budget is not a service fee</p>
              <p className="mt-1 text-sm leading-relaxed text-amber-900/90">{metaAdsBudgetDisclaimer}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-5">
              <h3 className="text-sm font-bold text-ink-900">What the service covers</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-ink-600">
                    <Icon name="Check" className="text-brand-600 mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-5">
              <h3 className="text-sm font-bold text-ink-900">What it does not cover</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-ink-600">
                    <Icon name="Minus" className="text-ink-400 mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MetaAdsPricing />
      <FinalCTA />
    </>
  )
}
