const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.json());

function loggingMiddleware(req, res, next) {
    // Log timestamp
    const timestamp = new Date().toISOString();

    // Log HTTP method and URL
    const method = req.method;
    const url = req.url;

    // Log request headers
    const headers = req.headers;

    // Log request body (if present)
    let body = '';
    if (req.body) {
        body = JSON.stringify(req.body);
    }

    // Construct log message
    const logMessage = `[${timestamp}] ${method} ${url}\nRequest Headers: ${JSON.stringify(headers)}\nRequest Body: ${body}`;

    // Output log message to console
    console.log(logMessage);

    // Proceed to the next middleware
    next();
}

app.use(loggingMiddleware);

app.get('/', (req, res) => {
    res.send('Wlcome to Express Application');
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});