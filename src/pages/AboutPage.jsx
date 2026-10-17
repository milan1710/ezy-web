import PageHeader from '../components/PageHeader'
import About from '../components/About'
import TrustSection from '../components/TrustSection'
import TechStack from '../components/TechStack'
import Process from '../components/Process'
import FinalCTA from '../components/FinalCTA'
import useSeo from '../hooks/useSeo'

export default function AboutPage() {
  useSeo({
    title: 'About Ezy Digital | Website Development & Digital Marketing in Gujarat',
    description:
      'Ezy Digital builds professional websites, e-commerce stores and custom web applications and manages Facebook and Instagram advertising for businesses across Gujarat.',
    path: '/about',
  })

  return (
    <>
      <PageHeader
        eyebrow="About Ezy Digital"
        title="A focused digital studio you can actually reach"
        description="Ezy Digital is built around one promise: honest scope, careful development work and a direct line to the person building your website or managing your campaigns."
        breadcrumb={[{ label: 'About' }]}
      />
      <About />
      <TrustSection />
      <Process />
      <TechStack />
      <FinalCTA />
    </>
  )
}
