/**
 * Configuration sanity checks.
 *
 * Verifies the phone/WhatsApp wiring and pricing helpers that the whole site
 * depends on. Run with: npm run verify
 */
import { readFileSync } from 'node:fs'
import { siteConfig, whatsappLink, canonicalUrl } from '../src/config/siteConfig.js'
import {
  additionalServices,
  formatINR,
  metaAdsPackages,
  metaAdsBudgetDisclaimer,
  packageMatrix,
  packages,
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
import { describeLink, FB_EVENTS, isPixelEnabled } from '../src/utils/analytics.js'
import {
  buildEnquiryMessage,
  normalizeIndianMobile,
  validateEnquiry,
} from '../src/utils/enquiry.js'
import {
  additionalServiceGroups,
  metaPriceGroups,
  pricePageNote,
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

// --- Canonical URLs ---------------------------------------------------------
check('canonical for home', canonicalUrl('/') === `${siteConfig.domain}/`, canonicalUrl('/'))
check('canonical for nested route', canonicalUrl('/privacy-policy') === `${siteConfig.domain}/privacy-policy`, canonicalUrl('/privacy-policy'))

// --- Pricing ----------------------------------------------------------------
const expectedPrices = {
  'basic-website': 2999,
  'business-website': 5999,
  'professional-website': 9999,
  ecommerce: 14999,
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
  'meta-single-campaign': 1000,
  'meta-multiple-campaigns': 1500,
  'meta-social-management': 5000,
}
check('three Meta Ads packages defined', metaAdsPackages.length === 3, `found ${metaAdsPackages.length}`)
metaAdsPackages.forEach((pkg) => {
  check(`Meta price for ${pkg.id}`, pkg.startingPrice === metaPrices[pkg.id], String(pkg.startingPrice))
  check(`${pkg.id} has exclusions`, Array.isArray(pkg.excludes) && pkg.excludes.length > 0)
})
check('Meta Ads budget disclaimer mentions separate payment', /budget is not included/i.test(metaAdsBudgetDisclaimer))
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
check('service price page has 3 Meta Ads packages', metaPriceGroups.length === 3)
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
check('service price page note includes the Meta Ads budget wording', /Meta Ads/.test(pricePageNote))
check('service price page note includes third-party charges', /થર્ડ-પાર્ટી ચાર્જ/.test(pricePageNote))

// --- Enquiry form helpers ---------------------------------------------------
check('valid 10-digit mobile accepted', normalizeIndianMobile('9512648085') === '9512648085')
check('+91 mobile normalised', normalizeIndianMobile('+91 95126 48085') === '9512648085')
check('short mobile rejected', normalizeIndianMobile('95126') === null)
check('invalid mobile prefix rejected', normalizeIndianMobile('1512648085') === null)
check(
  'empty name is rejected',
  Boolean(validateEnquiry({ name: '', phone: '9512648085', service: 'business-website', requirements: 'Need a business website' }).name),
)
check(
  'valid enquiry has no errors',
  Object.keys(
    validateEnquiry({
      name: 'Test Business',
      phone: '9512648085',
      service: 'business-website',
      requirements: 'Need a five page business website',
    }),
  ).length === 0,
)
const enquiryMessage = buildEnquiryMessage({
  form: {
    name: 'Test Business',
    phone: '9512648085',
    business: 'Test Shop',
    budget: '₹5,000 – ₹10,000',
    requirements: 'Need a five page business website',
  },
  serviceLabel: 'Business Website (website)',
})
check('enquiry message identifies the package', enquiryMessage.includes('Business Website'))
check('enquiry message includes the phone number', enquiryMessage.includes('+91 9512648085'))
check('enquiry message includes the requirement', enquiryMessage.includes('five page business website'))

// --- Content integrity ------------------------------------------------------
check('13 services defined', services.length === 13, `found ${services.length}`)
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
  'five pages upgrades to the business package',
  rec({ base: 'basic-website', pages: 5, features: [] }).packageId === 'business-website',
)
check(
  'eight pages upgrades to the professional package',
  rec({ base: 'business-website', pages: 8, features: [] }).packageId === 'professional-website',
)
check(
  'payments requirement upgrades to e-commerce',
  rec({ base: 'business-website', pages: 5, features: ['payments'] }).packageId === 'ecommerce',
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

// --- Meta Pixel / analytics -------------------------------------------------
check('PageView event name', FB_EVENTS.pageView === 'PageView', FB_EVENTS.pageView)
check('Lead event name', FB_EVENTS.lead === 'Lead', FB_EVENTS.lead)

const callClick = describeLink(siteConfig.contact.telHref)
check('phone link counts as a lead', callClick?.event === 'Lead' && callClick?.source === 'call')

const waClick = describeLink(whatsappLink(siteConfig.whatsappMessages.general))
check(
  'WhatsApp link counts as a lead',
  waClick?.event === 'Lead' && waClick?.source === 'whatsapp',
  JSON.stringify(waClick),
)

const mailClick = describeLink(`mailto:${siteConfig.contact.email}`)
check('email link counts as a lead', mailClick?.source === 'email', JSON.stringify(mailClick))

check(
  'WhatsApp link without a prefilled message still counts',
  describeLink('https://wa.me/919512648085')?.source === 'whatsapp',
)
check('api.whatsapp.com links count', describeLink('https://api.whatsapp.com/send?phone=1')?.source === 'whatsapp')
check('internal anchor links are not leads', describeLink('/#pricing') === null)
check('the homepage URL is not a lead', describeLink('https://ezydigital.in/') === null)
check('empty values are handled safely', describeLink('') === null && describeLink(undefined) === null)

// Outside Vite (plain Node) no pixel id is available, so the module must no-op
// instead of throwing - this proves the safe-disabled path works.
check('pixel helper no-ops safely without Vite env', isPixelEnabled() === false)

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

// The hook must actually wire the three behaviours together.
const analyticsHook = readFileSync(new URL('../src/hooks/useAnalytics.js', import.meta.url), 'utf8')
check('analytics hook initialises the pixel', /initPixel\(\)/.test(analyticsHook))
check('analytics hook tracks route-change page views', /trackPageView\(/.test(analyticsHook))
check('analytics hook fires lead events from link clicks', /describeLink\(/.test(analyticsHook) && /trackLead\(/.test(analyticsHook))
check(
  'analytics hook listens for clicks at document level',
  /addEventListener\('click'/.test(analyticsHook) && /addEventListener\('auxclick'/.test(analyticsHook),
)
check(
  'App wires up the analytics hook',
  /useAnalytics\(\)/.test(readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')),
)

// --- Report -----------------------------------------------------------------
let failed = 0
checks.forEach((c) => {
  if (!c.pass) failed += 1
  console.log(`${c.pass ? 'PASS' : 'FAIL'}  ${c.name}${c.detail && !c.pass ? `  -> ${c.detail}` : ''}`)
})

console.log(`\n${checks.length - failed}/${checks.length} checks passed`)
process.exit(failed === 0 ? 0 : 1)
