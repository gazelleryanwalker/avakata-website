# SEO Meta & JSON-LD Templates

Use these snippets in Framer Site Settings → SEO or page-level "Custom Code → Head".

 
## Page Meta

- Home: Title/Description; OG/Twitter image 1200x630.
- About: Title/Description; OG image.
- Services: Title/Description; OG image.
- Projects: Title/Description; OG image.
- Contact: Title/Description; OG image.
- Blog: Title/Description; OG image.
- Blog Post: Title/Description from CMS; OG image from featured image.

 
## JSON-LD: Organization (Home)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Avakata Agency",
  "url": "https://avakata.agency",
  "logo": "https://avakata.agency/og-image.png",
  "sameAs": [
    "https://www.youtube.com/...",
    "https://x.com/...",
    "https://www.linkedin.com/company/..."
  ]
}
</script>
```

 
## JSON-LD: Service (Services)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI-Powered Web Development",
  "provider": {
    "@type": "Organization",
    "name": "Avakata Agency"
  },
  "areaServed": "Global"
}
</script>
```

 
## JSON-LD: LocalBusiness (Contact)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Avakata Agency",
  "url": "https://avakata.agency",
  "telephone": "+1-...",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
}
</script>
```

 
 
## JSON-LD: BlogPosting (Post Template)

Bind values to CMS fields.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{Title}}",
  "description": "{{Meta Description}}",
  "image": "{{Featured Image URL}}",
  "datePublished": "{{Publish Date}}",
  "author": {
    "@type": "Person",
    "name": "{{Author}}"
  },
  "mainEntityOfPage": "{{Canonical URL}}"
}
</script>
```

 
## Notes

- Keep images optimized; use `font-display: swap`.
- Verify `sitemap.xml` and robots are generated after publish.
