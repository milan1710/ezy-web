import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import demoProducts, { demoCategories } from '../data/demoProducts'
import Icon from './ui/Icon'

function inquiryLink(product, interest) {
  const params = new URLSearchParams({
    product: product.category,
    interest,
    item: product.name,
  })
  return `/contact?${params.toString()}`
}

/**
 * Filterable, illustrative ceramic catalogue. Used on the homepage, the ceramic
 * website page and the full concept demo. Products are sample data only.
 */
export default function ProductCatalogue({
  products = demoProducts,
  categories = demoCategories,
  showFilters = true,
  label = 'Concept Demo — Illustrative Products and Layout',
  limit,
}) {
  const [active, setActive] = useState('All')

  const visible = useMemo(() => {
    const filtered = active === 'All' ? products : products.filter((item) => item.category === active)
    return typeof limit === 'number' ? filtered.slice(0, limit) : filtered
  }, [active, products, limit])

  return (
    <div>
      <div className="catalogue__head">
        <span className="demo-label">
          <Icon name="info" size={13} /> {label}
        </span>
      </div>

      {showFilters ? (
        <div className="catalogue__filters" role="group" aria-label="Filter sample products by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn${active === category ? ' is-active' : ''}`}
              aria-pressed={active === category}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className="product-grid">
        {visible.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-card__media">
              <img
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                loading="lazy"
                decoding="async"
              />
              <span className="product-card__category">{product.category}</span>
            </div>
            <div className="product-card__body">
              <h3>{product.name}</h3>
              <p className="product-card__detail">{product.detail}</p>
              <p className="product-card__finish">{product.finish}</p>
              <div className="product-card__actions">
                <Link className="btn btn--outline btn--sm" to={inquiryLink(product, 'product-details')}>
                  Request Details
                </Link>
                <Link className="btn btn--dark btn--sm" to={inquiryLink(product, 'bulk-inquiry')}>
                  Bulk Inquiry
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="catalogue__foot">
        <p className="small muted">
          Illustrative products and layout only. Product imagery is representative — no client
          catalogue, prices or technical specifications are shown.
        </p>
        <Link className="btn btn--outline btn--sm" to="/ceramic-demo">
          Open the full ceramic demo <Icon name="arrowRight" size={14} />
        </Link>
      </div>
    </div>
  )
}
