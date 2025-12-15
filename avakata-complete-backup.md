# Avakata Website - Complete Backup & Implementation Notes

## Date: 2025-10-21
## Status: Pre-Fresh Template Restart

---

## CRITICAL USER REQUIREMENTS

### Visual & Design Requirements:
1. **Cool holographic/3D images throughout EVERY page** (GalleyCard components)
2. **Different animations on every interior page** - each page needs unique flair
3. **Avocado Green (rgb(139, 195, 74))** throughout with white text
4. **Black backgrounds** everywhere - NO white backgrounds
5. **NO overlapping content** - proper layouts, no absolute positioning chaos
6. **Readable text** - white on black, proper text styles
7. **Logo embedded in imagery** - consider embedding Avakata logo on people's shirts in images

### Branding:
- **Company:** Avakata / Avakata Agency (avakata.agency)
- **Tagline:** "Avakata Pit Boss: your revenue on autopilot."
- **Colors:** Black background, Avocado Green (rgb(139, 195, 74)), White text
- **Phone:** (888) 330-9410
- **Location:** Wellington, Florida
- **Email:** hello@avakata.agency, partners@avakata.agency

### Technical Requirements:
1. **Call button in header** on every page: (888) 330-9410
2. **Contact form** embedded, sends to email
3. **All internal links working** and verified
4. **GitHub repository** with all changes committed
5. **CMS collections** for Services, Testimonials, Case Studies, FAQs (if possible)

### Content Source:
- **Primary spec:** /Users/ryanwalker/Downloads/avakata.md (complete page-by-page content)
- **Logo files:** /Users/ryanwalker/Downloads/ (multiple logo variations uploaded)
- **Headshot:** /Users/ryanwalker/Downloads/PHOTO-2024-07-13-16-09-25.jpg

---

## COMPLETED FIXES (What Worked)

### Site-Wide:
✅ Call button added to Primary Navigation Bar: (888) 330-9410 → tel:+18883309410
✅ Logo changed from "Palmer®" to "AVAKATA.AGENCY" with green square icon
✅ Navigation text made white (/Nav Text White text style created)
✅ Static Navigation Bar fixed: all gray text → white text
✅ Location changed: "Tokyo" → "Wellington, Florida"
✅ Tagline: "Autonomous AI Revenue Operations"

### Home Page Fixes:
✅ Removed white background from 4-step grid
✅ Deleted invisible "Inter" font text nodes
✅ Cleaned up broken absolute positioned sections
✅ Added FAQ section with holographic GalleyCard images
✅ Added CTA section at bottom
✅ Hero section content matches spec
✅ Mission/Vision/Values sections display correctly

### Individual Pages:
✅ **About Page:** Fixed logo strip background black, proper sections
✅ **Services Page:** Added CTA and Footer sections
✅ **Case Studies Page:** Fixed layout order (Hero at top, not white box)
✅ **Work Page:** Updated WorkCard instances with Avakata case studies:
   - PBS Learning Media: AI Integration
   - Yeti Coolers: Autonomous PPC
   - Cholula Hot Sauce: Revenue Operations
   - Magento Solutions: Predictive Analytics
   - Cisco Webex: AI Layer Platform
✅ **Gallery Page:** Updated title to "AI Visuals©", button to "Book a Call"
✅ **Contact Page:** Verified correct Avakata info, no Tokyo/Palmer

### Text Styles Created:
- `/Logo Text White` - for logo text (white, Inter-700, 23px, uppercase)
- `/Nav Text White` - for navigation text (white, Inter-700, 14px)

### Color Styles Available:
- `/Black` - rgb(0, 0, 0)
- `/White` - rgb(255, 255, 255)
- `/Avocado` - rgb(139, 195, 74)
- `/Avocado Dark` - rgb(85, 139, 47) / rgb(104, 159, 56)
- `/Blue` - rgb(124, 179, 66) / rgb(139, 195, 74)

---

## PROBLEMS THAT OCCURRED (What NOT to Do)

