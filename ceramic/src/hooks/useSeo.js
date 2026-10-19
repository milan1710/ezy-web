import { useEffect } from 'react'
import { canonicalUrl, ceramicSite } from '../config/ceramicSite'

/**
 * Lightweight head management for the standalone ceramic site.
 * Sets title, description, canonical, Open Graph and optional JSON-LD.
 */
function upsertMeta(attribute, key, content) {
  if (!content) return
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export default function useSeo({ title, description, path = '/', image, jsonLd, noindex = false }) {
  useEffect(() => {
    const url = canonicalUrl(path)
    const rawImage = image || '/ceramic/images/hero-marble-interior.jpg'
    const ogImage = rawImage.startsWith('http') ? rawImage : `${ceramicSite.domain}${rawImage}`

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    upsertLink('canonical', url)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', 'Ezy Digital Marketing Agency')
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:image:alt', `${title} — illustrative ceramic industry image`)
    upsertMeta('property', 'og:locale', 'en_IN')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)
    upsertMeta('name', 'twitter:image:alt', `${title} — illustrative ceramic industry image`)

    let script
    if (jsonLd) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.pageSchema = 'true'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      if (script && script.parentNode) script.parentNode.removeChild(script)
    }
  }, [title, description, path, image, jsonLd, noindex])
}
