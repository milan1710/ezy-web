import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import useSeo from '../hooks/useSeo'
import { siteConfig } from '../config/siteConfig'

export default function NotFound() {
  useSeo({
    title: 'Page not found | Ezy Digital',
    description:
      'This page could not be found. Return to Ezy Digital for website development, e-commerce and Meta Ads management services.',
    path: '/404',
    noindex: true,
  })

  return (
    <section className="bg-ink-950 relative isolate overflow-hidden pt-32 pb-24 lg:pt-40">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative text-center">
        <p className="text-brand-400 text-sm font-bold tracking-[0.24em] uppercase">Error 404</p>
        <h1 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
          This page could not be found
        </h1>
        <p className="text-ink-300 mx-auto mt-5 max-w-xl text-base leading-relaxed">
          The link may be outdated or mistyped. You can return to the homepage, or contact
          {' '}{siteConfig.brand.owner} directly to discuss your website project.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg" iconRight="ArrowRight">
            Back to Home
          </Button>
          <Button href={siteConfig.contact.telHref} variant="outlineLight" size="lg" icon="Phone">
            Call {siteConfig.contact.phoneDisplay}
          </Button>
        </div>

        <p className="text-ink-400 mt-10 text-sm">
          Looking for something specific?{' '}
          <Link
            to="/website-development/pricing"
            className="font-semibold text-white underline underline-offset-4"
          >
            View pricing
          </Link>{' '}
          or{' '}
          <Link
            to="/website-development"
            className="font-semibold text-white underline underline-offset-4"
          >
            browse services
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
