# Avakata Website - Quick Start Guide

**Last Updated:** November 28, 2025

---

## 🚀 5-Minute Setup (Do This First!)

### 1. Add llms.txt to Framer (2 minutes)

```text
1. Open Framer project
2. Go to Assets panel (left sidebar)
3. Click "+ New" > "Code File"
4. Name it: llms.txt
5. Copy/paste contents from: avakata-website/llms.txt
6. Save
7. Verify at: https://avakata.agency/llms.txt
```

### 2. Submit Sitemap to Google (3 minutes)

```text
1. Go to: https://search.google.com/search-console
2. Add property: https://avakata.agency
3. Verify ownership (use Framer's DNS verification)
4. Click "Sitemaps" in left menu
5. Enter: https://avakata.agency/sitemap.xml
6. Click "Submit"
```

---

## 📋 Complete Implementation Checklist

### Phase 1: SEO Basics (30 minutes)

#### Home Page SEO

```text
Framer: Page Settings (⚙️) > SEO

Title: Avakata AI | Autonomous Revenue Operations Platform | AI-Powered PPC & SEO

Description: Avakata Pit Boss: autonomous AI that forecasts ROI and self-corrects live. 24/7 autonomous PPC management, SEO 3.0, and CRO automation. Built by the Google Analytics team. +34% CVR, −22% CPA.

Social Image: Upload 1200x630px image
```

#### About Page SEO

```text
Title: About Avakata | From Google Analytics to AI Autonomy | Leadership & Mission

Description: Built by the team behind Google Analytics. 25+ years of expertise, 3,500+ ad accounts managed. Mission: Stop human thrash with autonomous AI revenue operations.
```

#### Services Page SEO

```text
Title: AI Services | Autonomous PPC, SEO 3.0, CRO Automation | Avakata

Description: Avakata Pit Boss: Autonomous PPC (+34% CVR, −22% CPA), Machine-Learning SEO, CRO Automation, Generative Chat Agents, Predictive Analytics, and Marketing Mix Modeling.
```

#### Contact Page SEO

```text
Title: Contact Avakata | Get a Quote | Book AI Revenue Operations Demo

Description: Ready for autonomous AI? Book a 15-minute fit call or email ai@avakata.agency. Call (888) 330-9410. Let Avakata Pit Boss forecast your ROI and self-correct campaigns.
```

#### Case Studies Page SEO

```text
Title: Case Studies | AI Revenue Operations Success Stories | Avakata

Description: Proof of autonomous profit. Real results: +126% revenue increase, 38% CPA reduction, 78% conversion rate improvement. See how AI agents drive measurable growth.
```

### Phase 2: Schema Markup (30 minutes)

#### Add to Home Page (Custom Code > Head)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Avakata",
  "url": "https://avakata.agency",
  "logo": "https://avakata.agency/logo.png",
  "description": "Autonomous AI revenue operations platform providing 24/7 PPC management, SEO optimization, and CRO automation",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8729 Pinion Drive",
    "addressLocality": "Wellington",
    "addressRegion": "FL",
    "postalCode": "33467",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-888-330-9410",
    "contactType": "Sales",
    "email": "ai@avakata.agency"
  },
  "founder": {
    "@type": "Person",
    "name": "Ryan Walker",
    "jobTitle": "Founder & CEO"
  }
}
</script>
```

### Phase 3: Blog Setup (1-2 hours)

#### Create CMS Collection

```text
1. In Framer, go to CMS
2. Click "New Collection"
3. Name it: "Blog Posts"
4. Add fields:
   - Title (Text)
   - Slug (Text)
   - Excerpt (Text, multiline)
   - Content (Rich Text)
   - Featured Image (Image)
   - Author (Text)
   - Date (Date)
   - Category (Text)
5. Save collection
```

#### Import Blog Posts

```text
Use the content from: avakata-website/blog-content-drafts.md

Create 12 CMS entries:
1. Semantic SEO: How AI Agents Map Entity Relationships
2. Autonomous SEO: 24/7 Technical Sweeps
3. Predictive Ranking: Forecasting Algorithm Shifts
... (see blog-content-drafts.md for all 12)
```

#### Create Blog Listing Page

```text
1. Create new page: /blog
2. Add CMS Collection List
3. Connect to "Blog Posts" collection
4. Design card layout
5. Add pagination
6. Update navigation "Blog" link to /blog
```

---

## 🔗 Quick Link Updates

### Update These Links in Framer

#### Navigation (TopNav Component)

```text
✅ Home → /
✅ About → /join-our-team
✅ Services → /landing
✅ Case Studies → /projects
⚠️ Blog → /blog (update from /projects)
✅ Contact → /get-a-quote
```

#### Footer (Footer Component)

```text
Social Media:
⚠️ YouTube → Update to Avakata channel (currently points to Framer)
✅ X (Twitter) → https://x.com/CristianMielu
✅ LinkedIn → https://www.linkedin.com/in/cristian-mielu-a8b2b3b5/
```

#### CTAs

```text
⚠️ Book a Meeting → Update Calendly link (currently generic)
✅ Call (888) 330-9410 → tel:+18883309410
✅ Email → ai@avakata.agency
```

---

## 📊 Monitoring & Analytics

### Week 1: Setup Tracking

```text
1. Google Search Console
   - Verify property
   - Submit sitemap
   - Check coverage report

