import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import ScrollManager from './components/ScrollManager'
import useAnalytics from './hooks/useAnalytics'
import Home from './pages/Home'

// Legal pages are split out: they are not part of the main conversion path.
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
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

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Navbar />

      <main id="main" className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}
