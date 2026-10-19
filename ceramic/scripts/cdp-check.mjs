/**
 * Browser-level smoke test for the ceramic micro-site.
 *
 * Requires:
 *   1. npm run preview -- --port 4173
 *   2. Edge/Chrome with --remote-debugging-port=9223
 *
 * Run: node scripts/cdp-check.mjs
 */

const DEBUG = 'http://127.0.0.1:9223'
const BASE = 'http://localhost:4173/ceramic'

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
const consoleErrors = []
const pageExceptions = []
let capturedFormPost = ''
ws.addEventListener('message', async (event) => {
  const message = JSON.parse(event.data)
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id)
    pending.delete(message.id)
    if (message.error) reject(new Error(message.error.message))
    else resolve(message.result)
    return
  }
  if (message.method === 'Fetch.requestPaused') {
    // Intercept the CRM request so the smoke test never creates a real lead.
    capturedFormPost = message.params.request.postData || ''
    await send('Fetch.fulfillRequest', {
      requestId: message.params.requestId,
      responseCode: 200,
      responseHeaders: [
        { name: 'Content-Type', value: 'application/json' },
        { name: 'Access-Control-Allow-Origin', value: '*' },
      ],
      body: Buffer.from(JSON.stringify({ success: true, message: 'ok' })).toString('base64'),
    })
    return
  }
  if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') {
    consoleErrors.push(message.params.args.map((arg) => arg.value || arg.description || '').join(' '))
  }
  if (message.method === 'Runtime.exceptionThrown') {
    pageExceptions.push(message.params.exceptionDetails.text || 'Runtime exception')
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
  const result = await send('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true,
  })
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
  await sleep(400)
}

const results = []
const failures = []
function check(name, ok, detail = '') {
  results.push({ name, ok, detail })
  if (!ok) failures.push(`${name}${detail ? ` — ${detail}` : ''}`)
}

await send('Page.enable')
await send('Runtime.enable')
await send('Fetch.enable', {
  patterns: [{ urlPattern: '*crm.ezydigital.in*', requestStage: 'Request' }],
})
await send('Page.addScriptToEvaluateOnNewDocument', {
  source: `
    window.__EZY_DISABLE_POPUP__ = true;
    window.__fbqEvents = [];
    window.fbq = function () { window.__fbqEvents.push(Array.from(arguments)); };
    window.fbq.queue = [];
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.push = window.fbq;
    window._fbq = window.fbq;
  `,
})
await send('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 1000,
  deviceScaleFactor: 1,
  mobile: false,
})
await navigate('/')

const home = await evaluate(`(() => ({
  title: document.title,
  h1: document.querySelector('h1')?.innerText || '',
  packages: document.querySelectorAll('.cn-package').length,
  prices: [...document.querySelectorAll('.cn-package__price')].map((el) => el.childNodes[0].textContent.trim()),
  services: document.querySelectorAll('.cn-service-card').length,
  industries: document.querySelectorAll('.cn-industry-card').length,
  processSteps: document.querySelectorAll('.cn-timeline__item').length,
  sections: [...document.querySelectorAll('section[id]')].map((section) => section.id),
  brokenAnchors: [...document.querySelectorAll('a[href^="#"]')]
    .map((link) => link.getAttribute('href'))
    .filter((href) => href.length > 1 && !document.getElementById(href.slice(1))),
  errorOverlay: Boolean(document.querySelector('vite-error-overlay')),
}))()`)

check('homepage title', home.title === 'Ceramic Digital Marketing & Website Solutions | Ezy Digital', home.title)
check('single h1', home.h1 === 'Digital Growth Solutions for Ceramic Businesses', home.h1)
check('five packages', home.packages === 5, String(home.packages))
check(
  'approved prices',
  JSON.stringify(home.prices) ===
    JSON.stringify(['₹1,00,000', '₹2,50,000', '₹5,00,000', '₹7,50,000', '₹10,00,000']),
  home.prices.join(', '),
)
check('eight services', home.services === 8, String(home.services))
check('six industries', home.industries === 6, String(home.industries))
check('six process stages', home.processSteps === 6, String(home.processSteps))
check(
  'all sections present',
  JSON.stringify(home.sections) ===
    JSON.stringify(['home', 'about', 'services', 'solutions', 'packages', 'process', 'contact']),
  home.sections.join(', '),
)
check('no broken anchors', home.brokenAnchors.length === 0, home.brokenAnchors.join(', '))
check('no error overlay', home.errorOverlay === false)

