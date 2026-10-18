import { Link } from 'react-router-dom'
import Icon from './ui/Icon'
import Breadcrumbs from './Breadcrumbs'

/**
 * Dark editorial hero used on every inner page.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  breadcrumbs = [],
  actions,
  meta = [],
  stamp,
}) {
  return (
    <section className="page-hero">
      {image ? (
        <img
          className="page-hero__bg"
          src={image}
          alt={imageAlt || ''}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      ) : null}
      <div className={`container page-hero__inner${image ? '' : ' page-hero__inner--solo'}`}>
        <div className="page-hero__content">
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="page-hero__title">{title}</h1>
          {lead ? <p className="page-hero__lead">{lead}</p> : null}
          {actions ? <div className="page-hero__actions">{actions}</div> : null}
          {meta.length ? (
            <div className="page-hero__meta">
              {meta.map((item) => (
                <span className="tag tag--dark" key={item}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {image ? (
          <div className="page-hero__media" aria-hidden="true">
            <div className="image-frame">
              <img src={image} alt="" loading="eager" decoding="async" />
            </div>
            {stamp ? (
              <div className="page-hero__stamp">
                <span>Ezy Digital</span>
                {stamp}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function PageLink({ to, children, outline = false }) {
  return (
    <Link className={`btn${outline ? ' btn--outline-light' : ''}`} to={to}>
      {children} <Icon name="arrowRight" size={16} />
    </Link>
  )
}
