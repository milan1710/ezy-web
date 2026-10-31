import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import LeadModal from './components/LeadModal'
import ScrollManager from './components/ScrollManager'
import useAnalytics from './hooks/useAnalytics'
import Home from './pages/Home'

// Route-level code splitting keeps the initial homepage bundle small.
const WebsiteDevelopment = lazy(() => import('./pages/WebsiteDevelopment'))
const WebsiteDevelopmentPricing = lazy(() => import('./pages/WebsiteDevelopmentPricing'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const EcommerceWebsiteDevelopment = lazy(() => import('./pages/EcommerceWebsiteDevelopment'))
const CustomWebApplications = lazy(() => import('./pages/CustomWebApplications'))
const MetaAdsManagement = lazy(() => import('./pages/MetaAdsManagement'))
const VideoEditing = lazy(() => import('./pages/VideoEditing'))
const SocialMediaManagement = lazy(() => import('./pages/SocialMediaManagement'))
const AdditionalDigitalServices = lazy(() => import('./pages/AdditionalDigitalServices'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ServicePrice = lazy(() => import('./pages/ServicePrice'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center pt-32 pb-20">
      <p className="text-ink-400 text-sm font-medium">Loading...</p>
    </div>
  )
}

export default function App() {
  // Meta Pixel: PageView on load and on route change, Lead on call/WhatsApp/email clicks.
  useAnalytics()

  const { pathname } = useLocation()
  const isPriceListPage = pathname.replace(/\/+$/, '') === '/service-price'

  return (
    <div className="safe-bottom-space flex min-h-screen flex-col">
      <ScrollManager />
      {!isPriceListPage ? <Navbar /> : null}

      <main id="main" className={isPriceListPage ? undefined : 'flex-1'}>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/website-development/pricing" element={<WebsiteDevelopmentPricing />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/ecommerce-website-development" element={<EcommerceWebsiteDevelopment />} />
            <Route path="/custom-web-applications" element={<CustomWebApplications />} />
            <Route path="/meta-ads-management" element={<MetaAdsManagement />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/additional-digital-services" element={<AdditionalDigitalServices />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service-price" element={<ServicePrice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {!isPriceListPage ? (
        <>
          <Footer />
          <FloatingActions />
          <LeadModal />
        </>
      ) : null}
    </div>
  )
}
