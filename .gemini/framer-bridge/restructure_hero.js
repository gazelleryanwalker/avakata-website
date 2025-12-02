const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({ name: "antigravity-bridge", version: "1.0.0" }, { capabilities: {} });
    await client.connect(transport);

    console.log('Fetching HeroSection XML...');
    const result = await client.callTool({ name: "getNodeXml", arguments: { nodeId: "BX4VkMnKj" } });
    let xml = result.content[0].text;

    // 1. Rename Nodes & Update Content
    // Note: We are doing string replacements on the XML. This is fragile but effective for this specific task.

    // Update HeroSection attributes
    xml = xml.replace('gap="32px"', 'gap="48px"');
    xml = xml.replace('padding="120px 20px 60px 20px"', 'padding="160px 24px 80px 24px"');

    // Rename HeadingStack -> HeroContent
    xml = xml.replace(/HeadingStack/g, 'HeroContent');

    // Rename AvakataAi -> HeroHeadline and update text
    xml = xml.replace(/AvakataAi/g, 'HeroHeadline');
    xml = xml.replace('AVAKATA.AI', 'REVENUE ON AUTOPILOT');

    // Rename SubparagraphStack -> HeroSubtextContainer
    xml = xml.replace(/SubparagraphStack/g, 'HeroSubtextContainer');

    // Rename InlineTextStyleSubparagraphAvakataPitBossAutonomousAiThatFor -> HeroDescription
    xml = xml.replace(/InlineTextStyleSubparagraphAvakataPitBossAutonomousAiThatFor/g, 'HeroDescription');
    // Update Description Text
    const newDescription = "The autonomous AI layer that predicts, prevents, and profits. Your revenue, self-driving.";
    xml = xml.replace(/Avakata Pit Boss: autonomous AI that forecasts ROI and self-corrects live\. Your revenue on autopilot with predictive budgeting and real-time optimization\./, newDescription);

    // Rename InlineTextStyleSubparagraphBuiltByTheTeamBehindGoogleAnalyti -> HeroFooter
    xml = xml.replace(/InlineTextStyleSubparagraphBuiltByTheTeamBehindGoogleAnalyti/g, 'HeroFooter');

    console.log('Applying updates to HeroSection...');
    await client.callTool({
        name: "updateXmlForNode",
        arguments: {
            nodeId: "BX4VkMnKj",
            xml: xml,
            zoomIntoView: true
        }
    });

    console.log('HeroSection update complete.');
}

main().catch(console.error);
