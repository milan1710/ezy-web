import { Link } from 'react-router-dom'
import Icon from './Icon'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary:
    'bg-brand-600 text-white shadow-[0_16px_36px_-16px_rgba(220,31,44,0.7)] hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0',
  dark: 'bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-ink-200 bg-white text-ink-800 hover:border-ink-900 hover:bg-ink-50 hover:-translate-y-0.5 active:translate-y-0',
  outlineLight:
    'border border-white/25 bg-white/5 text-white hover:border-white/60 hover:bg-white/12 hover:-translate-y-0.5 active:translate-y-0',
  whatsapp:
    'bg-[#25D366] text-[#04361b] hover:bg-[#1fbe5b] hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-ink-700 hover:bg-ink-100 hover:text-ink-900',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

/**
 * Single button primitive used for every CTA on the site.
 * Renders an <a> for external / protocol links (tel:, WhatsApp, mailto:),
 * a react-router <Link> for internal routes and a <button> otherwise.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  external = false,
  target,
  rel,
  ariaLabel,
  disabled = false,
  fullWidth = false,
}) {
  const classes = [
    base,
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon ? <Icon name={icon} className="h-4 w-4 shrink-0" /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} className="h-4 w-4 shrink-0" /> : null}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target ?? (external ? '_blank' : undefined)}
        rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
      >
        {content}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {content}
    </button>
  )
}
