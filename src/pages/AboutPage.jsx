import PageHeader from '../components/PageHeader'
import About from '../components/About'
import TrustSection from '../components/TrustSection'
import TechStack from '../components/TechStack'
import Process from '../components/Process'
import FinalCTA from '../components/FinalCTA'
import useSeo from '../hooks/useSeo'

export default function AboutPage() {
  useSeo({
    title: 'About Ezy Digital | Website, Meta Ads & Video Services in Gujarat',
    description:
      'Ezy Digital builds professional websites, e-commerce stores and custom web applications, manages Facebook and Instagram advertising, and edits promotional videos for businesses across Gujarat.',
    path: '/about',
  })

  return (
    <>
      <PageHeader
        eyebrow="About Ezy Digital"
        title="Your digital growth partner in Gujarat"
        description="Ezy Digital provides practical digital solutions for businesses looking to strengthen their online presence through website development, Meta Ads, and creative video content."
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
