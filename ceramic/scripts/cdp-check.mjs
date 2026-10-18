/**
 * Browser-level smoke test for the ceramic micro-site.
 * Requires Chrome with --remote-debugging-port=9223 and
 * `npm run preview -- --port 4173` running.
 */

const DEBUG = 'http://127.0.0.1:9223'
const BASE = 'http://localhost:4173/ceramic'

const routes = [
  ['/', 'Ezy Digital | Ceramic Business Growth Solutions', 'Reach More Buyers.'],
  ['/solutions', 'Digital Growth for Morbi Ceramic Manufacturers | Ezy Digital', 'Digital Systems'],
  ['/solutions/dealer-distributor-growth', 'Dealer & Distributor Inquiry Solutions for Ceramic Businesses', 'Build New Dealer'],
  ['/solutions/export-growth', 'Ceramic Export Website & Digital Growth Solutions', 'Make Your Ceramic Products'],
  ['/solutions/buyer-lead-generation', 'Ceramic Buyer Inquiry Generation | Ezy Digital', 'Create a More Structured Path'],
  ['/solutions/ceramic-website', 'Ceramic Website & Product Catalogue Development | Ezy Digital', 'A Ceramic Website Built'],
  ['/solutions/digital-marketing', 'Ceramic Digital Marketing: Google Ads, Meta Ads & SEO | Ezy Digital', 'Marketing Channels'],
  ['/pricing', 'Ceramic Website & Digital Marketing Pricing | Ezy Digital', 'Clear Starting Prices'],
  ['/ceramic-demo', 'Ceramic Manufacturer Website Concept | Ezy Digital Demo', 'Large-Format Surfaces'],
  ['/about', 'About Ezy Digital | Ceramic Business Growth Partner', 'A Digital Growth Partner'],
  ['/contact', 'Contact Ezy Digital | Ceramic Growth Consultation', 'Tell Us About Your Ceramic Business'],
  ['/privacy-policy', 'Privacy Policy | Ezy Digital Ceramic Growth', 'Privacy Policy'],
  ['/terms', 'Terms & Conditions | Ezy Digital Ceramic Growth', 'Terms & Conditions'],
  ['/not-a-real-page', 'Page Not Found | Ezy Digital Ceramic Growth', 'This Page Is Not'],
]

const results = []
const failures = []
function check(name, ok, detail = '') {
  results.push({ name, ok, detail })
  if (!ok) failures.push(`${name}${detail ? ` — ${detail}` : ''}`)
}

const target = await fetch(`${DEBUG}/json/new?${encodeURIComponent('about:blank')}`, { method: 'PUT' }).then((r) => r.json())
const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true })
  ws.addEventListener('error', reject, { once: true })
})

let id = 0
const pending = new Map()
const consoleErrors = []
const pageExceptions = []

ws.addEventListener('message', (event) => {
  const msg = JSON.parse(event.data)
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id)
    pending.delete(msg.id)
    if (msg.error) reject(new Error(msg.error.message))
    else resolve(msg.result)
  }
  if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
    consoleErrors.push(msg.params.args.map((arg) => arg.value || arg.description || '').join(' '))
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    pageExceptions.push(msg.params.exceptionDetails.text || 'Runtime exception')
  }
})

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const messageId = ++id
    pending.set(messageId, { resolve, reject })
    ws.send(JSON.stringify({ id: messageId, method, params }))
  })
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'Evaluation failed')
  return result.result.value
}

async function navigate(path) {
  await send('Page.navigate', { url: `${BASE}${path}` })
  for (let i = 0; i < 50; i += 1) {
    await sleep(100)
    const ready = await evaluate("document.readyState === 'complete' && !!document.querySelector('h1')")
    if (ready) break
  }
  await sleep(500)
}

await send('Page.enable')
await send('Runtime.enable')
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })

for (const [path, expectedTitle, expectedHeading] of routes) {
  await navigate(path)
  const info = await evaluate(`(() => ({
    title: document.title,
    h1: document.querySelector('h1')?.innerText || '',
    canonical: document.querySelector('link[rel="canonical"]')?.href || '',
    description: document.querySelector('meta[name="description"]')?.content || '',
    brokenImages: [...document.images].filter((img) => img.complete && img.naturalWidth === 0).length,
    overflow: document.documentElement.scrollWidth - window.innerWidth,
    links: [...document.links].filter((a) => a.getAttribute('href') === '' || a.getAttribute('href') === '#').length
  }))()`)
  check(`title ${path}`, info.title === expectedTitle, info.title)
  check(`heading ${path}`, info.h1.includes(expectedHeading), info.h1.slice(0, 80))
  check(`canonical ${path}`, info.canonical === (path === '/not-a-real-page' ? 'https://ezydigital.in/ceramic/404' : `https://ezydigital.in/ceramic${path === '/' ? '/' : path}`), info.canonical)
  check(`description ${path}`, info.description.length > 40)
  check(`images ${path}`, info.brokenImages === 0, `${info.brokenImages} broken`)
  check(`overflow ${path}`, info.overflow <= 1, `${info.overflow}px`)
  check(`dead links ${path}`, info.links === 0, `${info.links} empty anchors`)
}

