import { useEffect } from 'react'
import { canonicalUrl, siteConfig } from '../config/siteConfig'

/**
 * Lightweight head management without pulling in an extra dependency.
 * Sets the document title, description, canonical URL and social preview tags.
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

/**
 * @param {object} options
 * @param {string} options.title           Page <title>
 * @param {string} options.description     Meta description
 * @param {string} [options.path]          Route path used for the canonical URL
 * @param {object} [options.jsonLd]        Optional structured data object for the page
 * @param {boolean} [options.noindex]      Keep a page out of search results
 */
export default function useSeo({ title, description, path = '/', jsonLd, noindex = false }) {
  useEffect(() => {
    const url = canonicalUrl(path)

    document.title = title
    upsertMeta('name', 'description', description)
    upsertLink('canonical', url)
    upsertMeta(
      'name',
      'robots',
      noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    )

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', siteConfig.brand.fullName)
    upsertMeta('property', 'og:image', `${siteConfig.domain}/images/ezy-digital-logo.png`)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

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
  }, [title, description, path, jsonLd, noindex])
}
