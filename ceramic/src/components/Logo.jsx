import { Link } from 'react-router-dom'
import ceramicSite from '../config/ceramicSite'

const LOGO_SRC = `${import.meta.env.BASE_URL}images/ezy-digital-logo.png`

/**
 * Official Ezy Digital logo, stored locally in /ceramic/images.
 * The artwork has a white background, so on dark surfaces it is placed on a
 * white plate instead of being recoloured or redrawn.
 */
export default function Logo({ onDark = false, className = '', height = 36 }) {
  const image = (
    <img
      src={LOGO_SRC}
      alt={`${ceramicSite.brand.name} logo`}
      width="930"
      height="386"
      style={{ height }}
      decoding="async"
    />
  )

  return (
    <Link to="/" className={`brand ${className}`.trim()} aria-label="Ezy Digital ceramic growth home">
      {onDark ? (
        <span style={{ display: 'inline-flex', background: '#fff', padding: '6px 9px', borderRadius: 8 }}>
          {image}
        </span>
      ) : (
        image
      )}
    </Link>
  )
}
