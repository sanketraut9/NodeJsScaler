const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

const port = 3000;

function setupWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });
  
    wss.on('connection', (ws) => {
      console.log('Client connected');
  
      ws.on('message', (message) => {
        console.log('Received message:', message);
        // Handle incoming messages here, e.g., broadcast to all clients
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      });
  
      ws.on('close', () => {
        console.log('Client disconnected');
      });
    });
  }
  
  setupWebSocketServer(server);
  

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
