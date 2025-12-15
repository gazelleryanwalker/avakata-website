# Page-Specific SEO Meta & JSON-LD

Ready-to-paste snippets for each page in Framer (Site Settings → SEO or Custom Code → Head).

---

## Home Page `/`

### Meta Tags
```html
<title>Avakata Agency | AI-Powered Revenue Operations & Marketing Automation</title>
<meta name="description" content="Autonomous AI agents that optimize SEO, PPC, and CRO 24/7. Increase ROAS by 400% with self-healing marketing infrastructure powered by Avakata.">
<meta property="og:title" content="Avakata Agency | AI-Powered Revenue Operations">
<meta property="og:description" content="Autonomous AI agents that optimize SEO, PPC, and CRO 24/7.">
<meta property="og:image" content="https://avakata.agency/og-home.png">
<meta property="og:url" content="https://avakata.agency/">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Avakata Agency | AI-Powered Revenue Operations">
<meta name="twitter:description" content="Autonomous AI agents that optimize SEO, PPC, and CRO 24/7.">
<meta name="twitter:image" content="https://avakata.agency/og-home.png">
```

### JSON-LD: Organization
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Avakata Agency",
  "url": "https://avakata.agency",
  "logo": "https://avakata.agency/logo.svg",
  "description": "Autonomous AI agents for marketing automation, SEO, PPC, and CRO optimization.",
  "sameAs": [
    "https://www.youtube.com/@avakata",
    "https://x.com/avakata",
    "https://www.linkedin.com/company/avakata"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "url": "https://avakata.agency/get-a-quote"
  }
}
</script>
```

---

## About Page `/join-our-team`

### Meta Tags
```html
<title>About Avakata | Ryan Walker & AI-Powered Revenue Ops</title>
<meta name="description" content="Founded by Ryan Walker, Avakata builds autonomous AI agents that revolutionize marketing operations. Learn our mission, values, and vision for AI-powered growth.">
<meta property="og:title" content="About Avakata | Ryan Walker & AI-Powered Revenue Ops">
<meta property="og:description" content="Founded by Ryan Walker, Avakata builds autonomous AI agents that revolutionize marketing.">
<meta property="og:image" content="https://avakata.agency/og-about.png">
<meta property="og:url" content="https://avakata.agency/join-our-team">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="About Avakata | Ryan Walker">
<meta name="twitter:description" content="Founded by Ryan Walker, Avakata builds autonomous AI agents.">
<meta name="twitter:image" content="https://avakata.agency/og-about.png">
```

---

## Services Page `/landing`

### Meta Tags
```html
<title>AI Marketing Services | SEO, PPC & CRO Automation | Avakata</title>
<meta name="description" content="Autonomous AI agents for SEO optimization, real-time PPC bid management, and continuous CRO testing. Get 400% ROAS with Avakata's marketing automation.">
<meta property="og:title" content="AI Marketing Services | Avakata">
<meta property="og:description" content="Autonomous AI agents for SEO, PPC, and CRO automation.">
<meta property="og:image" content="https://avakata.agency/og-services.png">
<meta property="og:url" content="https://avakata.agency/landing">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AI Marketing Services | Avakata">
<meta name="twitter:description" content="Autonomous AI agents for SEO, PPC, and CRO automation.">
<meta name="twitter:image" content="https://avakata.agency/og-services.png">
```

### JSON-LD: Service
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI-Powered Marketing Automation",
  "provider": {
    "@type": "Organization",
    "name": "Avakata Agency",
    "url": "https://avakata.agency"
  },
  "areaServed": "Global",
  "description": "Autonomous AI agents for SEO optimization, PPC management, and CRO testing that deliver 400% ROAS.",
  "offers": {
    "@type": "Offer",
    "url": "https://avakata.agency/landing",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

---

## Case Studies Page `/projects`

### Meta Tags
```html
<title>Case Studies | Avakata AI Marketing Results & ROI</title>
<meta name="description" content="See how Avakata's autonomous AI agents increased client ROAS by 400%, reduced CPA by 38%, and boosted conversion rates by 78% with real-time optimization.">
<meta property="og:title" content="Case Studies | Avakata AI Marketing Results">
<meta property="og:description" content="See how autonomous AI agents increased ROAS by 400% and boosted conversions.">
<meta property="og:image" content="https://avakata.agency/og-projects.png">
<meta property="og:url" content="https://avakata.agency/projects">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Case Studies | Avakata">
<meta name="twitter:description" content="Real results from autonomous AI marketing agents.">
<meta name="twitter:image" content="https://avakata.agency/og-projects.png">
```

---

## Contact Page `/get-a-quote`

### Meta Tags
```html
<title>Get a Quote | Contact Avakata for AI Marketing Solutions</title>
<meta name="description" content="Ready to scale with autonomous AI marketing? Contact Avakata for a free consultation and discover how AI agents can transform your revenue operations.">
<meta property="og:title" content="Get a Quote | Contact Avakata">
<meta property="og:description" content="Contact Avakata for autonomous AI marketing solutions.">
<meta property="og:image" content="https://avakata.agency/og-contact.png">
<meta property="og:url" content="https://avakata.agency/get-a-quote">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Get a Quote | Contact Avakata">
<meta name="twitter:description" content="Contact Avakata for AI marketing solutions.">
<meta name="twitter:image" content="https://avakata.agency/og-contact.png">
```

### JSON-LD: LocalBusiness
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Avakata Agency",
  "url": "https://avakata.agency",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "contact@avakata.agency",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wellington",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "description": "Autonomous AI marketing agency specializing in SEO, PPC, and CRO automation.",
  "priceRange": "$$"
}
</script>
```

