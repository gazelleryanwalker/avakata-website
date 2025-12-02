const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching ServicesSection XML...');
    const result = await client.callTool({ name: "getNodeXml", arguments: { nodeId: "wge_BkmCk" } });
    let xml = result.content[0].text;

    // 1. Rename Nodes
    xml = xml.replace(/<Services\n/g, '<ServicesContainer\n');
    xml = xml.replace(/<\/Services>/g, '</ServicesContainer>');

    // Note: There is a nested <Services> node (nodeId="f0hoihm3Z") which is the title. 
    // We need to be careful. The regex above might catch it.
    // Let's be more specific with nodeIds if possible, or just accept the rename for now as "ServicesContainer" for the title isn't terrible, but "SectionTitle" would be better.
    // Actually, let's just do a bulk rename and then fix the specific title node if needed.
    // Or better, let's target the specific lines if we can, but regex is safer for the whole file.

    // Let's try to rename the outer container specifically by its ID if we can, but we don't have easy regex for that without parsing.
    // We'll stick to simple replacements for now and refine if it breaks.

    // Rename Content -> ServicesContent
    xml = xml.replace(/<Content\n/g, '<ServicesContent\n');
    xml = xml.replace(/<\/Content>/g, '</ServicesContent>');

    // Rename Row -> ServicesGrid
    xml = xml.replace(/<Row\n/g, '<ServicesGrid\n');
    xml = xml.replace(/<\/Row>/g, '</ServicesGrid>');

    // 2. Update Copy (Punchier)
    // "Avakata Pit Boss (Core Platform)" -> "The Pit Boss"
    xml = xml.replace('Avakata Pit Boss (Core Platform)', 'The Pit Boss');

    // "An agentic control layer..." -> "Your AI command center. Forecasts ROI, self-corrects live, and runs your revenue on autopilot."
    xml = xml.replace('An agentic control layer across ads, analytics, web, and CRM. It forecasts ROI and self-corrects live with predictive budgets, autonomous PPC, SEO 3.0, and CRO autopilot.', 'Your AI command center. Forecasts ROI, self-corrects live, and runs your revenue on autopilot.');

    // "Autonomous PPC Management" -> "Autonomous PPC"
    xml = xml.replace('Autonomous PPC Management', 'Autonomous PPC');

    // "Real-time bid, budget..." -> "Bids, budgets, and audiences—optimized every second. We find the profit you\'re missing."
    xml = xml.replace('Real-time bid, budget, and audience updates. Creative generation and multivariate testing. Query mining, negatives, and new opportunity discovery. Typical results: +34% CVR, −22% CPA, +41% CTR.', 'Bids, budgets, and audiences—optimized every second. We find the profit you\'re missing.');

    console.log('Applying updates to ServicesSection...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "wge_BkmCk",
            xml: xml,
            zoomIntoView: true
        }
    });

    console.log('ServicesSection update complete.');
}

main().catch(console.error);
