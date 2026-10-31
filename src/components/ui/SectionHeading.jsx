import Reveal from './Reveal'

/**
 * Shared section heading: eyebrow label, one semantic heading, optional
 * supporting paragraph and optional trailing actions. `level` keeps the heading
 * hierarchy correct on every page.
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
  actions = null,
  size = 'md',
}) {
  const Heading = `h${level}`
  const isDark = tone === 'dark'
  const centered = align === 'center'

  const titleSize =
    size === 'lg'
      ? 'text-[2.1rem] leading-[1.08] sm:text-[2.7rem] lg:text-[3.1rem]'
      : 'text-[1.85rem] leading-[1.12] sm:text-[2.35rem] lg:text-[2.7rem]'

  return (
    <div
      className={[
        centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left',
        className,
      ].join(' ')}
    >
      {eyebrow ? (
        <Reveal>
          <p
            className={[
              'inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.22em] uppercase',
              isDark ? 'text-brand-400' : 'text-brand-600',
            ].join(' ')}
          >
            <span
              className={[
                'h-1.5 w-1.5 rounded-full',
                isDark ? 'bg-brand-400' : 'bg-brand-600',
              ].join(' ')}
              aria-hidden="true"
            />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <Heading
          id={titleId}
          className={[
            'font-display mt-4 font-extrabold tracking-[-0.03em]',
            titleSize,
            isDark ? 'text-white' : 'text-ink-950',
          ].join(' ')}
        >
          {title}
        </Heading>
      </Reveal>

      {description ? (
        <Reveal delay={0.1}>
          <p
            className={[
              'mt-5 text-[0.975rem] leading-relaxed sm:text-lg',
              centered ? 'mx-auto' : '',
              isDark ? 'text-ink-300' : 'text-ink-500',
            ].join(' ')}
          >
            {description}
          </p>
        </Reveal>
      ) : null}

      {actions ? (
        <Reveal delay={0.12}>
          <div
            className={[
              'mt-7 flex flex-wrap gap-3',
              centered ? 'justify-center' : 'justify-start',
            ].join(' ')}
          >
            {actions}
          </div>
        </Reveal>
      ) : null}
    </div>
  )
}
