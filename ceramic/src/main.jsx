import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initPixel } from './utils/analytics'
import './styles/global.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/pages.css'
import './styles/presentation.css'

/**
 * Start the Meta Pixel before React renders so the first PageView is not
 * delayed and the thank-you page can fire Lead immediately on mount.
 */
initPixel()

/**
 * The ceramic site is built separately and deployed under /ceramic/.
 * The router basename must stay in sync with `base` in vite.config.js.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ceramic">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
