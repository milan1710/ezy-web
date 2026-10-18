import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  },
})
