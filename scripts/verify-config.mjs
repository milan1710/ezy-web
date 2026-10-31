/**
 * Configuration sanity checks.
 *
 * Verifies the phone/WhatsApp wiring and pricing helpers that the whole site
 * depends on. Run with: npm run verify
 */
import { existsSync, readFileSync } from 'node:fs'
import { siteConfig, whatsappLink, canonicalUrl } from '../src/config/siteConfig.js'
import {
  additionalServices,
  formatINR,
  metaAdsPackages,
  metaAdsBudgetDisclaimer,
  packageMatrix,
  packages,
  videoMonthlyPackages,
  videoPackages,
} from '../src/data/pricing.js'
import { services } from '../src/data/services.js'
import { projects } from '../src/data/portfolio.js'
import { honestyPillars, trustPromises, firstCallSteps } from '../src/data/trust.js'
import {
  baseOptions,
  featureOptions,
  pageOptions,
  PACKAGE_ORDER,
  recommendPackage,
} from '../src/data/estimator.js'
import {
  CALL_DEDUPE_WINDOW_MS,
  FB_EVENTS,
  FB_PIXEL_ID,
  LEAD_SOURCES,
  isCallLink,
  isPixelEnabled,
} from '../src/utils/analytics.js'
import {
  buildLeadDescription,
  buildLeadPayload,
  normalizeIndianMobile,
  readAttribution,
  validateLeadForm,
} from '../src/utils/leadForm.js'
import {
  LEAD_SERVICE_GROUPS,
  LEAD_SERVICE_OPTIONS,
  LEAD_SERVICE_PLACEHOLDER,
  resolveLeadService,
} from '../src/data/leadFormServices.js'
import {
  additionalServiceGroups,
  metaPriceGroups,
  pricePageNote,
  videoMonthlyGroups,
  videoPriceGroups,
  websitePriceGroups,
} from '../src/data/servicePricePage.js'

const checks = []
const check = (name, condition, detail = '') => {
  checks.push({ name, pass: Boolean(condition), detail })
}

// --- Phone / tel: wiring -----------------------------------------------------
check('phone display is 9512648085', siteConfig.contact.phoneDisplay === '9512648085', siteConfig.contact.phoneDisplay)
check('phone international is +91 9512648085', siteConfig.contact.phoneInternational === '+91 9512648085', siteConfig.contact.phoneInternational)
check('tel href is tel:+919512648085', siteConfig.contact.telHref === 'tel:+919512648085', siteConfig.contact.telHref)

// --- WhatsApp wiring --------------------------------------------------------
check('whatsapp number has no + or spaces', siteConfig.contact.whatsappNumber === '919512648085', siteConfig.contact.whatsappNumber)
check('whatsapp base href', siteConfig.contact.whatsappHref === 'https://wa.me/919512648085', siteConfig.contact.whatsappHref)

const link = whatsappLink(siteConfig.whatsappMessages.general)
check('whatsapp link uses ?text=', link.startsWith('https://wa.me/919512648085?text='), link)
check('whatsapp message is URL encoded (no raw spaces)', !link.includes(' '), link)
check('whatsapp message decodes back', decodeURIComponent(link.split('?text=')[1]) === siteConfig.whatsappMessages.general)

const packageLink = whatsappLink(`I am interested in ${packages[0].name}`)
check('package CTA message decodes back', decodeURIComponent(packageLink.split('?text=')[1]) === `I am interested in ${packages[0].name}`)

// Service-specific pre-filled messages required by the brief
check(
  'website WhatsApp message mentions ₹3,999',
  siteConfig.whatsappMessages.website.includes('₹3,999'),
  siteConfig.whatsappMessages.website,
)
check(
  'Meta Ads WhatsApp message mentions ₹999',
  siteConfig.whatsappMessages.metaAds.includes('₹999'),
  siteConfig.whatsappMessages.metaAds,
)
check(
  'video WhatsApp message mentions ₹499 per Reel',
  siteConfig.whatsappMessages.videoEditing.includes('₹499 per Reel'),
  siteConfig.whatsappMessages.videoEditing,
)
check(
  'general WhatsApp message is present',
  siteConfig.whatsappMessages.general.startsWith('Hello Ezy Digital'),
)

