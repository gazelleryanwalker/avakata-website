# BlogPosting JSON-LD Templates

Use these templates in Framer → Page Settings → Custom Code → Head for blog posts.

 
## Minimal BlogPosting

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{TITLE}}",
  "description": "{{META_DESCRIPTION}}",
  "author": {
    "@type": "Person",
    "name": "{{AUTHOR_NAME}}"
  },
  "datePublished": "{{PUBLISHED_ISO}}",
  "dateModified": "{{MODIFIED_ISO}}",
  "image": "{{HERO_IMAGE_URL}}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{CANONICAL_URL}}"
  }
}
</script>
```

 
## Extended BlogPosting (LocalBusiness + Organization context)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{TITLE}}",
  "description": "{{META_DESCRIPTION}}",
  "keywords": "{{KEYWORDS}}",
  "author": {
    "@type": "Person",
    "name": "{{AUTHOR_NAME}}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Avakata Agency",
    "url": "https://avakata.agency",
    "logo": {
      "@type": "ImageObject",
      "url": "{{LOGO_URL}}"
    }
  },
  "datePublished": "{{PUBLISHED_ISO}}",
  "dateModified": "{{MODIFIED_ISO}}",
  "image": "{{HERO_IMAGE_URL}}",
  "isPartOf": {
    "@type": "Blog",
    "name": "Avakata Blog",
    "url": "https://avakata.agency/blog"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{CANONICAL_URL}}"
  }
}
</script>
```

 
## How to fill placeholders

- `{{TITLE}}`: Post title
- `{{META_DESCRIPTION}}`: 150–160 chars summary
- `{{AUTHOR_NAME}}`: e.g., "Ryan Walker"
- `{{PUBLISHED_ISO}}`: ISO date, e.g., 2025-12-02T09:00:00-05:00
- `{{MODIFIED_ISO}}`: same format if updated
- `{{HERO_IMAGE_URL}}`: absolute URL to cover image
- `{{CANONICAL_URL}}`: final URL of the post
- `{{LOGO_URL}}`: site logo URL
- `{{KEYWORDS}}`: comma-separated entities/topics
