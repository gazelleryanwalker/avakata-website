import { addPropertyControls, ControlType } from "framer"

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
      href={`/blog/${slug}`}
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
            backgroundImage: `url(${featuredImage})`,
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
