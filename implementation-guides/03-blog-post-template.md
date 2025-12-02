# Blog Post Template (/blog/:slug) Implementation Guide

## Page Structure

### 1. Hero Section with Dynamic Image

**Layout:**
```text
[Frame - Hero Container] (width="100%", padding="120px 80px 80px")
  [Frame - Content Wrapper] (maxWidth="800px", center horizontally, layout="stack", stackDirection="vertical", gap="24px")
    [Text - Category/Date] → Bind to CMS: {Published Date}
      Style: "/Span 12 Medium", color="#63B3ED"
      Format: "MMMM DD, YYYY"
    [Text - Title] → Bind to CMS: {Title}
      Style: "/Heading 1", color="#63B3ED"
    [Text - Author] → Bind to CMS: {Author} or default "By Avakata Team"
      Style: "/Body", color="/Text/Secondary"
```text

**Background/Hero Image:**
- Option A: Set as section background image (CMS bind {Image})
- Option B: Place image below title as full-width featured image

### 2. Featured Image (If Not Used as Hero Background)

```text
[Frame - Featured Image Container] (width="100%", maxWidth="1200px", center horizontally, aspectRatio=2.4)
  [Image - Hero] → Bind to CMS: {Image}
    objectFit="cover", borderRadius="16px"
```text

Padding: 40px bottom

### 3. Article Content Section

**Layout:**
```text
[Frame - Article Container] (width="100%", padding="60px 80px 120px")
  [Frame - Content Wrapper] (maxWidth="800px", center horizontally, layout="stack", stackDirection="vertical", gap="32px")
    [RichText - Body Content] → Bind to CMS: {Content}
      Style: Use project text styles
      H2 → "/Heading 2", color="#63B3ED"
      H3 → "/Heading 3", color="#63B3ED"
      Paragraph → "/Body", color="/Text/Primary"
      Line height: 1.7em for readability
```text

**Rich Text Styling:**
- Ensure proper spacing between paragraphs (24px)
- Links: color="#63B3ED", underline on hover
- Code blocks: background="/Neutral/Surface", padding="16px", borderRadius="8px"
- Blockquotes: border-left 4px solid #63B3ED, padding-left 24px, italic

### 4. Additional Content Sections (If Using Content 2)

If blog posts have multiple content blocks:

```text
[Frame - Secondary Content]
  [Text - Subheading] → Bind to CMS: {Title 2}
    Style: "/Heading 2", color="#63B3ED"
  [RichText - Content 2] → Bind to CMS: {Content 2}
```text

### 5. Article Footer / CTA

```text
[Frame - Article Footer] (width="100%", backgroundColor="/Neutral/Surface", padding="60px 80px", center)
  [Frame - CTA Content] (maxWidth="600px", layout="stack", stackDirection="vertical", gap="24px", stackAlignment="center")
    [Text - CTA Heading] "Ready to Transform Your Digital Presence?"
      Style: "/Heading 3", color="#63B3ED"
    [Text - CTA Body] "Let's discuss how we can help you build scalable, innovative solutions."
      Style: "/Body", color="/Text/Secondary", center alignment
    [Button - CTA Link] link="https://avakata.zohobookings.com/#/customer/avakata"
      [Text] "Book a 30-Minute Strategy Call"
      Style: "/Button 18", background="#63B3ED", color="#000"
      Hover: opacity 0.9
```text

### 6. Related Posts Section (Optional)

```text
[Frame - Related Posts] (width="100%", padding="80px 80px 120px")
  [Text - Section Title] "More Insights"
    Style: "/Heading 2", color="#63B3ED", center
  [Frame - Related Grid] (layout="grid", gridColumns="3", gap="32px", maxWidth="1200px", center)
    [Repeat: Blog Card Component] (3 items, filter by same category or recent)
```text

**Logic:**
- Query Blog collection
- Exclude current post
- Limit 3
- Sort by date descending

## Page Head - Dynamic SEO Meta Tags

Add to /blog/:slug page Settings → Head with CMS bindings:

