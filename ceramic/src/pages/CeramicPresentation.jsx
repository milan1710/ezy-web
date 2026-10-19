import useSeo from '../hooks/useSeo'
import Hero from '../components/presentation/Hero'
import About from '../components/presentation/About'
import Services from '../components/presentation/Services'
import Solutions from '../components/presentation/Solutions'
import Packages from '../components/presentation/Packages'
import Process from '../components/presentation/Process'
import Contact from '../components/presentation/Contact'
import PageProgress from '../components/presentation/PageProgress'

export const presentationSeo = {
  title: 'Ceramic Digital Marketing & Website Solutions | Ezy Digital',
  description:
    'Digital growth solutions for ceramic manufacturers, exporters, dealers and showrooms. Explore ceramic websites, product catalogues, digital advertising and inquiry management by Ezy Digital.',
  image: '/ceramic/images/hero-marble-interior.jpg',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://ezydigital.in/ceramic/#organization',
    name: 'Ezy Digital Marketing Agency',
    description:
      'Digital growth solutions for ceramic manufacturers, exporters, dealers and showrooms — websites, product catalogues, digital advertising, content and inquiry management.',
    url: 'https://ezydigital.in/ceramic/',
    logo: 'https://ezydigital.in/ceramic/images/ezy-digital-logo.png',
    image: 'https://ezydigital.in/ceramic/images/hero-marble-interior.jpg',
    telephone: '+919512648085',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Ezy Digital',
      url: 'https://ezydigital.in/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Upleta',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Upleta' },
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsAbout: [
      'Ceramic industry digital marketing',
      'Ceramic website development',
      'Ceramic product catalogue websites',
      'Dealer and distributor inquiry generation',
      'Ceramic export marketing',
      'Meta Ads',
      'Google Ads',
      'Search engine optimization',
      'CRM and lead management',
    ],
  },
}

export default function CeramicPresentation() {
  useSeo({
    title: presentationSeo.title,
    description: presentationSeo.description,
    path: '/',
    image: presentationSeo.image,
    jsonLd: presentationSeo.jsonLd,
  })

  return (
    <div className="cn-page">
      <PageProgress />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Packages />
      <Process />
      <Contact />
    </div>
  )
}