2. Google Analytics
   - Install GA4 tracking code
   - Set up conversion events
   - Configure goals

3. Lighthouse Audit
   - Run on all pages
   - Target scores: 90+ Performance, 100 SEO
   - Fix any issues
```

### Weekly: Check These Metrics

```text
Google Search Console:
- Impressions (target: +20% week-over-week)
- Clicks (target: +15% week-over-week)
- Average position (target: improve by 2-3 positions)
- Coverage errors (target: 0 errors)

Google Analytics:
- Organic traffic (target: +25% month-over-month)
- Bounce rate (target: <50%)
- Average session duration (target: >2 minutes)
- Conversion rate (target: >3%)
```

---

## 🎯 Priority Actions (Ranked)

### 🔴 CRITICAL (Do Today)

1. ✅ Upload llms.txt to Framer
2. ✅ Submit sitemap to Google Search Console
3. ⚠️ Add meta tags to Home, Services, Contact pages

### 🟡 HIGH PRIORITY (This Week)

1. ⚠️ Add Schema.org markup to all pages
2. ⚠️ Create Blog CMS collection
3. ⚠️ Import first 3 blog posts
4. ⚠️ Update navigation Blog link

### 🟢 MEDIUM PRIORITY (Next 2 Weeks)

1. Import remaining 9 blog posts
2. Create blog listing page
3. Update social media links
4. Update Calendly link
5. Run Lighthouse audits

### 🔵 LOW PRIORITY (Ongoing)

1. Add internal linking between blog posts
2. Create additional case studies
3. Add testimonials
4. Optimize images
5. Set up email capture forms

---

## 📁 File Reference

**All files located in:** `/Users/ryanwalker/Documents/GitHub/avakata rebrand/avakata-website/`

| File | Purpose | Use When |
|------|---------|----------|
| **llms.txt** | AI/LLM consumption | Upload to Framer Assets |
| **sitemap.xml** | Search engine indexing | Submit to Search Console |
| **blog-content-drafts.md** | Blog post content | Creating CMS entries |
| **SEO-Implementation-Guide.md** | Complete SEO instructions | Adding meta tags |
| **Link-Audit-Report.md** | Link verification | Checking/fixing links |
| **FINAL-DELIVERABLES-SUMMARY.md** | Project overview | Understanding scope |
| **QUICK-START-GUIDE.md** | This file | Quick reference |

---

## 🆘 Troubleshooting

### "llms.txt not found"

```text
Solution:
1. Check file was uploaded to Framer Assets
2. Verify file name is exactly: llms.txt (no .txt.txt)
3. Check file is published with site
4. Clear browser cache and retry
```

### "Sitemap not indexing"

```text
Solution:
1. Verify sitemap is accessible: https://avakata.agency/sitemap.xml
2. Check robots.txt allows crawling
3. Wait 24-48 hours for Google to process
4. Check Search Console for errors
```

### "Meta tags not showing"

```text
Solution:
1. Verify tags added in Framer Page Settings > SEO
2. Publish site (not just preview)
3. Clear cache and hard refresh (Cmd+Shift+R)
4. Check with: https://metatags.io
```

### "Blog posts not displaying"

```text
Solution:
1. Verify CMS collection created
2. Check CMS entries are published (not draft)
3. Verify blog listing page connected to collection
4. Check page template is configured correctly
```

---

## ✅ Success Checklist

Use this to track your progress:

### SEO Setup

- [ ] llms.txt uploaded to Framer
- [ ] Sitemap submitted to Google Search Console
- [ ] Meta tags added to Home page
- [ ] Meta tags added to About page
- [ ] Meta tags added to Services page
- [ ] Meta tags added to Contact page
- [ ] Meta tags added to Case Studies page
- [ ] Schema.org markup added to Home page
- [ ] Schema.org markup added to Contact page

### Blog Setup

- [ ] CMS collection created
- [ ] First blog post imported
- [ ] Blog listing page created
- [ ] Navigation updated to link to /blog
- [ ] All 12 blog posts imported

### Link Updates

- [ ] Blog navigation link updated
- [ ] YouTube link updated
- [ ] Calendly link updated
- [ ] All links tested and working

### Analytics

- [ ] Google Search Console verified
- [ ] Sitemap indexed
- [ ] Google Analytics installed
- [ ] Conversion tracking set up

---

## 📞 Need Help?

**Reference Documents:**

- Detailed SEO instructions → `SEO-Implementation-Guide.md`
- Link issues → `Link-Audit-Report.md`
- Blog content → `blog-content-drafts.md`
- Full project summary → `FINAL-DELIVERABLES-SUMMARY.md`

**Framer Resources:**

- Framer Documentation: <https://www.framer.com/docs/>
- Framer CMS Guide: <https://www.framer.com/docs/cms/>
- Framer SEO Guide: <https://www.framer.com/docs/seo/>

---

**Last Updated:** November 28, 2025
**Status:** Ready for Implementation
**Estimated Time:** 2-4 hours total
