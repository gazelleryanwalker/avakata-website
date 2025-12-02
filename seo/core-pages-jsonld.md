# Core Pages JSON-LD

Paste into Framer → Page Settings → Custom Code → Head for each page.

 
## Organization (site-wide)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Avakata Agency",
  "url": "https://avakata.agency",
  "logo": "{{LOGO_URL}}",
  "sameAs": [
    "{{FACEBOOK_URL}}",
    "{{INSTAGRAM_URL}}",
    "{{LINKEDIN_URL}}",
    "{{X_URL}}"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-888-330-9410",
    "contactType": "Customer Service",
    "areaServed": "US"
  }
}
</script>
```

 
## LocalBusiness (home or contact)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Avakata Agency",
  "url": "https://avakata.agency",
  "telephone": "+1-888-330-9410",
  "image": "{{HERO_IMAGE_URL}}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wellington",
    "addressRegion": "FL",
    "postalCode": "33467",
    "addressCountry": "US"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "{{FACEBOOK_URL}}",
    "{{INSTAGRAM_URL}}",
    "{{LINKEDIN_URL}}",
    "{{X_URL}}"
  ]
}
</script>
```

 
## Service (use on individual service pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{{SERVICE_NAME}}",
  "description": "{{META_DESCRIPTION}}",
  "serviceType": "{{SERVICE_TYPE}}",
  "provider": {
    "@type": "Organization",
    "name": "Avakata Agency",
    "url": "https://avakata.agency"
  },
  "areaServed": "United States",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{CANONICAL_URL}}"
  }
}
</script>
```

 
## WebSite + SearchAction (site-wide)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Avakata Agency",
  "url": "https://avakata.agency",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://avakata.agency/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```
