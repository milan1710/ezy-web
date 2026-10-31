import PageHeader from '../components/PageHeader'
import PackageSpotlight from '../components/PackageSpotlight'
import PricingConditions from '../components/PricingConditions'
import FinalCTA from '../components/FinalCTA'
import Icon from '../components/ui/Icon'
import useSeo from '../hooks/useSeo'

const capabilities = [
  {
    icon: 'ShoppingCart',
    title: 'Product catalogue',
    text: 'Products organised into categories with clear product detail pages so customers can compare and buy without confusion.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Cart and checkout',
    text: 'A straightforward cart and checkout flow designed for phone users first, with the information customers expect before paying.',
  },
  {
    icon: 'Plug',
    title: 'Payment gateway',
    text: 'Payment gateway integration where it is technically and commercially feasible. Gateway charges are billed by the provider, not included in the package.',
  },
  {
    icon: 'Server',
    title: 'Order management',
    text: 'Order records and a basic admin view so you can see what has been ordered and follow up on fulfilment.',
  },
]

export default function EcommerceWebsiteDevelopment() {
  useSeo({
    title: 'E-commerce Website Development in Gujarat | Ezy Digital',
    description:
      'E-commerce website development from ₹19,999 with product catalogue, cart, checkout, payment gateway and order management. Payment gateway and third-party fees are additional.',
    path: '/ecommerce-website-development',
  })

  return (
    <>
      <PageHeader
        eyebrow="E-commerce website development"
        title="Sell your products online with a store built for mobile shoppers"
        description="A product catalogue, cart, checkout and order management in one focused online store. Starting at ₹19,999, with the final scope agreed in writing."
        breadcrumb={[
          { label: 'Website Development', to: '/website-development' },
          { label: 'E-commerce' },
        ]}
        quoteService="ecommerce"
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <PackageSpotlight id="ecommerce" />
        </div>
      </section>

      <section className="bg-ink-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-brand-600 text-xs font-semibold tracking-[0.22em] uppercase">
              What the store includes
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
              Built around the way customers actually buy
            </h2>
            <p className="text-ink-500 mt-4 text-base leading-relaxed">
              The exact feature set depends on your product count, catalogue structure and the
              payment provider you choose. These are the core areas covered by the starting scope.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-ink-100 bg-white p-6">
                <span className="bg-brand-50 text-brand-600 inline-flex h-11 w-11 items-center justify-center rounded-xl">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink-900">{item.title}</h3>
                <p className="text-ink-500 mt-2 text-sm leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <h3 className="text-base font-bold text-amber-900">Costs outside the website package</h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-900/90">
              Payment gateway charges, third-party subscriptions, hosting, domain registration,
              product photography and other external service fees may be additional. Product
              content and images are provided or approved by the client.
            </p>
          </div>
        </div>
      </section>

      <PricingConditions id="ecommerce-pricing-conditions" />
      <FinalCTA />
    </>
  )
}
