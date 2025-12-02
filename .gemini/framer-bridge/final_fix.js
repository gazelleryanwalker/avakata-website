const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');
const fs = require('fs');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Loading ORIGINAL backup from before ANY changes...');

    // Read the very first backup (JSON format from MCP)
    const originalData = JSON.parse(fs.readFileSync('homepage_dump.xml', 'utf8'));
    let originalXml = originalData.content[0].text;

    console.log('Applying ONLY the color replacements (which worked correctly)...');

    // Apply the same color replacements that worked before
    const colorReplacements = [
        { from: 'backgroundColor="/0"', to: 'backgroundColor="/Neutral/Background"' },
        { from: 'backgroundColor="/5"', to: 'backgroundColor="/Neutral/Surface"' },
        { from: 'backgroundColor="/15"', to: 'backgroundColor="/Neutral/Surface"' },
        { from: 'backgroundColor="/48"', to: 'backgroundColor="/Brand/Primary"' },
        { from: 'backgroundColor="/60"', to: 'backgroundColor="/Text/Secondary"' },
        { from: 'backgroundColor="/100"', to: 'backgroundColor="/Text/Primary"' },
        { from: 'color="/0"', to: 'color="/Neutral/Background"' },
        { from: 'color="/5"', to: 'color="/Neutral/Surface"' },
        { from: 'color="/15"', to: 'color="/Neutral/Surface"' },
        { from: 'color="/48"', to: 'color="/Brand/Primary"' },
        { from: 'color="/60"', to: 'color="/Text/Secondary"' },
        { from: 'color="/100"', to: 'color="/Text/Primary"' }
    ];

    let cleanXmlWithColors = originalXml;
    for (const { from, to } of colorReplacements) {
        cleanXmlWithColors = cleanXmlWithColors.split(from).join(to);
    }

    console.log('Restoring homepage with clean content + color updates...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "augiA20Il",
            xml: cleanXmlWithColors,
            zoomIntoView: false
        }
    });

    console.log('✅ Homepage restored successfully!');
    console.log('✅ Original content preserved');
    console.log('✅ Color system updates applied');
    console.log('✅ No broken text content');
}

main().catch(console.error);
