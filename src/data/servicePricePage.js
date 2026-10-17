/**
 * Gujarati content for /service-price.
 *
 * Prices are NOT duplicated here. Every amount is read from the central
 * catalogue in src/data/pricing.js, so changing a price there updates this
 * page too.
 */
import {
  additionalServices,
  formatINR,
  metaAdsPackages,
  websitePackages,
} from './pricing.js'

const byId = (collection, id) => collection.find((item) => item.id === id)

const sitePrice = (id) => formatINR(byId(websitePackages, id).startingPrice)
const metaPrice = (id) => formatINR(byId(metaAdsPackages, id).startingPrice)
const extraPrice = (id) => formatINR(byId(additionalServices, id).startingPrice)

export const pricePageTitle = 'સર્વિસ અને પ્રાઇસ લિસ્ટ'

export const websitePriceGroups = [
  {
    id: 'basic-website',
    number: '01',
    name: 'બેઝિક વેબસાઇટ',
    price: `${sitePrice('basic-website')} થી શરૂ`,
    description:
      'નાના બિઝનેસ, દુકાન અને ફ્રીલાન્સર માટે પ્રોફેશનલ ઓનલાઇન હાજરી.',
    features: [
      '1–5 પેજ',
      'મોબાઇલ-ફ્રેન્ડલી ડિઝાઇન',
      'બિઝનેસની માહિતી',
      'સર્વિસ વિભાગ',
      'WhatsApp બટન ઇન્ટિગ્રેશન',
      'સીધો કૉલ બટન ઇન્ટિગ્રેશન',
      'કોન્ટેક્ટ ફોર્મ',
    ],
  },
  {
    id: 'business-website',
    number: '02',
    name: 'બિઝનેસ વેબસાઇટ',
    price: `${sitePrice('business-website')} થી શરૂ`,
    description:
      'વધતા બિઝનેસ માટે પ્રીમિયમ ડિઝાઇન અને જરૂરી કોન્ટેક્ટ સુવિધાઓ.',
    features: [
      '5–8 પેજ',
      'પ્રીમિયમ બિઝનેસ ડિઝાઇન',
      'સર્વિસ અને પ્રોડક્ટ વિભાગ',
      'WhatsApp ઇન્ટિગ્રેશન',
      'કોન્ટેક્ટ ફોર્મ',
      'Google Maps ઇન્ટિગ્રેશન',
      'બેઝિક On-page SEO',
    ],
  },
  {
    id: 'professional-website',
    number: '03',
    name: 'પ્રોફેશનલ વેબસાઇટ',
    price: `${sitePrice('professional-website')} થી શરૂ`,
    description:
      'વિસ્તૃત કન્ટેન્ટ અને લીડ જનરેશન માટે કસ્ટમ ડિઝાઇનવાળી વેબસાઇટ.',
    features: [
      '8–12 પેજ',
      'કસ્ટમ ડિઝાઇન',
      'પ્રોડક્ટ અથવા સર્વિસ કેટલોગ',
      'પૂછપરછ અને લીડ ફોર્મ',
      'SEO-ફ્રેન્ડલી સ્ટ્રક્ચર',
      'Google Analytics ઇન્ટિગ્રેશન, જરૂરી સેટઅપને આધીન',
    ],
  },
  {
    id: 'ecommerce',
    number: '04',
    name: 'ઈ-કોમર્સ વેબસાઇટ',
    price: `${sitePrice('ecommerce')} થી શરૂ`,
    description: 'પ્રોડક્ટ ઓનલાઇન વેચવા માટે પૂર્ણ સ્ટોર સેટઅપ.',
    features: [
      'ઓનલાઇન પ્રોડક્ટ વેચાણ',
      'પ્રોડક્ટ લિસ્ટિંગ અને કેટેગરી',
      'શોપિંગ કાર્ટ',
      'ચેકઆઉટ',
      'ઓર્ડર મેનેજમેન્ટ',
      'પેમેન્ટ ગેટવે ઇન્ટિગ્રેશન',
      'મોબાઇલ-ફ્રેન્ડલી ડિઝાઇન',
    ],
  },
  {
    id: 'custom-website',
    number: '05',
    name: 'કસ્ટમ વેબસાઇટ / વેબ એપ્લિકેશન',
    price: `${sitePrice('custom-website')} થી શરૂ`,
    description: 'બિઝનેસની જરૂરિયાત મુજબ કસ્ટમ એપ્લિકેશન ડેવલપમેન્ટ.',
    features: [
      'કસ્ટમ ફીચર્સ',
      'એડમિન પેનલ',
      'ડેટાબેઝ ઇન્ટિગ્રેશન',
      'કસ્ટમર અને લીડ મેનેજમેન્ટ',
      'API ઇન્ટિગ્રેશન',
      'જરૂરિયાત મુજબ કસ્ટમ ડેવલપમેન્ટ',
    ],
  },
]

