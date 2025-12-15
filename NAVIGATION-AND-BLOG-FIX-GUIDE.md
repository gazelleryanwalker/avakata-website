# Navigation & Blog Fix Guide for Avakata Agency

**Date:** November 30, 2024  
**Priority:** HIGH - These issues affect user experience and SEO

---

## 🚨 Critical Issues Found

### 1. Navigation Alignment & Routing Problems

**Issues:**

- Services and Case Studies menu items appear to be visually swapped
- Blog button has incorrect positioning (using `top/left` instead of `centerX/centerY`)
- Blog link currently points to `/projects` instead of `/blog`
- Green outline indicator doesn't align properly with active menu items

**Root Cause:**  
The TopNav component has complex variant structure that cannot be fully modified via API. Manual adjustments in Framer's UI are required.

### 2. Missing Blog Infrastructure

**Issues:**

- No `/blog` page exists
- No Blog CMS collection
- Blog posts have no proper structure with headers/footers
- 12 blog posts are drafted but not imported

---

## ✅ Step-by-Step Fix Instructions

### Phase 1: Create Blog CMS Collection (5 minutes)

1. **Open Framer** and navigate to your Avakata project
2. **Click on CMS** icon in the left sidebar (database icon)
3. **Create New Collection** called "Blog Posts"
4. **Add the following fields:**

| Field Name | Field Type | Required | Notes |
|------------|------------|----------|-------|
| Title | Plain Text | Yes | Blog post title |
| Slug | Plain Text | Yes | URL-friendly (e.g., "semantic-seo-ai-agents") |
| Excerpt | Plain Text | No | Short summary (150-200 chars) |
| Content | Rich Text | Yes | Full blog post content |
| Featured Image | Image | No | Hero image for the post |
| Author | Plain Text | No | Default: "Avakata Team" |
| Publish Date | Date | Yes | Publication date |
| Category | Plain Text | No | e.g., "SEO", "PPC", "CRO" |
| Meta Description | Plain Text | No | For SEO (155-160 chars) |
| Reading Time | Plain Text | No | e.g., "8 min read" |

1. **Save the collection**

### Phase 2: Create Blog Landing Page (10 minutes)

1. **Create New Page**
   - Click the "+" icon next to Pages
   - Name it "Blog"
   - Set path to `/blog`

