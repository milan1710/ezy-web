/**
 * Design-review screenshot capture for the main Ezy Digital website.
 *
 * Uses the Chrome DevTools Protocol directly - no extra dependencies.
 *
 * Requirements:
 *   1. npm run build
 *   2. npm run preview -- --port 4173
 *   3. Chrome/Edge running with --remote-debugging-port=9223
 *
 * Usage: node scripts/capture-screenshots.mjs
 * Output: screenshots/*.png
 */
import { mkdir, writeFile } from 'node:fs/promises'

const DEBUG = 'http://127.0.0.1:9223'
const BASE = 'http://localhost:4173'
const OUT_DIR = 'screenshots'

const SHOTS = [
  { name: 'homepage-desktop', path: '/', width: 1440, height: 950, scrollY: 0 },
  { name: 'homepage-mobile', path: '/', width: 390, height: 844, scrollY: 0 },
  { name: 'mobile-action-bar', path: '/', width: 390, height: 844, scrollY: 600 },
  { name: 'lead-modal', path: '/?form=1', width: 390, height: 844, scrollY: 0 },
  { name: 'desktop-fill-form', path: '/pricing', width: 1440, height: 950, scrollY: 700 },
  { name: 'services-section', path: '/', width: 1440, height: 1100, scrollY: 1122 },
  { name: 'contact-section', path: '/', width: 1440, height: 1100, scrollY: 29462 },
  { name: 'footer', path: '/', width: 1440, height: 950, scrollY: 30560 },
  { name: 'pricing-page', path: '/pricing', width: 1440, height: 1000, scrollY: 700 },
  { name: 'contact-page', path: '/contact', width: 1440, height: 1000, scrollY: 300 },
  { name: 'thank-you-page', path: '/thank-you', width: 1440, height: 950, scrollY: 0 },
]

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const target = await fetch(`${DEBUG}/json/new?${encodeURIComponent('about:blank')}`, {
  method: 'PUT',
}).then((response) => response.json())

const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true })
  ws.addEventListener('error', reject, { once: true })
})

let id = 0
const pending = new Map()

ws.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id)
    pending.delete(message.id)
    if (message.error) reject(new Error(message.error.message))
    else resolve(message.result)
  }
})

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const messageId = ++id
    pending.set(messageId, { resolve, reject })
    ws.send(JSON.stringify({ id: messageId, method, params }))
  })
}

await send('Page.enable')
await send('Runtime.enable')
await send('Network.enable')
await send('Network.setCacheDisabled', { cacheDisabled: true })
await mkdir(OUT_DIR, { recursive: true })

for (const shot of SHOTS) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: shot.width,
    height: shot.height,
    deviceScaleFactor: 1,
    mobile: shot.width < 600,
  })
  await send('Page.navigate', { url: `${BASE}${shot.path}` })
  await sleep(1500)
  if (shot.scrollY > 0) {
    await send('Runtime.evaluate', {
      expression: `window.scrollTo({ top: ${shot.scrollY}, behavior: 'instant' })`,
    })
    await sleep(900)
  }
  const result = await send('Page.captureScreenshot', { format: 'png' })
  await writeFile(`${OUT_DIR}/${shot.name}.png`, Buffer.from(result.data, 'base64'))
  console.log(`saved ${OUT_DIR}/${shot.name}.png (${shot.width}x${shot.height})`)
}

ws.close()
process.exit(0)
