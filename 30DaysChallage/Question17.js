const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/User').then(()=> console.log('connection  is successfull')).catch((err) => console.error('Coudnt connect to mongoDb', err));



const userSchema  = new mongoose.Schema({
    username: String,
    email: String
})


//Model

const User = mongoose.model('User', userSchema )

async function addUserToDatabase(user){
    try {
        const newUser = new User(user)
        await newUser.save();

        console.log(`User added successfully: ${newUser}`);
    } catch (error) {
        console.error('Error adding user to database:', error);
    }
    
}


addUserToDatabase({ username: 'john_doe', email: 'john@example.com' })