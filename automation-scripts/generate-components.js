/**
 * Framer Component Generator
 * 
 * Generates complete React code components for:
 * 1. BlogPostTemplate - Dynamic blog post layout with CMS bindings
 * 2. CTABlock - Global CTA component with Zoho booking
 * 3. BlogCard - Reusable blog card for listing page
 * 4. RelatedPosts - Shows related blog posts
 */

const fs = require('fs');
const path = require('path');

// Component 1: Blog Post Template
const blogPostTemplate = `import { addPropertyControls, ControlType } from "framer"
import { useEffect, useState } from "react"

interface BlogPostTemplateProps {
  title: string
  content: string
  publishedDate: string
  author: string
  featuredImage?: string
  keywords?: string
}

export default function BlogPostTemplate(props: BlogPostTemplateProps) {
  const {
    title = "Blog Post Title",
    content = "<p>Blog post content goes here...</p>",
    publishedDate = "2024-12-01",
    author = "Ryan Walker",
    featuredImage,
    keywords = ""
  } = props

  // Inject JSON-LD schema
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Avakata",
        "logo": {
          "@type": "ImageObject",
          "url": "https://avakata.agency/images/avakata-logo.png"
        }
      },
      "datePublished": publishedDate,
      "dateModified": publishedDate,
      "keywords": keywords
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [title, author, publishedDate, keywords])

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 40px 60px"
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "700",
            lineHeight: "1.2em",
            marginBottom: "32px",
            color: "#63B3ED"
          }}
        >
          {title}
        </h1>
        
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "14px",
            color: "#999999",
            marginBottom: "48px"
          }}
        >
          <span>By {author}</span>
          <span>•</span>
          <span>{new Date(publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}</span>
        </div>

        {featuredImage && (
          <img
            src={featuredImage}
            alt={title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "60px"
            }}
          />
        )}
      </div>

      {/* Article Content */}
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 40px 120px"
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{
            fontSize: "18px",
            lineHeight: "1.8em",
            color: "#ffffff"
          }}
          className="blog-content"
        />
      </article>

      {/* Inline styles for content */}
      <style>
        {\`
          .blog-content h2 {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.2em;
            margin: 60px 0 24px;
            color: #63B3ED;
          }
          .blog-content h3 {
            font-size: 32px;
            font-weight: 400;
            line-height: 1.2em;
            margin: 48px 0 20px;
            color: #63B3ED;
          }
          .blog-content p {
            margin-bottom: 24px;
          }
          .blog-content ul, .blog-content ol {
            margin: 24px 0;
            padding-left: 32px;
          }
          .blog-content li {
            margin-bottom: 12px;
          }
          .blog-content a {
            color: #63B3ED;
            text-decoration: none;
          }
          .blog-content a:hover {
            text-decoration: underline;
          }
          .blog-content strong {
            font-weight: 600;
          }
          .blog-content em {
            font-style: italic;
          }
        \`}
      </style>
    </div>
  )
}

addPropertyControls(BlogPostTemplate, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Blog Post Title"
  },
  content: {
    type: ControlType.String,
    title: "Content",
    displayTextArea: true,
    defaultValue: "<p>Blog post content...</p>"
  },
  publishedDate: {
    type: ControlType.String,
    title: "Published Date",
    defaultValue: "2024-12-01"
  },
  author: {
    type: ControlType.String,
    title: "Author",
    defaultValue: "Ryan Walker"
  },
  featuredImage: {
    type: ControlType.Image,
    title: "Featured Image"
  },
  keywords: {
    type: ControlType.String,
    title: "Keywords",
    defaultValue: ""
  }
})
`;

