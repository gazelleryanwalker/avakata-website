# MCP (Model Context Protocol) Integration Setup

## Overview

This repository is configured to work with MCP servers for automated website management through AI assistants like GitHub Copilot and Claude.

## Available MCP Servers

### 1. Framer MCP Server

The Framer MCP server enables direct manipulation of the Framer website project.

**Connection URL:** `https://mcp.unframer.co/sse?id=<PROJECT_ID>&secret=<SECRET>`

**Available Tools:**

| Tool | Description |
|------|-------------|
| `getProjectXml` | Gets project pages and components XML structure |
| `getSelectedNodesXml` | Gets currently selected nodes as XML |
| `getNodeXml` | Get a specific node as XML by ID |
| `updateXmlForNode` | Update XML for a node (layout, content, attributes) |
| `manageColorStyle` | Create or update color styles |
| `manageTextStyle` | Create or update text styles |
| `deleteNode` | Delete nodes, styles, or code files |
| `duplicateNode` | Duplicate a node |
| `createCodeFile` | Create new code file (components/overrides) |
| `readCodeFile` | Read code file content |
| `updateCodeFile` | Update existing code file |
| `getCMSCollections` | Get all CMS collections |
| `getCMSItems` | Get items from a CMS collection |
| `upsertCMSItem` | Create or update CMS items |
| `deleteCMSItem` | Delete CMS items |

### 2. GitHub MCP Server

For repository management and GitHub operations.

**NPM Package:** `@modelcontextprotocol/server-github`

## Setup Instructions

### VS Code Setup

1. Install the MCP extension for VS Code
2. Copy `.vscode/mcp.json` settings
3. Add your Framer project credentials to the URL

### Codex CLI Setup

Create a `.codex.toml` file in your home directory:

```toml
[mcp_servers.framer]
type = "sse"
url = "https://mcp.unframer.co/sse?id=YOUR_PROJECT_ID&secret=YOUR_SECRET"

[mcp_servers.github]
type = "stdio"
command = "npx"
args = ["-y", "@modelcontextprotocol/server-github"]
```

### Manual Bridge Usage

The repository includes a bridge script in `.gemini/framer-bridge/`:

```bash
cd .gemini/framer-bridge
npm install
node bridge.js list     # List available tools
node bridge.js call <tool> '{"arg": "value"}'  # Call a tool
```

## Getting Your Framer MCP Credentials

1. Open your Framer project
2. Enable MCP in project settings
3. Copy the MCP URL (includes project ID and secret)
4. Replace placeholders in configuration files

## Security Notes

- **Never commit MCP secrets to version control**
- Use environment variables for sensitive data
- The `mcp.json` file in this repo contains placeholder values only

## Workflow

### Typical MCP Workflow:

1. **Start Session:** Call `getProjectXml` to understand project structure
2. **Read Content:** Use `getNodeXml` to read specific pages/components
3. **Make Changes:** Use `updateXmlForNode` for layout/content changes
4. **Manage Styles:** Use `manageColorStyle`/`manageTextStyle` for branding
5. **CMS Updates:** Use CMS tools for blog posts and dynamic content
6. **Publish:** Changes sync to Framer for preview and publishing

## Avakata Website Specific Configuration

### Project Details
- **Domain:** avakata.agency
- **Platform:** Framer
- **Tech Stack:** React, TypeScript

### Key Components
- `BlogPostTemplate.tsx` - Blog post layout with JSON-LD
- `CTABlock.tsx` - Call-to-action blocks with Zoho booking
- `BlogCard.tsx` - Blog listing cards

### Brand Colors
- Primary Blue: `#63B3ED`
- Accent Green: `#7EF500`
- Background: `#000000`

### Integrations
- Zoho Bookings: `https://avakata.zohobookings.com/#/customer/avakata`
- Zoho CRM
- Zoho Chat
- Zoho Analytics

## Troubleshooting

### MCP Connection Issues
1. Verify the MCP URL is correct
2. Check if the Framer project is open
3. Ensure MCP is enabled in Framer settings

### Tool Execution Errors
1. Always call `getProjectXml` first to get node IDs
2. Use exact node IDs from the project XML
3. Check tool documentation in `tools.json`

## Related Files

- `mcp.json` - Main MCP configuration
- `.vscode/mcp.json` - VS Code MCP settings
- `.gemini/framer-bridge/` - Manual bridge scripts
- `automation-scripts/` - Pre-built components and schemas
