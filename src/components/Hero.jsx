import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BrowserFrame from './mockups/BrowserFrame'
import MockupApp from './mockups/MockupApp'
import Button from './ui/Button'
import Icon from './ui/Icon'
import LeadFormTrigger from './LeadFormTrigger'
import { siteConfig, whatsappLink } from '../config/siteConfig'
import { heroTechLabels } from '../data/techStack'

/**
 * Floating Meta campaign structure card. It shows the parts of a campaign we
 * actually configure - no invented spend, reach or results.
 */
function CampaignCard({ className = '' }) {
  const rows = [
    { label: 'Campaign', value: 'Lead generation' },
    { label: 'Audience', value: 'Location + interest' },
    { label: 'Creative', value: 'Static / Reel' },
    { label: 'Tracking', value: 'Pixel + Lead form' },
  ]

  return (
    <div
      className={[
        'border-white/12 bg-ink-900/90 rounded-2xl border p-4 shadow-2xl backdrop-blur-md',
        className,
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <span className="text-ink-300 text-[0.6rem] font-bold tracking-[0.18em] uppercase">
          Meta campaign
        </span>
        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[0.6rem] font-bold text-emerald-300">
          Setup
        </span>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between gap-3 text-[0.7rem]">
            <span className="text-ink-400">{row.label}</span>
            <span className="text-ink-100 font-semibold">{row.value}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-1.5 border-t border-white/10 pt-3">
        <span className="bg-brand-500 h-1.5 w-1.5 rounded-full" />
        <span className="text-ink-400 text-[0.65rem]">Facebook &amp; Instagram</span>
      </div>
    </div>
  )
}

/** Decorative video editing timeline - represents the actual Reel edit workflow. */
function TimelineCard({ className = '' }) {
  const tracks = [
    { label: 'V1', clips: ['w-[38%]', 'w-[16%]', 'w-[28%]'] },
    { label: 'A1', clips: ['w-[52%]', 'w-[24%]'] },
    { label: 'TXT', clips: ['w-[20%]', 'w-[34%]'] },
  ]

  return (
    <div
      className={[
        'border-white/12 bg-ink-900/90 rounded-2xl border p-4 shadow-2xl backdrop-blur-md',
        className,
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <span className="text-ink-300 text-[0.6rem] font-bold tracking-[0.18em] uppercase">
          Reel edit
        </span>
        <span className="text-ink-400 text-[0.6rem]">9:16</span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {tracks.map((track) => (
          <div key={track.label} className="flex items-center gap-2">
            <span className="text-ink-500 w-6 text-[0.55rem] font-bold">{track.label}</span>
            <div className="flex flex-1 gap-1">
              {track.clips.map((width, index) => (
                <span
                  key={`${track.label}-${index}`}
                  className={[
                    width,
                    'h-3 rounded-[3px]',
                    track.label === 'V1'
                      ? 'bg-brand-500/70'
                      : track.label === 'A1'
                        ? 'bg-azure-400/60'
                        : 'bg-white/25',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
        <span className="text-ink-500 text-[0.6rem]">Cut · captions · colour</span>
        <span className="text-brand-300 text-[0.6rem] font-bold">Reels</span>
      </div>
    </div>
  )
}

const HERO_SERVICES = [
  { label: 'Website Development', icon: 'Laptop', to: '/website-development' },
  { label: 'Facebook & Instagram Ads', icon: 'Megaphone', to: '/meta-ads-management' },
  { label: 'Professional Video Editing', icon: 'Clapperboard', to: '/video-editing' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-ink-950 relative isolate overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="glow-red pointer-events-none absolute -top-56 right-[-14%] h-[46rem] w-[46rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-white/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          {/* Copy */}
          <div>
            <motion.div {...enter(0)} className="flex flex-wrap items-center gap-3">
              <span className="text-ink-200 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-wide">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="bg-brand-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                  <span className="bg-brand-500 relative inline-flex h-1.5 w-1.5 rounded-full" />
                </span>
                Digital agency · Upleta, Gujarat
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              {...enter(0.06)}
              className="font-display mt-7 text-[2.15rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-white sm:text-[3.25rem] sm:leading-[1.02] lg:text-[3.7rem]"
            >
              Build Your Digital Presence.{' '}
              <span className="text-gradient-light block sm:inline">
                Accelerate Your Business Growth.
              </span>
            </motion.h1>

            <motion.p
              {...enter(0.12)}
              className="text-ink-300 mt-6 max-w-[36rem] text-[1rem] leading-relaxed sm:text-[1.075rem]"
            >
              From high-performing websites to result-focused Meta Ads and professional video editing,
              Ezy Digital helps businesses build a stronger digital presence.
            </motion.p>

            <motion.div {...enter(0.18)} className="mt-9 flex flex-wrap items-center gap-3">
              <LeadFormTrigger size="lg" iconRight="ArrowRight" source="hero">
                Get Started
              </LeadFormTrigger>
              <Button href="#services" variant="outlineLight" size="lg" icon="Sparkles">
                Explore Our Services
              </Button>
            </motion.div>

            <motion.ul {...enter(0.24)} className="mt-10 grid gap-2.5 sm:grid-cols-3">
              {HERO_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="group border-white/10 bg-white/[0.04] hover:border-brand-400/50 flex h-full items-start gap-2.5 rounded-xl border p-3 transition-colors hover:bg-white/[0.07]"
                  >
                    <Icon name={service.icon} className="text-brand-400 mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-ink-100 text-[0.775rem] leading-snug font-semibold">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </motion.ul>

            <motion.p
              {...enter(0.3)}
              className="text-ink-400 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8rem]"
            >
              <a
                href={siteConfig.contact.telHref}
                className="hover:text-ink-100 inline-flex items-center gap-2 font-semibold text-white/85 transition-colors"
              >
                <Icon name="Phone" className="h-3.5 w-3.5" />
                {siteConfig.contact.phoneInternational}
              </a>
              <a
                href={whatsappLink(siteConfig.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-100 inline-flex items-center gap-2 font-semibold text-white/70 transition-colors"
              >
                <Icon name="MessagesSquare" className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <span className="inline-flex items-center gap-2">
                <Icon name="MapPin" className="h-3.5 w-3.5" />
                Gujarat &amp; India
              </span>
            </motion.p>
          </div>


          {/* Composed product visual */}
          <motion.div {...enter(0.2)} className="relative mx-auto w-full max-w-[33rem] lg:max-w-none">
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-white/[0.06] to-transparent blur-2xl" />

            <div className="relative z-20">
              <BrowserFrame url="ezydigital.in/dashboard" tone="light" className="ring-1 ring-white/10">
                <MockupApp variant="dashboard" />
              </BrowserFrame>
            </div>

            <div className="relative z-10 -mt-3 grid gap-3 px-2 sm:grid-cols-2 sm:px-6">
              <CampaignCard className="w-full" />
              <TimelineCard className="w-full" />
            </div>
          </motion.div>
        </div>

        {/* Honest note about the mockups + technology labels */}
        <motion.div
          {...enter(0.36)}
          className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-7 sm:mt-28 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="text-ink-400 flex max-w-2xl items-start gap-2 text-[0.72rem] leading-relaxed">
            <Icon name="Info" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <span>
              The screens above are original concept designs built by Ezy Digital to demonstrate our
              design and front-end development work. They are not delivered client projects.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <span className="text-ink-500 mr-1 text-[0.65rem] font-bold tracking-[0.2em] uppercase">
              Built with
            </span>
            {heroTechLabels.map((label) => (
              <span
                key={label}
                className="text-ink-300 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.68rem] font-semibold"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

