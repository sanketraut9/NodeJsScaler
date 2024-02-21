const express = require('express')
const categaries = require('./Routes/categaries')
const mongoose = require('mongoose')



const mongoDBUrl = ('mongodb://127.0.0.1/learningPlatform')
mongoose.connect(mongoDBUrl)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

const app = express()
app.use(express.json())
const port = process.env.port || 3000;

app.use(categaries)


app.listen(port, ()=> console.log(`port is running on ${port}`))
