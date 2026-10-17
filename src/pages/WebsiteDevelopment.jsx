import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import useSeo from '../hooks/useSeo'

export default function WebsiteDevelopment() {
  useSeo({
    title: 'Website Development Services in Gujarat | Ezy Digital',
    description:
      'Professional website development from ₹2,999: business websites, e-commerce stores and custom web applications. Transparent starting prices and a written scope before work begins.',
    path: '/website-development',
  })

  return (
    <>
      <PageHeader
        eyebrow="Website development"
        title="Website development services for growing businesses"
        description="Business websites, professional websites, online stores and custom web applications - designed for real customers and built to work properly on mobile."
        breadcrumb={[{ label: 'Website Development' }]}
        quoteService="business-website"
      />
      <Services />
      <Pricing />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  )
}