### Major Issues:
❌ **White background blocks everywhere** - many nodes had `backgroundColor="rgba(255,255,255,1)"`
❌ **Invisible text using font="Inter"** instead of proper text styles
❌ **Absolute positioned sections** causing overlapping and broken layouts
❌ **Duplicate content nodes** - same sections with both styled and unstyled versions
❌ **Broken grid layouts** with invisible absolute positioned text inside

### Specific Broken Sections:
❌ "Our Story" section - white background Frame with absolute positioned invisible text
❌ "Values" section - white background Grid with absolute positioned invisible text
❌ "Services detail" section - white background with absolute positioned invisible text
❌ FAQ section - white background with absolute positioned invisible text

### What Caused Problems:
1. Creating new nodes with `font="Inter"` instead of `inlineTextStyle="/TextStyleName"`
2. Using `backgroundColor="rgba(255,255,255,1)"` instead of `backgroundColor="/Black"` or `transparent`
3. Creating absolute positioned containers with nested absolute positioned text
4. Not deleting old broken nodes before creating new ones

---

## FRESH START IMPLEMENTATION PLAN

### Phase 1: Setup Fresh Template
1. Get clean template XML structure
2. Identify all existing pages and components
3. Document what's already there and working

### Phase 2: Brand & Navigation (Priority 1)
1. Update Primary Navigation Bar:
   - Logo: "AVAKATA.AGENCY" with green icon
   - White text navigation
   - Call button: (888) 330-9410 in top right
2. Update Static Navigation Bar (interior pages):
   - Logo: "AVAKATA"
   - White text: "Quick Links", "© Avakata AI — 2025", "Autonomous AI Revenue Operations"
3. Set correct menu links: Home, About, Services, Testimonials

### Phase 3: Home Page (Priority 2)
**Sections in order:**
1. **Hero:**
   - Headline: "Avakata Pit Boss: your revenue on autopilot."
   - Subhead: "Agentic, autonomous AI that forecasts ROI and self‑corrects live."
   - Credibility: "Built by the team behind the tech that became Google Analytics. 3,500+ ad accounts managed. Award‑winning performance."
   - Primary CTA: "Book a 15‑minute fit call →" → tel:+18883309410
   - Secondary CTA: "See how Pit Boss works →" → /services
   - Add GalleyCard holographic images (3-4 floating around)

2. **Logo Strip:**
   - "Trusted by performance‑obsessed teams in legal, healthcare, e‑commerce, and services."
   - Client logos (use placeholders)

3. **How It Works (4 Steps):**
   - Title: "What Pit Boss does in 4 steps"
   - 2x2 Grid with green backgrounds:
     1. Connect: your ads, analytics, CRM, and website.
     2. Forecast: ROI and set guardrails for CPA, CAC, ROAS.
     3. Autocorrect: live: bids, budgets, audiences, copy tests, landing variants.
     4. Prove: value: daily summaries, anomaly alerts, and next actions.

4. **About/Mission Section:**
   - Large text with TextReveal animation
   - Mission: "Build the agentic AI layer that makes companies measurably more profitable with less human thrash."
   - Vision: "Every business runs with an always‑on AI Pit Boss that predicts, prevents, and profits."
   - Add GalleyCard images

5. **Services Overview:**
   - Heading: "Services"
   - Service cards/list component
   - Feature highlights

6. **Testimonials:**
   - Ticker animations with client quotes
   - "What operators say" heading

7. **Work/Case Studies:**
   - Work cards with case study previews
   - Animations/hover effects

8. **Awards/Recognition:**
   - Award cards
   - Industry recognition

9. **Client Section:**
   - 3D animated client cards
   - Scroll animations

10. **Pricing:**
    - 3 pricing tiers
    - Animated text

11. **Blog/Insights:**
    - Article cards
    - Sticky scroll effect

12. **Founder Section:**
    - Ryan Walker headshot: /Users/ryanwalker/Downloads/PHOTO-2024-07-13-16-09-25.jpg
    - Bio content

13. **Experience:**
    - Timeline/list of experience

14. **FAQ:**
    - Expandable FAQ items
    - GalleyCard holographic images (2-3)

15. **Final CTA:**
    - "Ready to let an AI layer run your revenue?"
    - Call button + Pricing link

