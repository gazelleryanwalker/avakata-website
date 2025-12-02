const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const fs = require('fs');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching fresh copy of homepage from Framer...');

    // Get the absolute original state by fetching it fresh
    const result = await client.callTool({
        name: "getNodeXml",
        arguments: { nodeId: "augiA20Il" }
    });

    const currentXml = result.content[0].text;

    // Save it for reference
    fs.writeFileSync('homepage_before_fix.xml', currentXml);

    console.log('Current XML saved. Now manually pressing Undo in Framer is the safest option.');
    console.log('Please press Cmd+Z in Framer about 6-8 times to undo all the broken changes.');
    console.log('The color updates should remain intact as they were done earlier.');
}

main().catch(console.error);
