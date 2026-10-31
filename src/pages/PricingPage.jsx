import PageHeader from '../components/PageHeader'
import Pricing from '../components/Pricing'
import MetaAdsPricing from '../components/MetaAdsPricing'
import VideoPricing from '../components/VideoPricing'
import PackageMatrix from '../components/PackageMatrix'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import useSeo from '../hooks/useSeo'

export default function PricingPage() {
  useSeo({
    title: 'Pricing | Websites, Meta Ads & Video Editing | Ezy Digital',
    description:
      'Transparent starting prices from Ezy Digital: websites from ₹3,999, Meta Ads campaign setup from ₹999, monthly ads management from ₹2,999 and video editing from ₹499 per Reel.',
    path: '/pricing',
  })

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Clear starting prices for websites, ads and video content"
        description="Every published package in one place. Prices are starting points confirmed by a written quotation after the scope is agreed - no hidden charges and no invented discounts."
        breadcrumb={[{ label: 'Pricing' }]}
        quoteService="professional-website"
      />

      <Pricing withConditions={false} />
      <MetaAdsPricing showConditions={false} />
      <VideoPricing showConditions={false} />
      <PackageMatrix />
      <FAQ />
      <FinalCTA />
    </>
  )
}