// Lazy-loaded photography should all resolve after scrolling the page.
for (const section of ['about', 'services', 'solutions', 'packages', 'process', 'contact']) {
  await evaluate(`document.getElementById('${section}').scrollIntoView()`)
  await sleep(450)
}
await evaluate('window.scrollTo(0, document.body.scrollHeight)')
await sleep(1200)
const images = await evaluate(`(() => {
  const all = [...document.images];
  return {
    total: all.length,
    broken: all.filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.getAttribute('src')),
  };
})()`)
check('all local images load', images.broken.length === 0, images.broken.join(', '))

const packages = await evaluate(`(() => [...document.querySelectorAll('.cn-package')].map((card) => {
  const link = card.querySelector('a[href*="wa.me"]');
  const url = new URL(link.href);
  return {
    name: card.querySelector('h3')?.textContent,
    price: card.querySelector('.cn-package__price')?.childNodes[0]?.textContent.trim(),
    text: decodeURIComponent(url.searchParams.get('text') || ''),
    host: url.host,
    number: url.pathname.replace('/', ''),
  };
}))()`)
check('five package WhatsApp CTAs', packages.length === 5, String(packages.length))
for (const pkg of packages) {
  check(
    `WhatsApp message ${pkg.name}`,
    pkg.host === 'wa.me' &&
      pkg.number === '919512648085' &&
      pkg.text.includes(pkg.name) &&
      pkg.text.includes(pkg.price),
    pkg.text,
  )
}

// Mobile menu and smooth section navigation.
await send('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true,
})
await navigate('/')
const mobileWidth = await evaluate(`({
  innerWidth,
  scrollWidth: document.documentElement.scrollWidth,
  menuVisible: getComputedStyle(document.querySelector('.cn-menu-btn')).display !== 'none',
  brandTextHidden: getComputedStyle(document.querySelector('.cn-brand__text')).display === 'none',
})`)
check('no mobile horizontal overflow', mobileWidth.scrollWidth === mobileWidth.innerWidth, JSON.stringify(mobileWidth))
check('mobile menu button visible', mobileWidth.menuVisible)
check('compact mobile brand', mobileWidth.brandTextHidden)

await evaluate("document.querySelector('.cn-menu-btn').click()")
await sleep(350)
check('mobile menu opens', await evaluate("document.querySelector('.cn-mobile').classList.contains('is-open')"))
check('mobile body scroll lock', await evaluate("document.body.classList.contains('cn-menu-open')"))
await evaluate("[...document.querySelectorAll('.cn-mobile__links a')].find((a) => a.getAttribute('href') === '#packages').click()")
await sleep(1600)
const mobileNav = await evaluate(`({
  open: document.querySelector('.cn-mobile').classList.contains('is-open'),
  active: document.querySelector('.cn-nav__link.is-active')?.getAttribute('href') || '',
  top: Math.round(document.getElementById('packages').getBoundingClientRect().top),
  overflow: document.documentElement.scrollWidth - window.innerWidth,
})`)
check('mobile menu closes after selection', mobileNav.open === false)
check('mobile nav reaches packages', mobileNav.active === '#packages' && Math.abs(mobileNav.top - 78) < 8, JSON.stringify(mobileNav))
check('no mobile overflow after navigation', mobileNav.overflow <= 1, `${mobileNav.overflow}px`)


// Audit form: validation and WhatsApp fallback.
await evaluate("document.querySelector('.cn-audit-form button[type=submit]').click()")
await sleep(350)
const invalid = await evaluate(`(() => {
  const form = document.querySelector('.cn-audit-form');
  return {
    summary: form.querySelector('.cn-form-summary')?.textContent || '',
    fields: form.querySelectorAll('.cn-field__error').length,
    status: Boolean(form.querySelector('.cn-form-status')),
  };
})()`)
check('audit validation summary', invalid.summary.includes('Please review'), invalid.summary)
check('audit field errors', invalid.fields === 6, String(invalid.fields))
check('no fake form success', invalid.status === false)

