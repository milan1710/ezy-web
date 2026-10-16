import { siteConfig } from '../../config/siteConfig'

const LOGO_SRC = '/images/ezy-digital-logo.png'

/**
 * The official EzyDigital logo, imported from the project's images folder
 * (copied to /public/images so Vite serves it from the site root).
 *
 * The artwork has a white background, so on dark sections it is placed on a
 * white rounded plate rather than being recoloured - the logo asset itself is
 * never redrawn or substituted.
 */
export default function Logo({ variant = 'dark', className = '', size = 'md' }) {
  const heights = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
  }

  const onDark = variant === 'light'

  if (onDark) {
    return (
      <span
        className={[
          'inline-flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm',
          className,
        ].join(' ')}
      >
        <img
          src={LOGO_SRC}
          alt={`${siteConfig.brand.fullName} logo`}
          className={`${heights[size]} w-auto`}
          width="352"
          height="140"
          decoding="async"
        />
      </span>
    )
  }

  return (
    <img
      src={LOGO_SRC}
      alt={`${siteConfig.brand.fullName} logo`}
      className={[heights[size], 'w-auto', className].join(' ')}
      width="352"
      height="140"
      decoding="async"
    />
  )
}

export { LOGO_SRC }
