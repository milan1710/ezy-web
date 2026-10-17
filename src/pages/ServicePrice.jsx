import { useEffect } from 'react'
import {
  Building2,
  CreditCard,
  FileText,
  Globe,
  Image,
  Info,
  Layers,
  LayoutDashboard,
  LayoutTemplate,
  MapPin,
  Megaphone,
  Palette,
  PenTool,
  Rocket,
  Search,
  Server,
  Share2,
  ShoppingCart,
  Sparkles,
  Target,
  Video,
  Wrench,
} from 'lucide-react'
import '../styles/service-price.css'
import useSeo from '../hooks/useSeo'
import {
  additionalServiceGroups,
  metaPriceGroups,
  pricePageNote,
  pricePageTitle,
  websitePriceGroups,
} from '../data/servicePricePage'

const websiteIcons = {
  'basic-website': Rocket,
  'business-website': Building2,
  'professional-website': Sparkles,
  ecommerce: ShoppingCart,
  'custom-website': Server,
}

const metaIcons = {
  'meta-single-campaign': Target,
  'meta-multiple-campaigns': LayoutDashboard,
  'meta-social-management': Share2,
}

const additionalIcons = {
  'single-social-poster': Image,
  'ten-social-posters': Layers,
  'video-reel-editing': Video,
  'logo-design': PenTool,
  'banner-brochure': FileText,
  'visiting-card': CreditCard,
  'google-business-profile': MapPin,
  'website-content-writing': FileText,
  'landing-page-design': LayoutTemplate,
  'seo-optimization': Search,
  'website-maintenance': Wrench,
}

function PriceCard({ item, kind, icon: Icon }) {
  return (
    <article className="sp-card">
      <div className="sp-card__head">
        <span className="sp-card__icon" aria-hidden="true">
          <Icon />
        </span>
        <span className="sp-card__tag">{kind}</span>
      </div>

      <h3>{item.name}</h3>

      <p className="sp-card__price">
        {item.price}
        {item.priceSuffix ? <span className="sp-card__suffix">{item.priceSuffix}</span> : null}
      </p>

      <p className="sp-card__desc">{item.description}</p>
      <div className="sp-card__divider" aria-hidden="true" />

      <ul className="sp-features">
        {item.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  )
}

export default function ServicePrice() {
  useSeo({
    title: 'સર્વિસ અને પ્રાઇસ લિસ્ટ | Ezy Digital',
    description:
      'Ezy Digitalની વેબસાઇટ ડેવલપમેન્ટ, Meta Ads, સોશિયલ મીડિયા અને અન્ય ડિજિટલ સેવાઓની કિંમતો.',
    path: '/service-price',
  })

  useEffect(() => {
    const elements = document.querySelectorAll('.sp-reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sp-page" lang="gu">
      <header className="sp-header">
        <div className="sp-header__inner">
          <img
            className="sp-logo"
            src="/images/ezy-digital-logo.png"
            alt="Ezy Digital logo"
            width="352"
            height="140"
            decoding="async"
          />
          <div className="sp-title">
            <h1>{pricePageTitle}</h1>
          </div>
        </div>
      </header>

      <div className="sp-main">
        <div className="sp-shell">
          <section className="sp-section" aria-labelledby="website-pricing-heading">
            <div className="sp-section__head sp-reveal">
              <span className="sp-section__icon" aria-hidden="true">
                <Globe />
              </span>
              <div>
                <span className="sp-section__label">01 · Website</span>
                <h2 id="website-pricing-heading">વેબસાઇટ ડેવલપમેન્ટ પેકેજ</h2>
                <p>બિઝનેસની જરૂરિયાત મુજબ પસંદ કરી શકાય તેવા પ્રોફેશનલ વેબસાઇટ પેકેજ.</p>
              </div>
            </div>

            <div className="sp-grid sp-reveal">
              {websitePriceGroups.map((item) => (
                <PriceCard
                  key={item.id}
                  item={item}
                  kind="વેબસાઇટ"
                  icon={websiteIcons[item.id]}
                />
              ))}
            </div>
          </section>

          <section className="sp-section" aria-labelledby="meta-pricing-heading">
            <div className="sp-section__head sp-reveal">
              <span className="sp-section__icon" aria-hidden="true">
                <Megaphone />
              </span>
              <div>
                <span className="sp-section__label">02 · Meta Ads</span>
                <h2 id="meta-pricing-heading">Meta Ads સેવાઓ</h2>
                <p>Facebook અને Instagram જાહેરાત માટે કેમ્પેઇન સેટઅપ અને માસિક મેનેજમેન્ટ.</p>
              </div>
            </div>

            <div className="sp-grid sp-reveal">
              {metaPriceGroups.map((item) => (
                <PriceCard key={item.id} item={item} kind="Meta Ads" icon={metaIcons[item.id]} />
              ))}
            </div>
          </section>

          <section className="sp-section" aria-labelledby="additional-pricing-heading">
            <div className="sp-section__head sp-reveal">
              <span className="sp-section__icon" aria-hidden="true">
                <Palette />
              </span>
              <div>
                <span className="sp-section__label">03 · Additional</span>
                <h2 id="additional-pricing-heading">અન્ય ડિજિટલ સેવાઓ</h2>
                <p>ડિઝાઇન, કન્ટેન્ટ, SEO અને વેબસાઇટ મેન્ટેનન્સ સેવાઓની કિંમતો.</p>
              </div>
            </div>

            <ul
              className="sp-list sp-reveal"
              aria-label="અન્ય ડિજિટલ સેવાઓ અને કિંમતો"
            >
              <li className="sp-list__head" aria-hidden="true">
                <span>સેવા</span>
                <span>કિંમત</span>
              </li>
              {additionalServiceGroups.map((item) => {
                const Icon = additionalIcons[item.id] ?? Layers

                return (
                  <li className="sp-list__row" key={item.id}>
                    <span className="sp-list__service">
                      <span className="sp-list__icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="sp-list__name">{item.name}</span>
                    </span>
                    <span className="sp-list__price">{item.price}</span>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="sp-note sp-reveal" aria-label="નોંધ">
            <span className="sp-note__icon" aria-hidden="true">
              <Info />
            </span>
            <p>{pricePageNote}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

