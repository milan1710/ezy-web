import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import TrustSection from '../components/TrustSection'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
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
    title:
      'EzyDigital Web Development | Custom Website Design & Development in Upleta, Gujarat',
    description:
      'EzyDigital Web Development designs and builds custom, fast, mobile-friendly websites and full-stack web applications for businesses in Upleta, Gujarat and across India. Website packages starting at Rs.2,999. Call +91 9512648085 for a free quote.',
    path: '/',
    jsonLd: faqSchema,
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <TrustSection />
      <Services />
      <Portfolio />
      <Pricing />
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
