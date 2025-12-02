# Quick Start Guide - Immediate Actions

## You're Ready to Implement! Here's What to Do:

I've created **complete implementation guides** in the `implementation-guides/` folder. You don't need to figure anything out—just follow along step-by-step.

---

## 📂 Your Implementation Guides

All guides are in: `/avakata-website/implementation-guides/`

1. **01-home-page-fixes.md** - Center alignment, Services placement, colors, AV logo, meta tags
2. **02-blog-listing-page.md** - Build the /blog grid with CMS bindings
3. **03-blog-post-template.md** - Build the /blog/:slug post pages
4. **04-global-cta-component.md** - Create reusable CTA with Zoho booking link
5. **05-text-styles-colors.md** - Update all heading colors to #63B3ED

Plus:

- `MASTER-CHECKLIST.md` - Complete task breakdown with time estimates
- `seo/blog-jsonld-templates.md` - BlogPosting schemas (copy/paste ready)
- `seo/core-pages-jsonld.md` - Organization, WebSite, Service schemas
- `llms.txt` - AI crawler policy (upload to Framer Assets)

---

## 🚀 Start Here (30 minutes to first publish)

### Step 1: Add Missing Blog CMS Fields (5 min)

Your Blog collection needs 3 more fields:

1. Open Framer → CMS → Blog collection → "+ Add Field"
2. Add these fields:

**Field 1: Author**

- Type: String
- Default value: "Avakata Team"

**Field 2: Published Date**

- Type: Date
- Required

**Field 3: Keywords**

- Type: String
- For: JSON-LD schema

3. Go through your 12 existing blog posts and fill in:
   - Author: "Avakata Team"
   - Published Date: Set dates in Nov-Dec 2025
   - Keywords: Extract 3-5 relevant keywords from each post

### Step 2: Update Colors & Text Styles (10 min)

1. Open `implementation-guides/05-text-styles-colors.md`
2. Follow the steps to:
   - Create `/Brand/Accent` color (#63B3ED)
   - Update `/Heading 1`, `/Heading 2`, `/Heading 3` to use new color
   - Search for "avakata.ai" and replace with "avakata.agency"

### Step 3: Fix Home Page (20 min)

1. Open `implementation-guides/01-home-page-fixes.md`
2. Follow section by section:
   - Center all sections
   - Move Services below About
   - Add AV watermark (top-left, subtle)
   - Link cube to /projects
   - Add meta tags + JSON-LD schemas to Page Head

### Step 4: Create Global CTA (15 min)

1. Open `implementation-guides/04-global-cta-component.md`
2. Create the component exactly as specified
3. Insert it on Home page (before Footer)

### Step 5: Build Blog Pages (55 min total)

**Blog Listing (25 min):**

1. Open `implementation-guides/02-blog-listing-page.md`
2. Build the grid layout
3. Connect to Blog CMS
4. Add pagination
5. Add meta tags + JSON-LD

**Blog Post Template (30 min):**

1. Open `implementation-guides/03-blog-post-template.md`
2. Create hero with dynamic bindings
3. Add content area
4. Insert CTA component at bottom
5. Add dynamic meta tags + BlogPosting JSON-LD

### Step 6: Upload & Publish (10 min)

1. Upload `llms.txt` to Framer (Settings → Custom Code or Assets)
2. Preview all pages
3. **Publish!**

---

## ⏱️ Time Breakdown

| Task | Time | Priority |
|------|------|----------|
| Add Blog CMS fields | 5 min | 🔴 Critical |
| Update colors/text styles | 10 min | 🔴 Critical |
| Home page fixes | 20 min | 🔴 Critical |
| Global CTA component | 15 min | 🟡 High |
| Blog listing page | 25 min | 🟡 High |
| Blog post template | 30 min | 🟡 High |
| Upload & publish | 10 min | 🟢 Ready |
| **TOTAL** | **~2 hours** | **✅ Doable today** |

---

## 🛠️ Tools I Can't Use Directly (But You Can)

I've prepared everything for you, but these actions require the Framer visual editor:

- Creating/editing CMS fields
- Moving sections in the canvas
- Adding components to pages
- Uploading assets (llms.txt)
- Publishing the site

**I've documented every single step** in the guides so you can execute them quickly.

---

## 🤝 What I'll Do While You Work

Once you start implementing in Framer, I can:

1. **Monitor progress** - If you get stuck, we can troubleshoot together
2. **Create additional content** - Services page copy, more blog posts, project case studies
3. **Prepare next phases** - Zoho integrations, performance optimizations
4. **Answer questions** - Clarify any implementation steps

---

## 📝 After First Publish

Once the core pages are live:

1. Add site to Google Search Console
2. Submit sitemap: `https://avakata.agency/sitemap.xml`
3. Run Lighthouse audit
4. Move to Phase 8: Services pages
5. Move to Phase 9: Projects refinement
6. Move to Phase 10: Zoho integrations

---

## 🎯 Success Criteria

**You're done with Phase 1 when:**

- [ ] Home page has centered sections, Services moved, AV logo visible
- [ ] All headings are light blue (#63B3ED)
- [ ] Blog listing shows 12 posts in responsive grid
- [ ] Blog posts render correctly with CTA at bottom
- [ ] All pages have proper meta tags and JSON-LD
- [ ] Site published at avakata.agency
- [ ] Sitemap submitted to Search Console

---

## 💬 Questions?

If anything is unclear while implementing:

1. Check the specific guide in `implementation-guides/`
2. Look at `MASTER-CHECKLIST.md` for context
3. Ask me to clarify a specific step

**You've got complete, copy-pasteable implementations ready to go!**

Let's get this shipped. Start with Step 1 (Blog CMS fields) and work your way through. You'll have a polished site in ~2 hours.
