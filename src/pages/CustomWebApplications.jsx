import PageHeader from '../components/PageHeader'
import PackageSpotlight from '../components/PackageSpotlight'
import PricingConditions from '../components/PricingConditions'
import Process from '../components/Process'
import FinalCTA from '../components/FinalCTA'
import Icon from '../components/ui/Icon'
import useSeo from '../hooks/useSeo'

const examples = [
  'Customer portals and self-service accounts',
  'Enquiry, lead and customer management panels',
  'Booking and appointment workflows',
  'Internal operations and reporting dashboards',
  'Supplier, inventory or order tracking systems',
  'Custom API integrations with existing tools',
]

export default function CustomWebApplications() {
  useSeo({
    title: 'Custom Website & Web Application Development | Ezy Digital',
    description:
      'Custom website and web application development from ₹25,000 with admin panel, database integration, customer management and API integration. Scope confirmed by quotation.',
    path: '/custom-web-applications',
  })

  return (
    <>
      <PageHeader
        eyebrow="Custom development"
        title="Custom websites and web applications built around your workflow"
        description="When a standard website cannot handle the process, we build a scoped application with an admin panel, database and the integrations your team needs."
        breadcrumb={[
          { label: 'Website Development', to: '/website-development' },
          { label: 'Custom Web Applications' },
        ]}
        quoteService="custom-website"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <PackageSpotlight id="custom-website" />
        </div>
      </section>

      <section className="bg-ink-50 py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
              What we can build
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
              Application work is quoted from a written feature scope
            </h2>
            <p className="text-ink-500 mt-4 text-sm leading-relaxed sm:text-base">
              The ₹25,000 starting price covers a limited, clearly scoped build. A larger system with
              multiple user roles, complex workflows or extensive integrations will be quoted
              separately after a requirements discussion.
            </p>
            <p className="text-ink-500 mt-3 text-sm leading-relaxed sm:text-base">
              You will know what is included, what is excluded and what the timeline looks like
              before development begins.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {examples.map((example) => (
              <li
                key={example}
                className="flex items-start gap-2.5 rounded-xl border border-ink-100 bg-white p-4 text-sm text-ink-600"
              >
                <Icon name="CheckCircle2" className="text-brand-600 mt-0.5 h-4 w-4 shrink-0" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <PricingConditions id="custom-pricing-conditions" />
      <FinalCTA />
    </>
  )
}
