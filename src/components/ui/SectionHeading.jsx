import Reveal from './Reveal'

/**
 * Shared section heading: small eyebrow label, one semantic heading and an
 * optional supporting paragraph. `level` keeps the heading hierarchy correct.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  level = 2,
  tone = 'light',
  className = '',
  titleId,
}) {
  const Heading = `h${level}`
  const isDark = tone === 'dark'

  return (
    <div
      className={[
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left',
        className,
      ].join(' ')}
    >
      {eyebrow ? (
        <Reveal>
          <p
            className={[
              'mb-3 text-xs font-semibold tracking-[0.22em] uppercase',
              isDark ? 'text-brand-400' : 'text-brand-600',
            ].join(' ')}
          >
            {eyebrow}
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <Heading
          id={titleId}
          className={[
            'text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]',
            isDark ? 'text-white' : 'text-ink-900',
          ].join(' ')}
        >
          {title}
        </Heading>
      </Reveal>

      {description ? (
        <Reveal delay={0.1}>
          <p
            className={[
              'mt-5 text-base leading-relaxed sm:text-lg',
              isDark ? 'text-ink-200/85' : 'text-ink-500',
            ].join(' ')}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
