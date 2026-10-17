import PageHeader from '../components/PageHeader'
import EnquiryForm from '../components/EnquiryForm'
import Contact from '../components/Contact'
import useSeo from '../hooks/useSeo'
import { siteConfig, whatsappLink } from '../config/siteConfig'

export default function ContactPage() {
  useSeo({
    title: 'Contact Ezy Digital | Get a Website or Meta Ads Quote',
    description:
      'Contact Ezy Digital for website development, e-commerce, custom web applications and Meta Ads management. Call 9512648085 or send an enquiry on WhatsApp.',
    path: '/contact',
  })

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your project"
        description="Call, message on WhatsApp or send the enquiry form. You speak directly with Milan Soni at Ezy Digital - no sales team or call centre in between."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="bg-ink-50 py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <EnquiryForm />

          <div className="flex flex-col gap-5">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-7">
              <h2 className="text-lg font-bold text-ink-900">Prefer to talk directly?</h2>
              <p className="text-ink-500 mt-2 text-sm leading-relaxed">
                Call or WhatsApp and describe what you need. A short conversation is usually enough
                to recommend a package and a realistic budget range.
              </p>
              <dl className="mt-5 flex flex-col gap-4 text-sm">
                <div>
                  <dt className="text-ink-400 text-xs font-semibold tracking-wide uppercase">Phone</dt>
                  <dd className="text-ink-900 mt-1 font-bold">
                    <a href={siteConfig.contact.telHref} className="hover:text-brand-700">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-400 text-xs font-semibold tracking-wide uppercase">Website</dt>
                  <dd className="text-ink-900 mt-1 font-bold">
                    <a href="https://ezydigital.in/" className="hover:text-brand-700">
                      https://ezydigital.in/
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-400 text-xs font-semibold tracking-wide uppercase">
                    WhatsApp
                  </dt>
                  <dd className="text-ink-900 mt-1 font-bold">
                    <a
                      href={whatsappLink(siteConfig.whatsappMessages.general)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-700"
                    >
                      Message on WhatsApp
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-ink-100 bg-white p-6 text-sm leading-relaxed text-ink-600 sm:p-7">
              <h2 className="text-lg font-bold text-ink-900">What happens next</h2>
              <ol className="mt-4 flex flex-col gap-3">
                <li>
                  <span className="font-semibold text-ink-900">1. We discuss the requirement.</span>{' '}
                  Pages, features, content and budget range.
                </li>
                <li>
                  <span className="font-semibold text-ink-900">2. You receive a written scope.</span>{' '}
                  Deliverables, exclusions, timeline and price.
                </li>
                <li>
                  <span className="font-semibold text-ink-900">3. Work starts after approval.</span>{' '}
                  No payment is requested before the scope is agreed.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
