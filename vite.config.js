import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Public Perfex web-to-lead form used by the lead generation form.
 * The same values are used by `public/api/lead.php` (production) and by the
 * development middleware below, so local testing matches the live behaviour.
 */
const CRM_FORM_URL = 'https://crm.ezydigital.in/forms/wtl/51cdbcdc72722ab5de415e9cdace0b74'
const CRM_FORM_KEY = '51cdbcdc72722ab5de415e9cdace0b74'
const MAX_LEAD_BODY_BYTES = 8192

/** Reads a request body as UTF-8 text with a hard size limit. */
function readBody(req, limit = MAX_LEAD_BODY_BYTES) {
  return new Promise((resolve, reject) => {
    let size = 0
    const chunks = []
    req.on('data', (chunk) => {
      size += chunk.length
      if (size > limit) {
        req.destroy()
        reject(new Error('Request body too large'))
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

/** Trims and limits a user supplied value (mirrors `lead_clean()` in PHP). */
function clean(value, max) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, '')
    .replace(/[\r\n\t\0]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, max)
}

/** Normalises an Indian mobile number to 10 local digits (mirrors the PHP). */
function normalizeMobile(value) {
  let digits = String(value ?? '').replace(/\D/g, '')
  if (digits.length === 14 && digits.startsWith('0091')) digits = digits.slice(4)
  else if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2)
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1)
  return /^[6-9]\d{9}$/.test(digits) ? digits : null
}

/**
 * Local development equivalent of `public/api/lead.php`.
 *
 * `npm run dev:main` serves the site from Vite (no PHP), so this middleware keeps
 * the lead form testable end-to-end: it forwards the lead to the CRM server-side
 * and only answers `success: true` when the CRM accepts it. Production builds use
 * the PHP proxy - this plugin is `apply: 'serve'` only and never ships.
 */
function leadApiDevServer() {
  return {
    name: 'ezy-lead-api-dev-server',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/lead.php', async (req, res) => {
        const send = (status, payload) => {
          res.statusCode = status
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(JSON.stringify(payload))
        }

        if (req.method !== 'POST') {
          return send(200, {
            success: true,
            service: 'ezy-digital-lead-proxy',
            message: 'Dev proxy ready. POST JSON with name, phone, city and service.',
          })
        }

        let input = {}
        try {
          input = JSON.parse((await readBody(req)) || '{}')
        } catch {
          return send(400, { success: false, message: 'Invalid request body.' })
        }

        const name = clean(input.name, 80)
        const city = clean(input.city, 60)
        const service = clean(input.service, 120)
        const page = clean(input.page, 300)
        const source = clean(input.source, 40)
        const mobile = normalizeMobile(input.phone)
        const attribution =
          input.attribution && typeof input.attribution === 'object' ? input.attribution : {}

        if (clean(input.website, 120) !== '') {
          return send(400, { success: false, message: 'Submission rejected.' })
        }

        if (name.length < 2 || city.length < 2 || !service || !mobile) {
          return send(422, {
            success: false,
            message: 'Please check your name, mobile number, city and service selection.',
          })
        }

        const campaign = [
          clean(attribution.utm_source, 60),
          clean(attribution.utm_medium, 60),
          clean(attribution.utm_campaign, 80),
        ]
          .filter(Boolean)
          .join(' / ')

        const description = [
          `Service required: ${service}`,
          `City: ${city}`,
          'Submitted from the ezydigital.in lead form',
          page ? `Source page: ${page}` : null,
          campaign ? `Campaign: ${campaign}` : null,
          clean(attribution.fbclid, 20) ? 'Meta ad click: yes' : null,
          source ? `Form opened from: ${source}` : null,
        ]
          .filter(Boolean)
          .join('\n')

        const body = new FormData()
        body.set('key', CRM_FORM_KEY)
        body.set('name', name)
        body.set('phonenumber', `+91${mobile}`)
        body.set('city', city)
        body.set('description', description)

        try {
          const crmResponse = await fetch(CRM_FORM_URL, {
            method: 'POST',
            body,
            redirect: 'manual',
            signal: AbortSignal.timeout(15000),
          })

          const text = await crmResponse.text()
          let confirmed = crmResponse.status >= 300 && crmResponse.status < 400

          try {
            const json = JSON.parse(text)
            if (json && Object.hasOwn(json, 'success')) confirmed = json.success === true
          } catch {
            // HTML response - the redirect status decides.
          }

          if (!confirmed) {
            return send(502, {
              success: false,
              message: 'Our CRM did not confirm the enquiry. Please try again or call us directly.',
            })
          }

          return send(200, {
            success: true,
            message: 'Your enquiry has been submitted successfully. Our team will contact you soon.',
          })
        } catch {
          return send(502, {
            success: false,
            message: 'We could not reach our enquiry service. Please call us directly.',
          })
        }
      })
    },
  }
}

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
  plugins: [react(), tailwindcss(), ceramicTrailingSlash(), leadApiDevServer()],
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
