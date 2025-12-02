global.EventSource = require('eventsource');
// Polyfill fetch if needed (Node 18+ has it, but good to be safe if environment is older, though 18+ is standard now)
// const fetch = require('node-fetch'); // We didn't install node-fetch, assuming Node 18+

const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { SSEClientTransport } = require('@modelcontextprotocol/sdk/client/sse.js');

const MCP_URL = 'https://mcp.unframer.co/sse?id=d4252992b5a92066593131e13c98c31ed05da5ff39498561a7dce60fa5e5933a&secret=7fzd9OClXDCn7s39J98ceq0aYn7nrMYD';

async function main() {
    const transport = new SSEClientTransport(new URL(MCP_URL));
    const client = new Client({
        name: "antigravity-bridge",
        version: "1.0.0",
    }, {
        capabilities: {}
    });

    try {
        await client.connect(transport);

        const command = process.argv[2];

        if (command === 'list') {
            const tools = await client.listTools();
            console.log(JSON.stringify(tools, null, 2));
        } else if (command === 'call') {
            const toolName = process.argv[3];
            const argsJson = process.argv[4] || '{}';
            let args;
            try {
                args = JSON.parse(argsJson);
            } catch (e) {
                console.error("Invalid JSON arguments:", argsJson);
                process.exit(1);
            }

            const result = await client.callTool({
                name: toolName,
                arguments: args
            });
            console.log(JSON.stringify(result, null, 2));
        } else {
            console.log("Usage: node bridge.js [list|call <tool> <json_args>]");
        }

        // We need to close the transport to exit cleanly, but SSE might hang.
        // Force exit after a short delay to allow logs to flush.
        setTimeout(() => process.exit(0), 500);

    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

main();