export const metaPriceGroups = [
  {
    id: 'meta-single-campaign',
    number: '01',
    name: 'એક કેમ્પેઇન સેટઅપ',
    price: metaPrice('meta-single-campaign'),
    priceSuffix: 'એક વખતનો ચાર્જ',
    description: 'પહેલી Meta Ads કેમ્પેઇન શરૂ કરવા માટે બેઝિક સેટઅપ.',
    features: [
      'એક Meta Ads કેમ્પેઇન સેટઅપ',
      'ઓડિયન્સ અને લોકેશન ટાર્ગેટિંગ',
      'Ad Copy સેટઅપ',
      'એક સ્ટેટિક પોસ્ટર',
      'બેઝિક કેમ્પેઇન સેટિંગ્સ',
    ],
  },
  {
    id: 'meta-multiple-campaigns',
    number: '02',
    name: 'બે કેમ્પેઇન સેટઅપ',
    price: metaPrice('meta-multiple-campaigns'),
    priceSuffix: 'એક વખતનો ચાર્જ',
    description: 'બે કેમ્પેઇન સાથે સેટઅપ — માત્ર એક વખતનો ચાર્જ.',
    features: [
      'બે Meta Ads કેમ્પેઇન સેટઅપ',
      'ઓડિયન્સ અને લોકેશન ટાર્ગેટિંગ',
      'Ad Copy',
      'મંજૂર સ્કોપ મુજબ 2–3 બેઝિક પોસ્ટર ક્રિએટિવ્સ',
    ],
  },
  {
    id: 'meta-social-management',
    number: '03',
    name: 'સંપૂર્ણ સોશિયલ મીડિયા + Meta Ads મેનેજમેન્ટ',
    price: metaPrice('meta-social-management'),
    priceSuffix: 'પ્રતિ મહિનો',
    description: 'Facebook અને Instagram પેજ તથા Meta Adsનું માસિક મેનેજમેન્ટ.',
    features: [
      'Facebook પેજ મેનેજમેન્ટ',
      'Instagram પેજ મેનેજમેન્ટ',
      'દર મહિને 12 સુધી સ્ટેટિક પોસ્ટર',
      'નક્કી કરેલા સર્વિસ સ્કોપમાં જરૂર મુજબ કેમ્પેઇન સેટઅપ',
      'Ad Copy',
      'ઓડિયન્સ અને લોકેશન ટાર્ગેટિંગ',
      'કેમ્પેઇન મોનિટરિંગ અને ઑપ્ટિમાઇઝેશન',
      'એક માસિક પરફોર્મન્સ રિપોર્ટ',
    ],
  },
]

export const additionalServiceGroups = [
  {
    id: 'single-social-poster',
    name: 'એક સોશિયલ મીડિયા પોસ્ટર ડિઝાઇન',
    price: extraPrice('single-social-poster'),
  },
  {
    id: 'ten-social-posters',
    name: '10 સોશિયલ મીડિયા પોસ્ટર',
    price: extraPrice('ten-social-posters'),
  },
  {
    id: 'video-reel-editing',
    name: 'બેઝિક વીડિયો / Reel એડિટિંગ',
    price: `${extraPrice('video-reel-editing')} થી શરૂ`,
  },
  {
    id: 'logo-design',
    name: 'લોગો ડિઝાઇન',
    price: `${extraPrice('logo-design')} થી શરૂ`,
  },
  {
    id: 'banner-brochure',
    name: 'બેનર / બ્રોશર ડિઝાઇન',
    price: `${extraPrice('banner-brochure')} થી શરૂ`,
  },
  {
    id: 'visiting-card',
    name: 'વિઝિટિંગ કાર્ડ ડિઝાઇન',
    price: extraPrice('visiting-card'),
  },
  {
    id: 'google-business-profile',
    name: 'Google Business Profile સેટઅપ',
    price: extraPrice('google-business-profile'),
  },
  {
    id: 'website-content-writing',
    name: 'વેબસાઇટ કન્ટેન્ટ રાઇટિંગ',
    price: `${extraPrice('website-content-writing')} થી શરૂ`,
  },
  {
    id: 'landing-page-design',
    name: 'લેન્ડિંગ પેજ ડિઝાઇન',
    price: `${extraPrice('landing-page-design')} થી શરૂ`,
  },
  {
    id: 'seo-optimization',
    name: 'SEO ઑપ્ટિમાઇઝેશન',
    price: `${extraPrice('seo-optimization')} થી શરૂ`,
  },
  {
    id: 'website-maintenance',
    name: 'વેબસાઇટ મેન્ટેનન્સ',
    price: `${extraPrice('website-maintenance')} પ્રતિ મહિનો`,
  },
]

export const pricePageNote =
  'નોંધ: વેબસાઇટની અંતિમ કિંમત પ્રોજેક્ટની જરૂરિયાત મુજબ નક્કી થશે. ડોમેન, હોસ્ટિંગ, પેઇડ ટૂલ્સ, પેમેન્ટ ગેટવે અને અન્ય થર્ડ-પાર્ટી ચાર્જ અલગ હોઈ શકે છે. Meta Adsનું જાહેરાત બજેટ સર્વિસ ચાર્જમાં સામેલ નથી. વીડિયો એડિટિંગ અને નક્કી કરેલા સ્કોપની બહારનું કામ અલગથી ચાર્જ થઈ શકે છે.'

