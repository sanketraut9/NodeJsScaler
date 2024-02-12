// 12. Problem: Express Rate Limiting

// Problem Statement: Implement a rate-limiting middleware for an Express application. The middleware should limit the number of requests from a single IP address to a specified rate, and return a 429 Too Many Requests status if the limit is exceeded.

const express = require('express');

const rateLimitMiddleware = require('./Express/middlewares/rateLimitMiddleware');

const app = express();

// Apply rate limiting middleware to all routes
app.use(rateLimitMiddleware);

// Define your routes here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
