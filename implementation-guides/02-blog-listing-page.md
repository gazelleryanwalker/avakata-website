# Blog Listing Page (/blog) Implementation Guide

## Page Structure

### 1. Hero Section

**Layout:**
- Full-width section, centered content
- Background: `/Neutral/Background`
- Padding: 120px top, 80px bottom

**Content:**
```text
[Frame - Hero Container]
  [Text - Heading 1] "Insights & Resources"
  [Text - Body] "Expert perspectives on web development, AI, and digital transformation"
```text

**Styles:**
- Heading: `/Heading 1` with color override → `#63B3ED`
- Body: `/Body`, color → `/Text/Secondary`
- Alignment: Center

### 2. Blog Grid Section

**Layout:**
- Frame with layout="grid"
- gridColumns="auto-fill"
- gridColumnWidth="380"
- gridColumnMinWidth="320"
- gap="32px 24px"
- padding="60px 80px 120px 80px"
- maxWidth="1400px"
- Center horizontally

**CMS Collection Binding:**

1. Select the grid Frame
2. In Properties panel → CMS → Connect to "Blog" collection
3. Sort by: Custom field "Date" (descending) - or create a `publishedAt` date field
4. Items per page: 12
5. Enable pagination

### 3. Blog Card Component (Repeat Grid Item)

**Structure:**
```text
[Frame - Blog Card] (position="relative", borderRadius="12px", backgroundColor="/Neutral/Surface")
  [Frame - Image Container] (aspectRatio=1.6, overflow="hidden")
    [Image - Hero] → Bind to CMS: {Image}
  [Frame - Content] (layout="stack", stackDirection="vertical", gap="16px", padding="24px")
    [Text - Category/Date] → "/Span 12 Medium", color="#63B3ED"
      Bind to: {Date} formatted as "MMM DD, YYYY"
    [Text - Title] → "/Heading 3", color="/Text/Primary"
      Bind to: {Title}
    [Text - Excerpt] → "/Body", color="/Text/Secondary"
      Bind to: {Title 2} (use as excerpt or create new field)
    [Link Button - Read More] link="/blog/{slug}"
      [Text] "Read More →"
```text

**Card Interactions:**
- Hover: Scale 1.02, transition 0.3s
- Background subtle lift: box-shadow 0 8px 24px rgba(0,0,0,0.3)

**CMS Field Bindings:**
- **Image:** {Image} field
- **Title:** {Title} field
- **Excerpt:** {Title 2} or create new "Excerpt" string field in Blog collection
- **Link:** Dynamic `/blog/` + {slug} (ensure slug field exists)

### 4. Pagination Controls (Optional)

If enabling pagination:

**Layout:**
```text
[Frame - Pagination] (layout="stack", stackDirection="horizontal", gap="16px", padding="40px")
  [Button - Previous] "← Previous"
  [Text - Page Info] "Page X of Y"
  [Button - Next] "Next →"
```text

**Framer Pagination:**
- Use built-in CMS pagination controls
- Style buttons with `/Button 18` text style
- Disable Previous on page 1, Next on last page

## Page Head - SEO Meta Tags

Add to /blog page Settings → Head:

```html
<!-- Primary Meta Tags -->
<title>Blog - Avakata Agency | Web Development & AI Insights</title>
<meta name="title" content="Blog - Avakata Agency | Web Development & AI Insights" />
<meta name="description" content="Expert articles on full-stack development, AI integration, cloud architecture, and digital transformation strategies for modern businesses." />
<link rel="canonical" href="https://avakata.agency/blog" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://avakata.agency/blog" />
<meta property="og:title" content="Blog - Avakata Agency | Web Development & AI Insights" />
<meta property="og:description" content="Expert articles on full-stack development, AI integration, cloud architecture, and digital transformation strategies for modern businesses." />
<meta property="og:image" content="https://avakata.agency/og-blog.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://avakata.agency/blog" />
<meta property="twitter:title" content="Blog - Avakata Agency | Web Development & AI Insights" />
<meta property="twitter:description" content="Expert articles on full-stack development, AI integration, cloud architecture, and digital transformation strategies for modern businesses." />
<meta property="twitter:image" content="https://avakata.agency/og-blog.jpg" />
```text

## Page Head - JSON-LD Schema

Add CollectionPage schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Blog - Avakata Agency",
  "description": "Expert articles on full-stack development, AI integration, cloud architecture, and digital transformation strategies.",
  "url": "https://avakata.agency/blog",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://avakata.agency"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://avakata.agency/blog"
      }
    ]
  }
}
</script>
```text

## Additional Fields Needed in Blog CMS Collection

If not already present, add these fields:

1. **Slug** (string, required) - URL-friendly identifier
2. **Excerpt** (string) - Short description for cards (or use Title 2)
3. **Author** (string) - Default "Avakata Team"
4. **Published Date** (date) - For sorting and display
5. **Featured** (boolean) - Optional: highlight featured posts

**Note:** Current Blog collection has Title, Title 2, Image, Image 2, Image 3, Content, Content 2. Map accordingly or add missing fields.

## Verification Checklist

- [ ] Hero section centered with proper padding
- [ ] Grid layout responsive (auto-fill columns)
- [ ] CMS collection bound to grid
- [ ] Cards display: image, date, title, excerpt
- [ ] Cards link to `/blog/{slug}` dynamically
- [ ] Hover interactions on cards work
- [ ] Pagination enabled (12 items per page)
- [ ] Meta tags and JSON-LD in Page Head
- [ ] Test responsive breakpoints
- [ ] Verify in Framer preview
