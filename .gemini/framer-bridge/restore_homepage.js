const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const fs = require('fs');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Loading original clean XML from backup...');
    const cleanXml = fs.readFileSync('homepage_clean.xml', 'utf8');

    console.log('Restoring homepage to original state...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "augiA20Il",
            xml: cleanXml,
            zoomIntoView: false
        }
    });

    console.log('✅ Homepage restored to original state successfully!');
    console.log('The color updates are still intact, only the broken content changes have been reverted.');
}

main().catch(console.error);
