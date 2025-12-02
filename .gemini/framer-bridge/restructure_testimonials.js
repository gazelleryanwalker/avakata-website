const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching Testimonials section XML...');
    const result = await client.callTool({ name: "getNodeXml", arguments: { nodeId: "aRJ6enrBA" } });
    let xml = result.content[0].text;

    // Rename nodes
    xml = xml.replace(/<Testimonials\n/g, '<TestimonialsSection\n');
    xml = xml.replace(/<\/Testimonials>/g, '</TestimonialsSection>');

    xml = xml.replace(/<TestimonialsContent\n/g, '<TestimonialsStickyContent\n');
    xml = xml.replace(/<\/TestimonialsContent>/g, '</TestimonialsStickyContent>');

    // Update heading
    xml = xml.replace('CUSTOMER*THOUGHTS', 'WHAT*CLIENTS*SAY');

    console.log('Applying updates to Testimonials section...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "aRJ6enrBA",
            xml: xml,
            zoomIntoView: true
        }
    });

    console.log('Testimonials section update complete.');
}

main().catch(console.error);
