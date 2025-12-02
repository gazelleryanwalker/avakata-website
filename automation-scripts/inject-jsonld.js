#!/usr/bin/env node

/**
 * JSON-LD Schema Injector
 * 
 * Generates JSON-LD schemas for all pages and creates
 * injectable HTML snippets for Framer Page Head sections
 */

const fs = require('fs');
const path = require('path');

// Load blog metadata
const metadataPath = path.join(__dirname, 'blog-metadata.json');
let blogMetadata = [];

if (fs.existsSync(metadataPath)) {
  blogMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  console.log(`✅ Loaded ${blogMetadata.length} blog posts\n`);
} else {
  console.error('❌ blog-metadata.json not found. Run generate-blog-metadata.js first.');
  process.exit(1);
}

// Core page schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Avakata",
  "url": "https://avakata.agency",
  "logo": "https://avakata.agency/images/avakata-logo.png",
  "description": "Autonomous AI agents for revenue operations. We deploy self-managing marketing, sales, and SEO systems that scale revenue without scaling headcount.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wellington",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Ryan Walker"
  },
  "sameAs": [
    "https://linkedin.com/company/avakata",
    "https://twitter.com/avakata"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Avakata",
  "url": "https://avakata.agency",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://avakata.agency/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Avakata",
  "image": "https://avakata.agency/images/avakata-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Wellington",
    "addressRegion": "FL",
    "postalCode": "",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.6617",
    "longitude": "-80.0533"
  },
  "url": "https://avakata.agency",
  "telephone": "",
  "priceRange": "$$$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  }
};

// Generate BlogPosting schema for each post
function generateBlogPostingSchemas() {
  return blogMetadata.map(meta => ({
    slug: meta.slug,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": meta.title,
      "description": meta.metaDescription,
      "author": {
        "@type": "Person",
        "name": meta.author,
        "url": "https://avakata.agency"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Avakata",
        "logo": {
          "@type": "ImageObject",
          "url": "https://avakata.agency/images/avakata-logo.png"
        }
      },
      "datePublished": meta.publishedDate,
      "dateModified": meta.publishedDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": meta.canonicalUrl
      },
      "keywords": meta.keywords,
      "url": meta.canonicalUrl
    }
  }));
}

// Generate CollectionPage schema for blog listing
const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Avakata Blog",
  "description": "Insights on autonomous AI, revenue operations, and the future of digital marketing",
  "url": "https://avakata.agency/blog",
  "mainEntity": {
    "@type": "Blog",
    "name": "Avakata Blog",
    "description": "Expert insights on AI-powered revenue operations"
  }
};

// Create HTML snippets for each page
function generateHTMLSnippets() {
  const snippets = {
    homepage: `<!-- Homepage JSON-LD -->
<script type="application/ld+json">
${JSON.stringify(organizationSchema, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(websiteSchema, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(localBusinessSchema, null, 2)}
</script>`,
    blogListing: `<!-- Blog Listing Page JSON-LD -->
<script type="application/ld+json">
${JSON.stringify(blogListingSchema, null, 2)}
</script>`,
    blogPosts: {}
  };

  const blogSchemas = generateBlogPostingSchemas();
  blogSchemas.forEach(({ slug, schema }) => {
    snippets.blogPosts[slug] = `<!-- Blog Post JSON-LD -->
<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>`;
  });

  return snippets;
}

// Main execution
console.log('🔧 Generating JSON-LD schemas...\n');

const snippets = generateHTMLSnippets();

// Write snippets to files
const outputDir = path.join(__dirname, 'jsonld-snippets');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Write homepage snippet
fs.writeFileSync(
  path.join(outputDir, 'homepage.html'),
  snippets.homepage
);
console.log('✅ Created: homepage.html');

// Write blog listing snippet
fs.writeFileSync(
  path.join(outputDir, 'blog-listing.html'),
  snippets.blogListing
);
console.log('✅ Created: blog-listing.html');

// Write individual blog post snippets
const blogPostsDir = path.join(outputDir, 'blog-posts');
if (!fs.existsSync(blogPostsDir)) {
  fs.mkdirSync(blogPostsDir);
}

Object.entries(snippets.blogPosts).forEach(([slug, snippet]) => {
  fs.writeFileSync(
    path.join(blogPostsDir, `${slug}.html`),
    snippet
  );
});
console.log(`✅ Created ${Object.keys(snippets.blogPosts).length} blog post snippets`);

// Write all schemas as JSON for reference
fs.writeFileSync(
  path.join(outputDir, 'all-schemas.json'),
  JSON.stringify({
    organization: organizationSchema,
    website: websiteSchema,
    localBusiness: localBusinessSchema,
    blogListing: blogListingSchema,
    blogPosts: generateBlogPostingSchemas()
  }, null, 2)
);
console.log('✅ Created: all-schemas.json (reference)');

console.log(`\n✨ Snippets generated in: ${outputDir}\n`);
console.log('📋 How to use:');
console.log('1. Open each page in Framer');
console.log('2. Go to Page Settings → Head Tags');
console.log('3. Paste the corresponding HTML snippet');
console.log('4. Repeat for all pages');
console.log('\nOR automate with Framer API (requires authentication)');
