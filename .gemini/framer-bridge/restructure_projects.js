const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching Projects section XML...');
    const result = await client.callTool({ name: "getNodeXml", arguments: { nodeId: "YIR3QiCuX" } });
    let xml = result.content[0].text;

    // Rename nodes
    xml = xml.replace(/<ProjectsSection\n/g, '<ProjectsSectionContainer\n');
    xml = xml.replace(/<\/ProjectsSection>/g, '</ProjectsSectionContainer>');

    xml = xml.replace(/<ProjectsContent\n/g, '<ProjectsStickyContent\n');
    xml = xml.replace(/<\/ProjectsContent>/g, '</ProjectsStickyContent>');

    // Update heading
    xml = xml.replace('OUR*PROJECTS', 'THE*WORK');

    // Update CTA copy
    xml = xml.replace('WANT TO VIEW ALL OF OUR PROJECTS?', 'SEE THE FULL PORTFOLIO');
    xml = xml.replace('View  Projects', 'View All Work');

    console.log('Applying updates to Projects section...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "YIR3QiCuX",
            xml: xml,
            zoomIntoView: true
        }
    });

    console.log('Projects section update complete.');
}

main().catch(console.error);
