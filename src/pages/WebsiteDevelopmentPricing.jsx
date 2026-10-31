import PageHeader from '../components/PageHeader'
import Pricing from '../components/Pricing'
import PackageMatrix from '../components/PackageMatrix'
import PackageFinder from '../components/PackageFinder'
import FinalCTA from '../components/FinalCTA'
import useSeo from '../hooks/useSeo'

export default function WebsiteDevelopmentPricing() {
  useSeo({
    title: 'Website Development Pricing in India | Ezy Digital',
    description:
      'Compare Ezy Digital website packages: Basic ₹3,999, Professional ₹7,999, Business ₹14,999, E-commerce ₹19,999 and Custom Web Application ₹25,000. Starting prices with clear conditions.',
    path: '/website-development/pricing',
  })

  return (
    <>
      <PageHeader
        eyebrow="Website development pricing"
        title="Website packages and transparent starting prices"
        description="Five published packages with the included features, exclusions and pricing conditions in one place. Every price is a starting point confirmed by a written quotation."
        breadcrumb={[
          { label: 'Website Development', to: '/website-development' },
          { label: 'Pricing' },
        ]}
        quoteService="professional-website"
      />
      <Pricing withConditions />
      <PackageMatrix />
      <PackageFinder />
      <FinalCTA />
    </>
  )
}
