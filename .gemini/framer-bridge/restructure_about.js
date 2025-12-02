const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching AboutSection XML...');
    const result = await client.callTool({ name: "getNodeXml", arguments: { nodeId: "KktivqyT0" } });
    let xml = result.content[0].text;

    // Rename nodes for clarity
    xml = xml.replace(/<AboutUs00\n/g, '<AboutContainer\n');
    xml = xml.replace(/<\/AboutUs00>/g, '</AboutContainer>');

    xml = xml.replace(/<AboutUsContent\n/g, '<AboutStickyContent\n');
    xml = xml.replace(/<\/AboutUsContent>/g, '</AboutStickyContent>');

    // Update the heading
    xml = xml.replace('ABOUT*AVAKATA', 'ABOUT*US');

    // Update the 3D element content with punchier copy
    // Mission
    xml = xml.replace(
        'Build the agentic AI layer that makes companies measurably more profitable with less human thrash.',
        'Build AI that makes companies more profitable with zero human thrash.'
    );

    // Vision
    xml = xml.replace(
        'Every business runs with an always‑on AI Pit Boss that predicts, prevents, and profits.',
        'Every business runs on autopilot with an AI that predicts, prevents, and profits.'
    );

    // Origin Story
    xml = xml.replace(
        'From the tech that became Google Analytics to an AI layer that runs revenue. 3,500+ managed accounts across legal, healthcare, e‑commerce, and services.',
        'From Google Analytics pioneers to AI revenue operators. 3,500+ accounts. 25+ years of data mastery.'
    );

    // Values
    xml = xml.replace(
        'Outcomes over optics. Autonomy with accountability. Clarity first. Security &amp; privacy.',
        'Outcomes over optics. Autonomy with accountability. Security first. No BS.'
    );

    console.log('Applying updates to AboutSection...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "KktivqyT0",
            xml: xml,
            zoomIntoView: true
        }
    });

    console.log('AboutSection update complete.');
}

main().catch(console.error);
