import { Link } from 'react-router-dom'
import Icon from './Icon'

const base =
  'group/btn relative inline-flex select-none items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] transition-[transform,background-color,border-color,box-shadow,color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'

const variants = {
  primary:
    'bg-brand-600 text-white shadow-[0_14px_34px_-16px_rgba(229,57,53,0.85)] ring-1 ring-brand-700/40 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_20px_44px_-18px_rgba(229,57,53,0.9)] active:translate-y-0',
  dark: 'bg-ink-950 text-white ring-1 ring-white/10 hover:-translate-y-0.5 hover:bg-ink-800 active:translate-y-0',
  outline:
    'border border-ink-200 bg-white text-ink-900 hover:-translate-y-0.5 hover:border-ink-900 hover:bg-ink-50 active:translate-y-0',
  outlineLight:
    'border border-white/20 bg-white/[0.06] text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.12] active:translate-y-0',
  light:
    'bg-white text-ink-950 shadow-[0_14px_34px_-20px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 hover:bg-ink-100 active:translate-y-0',
  whatsapp:
    'bg-[#25D366] text-[#04361b] ring-1 ring-[#1faa52]/40 hover:-translate-y-0.5 hover:bg-[#1fbe5b] active:translate-y-0',
  ghost: 'text-ink-700 hover:bg-ink-100 hover:text-ink-950',
}

const sizes = {
  sm: 'px-4 py-2 text-[0.8125rem]',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-[0.9375rem]',
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
  ...rest
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
      {iconRight ? (
        <Icon
          name={iconRight}
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5"
        />
      ) : null}
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
        {...rest}
      >
        {content}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} {...rest}>
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
      {...rest}
    >
      {content}
    </button>
  )
}