// --- Canonical URLs ---------------------------------------------------------
check('canonical for home', canonicalUrl('/') === `${siteConfig.domain}/`, canonicalUrl('/'))
check('canonical for nested route', canonicalUrl('/privacy-policy') === `${siteConfig.domain}/privacy-policy`, canonicalUrl('/privacy-policy'))

// --- Pricing ----------------------------------------------------------------
const expectedPrices = {
  'basic-website': 3999,
  'professional-website': 7999,
  'business-website': 14999,
  ecommerce: 19999,
  'custom-website': 25000,
}
check('five website packages defined', packages.length === 5, `found ${packages.length}`)
packages.forEach((pkg) => {
  check(`price for ${pkg.id}`, pkg.startingPrice === expectedPrices[pkg.id], String(pkg.startingPrice))
  check(`${pkg.id} has features`, Array.isArray(pkg.features) && pkg.features.length > 0)
  check(`${pkg.id} is marked active`, pkg.active === true)
})

check('INR formatting uses Indian grouping', formatINR(25000) === '\u20b925,000', formatINR(25000))
check('INR formatting of 1234567', formatINR(1234567) === '\u20b912,34,567', formatINR(1234567))

// --- Meta Ads and additional services --------------------------------------
const metaPrices = {
  'meta-single-campaign': 999,
  'meta-basic-management': 2999,
  'meta-growth-management': 4999,
  'meta-professional-management': 7999,
}
check('four Meta Ads packages defined', metaAdsPackages.length === 4, `found ${metaAdsPackages.length}`)
metaAdsPackages.forEach((pkg) => {
  check(`Meta price for ${pkg.id}`, pkg.startingPrice === metaPrices[pkg.id], String(pkg.startingPrice))
  check(`${pkg.id} has exclusions`, Array.isArray(pkg.excludes) && pkg.excludes.length > 0)
})
check('Meta Ads budget disclaimer mentions separate payment', /budget is not included/i.test(metaAdsBudgetDisclaimer))
check('three video packages defined', videoPackages.length === 3, `found ${videoPackages.length}`)
check(
  'basic reel is ₹499',
  videoPackages.find((pkg) => pkg.id === 'basic-reel')?.startingPrice === 499,
)
check(
  'promotional reel is ₹999',
  videoPackages.find((pkg) => pkg.id === 'promotional-reel')?.startingPrice === 999,
)
check(
  'premium ad video is ₹1,999',
  videoPackages.find((pkg) => pkg.id === 'premium-ad-video')?.startingPrice === 1999,
)
check('two monthly video packages defined', videoMonthlyPackages.length === 2)
check(
  'monthly video packages are ₹5,999 and ₹8,999',
  videoMonthlyPackages.map((pkg) => pkg.startingPrice).join() === '5999,8999',
)
check('eleven additional services defined', additionalServices.length === 11, `found ${additionalServices.length}`)
check(
  'additional services all have a positive price',
  additionalServices.every((service) => Number.isFinite(service.startingPrice) && service.startingPrice > 0),
)
check(
  'maintenance is ₹1,000 per month',
  additionalServices.find((service) => service.id === 'website-maintenance')?.startingPrice === 1000,
)

// --- /service-price Gujarati page ------------------------------------------
check('service price page has 5 website packages', websitePriceGroups.length === 5)
check('service price page has 4 Meta Ads packages', metaPriceGroups.length === 4)
check('service price page has 3 video packages', videoPriceGroups.length === 3)
check('service price page has 2 monthly video packages', videoMonthlyGroups.length === 2)
check('service price page has 11 additional services', additionalServiceGroups.length === 11)
check(
  'website prices on the service price page match the central catalogue',
  websitePriceGroups.every((group) => {
    const pkg = packages.find((item) => item.id === group.id)
    return pkg && group.price.startsWith(formatINR(pkg.startingPrice))
  }),
)
check(
  'Meta prices on the service price page match the central catalogue',
  metaPriceGroups.every((group) => {
    const pkg = metaAdsPackages.find((item) => item.id === group.id)
    return pkg && group.price === formatINR(pkg.startingPrice)
  }),
)
check(
  'video prices on the service price page match the central catalogue',
  videoPriceGroups.every((group) => {
    const pkg = videoPackages.find((item) => item.id === group.id)
    return pkg && group.price.startsWith(formatINR(pkg.startingPrice))
  }),
)
check(
  'monthly video prices on the service price page match the central catalogue',
  videoMonthlyGroups.every((group) => {
    const pkg = videoMonthlyPackages.find((item) => item.id === group.id)
    return pkg && group.price.startsWith(formatINR(pkg.startingPrice))
  }),
)
check('service price page note includes the Meta Ads budget wording', /Meta Ads/.test(pricePageNote))
check('service price page note includes third-party charges', /થર્ડ-પાર્ટી ચાર્જ/.test(pricePageNote))

