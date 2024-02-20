const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/User').then(()=> console.log('connection  is successfull')).catch((err) => console.error('Coudnt connect to mongoDb', err));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { 
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    }
});

const User = mongoose.model('User', userSchema);

async function addUserWithValidation(user) {
    try {
        const newUser = new User(user);
        await newUser.save();
        console.log('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error.message);
    }
}

addUserWithValidation({ username: 'john_doe', email: 'john@example' });
