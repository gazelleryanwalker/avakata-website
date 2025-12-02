# Global CTA Component Implementation Guide

## Overview

Create a reusable "Book a Strategy Call" CTA component that appears:

- At the bottom of blog posts
- On service pages
- On the home page (near bottom, before footer)
- On project case study pages

## Component Structure

### Name: `CTA - Book Meeting`

**Layout:**

```text
[Frame - CTA Container] (width="100%", backgroundColor="/Neutral/Surface", position="relative")
  [Frame - Content Wrapper] (maxWidth="900px", center horizontally, padding="80px 40px", layout="stack", stackDirection="vertical", gap="32px", stackAlignment="center")
    
    [Text - Heading] "Ready to Transform Your Digital Presence?"
      Style: "/Heading 2", color="#63B3ED", alignment="center"
    
    [Text - Subheading] "Let's discuss how we can help you build scalable, innovative solutions that drive real business results."
      Style: "/Body", color="/Text/Secondary", alignment="center"
    
    [Frame - Button Container] (layout="stack", stackDirection="horizontal", gap="16px", stackAlignment="center")
      [Button - Primary CTA] link="https://avakata.zohobookings.com/#/customer/avakata" linkOpenInNewTab="true"
        [Frame - Button Inner] (backgroundColor="#63B3ED", borderRadius="8px", padding="16px 32px")
          [Text] "Book a 30-Minute Strategy Call"
            Style: "/Button 18", color="#000000"
        Hover: opacity=0.9, scale=1.02
      
      [Button - Secondary] link="/get-a-quote"
        [Frame - Button Inner] (backgroundColor="transparent", border="2px solid #63B3ED", borderRadius="8px", padding="16px 32px")
          [Text] "Request a Quote"
            Style: "/Button 18", color="#63B3ED"
        Hover: backgroundColor="rgba(99, 179, 237, 0.1)"
```

## Component Variants (Optional)

### Variant 1: Light Background

- backgroundColor="#FFFFFF" (for use on dark sections)
- Text colors adjusted for contrast

### Variant 2: Compact

- Reduced padding: "60px 40px"
- Single button only (Book Meeting)
- Smaller heading: "/Heading 3"

## Usage Instructions

### On Blog Posts:

Insert at the end of article content, before footer:

```text
<ComponentInstance insertUrl="[CTA Component URL]" position="relative" width="100%" />
```

### On Home Page:

Insert after Testimonials section, before Footer:

1. Select the section before Footer
2. Insert component below
3. Ensure spacing: 0 top padding (CTA has built-in padding)

### On Service Pages:

Insert after service description content:

1. Position: End of page content
2. Variant: Default or Compact depending on page layout

## Responsive Behavior

**Desktop (>1024px):**

- Full padding as specified
- Buttons side-by-side

**Tablet (768-1024px):**

- Reduced padding: "60px 32px"
- Buttons side-by-side

**Mobile (<768px):**

- Padding: "50px 24px"
- Buttons stack vertically (stackDirection="vertical")
- Button width: 100%

## Zoho Bookings Link

**Primary CTA Link:** `https://avakata.zohobookings.com/#/customer/avakata`

- Opens in new tab
- 30-minute strategy call booking

**Backup/Alternative:** `/get-a-quote` page form

## Tracking (For Future Integration)

Add data attributes for analytics:

```text
data-cta-type="book-meeting"
data-cta-location="blog-post" (or "home", "service", etc.)
```

This will enable Zoho Analytics tracking once integrated.

## Verification Checklist

- [ ] Component created with correct structure
- [ ] Heading uses #63B3ED color
- [ ] Primary button links to Zoho Bookings (new tab)
- [ ] Secondary button links to /get-a-quote
- [ ] Hover states work on both buttons
- [ ] Responsive behavior verified (stack on mobile)
- [ ] Component inserted on Home page before Footer
- [ ] Component added to blog post template
- [ ] Test on preview before publish
