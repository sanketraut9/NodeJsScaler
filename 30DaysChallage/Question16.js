const express = require('express');
const mongoose = require('mongoose')

const app = express();
const port = 3000;


const mongoDBUrl = 'mongodb://127.0.0.1/testdata';

// Function to establish connection to MongoDB
function connectToMongoDB() {    
    try {
        mongoose.connect(mongoDBUrl);
        console.log('Connected to mongoDb');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connectToMongoDB();

app.get('/', (req, res) => {
    res.send('Express application with MongoDB integration');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});