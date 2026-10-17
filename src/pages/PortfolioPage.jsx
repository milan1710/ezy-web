import PageHeader from '../components/PageHeader'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import FinalCTA from '../components/FinalCTA'
import useSeo from '../hooks/useSeo'

export default function PortfolioPage() {
  useSeo({
    title: 'Portfolio & Concept Designs | Ezy Digital',
    description:
      'Explore original website, e-commerce and web application concept designs created by Ezy Digital to demonstrate our design and front-end development work.',
    path: '/portfolio',
  })

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Design and development work you can judge for yourself"
        description="Original concept designs and demo builds for business, e-commerce, education, healthcare and custom application projects. Clearly labelled as concepts, not delivered client work."
        breadcrumb={[{ label: 'Portfolio' }]}
      />
      <Portfolio />
      <Process />
      <FinalCTA />
    </>
  )
}
