const WebSocket = require('ws');

const PORT = 3000;
let clientCount = 0;
const clients = [];

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {
  clientCount++;
  const clientId = clientCount;
  clients.push(ws);
  console.log(`Client ${clientId} connected.`);

  ws.send(JSON.stringify({ type: 'id', id: clientId }));

  ws.on('message', (message) => {
    // Handle player interactions and game logic here
    console.log(`Received message from client ${clientId}: ${message}`);
  });

  ws.on('close', () => {
    console.log(`Client ${clientId} disconnected.`);
    // Remove the disconnected client from the clients array
    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });

  ws.on('error', (err) => {
    console.error(`Client ${clientId} error:`, err);
  });
});

console.log(`WebSocket server listening on port ${PORT}`);
