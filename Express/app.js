const express = require('express');

const app = express();
const port = 3000;

//get, post, put, delete
//get() take 2 object - '/' where will requesting to data   

app.get('/',(req, res) => {
    res.send('hello from scaler topic')
});

app.get('/about',(req, res) => {
    res.send('we create impact')
});


app.listen(port, ()=> console.log(`port is running on ${port}`))