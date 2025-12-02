# Fresh Rebuild Plan - Using Pre-built Section Components

## Strategy
Since Wireframer is a UI-only feature, we'll use Framer's pre-built section components via MCP API to rebuild each page systematically. This approach is:
- ✅ Faster than manual creation
- ✅ More consistent across pages
- ✅ Uses Framer's optimized components
- ✅ Can apply color scheme after creation

## Available Pre-built Sections

1. **Hero Section**: `https://framer.com/m/sections-Hero-2xJX.js?detached=true`
2. **Logo Strip**: `https://framer.com/m/sections-Logo-Strip-mX1f.js?detached=true`
3. **Features with Image**: `https://framer.com/m/sections-Features-Product-ZlOC.js?detached=true`
4. **Pricing 3 Plans**: `https://framer.com/m/sections-Pricing-3-plans-uGqH.js?detached=true`
5. **Testimonials Grid**: `https://framer.com/m/sections-Testimonials-kbrH.js?detached=true`
6. **CTA Section**: `https://framer.com/m/sections-CTA-section-Qd0e.js?detached=true`
7. **Footer**: `https://framer.com/m/sections-Footer-Complete-Night-1qIZ.js?detached=true`

## Rebuild Order

### 1. Homepage (`/`)
- **Preserve**: Main component with cube animations
- **Rebuild**: Keep existing Main component, ensure TopNav and Footer are correct
- **Status**: Already has good structure, just needs color consistency

### 2. About Page (`/join-our-team`)
- **Use Sections**:
  - Hero section (with Ryan Walker story)
  - Features section (Mission/Vision/Values)
  - Testimonials section
  - CTA section
  - Footer

### 3. Services Page (`/landing`)
- **Use Sections**:
  - Hero section
  - Features section (service cards)
  - FAQ section (custom)
  - CTA section
  - Footer

### 4. Projects Page (`/projects`)
- **Use Sections**:
  - Hero section
  - Features section (project grid)
  - CTA section
  - Footer

### 5. Blog Pages (`/blog`, `/blog/:slug`)
- **Use Sections**:
  - Hero section
  - Features section (blog grid)
  - CTA section
  - Footer

### 6. Contact Page (`/get-a-quote`)
- **Use Sections**:
  - Hero section
  - Form section (existing form component)
  - CTA section
  - Footer

## Color Scheme Application (After Creation)

All pages will use:
- **Background**: `/Neutral/Background` (black - rgb(0, 0, 0))
- **Surface**: `/Neutral/Surface` (dark gray - rgb(13, 13, 13))
- **Accent**: `/Brand/Primary` (green - rgb(126, 245, 0))
- **Text**: `/Text/Primary` (white - rgb(255, 255, 255))

## Process

1. Insert pre-built section component with `?detached=true`
2. Call `getNodeXml` to see structure
3. Customize text content from CONTENT-INVENTORY.md
4. Apply color scheme
5. Add TopNav and Footer
6. Test and iterate

---

**Ready to begin rebuild!**




