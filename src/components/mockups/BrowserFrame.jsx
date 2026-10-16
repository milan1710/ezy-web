import { Lock, RotateCw } from 'lucide-react'

/**
 * Realistic browser window chrome.
 *
 * The viewport sets up a CSS container so the mockup inside can size its text
 * and spacing in `cqw` units and stay perfectly proportional at any width -
 * from a small mobile card to a large desktop preview.
 */
export default function BrowserFrame({
  url = 'ezydigital.example',
  children,
  className = '',
  tone = 'light',
}) {
  const isDark = tone === 'dark'

  return (
    <div
      className={[
        'overflow-hidden rounded-2xl border shadow-lift',
        isDark ? 'border-white/12 bg-ink-900' : 'border-ink-900/10 bg-white',
        className,
      ].join(' ')}
    >
      {/* Title bar */}
      <div
        className={[
          'flex items-center gap-2 border-b px-3 py-2 sm:px-4',
          isDark ? 'border-white/10 bg-ink-950' : 'border-ink-100 bg-ink-50',
        ].join(' ')}
      >
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>

        <div
          className={[
            'ml-1 hidden min-w-0 flex-1 items-center gap-1.5 rounded-md px-2 py-1 text-[11px] sm:flex',
            isDark ? 'bg-white/5 text-ink-300' : 'bg-white text-ink-400 ring-1 ring-ink-100',
          ].join(' ')}
        >
          <Lock className="h-3 w-3 shrink-0" aria-hidden="true" />
          <span className="truncate">{url}</span>
        </div>

        <RotateCw
          className={['ml-auto h-3.5 w-3.5 shrink-0', isDark ? 'text-ink-500' : 'text-ink-300'].join(
            ' ',
          )}
          aria-hidden="true"
        />
      </div>

      {/* Viewport - container for cqw-based scaling */}
      <div className="@container relative aspect-[16/10] w-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}
