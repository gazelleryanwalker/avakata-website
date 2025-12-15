# Home Page Implementation Guide

## Priority Fixes

### 1. Center Alignment & Spacing

**All sections should be centered with consistent padding:**

- Top Nav: Already fixed ✓
- Hero Section: Center-align all content, ensure 120px top/bottom padding
- About Section: Center all text and cards, 100px padding
- Services Section: **MOVE after About section**, center-align, 100px padding
- Leadership Section: Center-align, fix spacing between cards, 100px padding
- Projects Section: Center-align gallery, 100px padding
- Testimonials: Center-align slider, 100px padding
- CTA Section: Center-align button and text, 80px padding
- Footer: Center content blocks

### 2. Branding Updates

**Text Color:**
- All H1, H2, H3 headings → Update to light blue `#63B3ED`
- Create new text style "/Heading Blue" with color `#63B3ED` for reuse

**Logo/Watermark:**
- Place "AV" logo (stylized letters) in top-left corner below nav
- Position: Fixed, 40px from top, 40px from left
- Size: 60x60px
- Opacity: 0.15 (subtle watermark effect)
- Color: White/Brand Primary
- Z-index: 10 (below nav but above content)

**Domain References:**
- Find all text containing the old domain
- Replace with `avakata.agency`
- Check: Hero, About, Footer, any CTAs

### 3. Cube Animation Behavior

**Current Issue:** Cube spins but doesn't link to projects

**Fix:**
1. Wrap cube 3D element in clickable Frame
2. Add link → `/projects`
3. Add hover state:
   - Scale: 1.05
   - Rotation speed: 1.2x
   - Cursor: pointer
4. On click: Navigate to projects page with fade transition

**Link Cube States to Project Filter:**
- Idle state: Shows "All Projects"
- Each face color represents a project category
- On hover over face: Show category name tooltip
- On click: Navigate to `/projects?category=[face-category]`

### 4. Services Section Placement

**Current:** Services is above About
**Target:** Services should be after About

**Steps:**
1. Select entire Services section Frame
2. Cut (Cmd+X)
3. Select About section
4. Paste below (Cmd+V)
5. Ensure spacing: 100px gap between About and Services
6. Verify responsive breakpoints maintain order

## Page Head - SEO Meta Tags

Add to Home page Settings → Head:

```html
<!-- Primary Meta Tags -->
<title>Avakata Agency - Full-Stack Web Development & AI Solutions</title>
<meta name="title" content="Avakata Agency - Full-Stack Web Development & AI Solutions" />
<meta name="description" content="Transform your digital presence with custom web applications, AI integrations, and scalable cloud solutions. Expert full-stack development for modern businesses." />
<link rel="canonical" href="https://avakata.agency/" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://avakata.agency/" />
<meta property="og:title" content="Avakata Agency - Full-Stack Web Development & AI Solutions" />
<meta property="og:description" content="Transform your digital presence with custom web applications, AI integrations, and scalable cloud solutions. Expert full-stack development for modern businesses." />
<meta property="og:image" content="https://avakata.agency/og-home.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://avakata.agency/" />
<meta property="twitter:title" content="Avakata Agency - Full-Stack Web Development & AI Solutions" />
<meta property="twitter:description" content="Transform your digital presence with custom web applications, AI integrations, and scalable cloud solutions. Expert full-stack development for modern businesses." />
<meta property="twitter:image" content="https://avakata.agency/og-home.jpg" />
```text

## Page Head - JSON-LD Schema

Add Organization and WebSite schemas (from `seo/core-pages-jsonld.md`):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Avakata Agency",
  "alternateName": "Avakata",
  "url": "https://avakata.agency",
  "logo": "https://avakata.agency/logo.svg",
  "description": "Full-stack web development agency specializing in custom applications, AI integrations, and scalable cloud solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Remote",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Business Inquiries",
    "url": "https://avakata.agency/get-a-quote"
  },
  "sameAs": [
    "https://linkedin.com/company/avakata",
    "https://github.com/avakata",
    "https://twitter.com/avakata"
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Avakata Agency",
  "url": "https://avakata.agency",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://avakata.agency/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```text

## Verification Checklist

- [ ] All sections centered with consistent padding
- [ ] Services section moved below About
- [ ] All headings use #63B3ED color
- [ ] AV watermark in top-left (subtle, 0.15 opacity)
- [ ] Old domain references updated to `avakata.agency`
- [ ] Cube links to /projects with hover effects
- [ ] Meta tags and JSON-LD added to Page Head
- [ ] Responsive breakpoints verified
- [ ] Test in Framer preview before publish
