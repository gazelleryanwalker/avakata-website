import { addPropertyControls, ControlType } from "framer"

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