// --- Lead generation form ----------------------------------------------------
check('valid 10-digit mobile accepted', normalizeIndianMobile('9512648085') === '9512648085')
check('+91 mobile normalised', normalizeIndianMobile('+91 95126 48085') === '9512648085')
check('dashed mobile normalised', normalizeIndianMobile('95126-48085') === '9512648085')
check('short mobile rejected', normalizeIndianMobile('95126') === null)
check('invalid mobile prefix rejected', normalizeIndianMobile('1512648085') === null)

const validLead = {
  name: 'Milan Soni',
  phone: '9512648085',
  city: 'Upleta',
  service: 'business-website',
}
check('valid lead passes validation', Object.keys(validateLeadForm(validLead)).length === 0)
check('empty name is rejected', Boolean(validateLeadForm({ ...validLead, name: '' }).name))
check('numeric name is rejected', Boolean(validateLeadForm({ ...validLead, name: '12345' }).name))
check('missing phone is rejected', Boolean(validateLeadForm({ ...validLead, phone: '' }).phone))
check('landline-style phone is rejected', Boolean(validateLeadForm({ ...validLead, phone: '02822222222' }).phone))
check('missing city is rejected', Boolean(validateLeadForm({ ...validLead, city: '' }).city))
check('missing service is rejected', Boolean(validateLeadForm({ ...validLead, service: '' }).service))
check(
  'service outside the catalogue is rejected',
  Boolean(validateLeadForm({ ...validLead, service: 'invented-service' }).service),
)
check(
  'Gujarati names are accepted',
  Object.keys(validateLeadForm({ ...validLead, name: 'મિલન સોની', city: 'ઉપલેટા' })).length === 0,
)

const leadPayload = buildLeadPayload({
  form: validLead,
  serviceLabel: 'Business Website Development',
  pageUrl: 'https://ezydigital.in/contact',
})
check('payload maps the full name', leadPayload.name === 'Milan Soni', leadPayload.name)
check('payload maps the mobile to E.164', leadPayload.phone === '+919512648085', leadPayload.phone)
check('payload maps the city', leadPayload.city === 'Upleta', leadPayload.city)
check(
  'payload maps the selected service',
  leadPayload.service === 'Business Website Development',
  leadPayload.service,
)
check('payload keeps the source page', leadPayload.page.endsWith('/contact'))
check(
  'CRM description names the service',
  buildLeadDescription({ serviceLabel: 'Business Website Development', city: 'Upleta' }).includes(
    'Service required: Business Website Development',
  ),
)

// --- Service dropdown --------------------------------------------------------
check(
  'dropdown uses the requested placeholder',
  LEAD_SERVICE_PLACEHOLDER === 'Select Your Required Service',
  LEAD_SERVICE_PLACEHOLDER,
)
check(
  'dropdown lists every catalogue service',
  LEAD_SERVICE_OPTIONS.length === services.length,
  `${LEAD_SERVICE_OPTIONS.length} vs ${services.length}`,
)
check(
  'dropdown options mirror the real service titles',
  services.every((service) =>
    LEAD_SERVICE_OPTIONS.some((option) => option.id === service.id && option.label === service.title),
  ),
)
check(
  'dropdown has no duplicate option ids',
  new Set(LEAD_SERVICE_OPTIONS.map((option) => option.id)).size === LEAD_SERVICE_OPTIONS.length,
)
check(
  'every option is rendered in exactly one group',
  LEAD_SERVICE_GROUPS.reduce((total, group) => total + group.options.length, 0) ===
    LEAD_SERVICE_OPTIONS.length,
)
check(
  'website package deep link preselects a service',
  resolveLeadService('basic-website') === 'business-website',
  resolveLeadService('basic-website'),
)
check(
  'video package deep link preselects video editing',
  resolveLeadService('basic-reel') === 'video-editing',
  resolveLeadService('basic-reel'),
)
check(
  'additional-service deep link preselects a service',
  resolveLeadService('logo-design') === 'creative-services',
  resolveLeadService('logo-design'),
)
check('catalogue ids resolve directly', resolveLeadService('meta-ads') === 'meta-ads')
check('unknown deep link values are ignored', resolveLeadService('not-a-service') === '')

