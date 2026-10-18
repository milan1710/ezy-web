import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Redirects the slash-less dev URL to the ceramic app's trailing-slash base. */
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ceramicTrailingSlash()],
  server: {
    /**
     * The ceramic micro-site is a separate Vite app on port 5174.
     * `npm run dev` starts both servers; this proxy exposes the ceramic app at
     * http://localhost:5173/ceramic/ during local development.
     */
    proxy: {
      '/ceramic': {
        target: 'http://localhost:5174',
        changeOrigin: true,
        ws: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
})