// Component 2: Global CTA Block
const ctaBlock = `import { addPropertyControls, ControlType } from "framer"

interface CTABlockProps {
  heading?: string
  primaryButtonText?: string
  secondaryButtonText?: string
}

export default function CTABlock(props: CTABlockProps) {
  const {
    heading = "Ready to Transform Your Digital Presence?",
    primaryButtonText = "Book a Strategy Call",
    secondaryButtonText = "View Case Studies"
  } = props

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0D0D0D",
        padding: "80px 40px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "1.2em",
            marginBottom: "40px",
            color: "#63B3ED"
          }}
        >
          {heading}
        </h2>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <a
            href="https://avakata.zohobookings.com/#/customer/avakata"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "16px 32px",
              backgroundColor: "#7EF500",
              color: "#000000",
              fontSize: "18px",
              fontWeight: "600",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "transform 0.2s ease",
              cursor: "pointer"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)"
            }}
          >
            {primaryButtonText}
          </a>

          <a
            href="/projects"
            style={{
              display: "inline-block",
              padding: "16px 32px",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "600",
              textDecoration: "none",
              borderRadius: "8px",
              border: "2px solid #63B3ED",
              transition: "all 0.2s ease",
              cursor: "pointer"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#63B3ED"
              e.currentTarget.style.color = "#000000"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "#ffffff"
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </div>
  )
}

addPropertyControls(CTABlock, {
  heading: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Ready to Transform Your Digital Presence?"
  },
  primaryButtonText: {
    type: ControlType.String,
    title: "Primary Button",
    defaultValue: "Book a Strategy Call"
  },
  secondaryButtonText: {
    type: ControlType.String,
    title: "Secondary Button",
    defaultValue: "View Case Studies"
  }
})
`;

// Component 3: Blog Card
const blogCard = `import { addPropertyControls, ControlType } from "framer"

interface BlogCardProps {
  title: string
  excerpt: string
  publishedDate: string
  slug: string
  featuredImage?: string
}

export default function BlogCard(props: BlogCardProps) {
  const {
    title = "Blog Post Title",
    excerpt = "Brief description of the blog post...",
    publishedDate = "2024-12-01",
    slug = "blog-post-slug",
    featuredImage
  } = props

  return (
    <a
      href={\`/blog/\${slug}\`}
      style={{
        display: "block",
        backgroundColor: "#0D0D0D",
        borderRadius: "8px",
        overflow: "hidden",
        textDecoration: "none",
        color: "#ffffff",
        transition: "transform 0.2s ease",
        cursor: "pointer"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)"
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
      }}
    >
      {featuredImage && (
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundImage: \`url(\${featuredImage})\`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      )}

      <div style={{ padding: "24px" }}>
        <div
          style={{
            fontSize: "12px",
            color: "#999999",
            marginBottom: "12px"
          }}
        >
          {new Date(publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </div>

        <h3
          style={{
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "1.3em",
            marginBottom: "12px",
            color: "#63B3ED"
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5em",
            color: "#cccccc"
          }}
        >
          {excerpt}
        </p>
      </div>
    </a>
  )
}

addPropertyControls(BlogCard, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Blog Post Title"
  },
  excerpt: {
    type: ControlType.String,
    title: "Excerpt",
    displayTextArea: true,
    defaultValue: "Brief description..."
  },
  publishedDate: {
    type: ControlType.String,
    title: "Published Date",
    defaultValue: "2024-12-01"
  },
  slug: {
    type: ControlType.String,
    title: "Slug",
    defaultValue: "blog-post-slug"
  },
  featuredImage: {
    type: ControlType.Image,
    title: "Featured Image"
  }
})
`;

// Write components to files
const componentsDir = path.join(__dirname, 'framer-components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir);
}

const components = [
  { name: 'BlogPostTemplate.tsx', code: blogPostTemplate },
  { name: 'CTABlock.tsx', code: ctaBlock },
  { name: 'BlogCard.tsx', code: blogCard }
];

console.log('🎨 Generating Framer components...\n');

components.forEach(component => {
  const filePath = path.join(componentsDir, component.name);
  fs.writeFileSync(filePath, component.code);
  console.log(`✅ Created: ${component.name}`);
});

console.log('\n✨ Components generated in: ' + componentsDir + '\n');
console.log('📋 Next steps:');
console.log('1. Open Framer project');
console.log('2. Create new code files for each component');
console.log('3. Copy-paste the generated TypeScript code');
console.log('4. Components will be available in the insert menu');
console.log('');
console.log('Component descriptions:');
console.log('• BlogPostTemplate: Full blog post layout with JSON-LD');
console.log('• CTABlock: Reusable CTA with Zoho booking link');
console.log('• BlogCard: Blog card for listing page grid');
