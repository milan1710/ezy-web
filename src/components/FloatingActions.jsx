import FloatingCallButton from './FloatingCallButton'
import WhatsAppButton from './WhatsAppButton'

/**
 * Fixed action stack, visible on every page and every breakpoint.
 *
 * - Call button: MANDATORY, uses tel:+919512648085
 * - WhatsApp button: https://wa.me/919512648085 with a prefilled message
 *
 * Positioned above the bottom safe area on notched mobile devices and kept clear
 * of the primary content column on desktop.
 */
export default function FloatingActions() {
  return (
    <div
      className="fixed right-4 z-40 flex flex-col items-end gap-3 sm:right-6"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      <WhatsAppButton />
      <FloatingCallButton />
    </div>
  )
}
