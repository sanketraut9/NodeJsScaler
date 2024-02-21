const express = require('express')
const categaries = require('./Routes/categaries')

const app = express()
app.use(express.json())
const port = process.env.port || 3000;

app.use(categaries)


app.listen(port, ()=> console.log(`port is running on ${port}`))
