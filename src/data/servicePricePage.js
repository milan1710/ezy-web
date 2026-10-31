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
  videoMonthlyPackages,
  videoPackages,
  websitePackages,
} from './pricing.js'

const byId = (collection, id) => collection.find((item) => item.id === id)

const sitePrice = (id) => formatINR(byId(websitePackages, id).startingPrice)
const metaPrice = (id) => formatINR(byId(metaAdsPackages, id).startingPrice)
const extraPrice = (id) => formatINR(byId(additionalServices, id).startingPrice)
const videoPrice = (id) => formatINR(byId(videoPackages, id).startingPrice)
const videoMonthlyPrice = (id) => formatINR(byId(videoMonthlyPackages, id).startingPrice)

export const pricePageTitle = 'સર્વિસ અને પ્રાઇસ લિસ્ટ'

export const websitePriceGroups = [
  {
    id: 'basic-website',
    number: '01',
    name: 'બેઝિક વેબસાઇટ',
    price: `${sitePrice('basic-website')} થી શરૂ`,
    description:
      'નાના બિઝનેસ અને વ્યક્તિગત ઓનલાઇન હાજરી માટે પ્રોફેશનલ વેબસાઇટ.',
    features: [
      '3–5 પેજ',
      'મોબાઇલ-રિસ્પોન્સિવ લેઆઉટ',
      'બિઝનેસની મૂળભૂત માહિતી',
      'સર્વિસ અથવા પ્રોડક્ટ માહિતી',
      'WhatsApp કોન્ટેક્ટ બટન',
      'કોન્ટેક્ટ વિગતો',
      'બેઝિક On-page SEO સ્ટ્રક્ચર',
    ],
  },
  {
    id: 'professional-website',
    number: '02',
    name: 'પ્રોફેશનલ વેબસાઇટ',
    price: `${sitePrice('professional-website')} થી શરૂ`,
    description:
      'વધતા બિઝનેસ માટે વધુ કસ્ટમાઇઝ્ડ ડિઝાઇન અને એન્ક્વાયરી-કેન્દ્રિત લેઆઉટ.',
    features: [
      '5–8 પેજ',
      'વધુ કસ્ટમાઇઝ્ડ ડિઝાઇન',
      'બિઝનેસ અને સર્વિસ વિભાગ',
      'કોન્ટેક્ટ ફોર્મ',
      'WhatsApp ઇન્ટિગ્રેશન',
      'બેઝિક On-page SEO',
      'સુધારેલ નેવિગેશન અને કન્વર્ઝન લેઆઉટ',
    ],
  },
  {
    id: 'business-website',
    number: '03',
    name: 'બિઝનેસ વેબસાઇટ',
    price: `${sitePrice('business-website')} થી શરૂ`,
    description:
      'વિસ્તૃત કંપની માટે ડિટેલ સર્વિસ સેક્શન અને લીડ જનરેશન ફોર્મવાળી એડવાન્સ વેબસાઇટ.',
    features: [
      'એડવાન્સ બિઝનેસ ડિઝાઇન',
      'ડિટેલ સર્વિસ વિભાગ',
      'લીડ જનરેશન ફોર્મ',
      'કસ્ટમ પેજ લેઆઉટ',
      'WhatsApp ઇન્ટિગ્રેશન',
      'બેઝિક SEO કન્ફિગરેશન',
      'વધારાના બિઝનેસ-કેન્દ્રિત વિભાગ',
    ],
  },
  {
    id: 'ecommerce',
    number: '04',
    name: 'ઈ-કોમર્સ વેબસાઇટ',
    price: `${sitePrice('ecommerce')} થી શરૂ`,
    description: 'પ્રોડક્ટ ઓનલાઇન વેચવા માટે પૂર્ણ સ્ટોર સેટઅપ.',
    features: [
      'પ્રોડક્ટ કેટલોગ અને કેટેગરી',
      'પ્રોડક્ટ ડિટેલ પેજ',
      'શોપિંગ કાર્ટ',
      'ચેકઆઉટ',
      'ઓર્ડર મેનેજમેન્ટ',
      'પેમેન્ટ ગેટવે ઇન્ટિગ્રેશન, મંજૂર સ્કોપ મુજબ',
      'મોબાઇલ-રિસ્પોન્સિવ શોપિંગ અનુભવ',
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
    name: 'કેમ્પેઇન સેટઅપ',
    price: metaPrice('meta-single-campaign'),
    priceSuffix: 'એક વખતનો ચાર્જ',
    description: 'એક Meta Ads કેમ્પેઇન અને એક એડ સેટનું બેઝિક સેટઅપ.',
    features: [
      'એક Meta Ads કેમ્પેઇન સેટઅપ',
      'એક એડ સેટ',
      'ઓડિયન્સ અને લોકેશન ટાર્ગેટિંગ',
      'Ad Copy સેટઅપ',
      'બેઝિક કેમ્પેઇન સેટિંગ્સ',
      'બેઝિક ઓપ્ટિમાઇઝેશન સેટિંગ્સ',
    ],
  },
  {
    id: 'meta-basic-management',
    number: '02',
    name: 'બેઝિક એડ્સ મેનેજમેન્ટ',
    price: metaPrice('meta-basic-management'),
    priceSuffix: 'પ્રતિ મહિનો',
    description: 'નાના કેમ્પેઇન માટે નિયમિત મોનિટરિંગ અને બેઝિક મેનેજમેન્ટ.',
    features: [
      'બેઝિક કેમ્પેઇન મેનેજમેન્ટ',
      'કેમ્પેઇન મોનિટરિંગ',
      'બેઝિક ઓપ્ટિમાઇઝેશન',
      'મંજૂર સ્કોપ મુજબ રિપોર્ટિંગ',
    ],
  },
  {
    id: 'meta-growth-management',
    number: '03',
    name: 'ગ્રોથ એડ્સ મેનેજમેન્ટ',
    price: metaPrice('meta-growth-management'),
    priceSuffix: 'પ્રતિ મહિનો',
    description: 'ઓડિયન્સ અને ક્રિએટિવ ટેસ્ટિંગ સાથે વધુ સ્ટ્રક્ચર્ડ મેનેજમેન્ટ.',
    features: [
      'કેમ્પેઇન મેનેજમેન્ટ',
      'ઓડિયન્સ અને ક્રિએટિવ ટેસ્ટિંગ, જ્યાં લાગુ પડે',
      'કેમ્પેઇન ઓપ્ટિમાઇઝેશન',
      'પરફોર્મન્સ રિવ્યુ',
    ],
  },
  {
    id: 'meta-professional-management',
    number: '04',
    name: 'પ્રોફેશનલ એડ્સ મેનેજમેન્ટ',
    price: metaPrice('meta-professional-management'),
    priceSuffix: 'પ્રતિ મહિનો',
    description: 'ઘણા કેમ્પેઇન માટે સ્ટ્રક્ચર્ડ ટેસ્ટિંગ, એનાલિસિસ અને રિપોર્ટિંગ.',
    features: [
      'વ્યાપક કેમ્પેઇન મેનેજમેન્ટ',
      'સ્ટ્રક્ચર્ડ ટેસ્ટિંગ અને ઓપ્ટિમાઇઝેશન',
      'પરફોર્મન્સ એનાલિસિસ',
      'મંજૂર સ્કોપ મુજબ રિપોર્ટિંગ',
    ],
  },
]

export const videoPriceGroups = [
  {
    id: 'basic-reel',
    number: '01',
    name: 'બેઝિક રીલ',
    price: `${extraPrice('video-reel-editing')} થી શરૂ`,
    priceSuffix: 'પ્રતિ રીલ',
    description: 'તમારા આપેલા ફૂટેજમાંથી સાદી, સુઘડ રીલ એડિટ.',
    features: [
      'વર્ટિકલ રીલ એડિટ',
      'બેઝિક કટ અને સિક્વન્સ',
      'બેઝિક ટેક્સ્ટ / કેપ્શન',
      'સોશિયલ મીડિયા માટે એક્સપોર્ટ',
    ],
  },
  {
    id: 'promotional-reel',
    number: '02',
    name: 'પ્રોમોશનલ રીલ',
    price: `${videoPrice('promotional-reel')} થી શરૂ`,
    priceSuffix: 'પ્રતિ રીલ',
    description: 'પ્રોડક્ટ, સર્વિસ કે ઓફર માટે બ્રાન્ડેડ પ્રોમોશનલ રીલ.',
    features: [
      'પ્રોમોશનલ રીલ સ્ટ્રક્ચર',
      'બ્રાન્ડેડ ટાઇટલ અને ટેક્સ્ટ',
      'ટ્રાન્ઝિશન અને બેઝિક મોશન',
      'મંજૂર સ્કોપ મુજબ સંગીત',
      'સોશિયલ મીડિયા માટે એક્સપોર્ટ',
    ],
  },
  {
    id: 'premium-ad-video',
    number: '03',
    name: 'પ્રીમિયમ એડ વિડિયો',
    price: `${videoPrice('premium-ad-video')} થી શરૂ`,
    priceSuffix: 'પ્રતિ વિડિયો',
    description: 'જાહેરાત કે વેબસાઇટ માટે વધુ વિગતવાર એડિટ કરેલો વિડિયો.',
    features: [
      'લાંબો પ્રોમોશનલ / એડ વિડિયો',
      'બ્રાન્ડેડ ગ્રાફિક્સ',
      'અલગ-અલગ આઉટપુટ ફોર્મેટ',
      'જાહેરાત માટે તૈયાર આસ્પેક્ટ રેશિયો',
    ],
  },
]

export const videoMonthlyGroups = [
  {
    id: 'video-monthly-8',
    name: '8 રીલ્સ',
    price: `${videoMonthlyPrice('video-monthly-8')} પ્રતિ મહિનો`,
  },
  {
    id: 'video-monthly-12',
    name: '12 રીલ્સ',
    price: `${videoMonthlyPrice('video-monthly-12')} પ્રતિ મહિનો`,
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

