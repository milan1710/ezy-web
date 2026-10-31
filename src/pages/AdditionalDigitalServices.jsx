import PageHeader from '../components/PageHeader'
import AdditionalServices from '../components/AdditionalServices'
import FinalCTA from '../components/FinalCTA'
import useSeo from '../hooks/useSeo'
import { serviceSchema } from '../utils/schema'

export default function AdditionalDigitalServices() {
  useSeo({
    title: 'Additional Digital Services & Prices | Ezy Digital',
    description:
      'Social media posters from ₹200, logo design from ₹1,000, video editing from ₹499, Google Business Profile ₹500, SEO from ₹2,000 and website maintenance from ₹1,000 per month.',
    path: '/additional-digital-services',
    jsonLd: serviceSchema({
      name: 'Additional Digital Services',
      description:
        'Individual design, content, SEO, Google Business Profile and website maintenance services for businesses that do not need a full package.',
      path: '/additional-digital-services',
      price: 200,
    }),
  })

  return (
    <>
      <PageHeader
        eyebrow="Additional digital services"
        title="Design, content and website support services"
        description="Individual creative, content, SEO and maintenance services for businesses that do not need a full package. Prices are starting points and depend on complexity."
        breadcrumb={[{ label: 'Additional Digital Services' }]}
        quoteService="single-social-poster"
      />
      <AdditionalServices />
      <FinalCTA />
    </>
  )
}
