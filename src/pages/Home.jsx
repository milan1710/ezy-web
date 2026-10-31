import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import PrimaryServices from '../components/PrimaryServices'
import TrustSection from '../components/TrustSection'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import MetaAdsPricing from '../components/MetaAdsPricing'
import VideoPricing from '../components/VideoPricing'
import AdditionalServices from '../components/AdditionalServices'
import PackageFinder from '../components/PackageFinder'
import PackageMatrix from '../components/PackageMatrix'
import Honesty from '../components/Honesty'
import TechStack from '../components/TechStack'
import About from '../components/About'
import FAQ from '../components/FAQ'
import LeadSection from '../components/LeadSection'
import FinalCTA from '../components/FinalCTA'
import useSeo from '../hooks/useSeo'
import { faqs } from '../data/faqs'

/** FAQ structured data, generated from the same source as the visible content. */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function Home() {
  useSeo({
    title: 'Website Development, Meta Ads & Video Editing in Gujarat | Ezy Digital',
    description:
      'Ezy Digital builds professional websites from ₹3,999, sets up Meta Ads from ₹999 and edits promotional Reels from ₹499. Based in Upleta, serving businesses across Gujarat. Call 9512648085.',
    path: '/',
    jsonLd: faqSchema,
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <PrimaryServices />
      <Services />
      <TrustSection />
      <Portfolio />
      <Process />
      <Pricing />
      <MetaAdsPricing showConditions={false} />
      <VideoPricing showConditions={false} />
      <AdditionalServices />
      <PackageFinder />
      <PackageMatrix />
      <Honesty />
      <TechStack />
      <About />
      <FAQ />
      <LeadSection />
      <FinalCTA />
    </>
  )
}