### Phase 4: About Page (Priority 3)
Use pre-built sections:
- SectionsHero with holographic images
- SectionsLogoStrip (black background)
- SectionsFeaturesProduct (Mission/Vision/Values as 2x2 grid)
- SectionsCtaSection with holographic images

### Phase 5: Services Page (Priority 3)
Use pre-built sections:
- Hero
- Service grid/list
- Features (capabilities)
- Pricing overview
- CTA
- Footer

### Phase 6: Testimonials Page (Priority 4)
Use pre-built sections:
- Hero
- Logo strip
- Testimonials with ticker animations
- CTA

### Phase 7: Case Studies Page (Priority 4)
Use pre-built sections:
- Hero (already fixed - no white box!)
- Features grid with case study cards
- CTA

### Phase 8: FAQ Page (Priority 4)
Use pre-built sections:
- Hero
- FAQ expandable list
- CTA

### Phase 9: Work Page (Priority 5)
- Gallery of case studies
- Work cards with hover effects

### Phase 10: Gallery Page (Priority 5)
- Parallax floating images
- Interactive gallery

### Phase 11: Contact Page (Priority 5)
- Contact details
- Embedded contact form → email integration
- Map or visual element

---

## KEY TECHNICAL NOTES

### Framer XML Best Practices:
1. **Always use text styles:** `inlineTextStyle="/Heading 2"` NOT `font="Inter"`
2. **Always use color styles:** `backgroundColor="/Black"` NOT `backgroundColor="rgb(0,0,0)"`
3. **Use transparent when needed:** `backgroundColor="transparent"`
4. **Prefer Stack layout over absolute positioning** for cleaner, responsive layouts
5. **Use Grid for multi-column layouts** with proper gridColumns and gridRows
6. **Add GalleyCard components for visual interest:** `componentId="GFjsWOTJB"`

### Component IDs (Important):
- `GFjsWOTJB` - GalleyCard (holographic images) - variants: `CuBGeLGGv` (Image), `Kqtxfjb76` (Video)
- `Wt4XK6WYf` - PrimaryButton - variants: `iJrMk7HF5` (Primary), `TM6f2ytrb` (Secondary)
- `gJm1Hubun` - WorkCard - variants: `Cx_9OikEn` (Primary), `gO3DGLxth` (Secondary)
- `sxUe_G8Sa` - ArticleCard
- `PSDgyKIIH` - TestimonialCard
- `XiwmsdpiU` - Header component
- `aDaMEpysA` - AnimatedBanner component

### Pre-built Section Components (USE THESE):
```xml
<!-- Hero Section -->
<ComponentInstance insertUrl="https://framer.com/m/sections-Hero-2xJX.js?detached=true" width="100%" />

<!-- Logo Strip -->
<ComponentInstance insertUrl="https://framer.com/m/sections-Logo-Strip-mX1f.js?detached=true" width="100%" />

<!-- Features -->
<ComponentInstance insertUrl="https://framer.com/m/sections-Features-Product-ZlOC.js?detached=true" width="100%" />

<!-- Pricing -->
<ComponentInstance insertUrl="https://framer.com/m/sections-Pricing-3-plans-uGqH.js?detached=true" width="100%" />

<!-- Testimonials -->
<ComponentInstance insertUrl="https://framer.com/m/sections-Testimonials-kbrH.js?detached=true" width="100%" />

<!-- CTA -->
<ComponentInstance insertUrl="https://framer.com/m/sections-CTA-section-Qd0e.js?detached=true" width="100%" />

<!-- Footer -->
<ComponentInstance insertUrl="https://framer.com/m/sections-Footer-Complete-Night-1qIZ.js?detached=true" width="100%" />
```

### Adding Holographic Images:
```xml
<GalleyCard
    width="500px"
    height="500px"
    componentId="GFjsWOTJB"
    variant="CuBGeLGGv"
/>
```

---

## CONTENT SPEC REFERENCE

### Global CTAs:
- **Primary:** "Get your agentic plan →"
- **Secondary:** "See how Pit Boss works →"
- **Utility:** "Book a 15‑minute fit call →" → tel:+18883309410
- **Phone:** (888) 330-9410

