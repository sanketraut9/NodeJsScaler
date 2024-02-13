const express = require('express');
const setupWebSocket = require('./setupWebSocket');

const app = express();
const server = app.listen(3001, () => {
  console.log('Express server is running on port 3001');
});

// Setup WebSocket integration
setupWebSocket(server);
