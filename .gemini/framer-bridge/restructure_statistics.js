const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching Statistics section XML...');
    const result = await client.callTool({ name: "getNodeXml", arguments: { nodeId: "e51S8uD3x" } });
    let xml = result.content[0].text;

    // Rename nodes
    xml = xml.replace(/<Statistics\n/g, '<StatisticsSection\n');
    xml = xml.replace(/<\/Statistics>/g, '</StatisticsSection>');

    xml = xml.replace(/<Content\n/g, '<StatisticsContent\n');
    xml = xml.replace(/<\/Content>/g, '</StatisticsContent>');

    xml = xml.replace(/<Row\n/g, '<StatisticsGrid\n');
    xml = xml.replace(/<\/Row>/g, '</StatisticsGrid>');

    // Update heading
    xml = xml.replace('KEYMETRICS', 'THE*NUMBERS');

    // Tighten metric descriptions
    xml = xml.replace(
        'Demonstrates our extensive experience across legal, healthcare, e-commerce, and services sectors with proven AI-driven results.',
        'Legal, healthcare, e-commerce, services. We\'ve seen it all.'
    );

    xml = xml.replace(
        'From co-creating the technology that became Google Analytics to building autonomous AI systems for revenue operations.',
        'From Google Analytics to autonomous revenue AI. We wrote the playbook.'
    );

    xml = xml.replace(
        'Click-through rate increase achieved through autonomous creative testing and audience optimization.',
        'Autonomous creative testing and audience optimization at work.'
    );

    xml = xml.replace(
        'Cost per acquisition decrease through real-time bid optimization and intelligent budget allocation.',
        'Real-time bid optimization. Intelligent budget allocation. Lower costs.'
    );

    xml = xml.replace(
        'Pit Boss works around the clock, forecasting ROI and self-correcting campaigns in real-time without human intervention.',
        'Always on. Always optimizing. Zero human intervention required.'
    );

    console.log('Applying updates to Statistics section...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "e51S8uD3x",
            xml: xml,
            zoomIntoView: true
        }
    });

    console.log('Statistics section update complete.');
}

main().catch(console.error);
