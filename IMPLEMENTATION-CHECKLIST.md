# Avakata Framer Rebuild – Implementation Checklist

This checklist maps required actions from the rebuild plan and guides step-by-step execution in Framer.

 
## Navigation & IA

- [ ] TopNav items: `/`, `/join-our-team`, `/landing`, `/projects`, `/blog`, `/get-a-quote`
- [ ] Create DesktopBlog variant; set Blog link active on `/blog`
- [ ] Align nav via centerX/centerY; unify selection indicator

 
## CMS: Blog Posts

- [ ] Create collection: Blog Posts
- [ ] Fields: Title, Slug, Excerpt, Content (Rich Text), Featured Image, Author, Publish Date, Category, Meta Description, Reading Time
- [ ] Enable dynamic routing `/blog/:slug`

 
## Pages

- [ ] Home `/` – preserve cubes; ensure TopNav + Footer
- [ ] About `/join-our-team` – mission/vision/values
- [ ] Services `/landing` – features + FAQ + CTA
- [ ] Projects `/projects` – grid of case studies
- [ ] Contact `/get-a-quote` – form working
- [ ] Blog `/blog` – CMS list (3/2/1 cols), pagination
- [ ] Blog Post `/blog/:slug` – hero, featured image, rich text, related posts
- [ ] Policies `/privacy-policy`, `/cookie-policy`

 
## Content Import

- [ ] Prepare CSV per BLOG-POSTS-IMPORT-TEMPLATE.md
- [ ] Map slugs and meta; copy text from blog-content-drafts.md
- [ ] Upload images; set categories

 
## SEO & JSON-LD

- [ ] Page titles/descriptions; OG/Twitter images
- [ ] JSON-LD: Organization (Home), Service (Services), LocalBusiness (Contact)
- [ ] JSON-LD: BlogPosting in post template

 
## Assets & Links

- [ ] Upload `llms.txt` to Assets and verify `/llms.txt`
- [ ] Update social links (YouTube, X, LinkedIn)
- [ ] Update Calendly and CTAs (tel/mailto)

 
## Publish & QA

- [ ] Publish site; verify `sitemap.xml` and robots
- [ ] Submit to Search Console; monitor coverage
- [ ] Run Lighthouse; fix image sizes, font swap, defer scripts

 
## Notes

- Keep sections detached when customizing
- Avoid heavy animation on listing pages; prioritize performance
