import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

/**
 * Same legacy-browser safety net as the main site: compile modern colour
 * functions (`color-mix()`, `oklch()`) down to rgb()/rgba() so the ceramic
 * pages keep their styling on older Android WebView and Safari builds.
 */
const cssTargets = browserslistToTargets(
  browserslist('chrome >= 87, edge >= 88, firefox >= 102, safari >= 14, ios_saf >= 14, samsung >= 14, and_chr >= 87, not dead'),
)

/** Redirect /ceramic to /ceramic/ in dev so the base path is always explicit. */
function ceramicTrailingSlash() {
  return {
    name: 'ceramic-trailing-slash',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/ceramic' || req.url === '/ceramic?') {
          res.writeHead(302, { Location: '/ceramic/' })
          res.end()
          return
        }
        next()
      })
    },
  }
}

/**
 * Standalone ceramic micro-site.
 *
 * The production build is designed to be deployed at https://ezydigital.in/ceramic/
 * so every asset and route is prefixed with /ceramic/.
 */
export default defineConfig({
  plugins: [react(), ceramicTrailingSlash()],
  base: '/ceramic/',
  server: {
    port: 5174,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    cssMinify: 'lightningcss',
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: { targets: cssTargets },
  },
})
