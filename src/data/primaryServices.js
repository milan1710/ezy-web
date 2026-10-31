/**
 * The three primary services Ezy Digital leads with on the homepage.
 *
 * Prices are read from the central pricing catalogue so the homepage can never
 * drift from the pricing pages. WhatsApp messages come from siteConfig.
 */
import { siteConfig } from '../config/siteConfig.js'
import { videoPackages, websitePackages } from './pricing.js'

const basicWebsite = websitePackages.find((pkg) => pkg.id === 'basic-website')
const basicReel = videoPackages.find((pkg) => pkg.id === 'basic-reel')

export const primaryServices = [
  {
    id: 'website-development',
    icon: 'Laptop',
    eyebrow: 'Website Development',
    title: 'Website Development',
    price: basicWebsite.startingPrice,
    priceSuffix: basicWebsite.priceSuffix,
    priceNote: 'Starting price for a 3–5 page business website.',
    description:
      'Professional, responsive websites designed to present your business, build credibility, and help customers contact you.',
    benefits: [
      'Mobile-responsive design',
      'Professional business presentation',
      'Clear service and product information',
      'WhatsApp and contact integration where applicable',
      'SEO-friendly structure',
      'Conversion-focused page layout',
    ],
    primaryCta: 'Get Website Quote',
    message: siteConfig.whatsappMessages.website,
    to: '/website-development/pricing',
    priceLinkLabel: 'See website packages',
  },
  {
    id: 'meta-ads',
    icon: 'Megaphone',
    eyebrow: 'Meta Ads',
    title: 'Meta Ads & Lead Generation',
    price: 999,
    priceSuffix: 'campaign setup',
    priceNote: 'Campaign setup fee. Advertising spend is paid separately to Meta.',
    description:
      'Campaign setup and management to help businesses reach relevant audiences and generate inquiries through Facebook and Instagram advertising.',
    benefits: [
      'Campaign strategy and setup',
      'Audience and location targeting',
      'Ad creative planning',
      'WhatsApp or lead-form campaign configuration',
      'Campaign monitoring and optimization by package',
      'Performance reporting where included',
    ],
    primaryCta: 'Discuss My Ad Campaign',
    message: siteConfig.whatsappMessages.metaAds,
    to: '/meta-ads-management',
    priceLinkLabel: 'See Meta Ads pricing',
    note: 'No guaranteed leads, sales or fixed cost per lead. Results depend on your offer, audience, creative, budget and market.',
  },
  {
    id: 'video-editing',
    icon: 'Clapperboard',
    eyebrow: 'Video Editing',
    title: 'Promotional Video & Reel Editing',
    price: basicReel.startingPrice,
    priceSuffix: 'per Reel',
    priceNote: 'Starting price for a basic Reel edit from footage you supply.',
    description:
      'Professional video editing for businesses that want to present their products and services through engaging short-form content.',
    benefits: [
      'Promotional Reels',
      'Business marketing videos',
      'Product videos',
      'Social media video editing',
      'Editing based on the selected package and supplied footage',
    ],
    primaryCta: 'Get Video Editing Quote',
    message: siteConfig.whatsappMessages.videoEditing,
    to: '/video-editing',
    priceLinkLabel: 'See video packages',
  },
]

export default primaryServices
