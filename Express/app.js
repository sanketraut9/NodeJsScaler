const express = require('express');

const app = express();

//Environmet Port       || if not sesrver start on 3000 port
const port = process.env.port || 3000;

//get, post, put, delete
//get() take 2 object - '/' where will requesting to data 


const courses = [
    {id:1, name: 'javascript'},
    {id:2, name: 'java'},
    {id:3, name: 'python'}
]

app.get('/',(req, res) => {
    res.send('hello from scaler topic')
});

app.get('/about',(req, res) => {
    res.send('we create impact')
});

app.get('/contact',(req, res) => {
    res.send('Contact us at a xyz@gmail.com')
});

//Rout parameters:

app.get('/course/:id', (req, res) => {
    // res.send(req.params.id);               //req.params-store route parameter
    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send('The course you are looking for does not exist')
    res.send(course)
});


app.listen(port, ()=> console.log(`port is running on ${port}`))


//Nodemon - automatically restart the server. 