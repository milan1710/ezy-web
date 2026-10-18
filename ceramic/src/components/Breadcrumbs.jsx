import { Link } from 'react-router-dom'
import Icon from './ui/Icon'

export default function Breadcrumbs({ items = [], light = false }) {
  return (
    <nav className={`breadcrumbs${light ? ' breadcrumbs--light' : ''}`} aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          <Icon name="chevronRight" size={12} aria-hidden="true" />
          {item.to && index < items.length - 1 ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
