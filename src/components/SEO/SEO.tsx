import { useEffect } from 'react'

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  path?: string
  image?: string
  noindex?: boolean
  jsonLd?: JsonLd
}

const DEFAULT_SITE_URL = 'https://sintex.lk'
const DEFAULT_IMAGE_PATH = '/og-image.png'
const DEFAULT_KEYWORDS = [
  'cheque verification',
  'cheque validation',
  'cheque processing software',
  'banking OCR',
  'bilingual OCR',
  'AI cheque verification',
  'signature verification',
  'fraud detection banking',
  'Sri Lanka fintech',
  'banking workflow automation',
]

function upsertMeta(attribute: 'name' | 'property', value: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonical(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}

function upsertJsonLd(data?: JsonLd) {
  const existing = document.getElementById('seo-jsonld')
  if (!data) {
    if (existing) {
      existing.remove()
    }
    return
  }

  let script = existing as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = 'seo-jsonld'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

function SEO({ title, description, keywords, path, image, noindex = false, jsonLd }: SEOProps) {
  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) ?? DEFAULT_SITE_URL
    const normalizedBase = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl
    const normalizedPath = path ?? window.location.pathname
    const canonicalUrl = `${normalizedBase}${normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`}`

    const fullTitle = title.includes('SinTex') ? title : `${title} | SinTex AI`
    const imagePath = image ?? DEFAULT_IMAGE_PATH
    const imageUrl = imagePath.startsWith('http') ? imagePath : `${normalizedBase}${imagePath}`
    const mergedKeywords = Array.from(new Set([...DEFAULT_KEYWORDS, ...(keywords ?? [])]))

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('name', 'author', 'SinTex Technologies')

    upsertMeta('name', 'keywords', mergedKeywords.join(', '))

    upsertCanonical(canonicalUrl)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', 'SinTex AI')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', imageUrl)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)

    upsertJsonLd(jsonLd)
  }, [title, description, keywords, path, image, noindex, jsonLd])

  return null
}

export default SEO