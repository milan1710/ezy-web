import PageHeader from '../components/PageHeader'
import VideoPricing from '../components/VideoPricing'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Icon from '../components/ui/Icon'
import { formatINR, videoPackages } from '../data/pricing'
import useSeo from '../hooks/useSeo'

const deliverables = [
  {
    icon: 'Clapperboard',
    title: 'Promotional Reels',
    text: 'Short vertical edits for Instagram and Facebook that present a product, service or offer clearly.',
  },
  {
    icon: 'Film',
    title: 'Business marketing videos',
    text: 'Longer videos for your website, profile or advertising, edited from footage and brand assets you supply.',
  },
  {
    icon: 'ShoppingCart',
    title: 'Product videos',
    text: 'Product-focused edits that show what you sell and help customers understand the details.',
  },
  {
    icon: 'Smartphone',
    title: 'Social media video editing',
    text: 'Consistent editing for businesses posting regularly, with captions, branding and platform-ready exports.',
  },
]

const clientProvides = [
  'Original video footage in a usable format',
  'Logo and brand assets',
  'Product or service information and key message',
  'Any approved music or reference videos',
  'Feedback within the agreed revision window',
]

/** Service structured data built from the same prices shown on the page. */
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Video Editing Services',
  serviceType: 'Promotional video and Reel editing',
  provider: { '@type': 'ProfessionalService', name: 'Ezy Digital' },
  areaServed: [
    { '@type': 'City', name: 'Upleta' },
    { '@type': 'State', name: 'Gujarat' },
  ],
  offers: videoPackages.map((pkg) => ({
    '@type': 'Offer',
    name: pkg.name,
    price: String(pkg.startingPrice),
    priceCurrency: 'INR',
  })),
}

export default function VideoEditing() {
  useSeo({
    title: 'Video Editing Services in Gujarat | Reels from ₹499 | Ezy Digital',
    description:
      'Professional video editing for businesses: Basic Reel ₹499, Promotional Reel ₹999, Premium Ad Video ₹1,999. Monthly Reel packages from ₹5,999. Serving Upleta and Gujarat.',
    path: '/video-editing',
    jsonLd: videoSchema,
  })

  return (
    <>
      <PageHeader
        eyebrow="Video editing"
        title="Promotional video and Reel editing for your business"
        description={`Engaging short-form content edited from the footage you already have. Basic Reel editing starts at ${formatINR(
          videoPackages[0].startingPrice,
        )} per Reel, with promotional and advertising packages available.`}
        breadcrumb={[{ label: 'Video Editing' }]}
        quoteService="basic-reel"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
              What we edit
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
              Video content built for how people watch on mobile
            </h2>
            <p className="text-ink-500 mt-4 text-base leading-relaxed">
              Send your footage and brand details; we handle the cut, pacing, captions and
              platform-ready exports. The edit level depends on the package you choose.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {deliverables.map((item) => (
              <article key={item.title} className="rounded-2xl border border-ink-100 bg-white p-6">
                <span className="bg-brand-50 text-brand-600 inline-flex h-11 w-11 items-center justify-center rounded-xl">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                <p className="text-ink-500 mt-2 text-sm leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h3 className="text-base font-bold text-ink-900">What you provide</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {clientProvides.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <Icon name="CheckCircle2" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-base font-bold text-amber-900">What is not included</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-900/90">
                Video shooting, professional voice-over, advanced 3D animation, paid stock footage
                and unlimited revisions are not part of the listed prices. These can be quoted
                separately if you need them. Social media posting and Meta Ads management are also
                separate services.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-amber-900/90">
                No view count, reach, follower growth or sales result is guaranteed from an edited
                video. Performance depends on the content, audience, platform and promotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoPricing showHeading showConditions />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  )
}
