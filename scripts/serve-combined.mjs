import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'

/**
 * Local preview for the combined production output.
 * - main site: dist/
 * - ceramic micro-site: dist/ceramic/ with SPA fallback
 *
 * Usage: npm run preview:all  → http://localhost:4180/
 */

const root = resolve(process.cwd(), 'dist')
const ceramicRoot = resolve(root, 'ceramic')
const port = Number(process.env.PORT || 4180)

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
}

createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  let pathname = decodeURIComponent(url.pathname)

  if (pathname === '/ceramic') {
    res.writeHead(302, { Location: '/ceramic/' })
    res.end()
    return
  }

  let filePath = resolve(root, `.${normalize(pathname)}`)
  if (!filePath.startsWith(root)) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html')
  }

  // SPA fallback only inside the ceramic micro-site.
  if (!existsSync(filePath) && pathname.startsWith('/ceramic/')) {
    filePath = join(ceramicRoot, 'index.html')
  }

  if (!existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': mime['.html'] })
    res.end('<h1>404 — not found</h1>')
    return
  }

  res.writeHead(200, {
    'Content-Type': mime[extname(filePath).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-cache',
  })
  createReadStream(filePath).pipe(res)
}).listen(port, () => {
  console.log(`Combined preview: http://localhost:${port}/`)
  console.log(`Ceramic site:     http://localhost:${port}/ceramic/`)
})