// --- Content integrity ------------------------------------------------------
check('14 services defined', services.length === 14, `found ${services.length}`)
check('8 portfolio previews defined', projects.length === 8, `found ${projects.length}`)
check(
  'every portfolio item is labelled as a concept/demo',
  projects.every((p) => /concept|demo/i.test(p.kind)),
)
check(
  'every service and project has a unique id',
  new Set(services.map((s) => s.id)).size === services.length &&
    new Set(projects.map((p) => p.id)).size === projects.length,
)
check('no client numbers, ratings or award claims in data', !JSON.stringify({ services, projects }).match(/\b(award|rated|100\+ clients|years of experience)\b/i))

// --- Comparison matrix ------------------------------------------------------
check('matrix has 5 package columns', packageMatrix.columns.length === 5, `${packageMatrix.columns.length}`)
check('matrix has at least 12 feature rows', packageMatrix.rows.length >= 12, `${packageMatrix.rows.length}`)
check(
  'every matrix row defines a value for every column',
  packageMatrix.rows.every((row) =>
    packageMatrix.columns.every((column) => Object.hasOwn(row.values, column.id)),
  ),
)
check(
  'every matrix column maps to a real package with a price',
  packageMatrix.columns.every((column) => Number.isFinite(column.price)),
)
check(
  'matrix columns follow the published package order',
  packageMatrix.columns.map((c) => c.id).join() === packages.map((p) => p.id).join(),
)

// --- Package finder recommendation logic ------------------------------------
const rec = (input) => recommendPackage(input)

check(
  'one page stays on the basic website package',
  rec({ base: 'basic-website', pages: 1, features: [] }).packageId === 'basic-website',
)
check(
  'five pages upgrades to the professional package',
  rec({ base: 'basic-website', pages: 5, features: [] }).packageId === 'professional-website',
)
check(
  'eight pages upgrades to the business package',
  rec({ base: 'professional-website', pages: 8, features: [] }).packageId === 'business-website',
)
check(
  'payments requirement upgrades to e-commerce',
  rec({ base: 'professional-website', pages: 5, features: ['payments'] }).packageId === 'ecommerce',
)
check(
  'login requirement upgrades to a custom web application',
  rec({ base: 'business-website', pages: 5, features: ['accounts'] }).packageId ===
    'custom-website',
)
check(
  'large page counts are flagged as needing a custom scope',
  rec({ base: 'business-website', pages: 15, features: [] }).customScope === true,
)
check(
  'custom web application recommendation is always flagged as custom scope',
  rec({ base: 'custom-website', pages: 5, features: [] }).customScope === true,
)
check(
  'maintenance selection adds an explanatory note',
  rec({ base: 'business-website', pages: 5, features: ['maintenance'] }).notes.some((note) =>
    /maintenance/i.test(note),
  ),
)
check(
  'every page option maps to a known package recommendation',
  pageOptions.every((option) =>
    PACKAGE_ORDER.includes(rec({ base: 'basic-website', pages: option.pages, features: [] }).packageId),
  ),
)
check(
  'every feature minPackage references a real package id',
  featureOptions
    .filter((option) => option.minPackage)
    .every((option) => packages.some((pkg) => pkg.id === option.minPackage)),
)
check(
  'every base option id is a real package id',
  baseOptions.every((option) => packages.some((pkg) => pkg.id === option.id)),
)

// --- Trust content ----------------------------------------------------------
check('six trust promises defined', trustPromises.length === 6, `${trustPromises.length}`)
check('three first-call steps defined', firstCallSteps.length === 3, `${firstCallSteps.length}`)
check(
  'every honesty pillar is framed as a "No ..." commitment',
  honestyPillars.length === 4 && honestyPillars.every((pillar) => /^no /i.test(pillar.title)),
)
check(
  'trust content makes no award, rating or experience claims',
  !JSON.stringify({
    trustPromises,
    honestyPillars,
    firstCallSteps,
  }).match(/\b(award[- ]winning|5[- ]star|top rated|years of experience)\b/i),
)