```html
<!-- Primary Meta Tags -->
<title>{Title} - Avakata Agency Blog</title>
<meta name="title" content="{Title} - Avakata Agency Blog" />
<meta name="description" content="{Title 2 or create Excerpt field}" />
<link rel="canonical" href="https://avakata.agency/blog/{slug}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="article" />
<meta property="og:url" content="https://avakata.agency/blog/{slug}" />
<meta property="og:title" content="{Title}" />
<meta property="og:description" content="{Title 2 or Excerpt}" />
<meta property="og:image" content="{Image}" />
<meta property="article:published_time" content="{Published Date ISO format}" />
<meta property="article:author" content="{Author}" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://avakata.agency/blog/{slug}" />
<meta property="twitter:title" content="{Title}" />
<meta property="twitter:description" content="{Title 2 or Excerpt}" />
<meta property="twitter:image" content="{Image}" />
```text

## Page Head - BlogPosting JSON-LD Schema

Use **Extended** template from `seo/blog-jsonld-templates.md`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{Title}",
  "description": "{Title 2 or Excerpt}",
  "image": "{Image}",
  "author": {
    "@type": "Organization",
    "name": "{Author or 'Avakata Agency'}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Avakata Agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://avakata.agency/logo.svg"
    }
  },
  "datePublished": "{Published Date ISO 8601}",
  "dateModified": "{Modified Date ISO 8601 or Published Date}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://avakata.agency/blog/{slug}"
  },
  "keywords": "web development, AI integration, full-stack, {additional keywords}",
  "articleSection": "Technology",
  "inLanguage": "en-US"
}
</script>
```text

**CMS Field Bindings in JSON-LD:**
- `{Title}` → Blog.Title
- `{Title 2 or Excerpt}` → Blog.Title 2 or new Excerpt field
- `{Image}` → Blog.Image
- `{Author}` → Blog.Author or "Avakata Agency"
- `{Published Date}` → Blog.Published Date (must be ISO 8601 format)
- `{slug}` → CMS slug field

## Breadcrumb Navigation (Optional but Recommended)

Add above article title:

```text
[Frame - Breadcrumbs] (layout="stack", stackDirection="horizontal", gap="8px")
  [Link - Home] "Home" → link="/"
  [Text] "/"
  [Link - Blog] "Blog" → link="/blog"
  [Text] "/"
  [Text - Current] "{Title}" (truncated if long)
```text

Style: `/Span  14`, color="/Text/Secondary"

## Additional CMS Fields Required

Ensure Blog collection has:

1. **slug** (string, required) - URL identifier
2. **Author** (string) - Default "Avakata Team"
3. **Published Date** (date, required) - For schema and display
4. **Modified Date** (date) - Optional, for dateModified in schema
5. **Excerpt** (string) - Meta description (or use Title 2)
6. **Keywords** (string) - Comma-separated for schema
7. **Category** (string or enum) - For filtering related posts

**Current fields:** Title, Title 2, Image, Image 2, Image 3, Content, Content 2

**Recommendation:** Add slug, Author, Published Date at minimum.

## Reading Experience Optimizations

- **Typography:** Line height 1.7em, comfortable paragraph spacing
- **Max width:** 800px for body content (optimal reading ~65-75 characters per line)
- **Contrast:** Ensure text/background meets WCAG AA (4.5:1)
- **Headings:** Use blue accent (#63B3ED) for visual hierarchy
- **Links:** Underline on hover for clarity
- **Mobile:** Reduce padding on smaller screens, maintain readability

## Verification Checklist

- [ ] Hero displays title, date, author dynamically
- [ ] Featured image renders correctly
- [ ] Article content (CMS {Content}) displays with proper formatting
- [ ] H2/H3 headings use #63B3ED color
- [ ] Footer CTA with Zoho booking link
- [ ] Related posts show 3 recent articles (optional)
- [ ] Breadcrumbs functional (optional)
- [ ] Meta tags bind to CMS fields
- [ ] BlogPosting JSON-LD schema with dynamic data
- [ ] Test multiple blog posts with different content
- [ ] Responsive design verified
- [ ] Preview in Framer before publish
