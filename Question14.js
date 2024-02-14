const express = require('express');
const cache = require('memory-cache');
const app = express();
const port = 3000;

const cachingMiddleware = (req, res, next) => {
    const key = req.url;
    const cachedResponse = cache.get(key);

    if (cachedResponse) {
        console.log(`Cache hit: ${key}`);
        res.send(cachedResponse);
    } else {
        console.log(`Cache miss: ${key}`);
        const originalSend = res.send;
        res.send = (body) => {
            cache.put(key, body);
            console.log(`Response cached for ${key}`);
            originalSend.call(res, body);
        };
        next();
    }
};

app.use(cachingMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to Express Application');
});

app.get('/data', (req, res) => {
    const responseData = { message: 'This is cached data' };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