// --- Meta Pixel / analytics --------------------------------------------------
check('PageView event name', FB_EVENTS.pageView === 'PageView', FB_EVENTS.pageView)
check('Lead event name', FB_EVENTS.lead === 'Lead', FB_EVENTS.lead)
check('form leads use the website_form source', LEAD_SOURCES.form === 'website_form')
check('call leads use the call_click source', LEAD_SOURCES.call === 'call_click')
check('duplicate call clicks are deduped', CALL_DEDUPE_WINDOW_MS >= 500)

check('tel: links are call links', isCallLink(siteConfig.contact.telHref) === true)
check('uppercase/formatted tel links are call links', isCallLink(' TEL:+919512648085 ') === true)
check('WhatsApp links are not call links', isCallLink(whatsappLink(siteConfig.whatsappMessages.general)) === false)
check('internal links are not call links', isCallLink('/contact') === false)
check('empty values are handled safely', isCallLink('') === false && isCallLink(undefined) === false)

// Outside Vite (plain Node) no pixel id is available, so the module must no-op
// instead of throwing - this proves the safe-disabled path works.
check('pixel helper no-ops safely without Vite env', isPixelEnabled() === false)
check('pixel id is empty outside Vite', FB_PIXEL_ID === '', FB_PIXEL_ID)

// The pixel ID must be configured in .env so it can be changed without code edits.
let envFile = ''
try {
  envFile = readFileSync(new URL('../.env', import.meta.url), 'utf8')
} catch {
  envFile = ''
}
const pixelIdMatch = envFile.match(/^\s*VITE_FB_PIXEL_ID\s*=\s*(\S*)\s*$/m)
check('.env defines VITE_FB_PIXEL_ID', Boolean(pixelIdMatch), pixelIdMatch ? '' : '.env missing or variable absent')
check(
  'pixel id looks like a valid Meta pixel id',
  Boolean(pixelIdMatch) && /^\d{15,16}$/.test(pixelIdMatch[1]),
  pixelIdMatch ? pixelIdMatch[1] : '',
)
check('.env.example documents the variable', /VITE_FB_PIXEL_ID/.test(readFileSync(new URL('../.env.example', import.meta.url), 'utf8')))

