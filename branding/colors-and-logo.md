# Branding: Colors & AV Logo Watermark

 
## Color Update

- Headings (Services, About, etc.): Light blue accent (e.g., `#63B3ED`)
- Background: Black (`#000`)
- Accent: Bluish-green AV brand (keep current)

 
## AV Logo Placement

- Top-left: small semi-transparent AV logo next to Home
- Background watermark: full-page AV logo at low opacity (5–8%), behind content on all pages
- Ensure watermark doesn’t interfere with text contrast or accessibility

 
## Implementation Notes (Framer)

- Use a background layer per page with the AV SVG/PNG, `opacity: 0.05`
- Set `position: fixed` or `absolute` behind content depending on page structure
- Confirm contrast ratios for headings and body text after color change