await evaluate(`(() => {
  const form = document.querySelector('.cn-audit-form');
  const setInput = (selector, value) => {
    const el = form.querySelector(selector);
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  };
  const setSelect = (selector, value) => {
    const el = form.querySelector(selector);
    Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(el, value);
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };
  setInput('#audit-name', 'Test User');
  setInput('#audit-company', 'Test Ceramics');
  setInput('#audit-phone', '+91 98765 43210');
  setInput('#audit-email', 'test@example.com');
  setInput('#audit-website', 'www.example.com');
  setSelect('#audit-business-type', 'Ceramic Tile Manufacturer');
  setSelect('#audit-target-market', 'Domestic — India');
  setSelect('#audit-growth-goal', 'More buyer inquiries');
})()`)
await sleep(300)
await evaluate("document.querySelector('.cn-audit-form button[type=submit]').click()")
await sleep(1200)
const valid = await evaluate(`(() => ({
  path: window.location.pathname,
  heading: document.querySelector('.thankyou__card h1')?.textContent || '',
  leads: window.__fbqEvents.filter((e) => e[1] === 'Lead'),
}))()`)
check('audit form redirects to thank-you', valid.path.endsWith('/thank-you'), valid.path)
check('thank-you page renders', valid.heading.includes('Thank you'), valid.heading.slice(0, 80))
check('thank-you fires form Lead', valid.leads.some((e) => e[2]?.source === 'form'))

const leadPayload = new URLSearchParams(capturedFormPost)
check('CRM form key sent', leadPayload.get('key') === '95115b27a7b5f5e2f295973f75aa376f')
check('CRM name and company mapped', leadPayload.get('name') === 'Test User' && leadPayload.get('company') === 'Test Ceramics')
check('CRM phone mapped', leadPayload.get('phonenumber') === '+919876543210')
check('CRM description gets extra fields', (leadPayload.get('description') || '').includes('More buyer inquiries'))

// Reduced-motion content fallback.
await send('Emulation.setEmulatedMedia', {
  features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
})
await navigate('/')
const reduce = await evaluate(`(() => {
  const reveal = document.querySelector('.cn-reveal');
  return {
    media: matchMedia('(prefers-reduced-motion: reduce)').matches,
    opacity: reveal ? getComputedStyle(reveal).opacity : 'missing',
  };
})()`)
check('reduced motion respected', reduce.media && reduce.opacity === '1', JSON.stringify(reduce))

// Legacy routes continue to work with the regular header/footer.
await send('Emulation.setEmulatedMedia', { features: [] })
await send('Emulation.setDeviceMetricsOverride', {
  width: 1280,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
})
for (const [path, expectedTitle, expectedHeading] of [
  ['/pricing', 'Ceramic Growth Packages | Ezy Digital', 'Five Clear Packages'],
  ['/contact', 'Contact Ezy Digital | Ceramic Growth Consultation', 'Tell Us About'],
  ['/privacy-policy', 'Privacy Policy | Ezy Digital Ceramic Growth', 'Privacy Policy'],
  ['/solutions', 'Digital Growth for Morbi Ceramic Manufacturers | Ezy Digital', 'Digital Systems'],
]) {
  await navigate(path)
  const info = await evaluate(`({
    title: document.title,
    h1: document.querySelector('h1')?.innerText || '',
    legacyHeader: Boolean(document.querySelector('.site-header')),
    errorOverlay: Boolean(document.querySelector('vite-error-overlay')),
  })`)
  check(`legacy title ${path}`, info.title === expectedTitle, info.title)
  check(`legacy heading ${path}`, info.h1.includes(expectedHeading), info.h1.slice(0, 70))
  check(`legacy chrome ${path}`, info.legacyHeader && !info.errorOverlay)
}

check('no console errors', consoleErrors.length === 0, consoleErrors.slice(0, 2).join(' | '))
check('no runtime exceptions', pageExceptions.length === 0, pageExceptions.slice(0, 2).join(' | '))

console.log(`\nPassed ${results.filter((result) => result.ok).length}/${results.length} checks`)
if (failures.length) {
  console.log('\nFailures:')
  failures.forEach((failure) => console.log(` - ${failure}`))
  process.exitCode = 1
}
ws.close()

