import { Link } from 'react-router-dom'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import Icon from './ui/Icon'
import {
  additionalServices,
  additionalServicesNote,
  formatINR,
  googleBusinessDisclaimer,
  maintenanceNote,
  seoDisclaimer,
} from '../data/pricing'
import { whatsappLink } from '../config/siteConfig'

function Price({ service }) {
  const isOnwards = service.priceSuffix === 'onwards'

  return (
    <div>
      <div className="flex items-baseline gap-1.5">
        {service.startingAt && !isOnwards ? (
          <span className="text-ink-400 text-[11px] font-semibold tracking-wide uppercase">
            Starting at
          </span>
        ) : null}
        <span className="text-lg font-extrabold text-ink-900">
          {formatINR(service.startingPrice)}
        </span>
      </div>
      <span className="text-ink-400 text-xs font-medium">
        {service.priceSuffix === 'per month' ? 'per month' : isOnwards ? 'onwards' : 'one-time'}
      </span>
    </div>
  )
}

function DesktopTable() {
  return (
    <div className="hidden overflow-x-auto md:block">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Additional digital services offered by Ezy Digital with starting prices
        </caption>
        <thead>
          <tr className="bg-ink-950">
            <th scope="col" className="text-ink-300 px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase">
              Service
            </th>
            <th scope="col" className="text-ink-300 px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase">
              Price
            </th>
            <th scope="col" className="text-ink-300 px-6 py-4 text-xs font-semibold tracking-[0.16em] uppercase">
              Notes
            </th>
            <th scope="col" className="text-ink-300 px-6 py-4 text-right text-xs font-semibold tracking-[0.16em] uppercase">
              Enquire
            </th>
          </tr>
        </thead>
        <tbody>
          {additionalServices.map((service, index) => (
            <tr key={service.id} className={index % 2 === 1 ? 'bg-ink-50/70' : 'bg-white'}>
              <th scope="row" className="border-t border-ink-100 px-6 py-4 text-sm font-bold text-ink-900">
                {service.name}
              </th>
              <td className="border-t border-ink-100 px-6 py-4">
                <Price service={service} />
              </td>
              <td className="text-ink-500 border-t border-ink-100 px-6 py-4 text-xs leading-relaxed">
                {service.note}
              </td>
              <td className="border-t border-ink-100 px-6 py-4 text-right">
                <Link
                  to={`/contact?service=${service.id}`}
                  className="text-brand-700 hover:bg-brand-50 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold"
                >
                  Request a Quote
                  <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MobileList() {
  return (
    <ul className="divide-y divide-ink-100 md:hidden">
      {additionalServices.map((service) => (
        <li key={service.id} className="bg-white p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-ink-900">{service.name}</h3>
            </div>
            <Price service={service} />
          </div>
          <p className="text-ink-500 mt-2 text-xs leading-relaxed">{service.note}</p>
          <Link
            to={`/contact?service=${service.id}`}
            className="text-brand-700 mt-3 inline-flex items-center gap-1 text-xs font-bold"
          >
            Request a Quote
            <Icon name="ArrowRight" className="h-3.5 w-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function AdditionalServices({ showHeading = true }) {
  return (
    <section
      id="additional-services"
      aria-labelledby="additional-services-heading"
      className="bg-white py-20 lg:py-28"
    >
      <div className="container-page">
        {showHeading ? (
          <SectionHeading
            eyebrow="Additional digital services"
            titleId="additional-services-heading"
            title="Design, content and support services, priced openly"
            description="Add-ons for businesses that need individual creatives, content, SEO groundwork or ongoing website care. Final prices depend on complexity and quantity."
            level={2}
          />
        ) : (
          <h2 id="additional-services-heading" className="sr-only">
            Additional digital services
          </h2>
        )}

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-ink-100 shadow-soft">
            <DesktopTable />
            <MobileList />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <p className="rounded-2xl border border-ink-100 bg-ink-50 p-5 text-xs leading-relaxed text-ink-600">
            <span className="mb-1 block font-bold text-ink-900">Video &amp; editing</span>
            {additionalServicesNote}
          </p>
          <p className="rounded-2xl border border-ink-100 bg-ink-50 p-5 text-xs leading-relaxed text-ink-600">
            <span className="mb-1 block font-bold text-ink-900">SEO &amp; Google Business</span>
            {seoDisclaimer} {googleBusinessDisclaimer}
          </p>
          <p className="rounded-2xl border border-ink-100 bg-ink-50 p-5 text-xs leading-relaxed text-ink-600">
            <span className="mb-1 block font-bold text-ink-900">Website maintenance</span>
            {maintenanceNote}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/contact" size="lg" iconRight="ArrowRight">
            Request a Quote
          </Button>
          <Button
            href={whatsappLink(
              'Hello Ezy Digital, I would like to know more about your additional digital services and prices.',
            )}
            external
            variant="outline"
            size="lg"
            icon="Sparkles"
          >
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

