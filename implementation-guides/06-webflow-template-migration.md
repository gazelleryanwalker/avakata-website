# Webflow Template Migration Guide (legacy site → new purchased template)

This repo contains the **content inventory, SEO copy, sitemap, and JSON-LD snippets** needed to migrate the Avakata site into a purchased Webflow template.

**Important limitation:** this workspace does **not** include a Webflow-exported project or your purchased Webflow template files, and it cannot authenticate to your Webflow workspace by itself. The Webflow-side steps below must be executed in Webflow Designer (and optionally via Webflow API) with your account access.

---

## Goal

- **Preserve the purchased template’s design + interactions** (classes, structure, Webflow Interactions).
- **Change only branding**: company name/logo → `Avakata Agency` and your Avakata Agency logo.
- **Migrate content** for: Home, About, Services, Contact, Clients.

---

## Source of truth (content)

Use these files as the canonical content to paste/bind into Webflow:

- `CONTENT-INVENTORY.md` (page-by-page copy + section ordering)
- `nav-map.md` (primary nav destinations)
- `sitemap.xml` (target URLs)
- SEO + schema:
  - `SEO-Implementation-Guide.md`
  - `seo/page-specific-seo.md`
  - `automation-scripts/jsonld-snippets/*.html`
- Blog:
  - `blog-content-drafts.md` (full posts)
  - `blog-import.csv` and `BLOG-POSTS-IMPORT-TEMPLATE.md` (import/paste helpers)

---

## Step 1 — Export the existing site’s content (clone the data)

### Option A (fastest): Webflow UI exports

- Export CMS collections you will migrate (if they exist): **Blog Posts**, **Projects/Case Studies**, **Testimonials**, **Services**, **Clients**.
- Export/collect assets you must reuse: **logo**, **favicon**, core images.

### Option B (API-driven): Webflow API export

- Export collections + items via Webflow API (Collections + Items) and save as JSON/CSV.
- Keep field names/keys consistent so imports into the template site are predictable.

---

## Step 2 — Create a new site from the purchased template

- Create a **new Webflow site** from the purchased template.
- Do not try to “swap templates” on the existing site; instead migrate content into the template site.

---

## Step 3 — Branding swap (only)

Make these changes globally (and only these):

- **Company name text**: update to `Avakata Agency` where it appears (Navbar, Footer, Site Title, Open Graph defaults).
- **Logo**: replace the template logo with your Avakata Agency logo.
- **Favicons / Webclip**: replace with Avakata Agency assets.

Avoid changing:

- classes/layout wrappers
- interaction triggers/targets
- animation timing/easing

---

## Step 4 — Content migration (preserve template interactions)

### Golden rule

**Don’t rebuild sections.** Replace content *inside* the template’s existing elements.

Most template animations depend on:

- class selectors
- element hierarchy
- component instances

Deleting/recreating elements often breaks interactions.

### Minimum required pages (per your scope)

Use the purchased template’s closest equivalents and map URLs to match `sitemap.xml` where possible.

- **Home** (`/`)
  - Source: `CONTENT-INVENTORY.md` → “Homepage (`/`) Content”
  - Key sections to map: Hero, About, Services, Projects/Case Studies, Testimonials, Awards, Contact CTA, Clients (logo strip / client grid)

- **About** (`/join-our-team` or template’s `/about`)
  - Source: `CONTENT-INVENTORY.md` → “About Page (`/join-our-team`) Content”
  - Includes the “Join our team” form block (keep template form styling; replace labels/fields)

- **Services** (`/landing` or template’s `/services`)
  - Source: `CONTENT-INVENTORY.md` → “Services Page (`/landing`) Content”

- **Contact** (`/get-a-quote` or template’s `/contact`)
  - Source: `CONTENT-INVENTORY.md` → “Contact Page (`/get-a-quote`) Content”

- **Clients** (page or section)
  - Source: `CONTENT-INVENTORY.md` → “Logo Strip” + “Client Section” references
  - If the template has a Clients page, populate it; otherwise ensure the **Clients section** exists on Home and/or About.

### Recommended CMS collections (to keep the template scalable)

- **Blog Posts**
  - Import source: `blog-import.csv` (or paste from `BLOG-POSTS-IMPORT-TEMPLATE.md`)

- **Projects / Case Studies**
  - Create fields at minimum: Title, Slug, Excerpt, Hero Image, Body/Rich Text, Results/Stats, Category/Service

- **Clients**
  - Create fields at minimum: Client Name, Client Logo, Client URL, Optional Testimonial/Quote

---

## Step 5 — URL structure + redirects

- Preferred URLs are already listed in `sitemap.xml`.
- If the purchased template uses different paths (e.g. `/about` instead of `/join-our-team`), add **301 redirects** in Webflow.

---

## Step 6 — SEO + JSON-LD

- Apply per-page meta tags from:
  - `SEO-Implementation-Guide.md`
  - `seo/page-specific-seo.md`
- Paste JSON-LD snippets (Organization/WebSite/BlogPosting) from:
  - `automation-scripts/jsonld-snippets/homepage.html`
  - `automation-scripts/jsonld-snippets/blog-listing.html`
  - `automation-scripts/jsonld-snippets/blog-posts/*.html`

---

## Step 7 — Animation verification checklist

- Verify template interactions still fire after content replacement:
  - Navbar open/close
  - Scroll-triggered reveals
  - Hover effects (cards/buttons)
  - Sliders/carousels
  - Lottie animations (if used)
- If an interaction breaks, revert the structural change and instead **edit text/images inside the original element**.

---

## Step 8 — Functionality test checklist

- **Navigation**: matches `nav-map.md`
- **Forms**: submit successfully (Contact + Join Our Team)
- **CMS**: collection lists render and detail pages resolve by slug
- **404 + redirects**: legacy paths redirect cleanly
- **Mobile**: nav + interactions work on touch

---

## “Done” definition

Migration is complete when:

- Template interactions are intact
- Branding is updated only (name/logo)
- All required pages (Home/About/Services/Contact/Clients) are migrated
- SEO meta + JSON-LD are applied
- Site is published and accessible on the target domain
