import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import TrustSection from '../components/TrustSection'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import MetaAdsPricing from '../components/MetaAdsPricing'
import AdditionalServices from '../components/AdditionalServices'
import PackageFinder from '../components/PackageFinder'
import PackageMatrix from '../components/PackageMatrix'
import Honesty from '../components/Honesty'
import Process from '../components/Process'
import TechStack from '../components/TechStack'
import About from '../components/About'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Contact from '../components/Contact'
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
    title: 'Website Development & Meta Ads Services in Gujarat | Ezy Digital',
    description:
      'Explore Ezy Digital website development, e-commerce websites, Meta Ads management and social media services with transparent starting prices. Websites from ₹2,999. Call 9512648085.',
    path: '/',
    jsonLd: faqSchema,
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Pricing />
      <MetaAdsPricing showConditions={false} />
      <AdditionalServices />
      <Portfolio />
      <TrustSection />
      <PackageFinder />
      <PackageMatrix />
      <Honesty />
      <Process />
      <TechStack />
      <About />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  )
}
