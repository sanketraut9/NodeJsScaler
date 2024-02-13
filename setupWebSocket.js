const WebSocket = require('ws');
const express = require('express');
const http = require('http');

function setupWebSocket(server) {
  // Create a WebSocket server instance
  const wss = new WebSocket.Server({ server });

  // WebSocket connection event handler
  wss.on('connection', function connection(ws) {
    console.log('WebSocket client connected');

    // WebSocket message event handler
    ws.on('message', function incoming(message) {
      console.log('Received message:', message);

      // Echo back the received message
      ws.send(message);
    });

    // WebSocket close event handler
    ws.on('close', function close() {
      console.log('WebSocket client disconnected');
    });
  });

  // Define an Express endpoint for serving HTML page with WebSocket client script
  const app = express();
  app.get('/websocket', function(req, res) {
    res.sendFile(__dirname + '/websocket.html');
  });

  // Start the Express server
  const httpServer = http.createServer(app);
  httpServer.listen(3000, () => {
    console.log('Express server with WebSocket support is running on port 3000');
  });
}

module.exports = setupWebSocket;
