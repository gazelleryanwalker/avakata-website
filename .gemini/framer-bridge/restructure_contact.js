const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching PriceRequest (Contact) section XML...');
    const result = await client.callTool({ name: "getNodeXml", arguments: { nodeId: "vlkadXo1o" } });
    let xml = result.content[0].text;

    // Rename nodes
    xml = xml.replace(/<PriceRequest\n/g, '<ContactSection\n');
    xml = xml.replace(/<\/PriceRequest>/g, '</ContactSection>');

    xml = xml.replace(/<Content\n/g, '<ContactContent\n');
    xml = xml.replace(/<\/Content>/g, '</ContactContent>');

    // Update copy to be punchier
    xml = xml.replace('Ready for Autonomous AI?', 'Ready to Go Autonomous?');

    xml = xml.replace(
        'Let Avakata Pit Boss forecast your ROI and self-correct your campaigns in real-time. Book a 15-minute fit call or email us to get started.',
        'Let the Pit Boss run your revenue on autopilot. Book a 15-min call or hit us up.'
    );

    console.log('Applying updates to Contact section...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "vlkadXo1o",
            xml: xml,
            zoomIntoView: true
        }
    });

    console.log('Contact section update complete.');
}

main().catch(console.error);