2. **Add TopNav Component:**
   - Drag the "Top Nav" component to the top of the page
   - Select variant: "Desktop - Home" (we'll fix the Blog variant later)

3. **Add Blog Listing Section:**
   - Add a Hero section with title "Insights & Expertise"
   - Add subtitle: "AI-powered strategies for modern revenue operations"
   - Below hero, add a Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
   - Connect the grid to your "Blog Posts" CMS collection
   - Design blog card with:
     - Featured Image
     - Category tag
     - Title (linked to `/blog/:slug`)
     - Excerpt
     - Author + Reading Time
     - Publish Date

4. **Add Footer:**
   - Drag your custom "Footer" component to the bottom

5. **Publish the page**

### Phase 3: Create Blog Post Template Page (10 minutes)

1. **Create Dynamic Page:**
   - Create new page with path `/blog/:slug`
   - This will be the template for individual blog posts

2. **Add Structure:**
   - Top Nav component (same as blog landing)
   - Hero section with:
     - Category tag
     - Blog post Title (from CMS)
     - Author, Date, Reading Time
     - Featured Image
   - Content section:
     - Rich text field connected to "Content" from CMS
     - Proper typography hierarchy (H2, H3, body text)
   - Related Posts section (optional):
     - Show 3 other posts from same category
   - Footer component

3. **Style the content:**
   - Use your existing text styles
   - Ensure proper spacing and readability
   - Add social sharing buttons (optional)

### Phase 4: Fix Navigation Alignment (15 minutes)

#### Option A: Manual Fix in Framer (Recommended)

1. **Open TopNav Component** for editing
2. **In the DesktopHome variant:**
   - Select the "Selection" indicator (green outline)
   - Ensure it's positioned at `centerX: 9%` (aligned with Home)

3. **Create/Fix Blog Variant:**
   - Duplicate the DesktopHome variant
   - Name it "DesktopBlog"
   - Move the "Selection" indicator to `centerX: 88%` (aligned with Blog button)
   - Ensure Blog button uses variant "uu42GnCmv" (selected state)

4. **Fix Other Variants:**
   - **DesktopAbout**: Selection at `centerX: 21%`
   - **DesktopServices**: Selection at `centerX: 34%`
   - **DesktopProjects**: Selection at `centerX: 52%`
   - **DesktopContact**: Selection at `centerX: 73%`

5. **Fix Menu Item Positions:**
   - Home: `centerX: 9%`
   - About: `centerX: 21%`
   - Services: `centerX: 34%`
   - Case Studies: `centerX: 52%`
   - Contact: `centerX: 73%`
   - Blog: `centerX: 88%` (remove `top` and `left` attributes, use `centerX` and `centerY: 50%`)

6. **Update Blog Link:**
   - Select the Blog button
   - Change link from `/projects` to `/blog`

7. **Apply Correct Variants to Pages:**
   - Home page (`/`): Use "DesktopHome" variant
   - About page (`/join-our-team`): Use "DesktopAbout" variant
   - Services page (`/landing`): Use "DesktopServices" variant
   - Case Studies page (`/projects`): Use "DesktopProjects" variant
   - Contact page (`/get-a-quote`): Use "DesktopContact" variant
   - Blog page (`/blog`): Use "DesktopBlog" variant (create if doesn't exist)

#### Option B: Quick CSS Override (Temporary)

If you need a quick fix while working on the proper solution:

1. Go to Site Settings → Custom Code → End of `<head>`
2. Add this CSS:

```css
<style>
/* Fix Blog button alignment */
[data-framer-name="Top Nav"] [data-framer-name="Blog"] {
  position: absolute !important;
  left: auto !important;
  top: auto !important;
  transform: translateX(-50%) translateY(-50%) !important;
}

/* Adjust selection indicator per page */
body[data-framer-page-path="/"] [data-framer-name="Selection"] {
  left: 9% !important;
}
body[data-framer-page-path="/join-our-team"] [data-framer-name="Selection"] {
  left: 21% !important;
}
body[data-framer-page-path="/landing"] [data-framer-name="Selection"] {
  left: 34% !important;
}
body[data-framer-page-path="/projects"] [data-framer-name="Selection"] {
  left: 52% !important;
}
body[data-framer-page-path="/get-a-quote"] [data-framer-name="Selection"] {
  left: 73% !important;
}
body[data-framer-page-path="/blog"] [data-framer-name="Selection"] {
  left: 88% !important;
}
</style>
```

### Phase 5: Import Blog Posts (30 minutes)

1. **Open the Blog Posts CMS collection**
2. **For each of the 12 blog posts** in `blog-content-drafts.md`:
   - Click "Add Item"
   - Copy/paste the content:
     - **Title**: From the blog post heading
     - **Slug**: Create URL-friendly version (e.g., "semantic-seo-ai-agents")
     - **Excerpt**: Use the "Executive Summary" section (first 150-200 chars)
     - **Content**: Copy the full blog post content (convert to HTML if needed)
     - **Author**: "Avakata Team"
     - **Publish Date**: Stagger dates (e.g., start from 2 weeks ago, publish one every 2-3 days)
     - **Category**: Assign appropriate category (SEO, PPC, CRO, Analytics, etc.)
     - **Meta Description**: Create from Executive Summary (155-160 chars)
     - **Reading Time**: Calculate based on word count (avg 200 words/min)
   - Save each item

3. **Verify** that all posts appear on the `/blog` page

---

## 📋 Blog Post Import Checklist

Here are the 12 blog posts to import from `blog-content-drafts.md`:

- [ ] 1. Semantic SEO: How AI Agents Map Entity Relationships
- [ ] 2. Autonomous Technical SEO: Self-Healing Site Sweeps
- [ ] 3. Predictive Budgeting: How AI Forecasts ROI Before You Spend
- [ ] 4. Real-Time Bid Optimization: The Death of Manual PPC
- [ ] 5. Generative Creative Testing: AI-Powered Multivariate Ads
- [ ] 6. CRO on Autopilot: Continuous A/B Testing Without Humans
- [ ] 7. The Pit Boss Model: Autonomy with Accountability
- [ ] 8. From Google Analytics to Autonomous Analytics
- [ ] 9. Query Mining & Negative Sculpting: AI-Powered Keyword Strategy
- [ ] 10. Content Refresh Automation: Keeping Pages Evergreen
- [ ] 11. Cross-Channel Attribution: How AI Connects the Dots
- [ ] 12. The Future of Agencies: AI Layers, Not Replacements

---

## 🧪 Testing Checklist

After completing all phases:

- [ ] Navigate to `/blog` - page loads with header and footer
- [ ] Blog listing shows all 12 posts in grid layout
- [ ] Click on a blog post - opens individual post page with header/footer
- [ ] Navigation highlights "Blog" when on `/blog` page
- [ ] Navigation highlights correct item on all other pages
- [ ] All menu items are evenly spaced and aligned
- [ ] Blog button no longer has positioning issues
- [ ] Mobile navigation works correctly
- [ ] All links in navigation go to correct pages

---

## 🔧 Troubleshooting

**Issue:** Navigation outline still misaligned  
**Solution:** Double-check that you're editing the correct variant and that the Selection element has `centerX` (not `left`) positioning.

**Issue:** Blog posts not showing on `/blog` page  
**Solution:** Ensure the grid is properly connected to the "Blog Posts" CMS collection and that posts are published (not draft).

**Issue:** Blog post template not displaying content  
**Solution:** Verify that the Rich Text element is connected to the "Content" field in your CMS collection.

**Issue:** Mobile navigation broken  
**Solution:** Ensure you've also updated the Mobile variants of the TopNav component with the Blog menu item.

---

## 📞 Need Help?

If you encounter issues:

1. Check Framer's console for errors (View → Developer → Console)
2. Verify all CMS connections are properly linked
3. Ensure all pages are published (not just saved as drafts)
4. Test in incognito mode to rule out caching issues

---

**Next Steps After This Fix:**

1. Apply SEO meta tags to blog posts (from `SEO-Implementation-Guide.md`)
2. Submit updated sitemap to Google Search Console
3. Test all internal links (from `Link-Audit-Report.md`)
4. Add animations to blog page (optional)
