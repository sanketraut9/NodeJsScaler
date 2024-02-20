const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const mongoDBUrl = 'mongodb://127.0.0.1/User';
mongoose.connect(mongoDBUrl)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


// Route to get all users
async function getAllUsers(req, res) {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

app.get('/users', getAllUsers);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
