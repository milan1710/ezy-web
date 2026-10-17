import { motion, useReducedMotion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrowserFrame from './mockups/BrowserFrame'
import MockupApp from './mockups/MockupApp'
import Button from './ui/Button'
import Icon from './ui/Icon'
import Logo from './common/Logo'
import { siteConfig, whatsappLink } from '../config/siteConfig'
import { heroTechLabels } from '../data/techStack'

/** Small phone device mockup, drawn with CSS only. */
function PhoneMock({ className = '' }) {
  return (
    <div
      className={[
        'overflow-hidden rounded-[1.6rem] border border-white/15 bg-ink-950 shadow-2xl',
        className,
      ].join(' ')}
    >
      <div className="flex justify-center py-1.5">
        <span className="h-1 w-10 rounded-full bg-white/25" />
      </div>
      <div className="relative aspect-[9/17] overflow-hidden rounded-[1.2rem] bg-white">
        <div className="@container absolute inset-0">
          <MockupApp variant="business" />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-ink-950 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background treatment */}
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-brand-600/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-azure-500/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Copy */}
          <div>
            <motion.div {...enter(0)} className="flex flex-wrap items-center gap-4">
              <Logo variant="light" size="sm" />
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/85">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                Website Development · Meta Ads · Gujarat
              </p>
            </motion.div>

            <motion.h1
              id="hero-heading"
              {...enter(0.08)}
              className="mt-6 text-4xl leading-[1.12] font-extrabold text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Grow Your Business{' '}
              <span className="text-gradient-brand">Digitally.</span>
            </motion.h1>

            <motion.p
              {...enter(0.16)}
              className="text-ink-200/90 mt-6 max-w-[36rem] text-base leading-relaxed sm:text-lg"
            >
              Professional websites, e-commerce solutions and Facebook &amp; Instagram Ads management
              for your business.
            </motion.p>

            <motion.p {...enter(0.2)} className="text-ink-400 mt-3 max-w-[36rem] text-sm leading-relaxed">
              Custom web applications and Meta Ads management for businesses across Gujarat - with
              clear starting prices and a written scope.
            </motion.p>

            <motion.div {...enter(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/contact" size="lg" iconRight="ArrowRight">
                Get a Quote
              </Button>
              <Button href={siteConfig.contact.telHref} variant="outlineLight" size="lg" icon="Phone">
                Call Now
              </Button>
            </motion.div>

            <motion.ul {...enter(0.28)} className="mt-6 flex flex-wrap gap-2">
              {['Website Development', 'E-commerce', 'Meta Ads', 'Social Media'].map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75"
                >
                  {label}
                </li>
              ))}
            </motion.ul>

            <motion.div {...enter(0.3)}>
              <Link
                to="/portfolio"
                className="text-ink-300 hover:text-brand-300 mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              >
                Explore our concept work
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Direct contact options */}
            <motion.div
              {...enter(0.32)}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <a
                href={siteConfig.contact.telHref}
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <span className="bg-brand-600 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-105">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-left">
                  <span className="block text-[11px] font-semibold tracking-[0.16em] text-ink-400 uppercase">
                    Call directly
                  </span>
                  <span className="block text-base font-bold text-white">
                    {siteConfig.contact.phoneInternational}
                  </span>
                </span>
              </a>

              <a
                href={whatsappLink(siteConfig.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70"
              >
                Or message on WhatsApp
              </a>
            </motion.div>

            <motion.p
              {...enter(0.36)}
              className="text-ink-400 mt-5 flex items-center gap-2 text-xs leading-relaxed"
            >
              <Icon name="MessagesSquare" className="h-4 w-4 shrink-0 text-brand-400" />
              You speak directly to Milan Soni - there is no sales team or call centre in between.
            </motion.p>

          </div>

          {/* Visuals */}
          <motion.div {...enter(0.28)} className="relative">
            {/* Primary browser window */}
            <div className="relative z-20">
              <BrowserFrame url="ezydigital.in/dashboard" tone="light" className="ring-1 ring-white/10">
                <MockupApp variant="dashboard" />
              </BrowserFrame>
            </div>

            {/* Overlapping storefront window */}
            <div className="animate-float absolute -bottom-12 -left-6 z-30 hidden w-[54%] sm:block lg:-left-14 lg:w-[52%]">
              <BrowserFrame
                url="kettle-and-co.in"
                className="ring-4 ring-ink-950/80 shadow-2xl"
              >
                <MockupApp variant="ecommerce" />
              </BrowserFrame>
            </div>

            {/* Phone device mockup */}
            <div className="absolute -right-3 bottom-6 z-30 hidden w-[26%] max-w-[128px] lg:block">
              <PhoneMock className="animate-float [animation-delay:-2s]" />
            </div>

            {/* Floating tech chips */}
            <span className="bg-ink-900/90 absolute -top-5 right-6 z-40 hidden rounded-xl border border-white/12 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur sm:inline-flex">
              React + Vite
            </span>
            <span className="bg-ink-900/90 absolute top-1/3 -left-4 z-40 hidden rounded-xl border border-white/12 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur xl:inline-flex">
              REST API
            </span>
          </motion.div>

        </div>

        {/* Honest note about the mockups + technology labels */}
        <motion.p
          {...enter(0.4)}
          className="text-ink-400 relative mt-10 flex items-start gap-2 text-xs leading-relaxed sm:mt-24"
        >
          <Icon name="Info" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            The screens above are original concept designs built by Ezy Digital to demonstrate our
            design and front-end development work. They are not delivered client projects.
          </span>
        </motion.p>

        <motion.ul
          {...enter(0.44)}
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-6"
        >
          <li className="mr-2 text-xs font-semibold tracking-[0.2em] text-ink-400 uppercase">
            Built with
          </li>
          {heroTechLabels.map((label) => (
            <li
              key={label}
              className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
            >
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