// Desktop dropdown
await navigate('/')
await evaluate("document.querySelector('.nav-toggle').click()")
await sleep(250)
check('solutions dropdown opens', await evaluate("!!document.querySelector('.nav-dropdown')"))
await evaluate("document.querySelector('.nav-toggle').click()")

// Mobile navigation
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true })
await navigate('/')
await evaluate("document.querySelector('.menu-toggle').click()")
await sleep(300)
check('mobile menu opens', await evaluate("!!document.querySelector('.mobile-menu')"))
await evaluate("document.querySelector('.mobile-menu__close').click()")
await sleep(300)
check('mobile menu closes', await evaluate("!document.querySelector('.mobile-menu')"))

for (const path of ['/', '/solutions', '/pricing', '/ceramic-demo', '/contact', '/solutions/export-growth']) {
  await navigate(path)
  const overflow = await evaluate('document.documentElement.scrollWidth - window.innerWidth')
  check(`mobile overflow ${path}`, overflow <= 1, `${overflow}px`)
}

await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })

// Catalogue filters
await navigate('/ceramic-demo')
const before = await evaluate("document.querySelectorAll('.product-card').length")
await evaluate("[...document.querySelectorAll('.filter-btn')].find((b) => b.textContent.trim() === 'Slabs').click()")
await sleep(250)
const filterInfo = await evaluate(`(() => ({
  count: document.querySelectorAll('.product-card').length,
  categories: [...document.querySelectorAll('.product-card__category')].map((el) => el.textContent)
}))()`)
check('catalogue filter', before === 12 && filterInfo.count === 2 && filterInfo.categories.every((c) => c === 'Slabs'), JSON.stringify(filterInfo))

// Contact form: validation
await navigate('/contact')
await evaluate("document.querySelector('form.inquiry-form button[type=submit]').click()")
await sleep(250)
const validation = await evaluate(`(() => ({
  summary: document.querySelector('.form-error-summary')?.textContent || '',
  fieldErrors: document.querySelectorAll('.field__error').length,
  status: !!document.querySelector('.form-status')
}))()`)
check('form validation summary', validation.summary.includes('highlighted fields'), validation.summary)
check('form field errors', validation.fieldErrors >= 5, String(validation.fieldErrors))
check('no fake success before validation', validation.status === false)

// Contact form: valid submission prepares WhatsApp
const submitted = await evaluate(`(() => {
  const setNative = (selector, value) => {
    const el = document.querySelector(selector)
    const proto = el.tagName === 'SELECT' ? HTMLSelectElement.prototype : el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, value)
    el.dispatchEvent(new Event('input', { bubbles: true }))
    el.dispatchEvent(new Event('change', { bubbles: true }))
  }
  setNative('#name', 'Test User')
  setNative('#company', 'Demo Ceramics Pvt Ltd')
  setNative('#phone', '9512648085')
  setNative('#email', 'test@example.com')
  setNative('#product', 'Floor Tiles')
  setNative('#goal', 'Find Domestic Buyers')
  setNative('#geography', 'Morbi / Gujarat')
  setNative('#description', 'We manufacture floor tiles and want to reach new domestic buyers.')
  document.querySelector('#consent').click()
  document.querySelector('form.inquiry-form button[type=submit]').click()
  return true
})()`)
await sleep(1000)
const successInfo = await evaluate(`(() => ({
  status: document.querySelector('.form-status')?.textContent || '',
  href: document.querySelector('.form-status a[href^="https://wa.me/"]')?.href || ''
}))()`)
check('valid form prepared', submitted && successInfo.status.includes('ready in WhatsApp'), successInfo.status.slice(0, 90))
check('WhatsApp number correct', successInfo.href.startsWith('https://wa.me/919512648085?text='), successInfo.href.slice(0, 70))
check('no false save claim', !successInfo.status.includes('has been saved successfully'))

check('no console errors', consoleErrors.length === 0, consoleErrors.slice(0, 2).join(' | '))
check('no runtime exceptions', pageExceptions.length === 0, pageExceptions.slice(0, 2).join(' | '))

console.log(`\nPassed ${results.filter((r) => r.ok).length}/${results.length} checks`)
if (failures.length) {
  console.log('\nFailures:')
  failures.forEach((failure) => console.log(` - ${failure}`))
  process.exitCode = 1
}
ws.close()

