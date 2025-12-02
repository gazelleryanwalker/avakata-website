const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching Leadership (MeetUs) section XML...');
    const result = await client.callTool({ name: "getNodeXml", arguments: { nodeId: "hPbldFu07" } });
    let xml = result.content[0].text;

    // Rename nodes
    xml = xml.replace(/<MeetUs00\n/g, '<LeadershipContainer\n');
    xml = xml.replace(/<\/MeetUs00>/g, '</LeadershipContainer>');

    xml = xml.replace(/<MeetUsContent\n/g, '<LeadershipStickyContent\n');
    xml = xml.replace(/<\/MeetUsContent>/g, '</LeadershipStickyContent>');

    // Update team member description
    xml = xml.replace(
        'Founder &amp; CEO — Analytics pioneer, builder, operator. Two exits. Still shipping.',
        'Founder &amp; CEO — Built Google Analytics. Two exits. Still shipping code.'
    );

    console.log('Applying updates to Leadership section...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "hPbldFu07",
            xml: xml,
            zoomIntoView: true
        }
    });

    console.log('Leadership section update complete.');
}

main().catch(console.error);
