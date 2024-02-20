// 7. Problem: Express Middleware

// Problem Statement: Implement an Express middleware function that logs the timestamp and the HTTP method of every incoming request to the server.

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

const express = require('express');
const app = express();
const port = 3000;

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString()
  const method = req.method
  console.log(`${timestamp} - ${method} request received.`);
  next()
  }

  app.use(requestLoggerMiddleware)

  app.get('/', (req, res) => {
    res.send('Hello from Sanket')
  })

  app.listen(port)