---

## Blog Listing Page `/blog`

### Meta Tags
```html
<title>AI Marketing Blog | SEO, PPC & CRO Insights | Avakata</title>
<meta name="description" content="Explore cutting-edge insights on autonomous AI marketing, semantic SEO, real-time PPC optimization, and CRO automation from Avakata's expert team.">
<meta property="og:title" content="AI Marketing Blog | Avakata">
<meta property="og:description" content="Insights on autonomous AI marketing, SEO, PPC, and CRO.">
<meta property="og:image" content="https://avakata.agency/og-blog.png">
<meta property="og:url" content="https://avakata.agency/blog">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AI Marketing Blog | Avakata">
<meta name="twitter:description" content="Insights on autonomous AI marketing.">
<meta name="twitter:image" content="https://avakata.agency/og-blog.png">
```

---

## Blog Post Template `/blog/:slug`

### Meta Tags (bind to CMS fields)
```html
<title>{{Title}} | Avakata Blog</title>
<meta name="description" content="{{Meta Description}}">
<meta property="og:title" content="{{Title}}">
<meta property="og:description" content="{{Meta Description}}">
<meta property="og:image" content="{{Featured Image URL}}">
<meta property="og:url" content="https://avakata.agency/blog/{{Slug}}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{Title}}">
<meta name="twitter:description" content="{{Meta Description}}">
<meta name="twitter:image" content="{{Featured Image URL}}">
```

### JSON-LD: BlogPosting (bind to CMS fields)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{Title}}",
  "description": "{{Meta Description}}",
  "image": "{{Featured Image URL}}",
  "datePublished": "{{Publish Date in ISO format: YYYY-MM-DD}}",
  "dateModified": "{{Publish Date in ISO format: YYYY-MM-DD}}",
  "author": {
    "@type": "Organization",
    "name": "{{Author}}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Avakata Agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://avakata.agency/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://avakata.agency/blog/{{Slug}}"
  },
  "articleSection": "{{Category}}",
  "keywords": "AI marketing, autonomous AI, {{Category}}, marketing automation"
}
</script>
```

---

## Privacy Policy `/privacy-policy`

### Meta Tags
```html
<title>Privacy Policy | Avakata Agency</title>
<meta name="description" content="Avakata's privacy policy: how we collect, use, and protect your personal information.">
<meta name="robots" content="noindex, follow">
```

---

## Cookie Policy `/cookie-policy`

### Meta Tags
```html
<title>Cookie Policy | Avakata Agency</title>
<meta name="description" content="Learn about Avakata's use of cookies and how to manage your preferences.">
<meta name="robots" content="noindex, follow">
```

---

## Implementation Notes

1. **OG Images**: Create 1200x630px images for each page and upload to Framer Assets.
2. **Phone/Email**: Replace placeholder contact info in LocalBusiness schema.
3. **Social Links**: Update YouTube, X, and LinkedIn URLs in Organization schema.
4. **Blog Template**: Use Framer's CMS binding syntax (e.g., `{{Title}}`) to dynamically populate meta tags and JSON-LD.
5. **Date Format**: Ensure Publish Date is in ISO format (`YYYY-MM-DD`) for JSON-LD.
