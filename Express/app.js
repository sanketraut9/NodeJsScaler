const express = require('express');

const app = express();

//Environmet Port       || if not sesrver start on 3000 port
const port = process.env.port || 3000;

//get, post, put, delete
//get() take 2 object - '/' where will requesting to data   

app.get('/',(req, res) => {
    res.send('hello from scaler topic')
});

app.get('/about',(req, res) => {
    res.send('we create impact')
});

app.get('/contact',(req, res) => {
    res.send('Contact us at a xyz@gmail.com')
});


app.listen(port, ()=> console.log(`port is running on ${port}`))


//Nodemon - automatically restart the server. 