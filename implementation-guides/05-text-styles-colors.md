# Text Styles & Color Updates Implementation Guide

## 1. Create New Heading Color Style

### Blue Accent Color: `#63B3ED`

**Path:** `/Brand/Accent`

**Settings:**

- Light theme: `rgb(99, 179, 237)` or `#63B3ED`
- Dark theme: (leave empty or same value)

**Usage:** All major headings across the site

## 2. Update Existing Text Styles

### Update These Styles with New Color:

**Path: `/Heading 1`**

- Keep all settings (font, size, spacing)
- **Change color to:** `/Brand/Accent` (or directly `#63B3ED`)

**Path: `/Heading 2`**

- Keep existing Inter-700, 72px
- **Change color to:** `/Brand/Accent`

**Path: `/Heading 3`**

- Keep existing Inter-regular, 32px
- **Change color to:** `/Brand/Accent`

**Note:** Do NOT change `/Heading 2b`, `/Heading 3b`, or `/Heading 4` unless specified in designs.

## 3. Create New Text Style for Colored Body Text (Optional)

If you need body text with the blue accent:

**Path:** `/Body Accent`

- Base: Copy from `/Body`
- **Color:** `/Brand/Accent` or `#63B3ED`
- Use for: CTAs, highlighted text, links

## 4. Button Text Style (Already Exists)

**Path:** `/Button 18`

- Keep as-is for button labels
- Ensure contrast against button backgrounds
- Primary buttons: Black text on #63B3ED background
- Secondary buttons: #63B3ED text on transparent/dark background

## 5. Apply Updated Styles Across Pages

### Home Page:

- Hero heading → `/Heading 1` (now blue)
- Section headings → `/Heading 2` (now blue)
- Subsection headings → `/Heading 3` (now blue)

### About Section:

- Main heading → `/Heading 2`
- Card titles → `/Heading 3`

### Services Section:

- Section heading → `/Heading 2`
- Service card titles → `/Heading 3` or `/Heading 4`

### Projects Section:

- Section heading → `/Heading 2`
- Project titles → `/Heading 3`

### Blog Pages:

- Blog listing title → `/Heading 1`
- Blog post titles → `/Heading 1`
- Blog post H2s → `/Heading 2`
- Blog post H3s → `/Heading 3`

## 6. Color Consistency Check

**Before publish, verify:**

### Primary Colors:

- Background: `#000000` (black) → `/Neutral/Background`
- Surface: `#0D0D0D` (dark gray) → `/Neutral/Surface`
- **Accent/Brand:** `#63B3ED` (light blue) → `/Brand/Accent` ← **NEW**
- Text Primary: `#FFFFFF` (white) → `/Text/Primary`
- Text Secondary: `#999999` (gray) → `/Text/Secondary`

### Usage Rules:

- **Headings:** Use `/Brand/Accent` (#63B3ED)
- **Body text:** Use `/Text/Primary` (white) or `/Text/Secondary` (gray)
- **Backgrounds:** Use `/Neutral/Background` or `/Neutral/Surface`
- **Links:** Use `/Brand/Accent` with underline on hover
- **Buttons (primary):** Background `/Brand/Accent`, text black
- **Buttons (secondary):** Border `/Brand/Accent`, text `/Brand/Accent`

## 7. Contrast & Accessibility

**WCAG AA Compliance:**

- #63B3ED (light blue) on #000000 (black): **~8.6:1** ✓ (AAA)
- #FFFFFF (white) on #000000 (black): **21:1** ✓ (AAA)
- #999999 (gray) on #000000 (black): **~7.5:1** ✓ (AAA)
- #000000 (black) on #63B3ED (light blue): **~8.6:1** ✓ (AAA)

All combinations pass WCAG AA (4.5:1 minimum). Safe to use.

## 8. Implementation Steps

1. **In Framer:**
   - Go to Design Panel → Colors
   - Create new color style: `/Brand/Accent` = `#63B3ED`

2. **Update Text Styles:**
   - Go to Design Panel → Text Styles
   - Edit `/Heading 1`, set color = `/Brand/Accent`
   - Edit `/Heading 2`, set color = `/Brand/Accent`
   - Edit `/Heading 3`, set color = `/Brand/Accent`

3. **Apply to Pages:**
   - Open each page (Home, About, Services, Projects, Blog)
   - Verify headings automatically update to blue
   - Manually fix any hardcoded colors if needed

4. **Test:**
   - Preview in Framer
   - Check all pages for consistency
   - Verify responsive views
   - Test hover states on links/buttons

## 9. Find & Replace "avakata.ai"

**Search Across All Pages:**

1. Use Framer's search (Cmd+F) or manually check:
   - Home page
   - About section
   - Footer
   - Contact forms
   - Any link elements

2. **Replace with:** `avakata.agency`

3. **Update Links:**
   - Internal links: `/page-path`
   - External references: `https://avakata.agency`

## Verification Checklist

- [ ] `/Brand/Accent` color created (#63B3ED)
- [ ] `/Heading 1` updated with new color
- [ ] `/Heading 2` updated with new color
- [ ] `/Heading 3` updated with new color
- [ ] Home page headings display in blue
- [ ] Blog listing heading in blue
- [ ] Blog post headings in blue
- [ ] All pages checked for hardcoded colors
- [ ] "avakata.ai" replaced with "avakata.agency" everywhere
- [ ] Links use blue accent color
- [ ] Button contrast verified
- [ ] Tested in preview mode
- [ ] Responsive views checked
