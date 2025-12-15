# Master Implementation Checklist

## ✅ Completed

- [x] Fix TopNav variants/alignment
- [x] Create Blog CMS collection
- [x] Import 12 blog posts with content
- [x] Generate SEO JSON-LD templates (Organization, LocalBusiness, Service, WebSite, BlogPosting)
- [x] Create llms.txt crawling policy
- [x] Create sitemap.xml
- [x] Generate implementation guides (Home, Blog Listing, Blog Post, CTA, Text Styles)
- [x] Push all assets to GitHub repository

## 🔄 In Progress - Framer Implementation Required

### Phase 1: Blog CMS Fields (5 min)

**Current Blog CMS Fields:**

- Title (string) ✓
- Title 2 (string) - Currently unused, repurpose as Excerpt
- Image (image) ✓
- Image 2, Image 3 (image) - Optional extras
- Content (formattedText) ✓
- Content 2 (formattedText) - Optional for multi-section posts

**Missing Required Fields to Add:**

1. **Author** (string)
   - Default value: "Avakata Team"
   - Required for schema

2. **Published Date** (date)
   - Required for sorting and schema
   - Format: ISO 8601

3. **Keywords** (string)
   - Comma-separated
   - For JSON-LD schema

**Steps:**

1. In Framer, go to CMS → Blog collection
2. Click "+ Add Field"
3. Add the 3 fields above
4. Update existing 12 blog posts with:
   - Author: "Avakata Team"
   - Published Date: Set recent dates (Nov-Dec 2025)
   - Keywords: Extract from content or generate relevant

### Phase 2: Colors & Text Styles (10 min)

Follow `implementation-guides/05-text-styles-colors.md`:

1. Create color `/Brand/Accent` = `#63B3ED`
2. Update text styles:
   - `/Heading 1` → color = `/Brand/Accent`
   - `/Heading 2` → color = `/Brand/Accent`
   - `/Heading 3` → color = `/Brand/Accent`
3. Find & replace all legacy-domain references with `avakata.agency`

### Phase 3: Home Page Fixes (20 min)

Follow `implementation-guides/01-home-page-fixes.md`:

1. Center all sections (Hero, About, Services, Leadership, Projects, Testimonials)
2. Add consistent padding (100-120px) to all sections
3. **Move Services section** below About section
4. Update all H1/H2/H3 headings to use updated text styles (now blue)
5. Add "AV" logo watermark (top-left, 40px from top/left, opacity 0.15)
6. Cube animation:
   - Wrap in clickable Frame
   - Link to `/projects`
   - Add hover effects
7. Add meta tags + JSON-LD (Organization + WebSite) to Page Head

### Phase 4: Global CTA Component (15 min)

Follow `implementation-guides/04-global-cta-component.md`:

1. Create component: `CTA - Book Meeting`
2. Structure: Heading + Subheading + 2 buttons
3. Primary button: Links to `https://avakata.zohobookings.com/#/customer/avakata`
4. Secondary button: Links to `/get-a-quote`
5. Make responsive (stack buttons on mobile)
6. Insert on Home page before Footer

### Phase 5: Blog Listing Page (/blog) (25 min)

Follow `implementation-guides/02-blog-listing-page.md`:

1. Create hero section with centered title "Insights & Resources"
2. Add grid layout (auto-fill columns, 380px width, 32px gap)
3. Connect grid to Blog CMS collection
4. Sort by Published Date descending
5. Create blog card repeater:
   - Bind Image, Title, Published Date, Excerpt
   - Link to `/blog/{slug}`
   - Add hover effects
6. Enable pagination (12 items per page)
7. Add meta tags + CollectionPage JSON-LD to Page Head

### Phase 6: Blog Post Template (/blog/:slug) (30 min)

Follow `implementation-guides/03-blog-post-template.md`:

1. Create hero with dynamic Title, Published Date, Author
2. Add featured Image
3. Bind Content field to rich text area
4. Style H2/H3 in content with blue accent
5. Insert CTA component at bottom
6. Optional: Related posts section (3 recent posts)
7. Add dynamic meta tags (bind to CMS fields)
8. Add BlogPosting JSON-LD schema (bind to CMS fields)

### Phase 7: Upload Assets & Publish (10 min)

1. Upload `llms.txt` to Framer → Settings → Custom Code (or Assets if supported)
2. Verify `sitemap.xml` is accessible
3. Test all pages in Framer preview
4. Publish to production
5. Add site to Google Search Console
6. Submit `sitemap.xml` to Search Console

## 📋 Phase 8: Services Pages (Future)

- Create 12 service detail pages
- Use Service schema (from `seo/core-pages-jsonld.md`)
- Long-form content for each service
- Add to main nav under Services dropdown

## 📋 Phase 9: Projects Pages (Future)

- Create case study pages for each project
- Bind to Projects CMS collection
- Add project schema
- Embed live site screenshots/logos

## 📋 Phase 10: Integrations (Future)

- Zoho CRM lead capture (forms)
- Zoho Analytics tracking scripts
- Zoho chatbot embed
- Social links update (use fullstackwoo.day sources)

## 📋 Phase 11: Redirects & Cleanup (Future)

- Set up 301 redirect: fullstackwoo.day → avakata.agency
- Remove template builder branding mentions
- Final Lighthouse performance audit

---

## Current Priority Order

**Immediate (Today):**

1. Add Blog CMS fields (Author, Published Date, Keywords)
2. Update colors and text styles
3. Home page fixes (alignment, Services move, AV logo, meta/schema)
4. Create Global CTA component
5. Build Blog listing page
6. Build Blog post template
7. Upload llms.txt and publish

**This Week:**

- Services pages
- Projects pages refinement

**Next Sprint:**

- Zoho integrations
- Performance optimization
- Social links update
- Redirects

---

## Verification Before Publish

- [ ] All Blog CMS fields populated
- [ ] All headings display in #63B3ED blue
- [ ] Home page sections centered and Services moved
- [ ] AV watermark visible (subtle)
- [ ] No legacy-domain references remain
- [ ] All domain references updated to `avakata.agency`
- [ ] Cube links to /projects
- [ ] Global CTA component present on Home and blog posts
- [ ] Blog listing page displays 12 posts in grid
- [ ] Blog post template renders content correctly
- [ ] All meta tags and JSON-LD schemas in place
- [ ] llms.txt uploaded
- [ ] Sitemap accessible
- [ ] Preview tested on desktop, tablet, mobile
- [ ] Ready to publish ✓
