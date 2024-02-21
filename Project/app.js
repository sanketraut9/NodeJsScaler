const express = require('express')
const mongoose = require('mongoose')
const categaries = require('./Routes/categaries')
const students = require('./Routes/students')
const courses = require('./Routes/courses')
const app = express()



const mongoDBUrl = ('mongodb://127.0.0.1/learningPlatform')
mongoose.connect(mongoDBUrl)
.then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
    
    app.use(express.json())
    app.use('/api/categaries', categaries)
    app.use('/api/students', students)
    app.use('/api/courses', courses)
    
    

    const port = process.env.port || 3000;
    app.listen(port, ()=> console.log(`port is running on ${port}`))
    