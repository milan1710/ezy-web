import { siteConfig, whatsappLink } from '../config/siteConfig'

/**
 * Fixed WhatsApp button, paired with the mandatory call button.
 * The prefilled message is URL-encoded by `whatsappLink`.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(siteConfig.whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EzyDigital on WhatsApp"
      title="Chat on WhatsApp"
      className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] relative inline-flex items-center"
    >
      <span className="ring-[#25D366]/40 relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#04361b] shadow-[0_16px_36px_-16px_rgba(37,211,102,0.85)] ring-1 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        {/* Official WhatsApp glyph */}
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.297.347-.495.116-.198.058-.371-.029-.52-.086-.148-.66-1.59-.905-2.178-.236-.57-.475-.49-.653-.5l-.558-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        <span className="bg-ink-950 pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
          Chat on WhatsApp
        </span>
      </span>
    </a>
  )
}
