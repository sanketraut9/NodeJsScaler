// Problem: Express Static Files

// Problem Statement: Create an Express application that serves static files (e.g., HTML, CSS, images) from a "public" directory. Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.

const path = require('path');
const express = require('express')
const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Question10.html'));
})


app.listen(port, () => {
    console.log(`server is running on ${port}`);
})