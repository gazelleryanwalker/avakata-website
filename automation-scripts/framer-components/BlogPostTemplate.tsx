import { addPropertyControls, ControlType } from "framer"
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
        "name": "Avakata Agency",
        "logo": {
          "@type": "ImageObject",
          "url": "https://avakata.agency/logo.svg"
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
        {`
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
        `}
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
