const express = require('express')
const mongoose = require('mongoose');
const averageAgeOfUsers = require('./averageAgeOfUsers20');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/User')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if unable to connect
  });

// Define routes
app.use('/average-age', averageAgeOfUsers);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
