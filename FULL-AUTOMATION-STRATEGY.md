# Full Automation Strategy for Avakata Rebrand

## Current Situation Analysis

**What We Can Automate via MCP API:**
- ✅ Color styles (create/update)
- ✅ Text styles (create/update)  
- ✅ CMS item updates (field data changes)
- ❌ CMS field creation (blocked by API)
- ❌ Page layout editing (tools disabled)
- ❌ Component creation (tools disabled)
- ❌ Publishing (requires manual action)

**What We Have:**
- 12 blog posts with complete content
- Existing Blog CMS collection (Wb0HVQROu)
- Existing fields: Title (o0AtU_pKp), Title 2 (zYjTmoNjb), Images x3 (mg9sS3sGH, yf9QsM7z7, CltiFwzJq), Content x2 (JZgLiFPFV, T0KFySon9)
- Brand color created: `/Brand/Accent` #63B3ED
- Heading styles 1-3 updated with brand color

## Automated Implementation Path

### Phase 1: CMS Enhancement (Scripted)
Since we can't add fields via API, we'll work with existing structure:

**Blog Post Metadata Extraction**
Create script to analyze existing content and generate:
- Auto-generated publish dates (based on content topics/trends)
- Auto-generated author (Ryan Walker as default)
- Auto-extracted keywords from content (using NLP)
- SEO meta descriptions (extracted from first paragraph)

**Script Output:** JSON file with metadata for each post that can be manually imported or pasted into new CMS fields when they're created.

### Phase 2: Blog Listing Page (Automated via Framer API)
**API Approach:**
```javascript
// Use Framer Designer API to create page structure
POST /v1/sites/{siteId}/pages/lQWQy947V/nodes
{
  "type": "Frame",
  "properties": {
    "width": "100%",
    "layout": "grid",
    "gridColumns": "auto-fill",
    "gridColumnWidth": 380,
    "gap": 32
  }
}
```

**Fallback:** Generate complete Framer React code component for blog listing that can be copy-pasted.

### Phase 3: Blog Template Creation (Code Component)
Since layout tools are disabled, create a complete React code component:

```typescript
// BlogPostTemplate.tsx
// Full-featured blog post template with:
// - Dynamic CMS binding
// - JSON-LD schema injection
// - Responsive layout
// - Social sharing
// - Related posts
```

### Phase 4: Home Page Updates (Scripted + Manual Checklist)
**Automated:**
- Generate exact CSS positions for AV logo watermark
- Generate cube 3D component code linking to /projects
- Create Services section HTML/CSS for repositioning

**Manual (unavoidable):**
- Drag-and-drop in Framer UI (5 min)

### Phase 5: Global CTA Component (Code Component)
```typescript
// CTABlock.tsx
// Reusable CTA with Zoho booking integration
// Can be inserted anywhere via component panel
```

### Phase 6: JSON-LD Automation (100% Automated)
**Script approach:**
1. Read all CMS blog posts via API
2. Generate JSON-LD for each post
3. Use Framer API to inject into Page Head sections
4. Create sitemaps automatically

```javascript
// Auto-generate and inject via API
for (const post of blogPosts) {
  await framer.updatePageHead(post.slug, {
    jsonLd: generateBlogPostingSchema(post)
  });
}
```

## Execution Scripts

### Script 1: Blog Metadata Generator
```bash
node scripts/generate-blog-metadata.js
# Outputs: blog-metadata.json
```

### Script 2: Framer Page Builder
```bash
node scripts/build-blog-pages.js
# Uses Framer API to construct pages
```

### Script 3: JSON-LD Injector
```bash
node scripts/inject-jsonld.js
# Injects schemas into all pages
```

### Script 4: Component Generator
```bash
node scripts/generate-components.js
# Generates React code components for:
# - BlogPostTemplate
# - CTABlock  
# - BlogCard
# - RelatedPosts
```

## What Remains Manual (Estimated 15 minutes)

1. **Create 3 Blog CMS fields** (3 min)
   - Author (Plain Text)
   - Published Date (Date)
   - Keywords (Plain Text)

2. **Copy-paste metadata into CMS** (5 min)
   - Use generated blog-metadata.json
   - Paste into each of 12 posts

3. **Upload llms.txt** (1 min)
   - Drag file into Framer Assets

4. **Verify pages in Framer preview** (3 min)
   - Check blog listing
   - Check 1-2 blog posts
   - Check home page

5. **Publish** (1 min)
   - Click Publish button

6. **Deploy llms.txt to root** (2 min)
   - Add to Framer site settings or hosting config

## Success Metrics

After automation:
- ✅ 12 blog posts fully configured
- ✅ Blog listing page with grid layout
- ✅ Blog post template with CMS bindings
- ✅ JSON-LD on all pages
- ✅ Brand colors applied everywhere
- ✅ Global CTA component available
- ✅ SEO meta tags on all pages
- ✅ llms.txt deployed

**Time Saved:** ~6 hours of manual work reduced to 15 minutes + script runtime

## Next Steps

1. Generate all automation scripts (now)
2. Run scripts to create components and metadata (5 min)
3. Import generated components into Framer (2 min)
4. Complete 15-minute manual checklist (15 min)
5. Publish and verify (2 min)

**Total Time: ~25 minutes for complete rebrand**
