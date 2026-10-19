import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import ScrollManager from './components/ScrollManager'
import SiteHeader from './components/presentation/SiteHeader'
import SiteFooter from './components/presentation/SiteFooter'
import BackToTop from './components/presentation/BackToTop'
import CeramicPresentation from './pages/CeramicPresentation'
import useAnalytics from './hooks/useAnalytics'

const Solutions = lazy(() => import('./pages/Solutions'))
const DealerDistributorGrowth = lazy(() => import('./pages/DealerDistributorGrowth'))
const ExportGrowth = lazy(() => import('./pages/ExportGrowth'))
const BuyerLeadGeneration = lazy(() => import('./pages/BuyerLeadGeneration'))
const CeramicWebsite = lazy(() => import('./pages/CeramicWebsite'))
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'))
const Pricing = lazy(() => import('./pages/Pricing'))
const CeramicDemo = lazy(() => import('./pages/CeramicDemo'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div className="container section" style={{ minHeight: '60vh' }} aria-live="polite">
      <p className="muted small">Loading page…</p>
    </div>
  )
}

export default function App() {
  useAnalytics()
  const { pathname } = useLocation()
  const isPresentation = pathname === '/' || pathname === ''

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      {isPresentation ? <SiteHeader /> : <Header />}
      <main id="main" style={{ flex: 1 }}>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<CeramicPresentation />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/dealer-distributor-growth" element={<DealerDistributorGrowth />} />
            <Route path="/solutions/export-growth" element={<ExportGrowth />} />
            <Route path="/solutions/buyer-lead-generation" element={<BuyerLeadGeneration />} />
            <Route path="/solutions/ceramic-website" element={<CeramicWebsite />} />
            <Route path="/solutions/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/ceramic-demo" element={<CeramicDemo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {isPresentation ? (
        <>
          <SiteFooter />
          <BackToTop />
        </>
      ) : (
        <>
          <Footer />
          <FloatingActions />
        </>
      )}
    </div>
  )
}