// --- Single pixel instance ---------------------------------------------------
const analyticsSource = readFileSync(new URL('../src/utils/analytics.js', import.meta.url), 'utf8')
check(
  'the pixel is initialised in exactly one place',
  (analyticsSource.match(/window\.fbq\('init'/g) || []).length === 1,
  String((analyticsSource.match(/window\.fbq\('init'/g) || []).length),
)
check(
  'fbevents.js is loaded exactly once',
  (analyticsSource.match(/script\.src = 'https:\/\/connect\.facebook\.net\/en_US\/fbevents\.js'/g) || [])
    .length === 1,
)
check('pixel init is guarded against double initialisation', /if \(initialised\) return true/.test(analyticsSource))
check('call clicks send a distinct lead_source', /LEAD_SOURCES\.call/.test(analyticsSource))
check('form leads send a distinct lead_source', /LEAD_SOURCES\.form/.test(analyticsSource))
check('only tel: links are counted as call leads', /CALL_LINK_PREFIX = 'tel:'/.test(analyticsSource))

// The hook must actually wire the behaviours together.
const analyticsHook = readFileSync(new URL('../src/hooks/useAnalytics.js', import.meta.url), 'utf8')
check('analytics hook initialises the pixel', /initPixel\(\)/.test(analyticsHook))
check('analytics hook tracks route-change page views', /trackPageView\(/.test(analyticsHook))
check(
  'analytics hook turns call clicks into Lead events',
  /isCallLink\(/.test(analyticsHook) && /trackCallLead\(/.test(analyticsHook),
)
check(
  'analytics hook listens for clicks at document level',
  /addEventListener\('click'/.test(analyticsHook) && /addEventListener\('auxclick'/.test(analyticsHook),
)
check('analytics hook does not fire a Lead on page views', !/trackLead\(/.test(analyticsHook))

// --- Google Analytics --------------------------------------------------------
const indexHtml = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
check(
  'Google Analytics tag is installed',
  (indexHtml.match(/https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-NLVGK5BQ3D/g) || []).length === 1,
)
check(
  'Google Analytics config call is present',
  (indexHtml.match(/gtag\('config', 'G-NLVGK5BQ3D'\)/g) || []).length === 1,
)
check(
  'Google Analytics measurement id is not duplicated',
  (indexHtml.match(/G-NLVGK5BQ3D/g) || []).length === 2,
  String((indexHtml.match(/G-NLVGK5BQ3D/g) || []).length),
)

// --- Floating buttons --------------------------------------------------------
const floatingActions = readFileSync(
  new URL('../src/components/FloatingActions.jsx', import.meta.url),
  'utf8',
)
const floatingCall = readFileSync(
  new URL('../src/components/FloatingCallButton.jsx', import.meta.url),
  'utf8',
)
check('floating WhatsApp button is no longer rendered', !/WhatsAppButton/.test(floatingActions))
check(
  'floating WhatsApp component was deleted',
  !existsSync(new URL('../src/components/WhatsAppButton.jsx', import.meta.url)),
)
check('floating call button still renders', /FloatingCallButton/.test(floatingActions))
check('floating call button links to the business number', /siteConfig\.contact\.telHref/.test(floatingCall))
check('floating call button has a visible label', /Call Now/.test(floatingCall))

// --- Lead form + Thank You page wiring ---------------------------------------
const appSource = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
check('App wires up the analytics hook', /useAnalytics\(\)/.test(appSource))
check('Thank You route is registered', /path="\/thank-you"/.test(appSource))
check(
  'contact page uses the lead form',
  /<LeadForm \/>/.test(readFileSync(new URL('../src/pages/ContactPage.jsx', import.meta.url), 'utf8')),
)

const leadFormSource = readFileSync(new URL('../src/components/LeadForm.jsx', import.meta.url), 'utf8')
check('lead form posts to the same-origin CRM proxy', /siteConfig\.crm\.endpoint/.test(leadFormSource))
check('lead form requires a confirmed CRM success', /result\.success !== true/.test(leadFormSource))
check(
  'lead form fires the Lead event only after that confirmation',
  leadFormSource.indexOf('trackFormLead(') > leadFormSource.indexOf('result.success !== true'),
)
check('lead form redirects to the Thank You page', /siteConfig\.thankYouPath/.test(leadFormSource))
check('lead form blocks duplicate submissions', /submittingRef/.test(leadFormSource))
check('lead form has a honeypot field', /idPrefix\}-website/.test(leadFormSource))
check(
  'lead form does not fire Lead before validation',
  leadFormSource.indexOf('trackFormLead(') >
    leadFormSource.indexOf('const nextErrors = validateLeadForm(form)'),
)

const thankYouSource = readFileSync(new URL('../src/pages/ThankYou.jsx', import.meta.url), 'utf8')
check(
  'Thank You page uses the required headline',
  thankYouSource.includes('Thank You for Contacting Ezy Digital!'),
)
check(
  'Thank You page uses the required message',
  thankYouSource.includes(
    'Your inquiry has been submitted successfully. Our team will contact you soon.',
  ),
)
check('Thank You page has a Call Now button', /siteConfig\.contact\.telHref/.test(thankYouSource))
check('Thank You page links back to the website', /to="\/"/.test(thankYouSource))
check('Thank You page never fires a Lead event', !/trackFormLead|trackLead/.test(thankYouSource))

// --- Perfex CRM proxy --------------------------------------------------------
const proxySource = readFileSync(new URL('../public/api/lead.php', import.meta.url), 'utf8')
check(
  'lead proxy targets the supplied Perfex form',
  proxySource.includes('https://crm.ezydigital.in/forms/wtl/51cdbcdc72722ab5de415e9cdace0b74'),
)
check('lead proxy validates Indian mobile numbers', proxySource.includes('[6-9]\\d{9}'))
check(
  'lead proxy maps name / phone / city / description',
  ['name', 'phonenumber', 'city', 'description'].every((field) => proxySource.includes(`'${field}'`)),
)
check('lead proxy only reports confirmed leads', /lead_crm_confirmed\(/.test(proxySource))
check('lead proxy rejects the honeypot', /honeypot/.test(proxySource))
check('lead proxy rate limits abuse', /lead_rate_limited\(/.test(proxySource))
check('lead proxy holds no private credentials', !/password|api[_-]?key/i.test(proxySource))

const viteConfigSource = readFileSync(new URL('../vite.config.js', import.meta.url), 'utf8')
check(
  'dev proxy uses the same CRM form (parity with the PHP proxy)',
  viteConfigSource.includes('51cdbcdc72722ab5de415e9cdace0b74'),
)


// --- Instant lead capture (sticky form button + modal) -----------------------
const floatingSource = readFileSync(
  new URL('../src/components/FloatingActions.jsx', import.meta.url),
  'utf8',
)
const modalSource = readFileSync(new URL('../src/components/LeadModal.jsx', import.meta.url), 'utf8')
const triggerSource = readFileSync(
  new URL('../src/components/LeadFormTrigger.jsx', import.meta.url),
  'utf8',
)
const leadModalUtil = readFileSync(new URL('../src/utils/leadModal.js', import.meta.url), 'utf8')

check('sticky form button is rendered on every page', /openLeadForm\(/.test(floatingSource))
check(
  'mobile action bar has both Fill Form and Call Now',
  /Fill Form/.test(floatingSource) && /siteConfig\.contact\.telHref/.test(floatingSource),
)
check(
  'desktop stack keeps the Fill Form + Call Now actions',
  /FloatingCallButton/.test(floatingSource) && /openLeadForm\(\{ source: 'floating' \}\)/.test(floatingSource),
)
check('modal is mounted globally in App', /<LeadModal \/>/.test(appSource))
check('modal exposes an accessible dialog', /role="dialog"/.test(modalSource) && /aria-modal="true"/.test(modalSource))
check('modal closes on Escape and traps focus', /event\.key === 'Escape'/.test(modalSource) && /FOCUSABLE/.test(modalSource))
check('modal reuses the real LeadForm', /<LeadForm/.test(modalSource) && /compact/.test(modalSource))
check('form can be opened from a URL (?form=1)', /isLeadFormRequested/.test(modalSource) && /LEAD_FORM_QUERY_PARAM/.test(leadModalUtil))
check('trigger component opens the modal', /openLeadForm\(\{ service, source \}\)/.test(triggerSource))
check('navbar CTA opens the modal', /LeadFormTrigger/.test(readFileSync(new URL('../src/components/Navbar.jsx', import.meta.url), 'utf8')))
check('hero CTA opens the modal', /LeadFormTrigger/.test(readFileSync(new URL('../src/components/Hero.jsx', import.meta.url), 'utf8')))
check(
  'page header quote CTA preselects the service',
  /service=\{quoteService\}/.test(readFileSync(new URL('../src/components/PageHeader.jsx', import.meta.url), 'utf8')),
)
check('lead form ids are namespaced (no duplicate ids)', /idPrefix = 'lead'/.test(leadFormSource) && /idPrefix\}-name/.test(leadFormSource))
check('form sends its open source to the CRM', /source,/.test(leadFormSource) && /attribution: readAttribution\(\)/.test(leadFormSource))

// Campaign attribution (Meta/UTM) - non-personal only
const attributionSample = readAttribution(
  '?utm_source=facebook&utm_medium=paid&utm_campaign=website-leads&fbclid=abc123',
)
check('UTM source is captured', attributionSample.utm_source === 'facebook', JSON.stringify(attributionSample))
check('UTM campaign is captured', attributionSample.utm_campaign === 'website-leads')
check('Meta click id is recorded as present', attributionSample.fbclid === 'present')
check('empty query returns no attribution', Object.keys(readAttribution('')).length === 0)
check(
  'payload includes source + attribution',
  buildLeadPayload({ form: validLead, serviceLabel: 'Business Website Development', source: 'mobile_bar', attribution: { utm_source: 'facebook' } })
    .source === 'mobile_bar' &&
    buildLeadPayload({ form: validLead, serviceLabel: 'Business Website Development', attribution: { utm_source: 'facebook' } })
      .attribution.utm_source === 'facebook',
)
check('lead proxy stores campaign attribution', /Campaign: /.test(proxySource) && /Meta ad click/.test(proxySource))

// --- Report -----------------------------------------------------------------
let failed = 0
checks.forEach((c) => {
  if (!c.pass) failed += 1
  console.log(`${c.pass ? 'PASS' : 'FAIL'}  ${c.name}${c.detail && !c.pass ? `  -> ${c.detail}` : ''}`)
})

console.log(`\n${checks.length - failed}/${checks.length} checks passed`)
process.exit(failed === 0 ? 0 : 1)
