const rateLimit = require('express-rate-limit');

function rateLimitMiddleware(req, res, next) {
  // Create a rate limiter instance
  const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many requests, please try again later.',
  });

  // Apply the rate limiter to the current request
  limiter(req, res, next);
}

module.exports = rateLimitMiddleware;
