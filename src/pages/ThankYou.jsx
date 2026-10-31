import { Link } from 'react-router-dom'
import Logo from '../components/common/Logo'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import useSeo from '../hooks/useSeo'
import { siteConfig } from '../config/siteConfig'

const nextSteps = [
  {
    title: 'We review your requirement',
    text: 'The details you submitted reach our CRM with the service and city you selected.',
  },
  {
    title: 'We call you back',
    text: `Our team will contact you on the mobile number you provided${
      siteConfig.contact.phoneInternational ? ` (from ${siteConfig.contact.phoneInternational})` : ''
    }.`,
  },
  {
    title: 'You get a written scope',
    text: 'If your requirement is a fit, we share deliverables, timeline and a clear price before any work starts.',
  },
]

/**
 * Confirmation page shown after the CRM confirms a lead.
 *
 * This page never fires the Meta `Lead` event: the event belongs to the form
 * submission itself (`components/LeadForm.jsx`) and must not be triggered by
 * simply visiting the URL.
 */
export default function ThankYou() {
  useSeo({
    title: 'Thank You for Contacting Ezy Digital',
    description:
      'Your inquiry has been submitted successfully. Ezy Digital will contact you soon on the number you provided.',
    path: '/thank-you',
    noindex: true,
  })

  return (
    <section className="bg-ink-950 relative isolate overflow-hidden py-20 lg:py-28">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="bg-brand-600/25 pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Logo variant="light" size="md" />
          </div>

          <span className="mt-9 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">
            <Icon name="CheckCircle2" className="h-8 w-8" />
          </span>

          <h1 className="font-display mt-6 text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-white sm:text-[2.9rem]">
            Thank You for Contacting Ezy Digital!
          </h1>
          <p className="text-ink-200/85 mx-auto mt-5 max-w-xl text-[0.975rem] leading-relaxed sm:text-lg">
            Your inquiry has been submitted successfully. Our team will contact you soon.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button
              href={siteConfig.contact.telHref}
              size="lg"
              icon="Phone"
              ariaLabel={`Call Ezy Digital on ${siteConfig.contact.phoneInternational}`}
            >
              Call Now {siteConfig.contact.phoneInternational}
            </Button>
            <Button to="/" variant="outlineLight" size="lg" iconRight="ArrowRight">
              Back to ezydigital.in
            </Button>
          </div>

          <p className="text-ink-300 mt-6 text-sm">
            Need to add something?{' '}
            <a
              href={siteConfig.contact.telHref}
              className="font-semibold text-white underline underline-offset-2"
            >
              Call {siteConfig.contact.phoneInternational}
            </a>{' '}
            or{' '}
            <Link
              to="/contact"
              className="font-semibold text-white underline underline-offset-2"
            >
              send another enquiry
            </Link>
            .
          </p>
        </div>

        <div className="border-white/10 bg-white/[0.04] mx-auto mt-12 max-w-2xl rounded-3xl border p-6 backdrop-blur-sm sm:p-8">
          <h2 className="text-sm font-bold tracking-[0.14em] text-white uppercase">
            What happens next
          </h2>
          <ol className="mt-5 flex flex-col gap-4">
            {nextSteps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-3.5">
                <span className="bg-brand-600/20 text-brand-300 mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="text-ink-300 mt-1 text-sm leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
