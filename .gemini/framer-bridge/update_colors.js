const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';
global.EventSource = require('eventsource');
const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    // 1. Get current homepage XML
    console.log("Fetching homepage XML...");
    const result = await client.callTool({
        name: "getNodeXml",
        arguments: { nodeId: "augiA20Il" } // Homepage ID
    });

    let xml = result.content[0].text;

    // 2. Perform replacements
    const replacements = [
        { from: '"/0"', to: '"/Neutral/Background"' },
        { from: '"/5"', to: '"/Neutral/Surface"' },
        { from: '"/15"', to: '"/Neutral/Surface"' },
        { from: '"/48"', to: '"/Brand/Primary"' },
        { from: '"/60"', to: '"/Text/Secondary"' },
        { from: '"/100"', to: '"/Text/Primary"' },
        { from: '"rgb(0, 0, 0)"', to: '"/Neutral/Background"' },
        { from: '"rgba(0, 0, 0, 0.5)"', to: '"/Neutral/Background"' }, // Fix transparency later if needed, for now map to bg
        { from: '"rgb(255, 255, 255)"', to: '"/Text/Primary"' }
    ];

    let newXml = xml;
    for (const { from, to } of replacements) {
        // Global replace
        newXml = newXml.split(from).join(to);
    }

    if (newXml === xml) {
        console.log("No changes needed.");
        process.exit(0);
    }

    // 3. Update XML
    console.log("Applying updates...");
    // We only update the children of the page to avoid issues with the root node itself if possible, 
    // but here we are replacing attributes on the root too potentially.
    // The tool docs say: "This tool is generally called using a component or page nodeId and passing a portion of the XML tree."
    // So passing the whole modified XML for the page ID should work.

    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "augiA20Il",
            xml: newXml,
            zoomIntoView: false
        }
    });

    console.log("Update complete.");
    setTimeout(() => process.exit(0), 500);
}

main().catch(console.error);