### Hero Copy:
- **Headline:** Avakata Pit Boss: your revenue on autopilot.
- **Subhead:** Agentic, autonomous AI that forecasts ROI and self‑corrects live.
- **Credibility:** Built by the team behind the tech that became Google Analytics. 3,500+ ad accounts managed. Award‑winning performance.

### Mission & Vision:
- **Mission:** Build the agentic AI layer that makes companies measurably more profitable with less human thrash.
- **Vision:** Every business runs with an always‑on AI Pit Boss that predicts, prevents, and profits.

### Values:
1. **Outcomes over optics:** ship measurable lift, not buzzwords.
2. **Autonomy with accountability:** AI acts, humans verify.
3. **Clarity first:** explain decisions with data.
4. **Security & privacy:** least‑privilege, audit trails, and opt‑outs.

### Leadership:
**Ryan Walker, Founder**
Analytics pioneer, builder, operator. Two exits. Still shipping.

### Case Studies (Work Page):
1. PBS Learning Media - AI Integration
2. Yeti Coolers - Autonomous PPC
3. Cholula Hot Sauce - Revenue Operations
4. Magento Solutions - Predictive Analytics
5. Cisco Webex - AI Layer Platform

### FAQ Questions:
1. What makes Avakata different?
2. Do you replace our team?
3. How long until lift?
4. Will we lose control?
5. Is our data safe?
6. What stacks do you support?

---

## FILES & RESOURCES

### Content Spec:
- `/Users/ryanwalker/Downloads/avakata.md` - Complete page-by-page content

### Logo Files:
- `/Users/ryanwalker/Downloads/` - Multiple logo variations (transparent background, etc.)

### Headshot:
- `/Users/ryanwalker/Downloads/PHOTO-2024-07-13-16-09-25.jpg` - Ryan Walker photo

### GitHub Repository:
- `/Users/ryanwalker/avakata-website/` - Local git repo
- **Branch:** master
- **Remote:** origin

---

## LESSONS LEARNED

### What Works:
✅ Using pre-built Framer section components (Hero, CTA, Features, etc.)
✅ Using text styles instead of inline fonts
✅ Using color styles instead of inline colors
✅ GalleyCard components for visual interest
✅ Stack layouts instead of absolute positioning
✅ Transparent backgrounds where appropriate

### What Breaks Everything:
❌ Creating nodes with `font="Inter"`
❌ White backgrounds `rgba(255,255,255,1)`
❌ Absolute positioning nested inside absolute positioning
❌ Not deleting broken nodes before creating new ones
❌ Guessing attribute values instead of checking documentation

### The Right Approach:
1. Start with clean template
2. Use pre-built sections whenever possible
3. Customize content within sections (text, images, links)
4. Add GalleyCard holographic images throughout
5. Verify each page before moving to next
6. Commit to GitHub frequently

---

## NEXT STEPS (Fresh Start)

1. ✅ Create this backup document
2. ⏭️ Commit everything to GitHub
3. ⏭️ Get fresh template structure
4. ⏭️ Implement Phase 1: Brand & Navigation
5. ⏭️ Implement Phase 2: Home Page (section by section)
6. ⏭️ Implement Phase 3-11: Other pages
7. ⏭️ Test all internal links
8. ⏭️ Add contact form with email integration
9. ⏭️ Final review and push to GitHub
10. ⏭️ Publish/deploy

---

## USER FEEDBACK SUMMARY

Key frustrations that led to restart:
- "Every page is fucking terrible. There's none of the cool blue elements or animations anymore"
- "Look at how shitty the content looks, you can't even see it"
- "I still don't see any cool fucking graphics"
- "You can't even read what the fuck it says on the left in gray"
- "There's still no logo but there are two fucking Avacada.ai's on my fucking header"
- "This website looks like shit"
- "I can't even look at the home page"

**Root cause:** Attempting to "fix" a template by modifying it broke the original design. Better approach: start fresh and build it right from the beginning.

---

## COMMIT MESSAGE FOR BACKUP:
"Complete backup before fresh template restart - all content, fixes, and lessons learned documented"

