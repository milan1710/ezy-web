import { Link } from 'react-router-dom'
import Icon from './ui/Icon'

/**
 * Reusable card for growth objectives and buyer-type groups.
 */
export default function IndustryCard({ icon, title, text, items = [], to, linkLabel }) {
  return (
    <article className="focus-card">
      <span className="focus-card__icon">
        <Icon name={icon} size={20} />
      </span>
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
      {items.length ? (
        <ul className="field-chips">
          {items.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {to && linkLabel ? (
        <Link className="text-link" to={to}>
          {linkLabel} <Icon name="arrowRight" size={14} />
        </Link>
      ) : null}
    </article>
  )
}
