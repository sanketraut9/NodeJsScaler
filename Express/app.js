const express = require('express');
const morgan  =require('morgan')

const app = express();

//moddleware export
const middlewareFunc = require('./middlewares/middle')
const middlewareFunc2 = require('./middle2')

//Environmet Port       || if not sesrver start on 3000 port
const port = process.env.port || 3000;


app.use(express.json())

//Custom Midlewares
app.use(middlewareFunc)
app.use(middlewareFunc2)

app.use(morgan())
//get, post, put, delete
//get() take 2 object - '/' where will requesting to data 


let courses = [
    {id:1, name: 'javascript'},
    {id:2, name: 'java'},
    {id:3, name: 'python'}
]

//Get - read

app.get('/',(req, res) => {
    res.send('hello from scaler topic')
});

app.get('/about',(req, res) => {
    res.send('we create impact')
});

app.get('/contact',(req, res) => {
    res.send('Contact us at a xyz@gmail.com')
});

app.get('/courses',(req, res) => {
    res.send(courses)
});


//Post() - create

app.post('/courses', (req, res) => {
    const course = {
        id: req.body.id,
        name:req.body.name
    }
    courses.push(course)
    res.send(course)
})


//Put - update

app.put('/course/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send('The course you are looking for does not exist')

    course = req.body
    res.send(course)
})


//Delete
// app.delete('/course/:id', (req,res) => {
//     let updatedCourses = courses.filter(course => course.id !== parseInt(req.params.id))

//     courses = updatedCourses
//     res.send(courses)

// })

// app.delete('/course/:name', (req,res) => {
//     let updatedCourses = courses.filter(course => course.name !== req.params.name)

//     courses = updatedCourses
//     res.send(courses)

// })

app.delete('/course/:id', (req,res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send('The course you are looking for does not exist')

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(courses)

})

//Route parameters:

app.get('/course/:id', (req, res) => {
    // res.send(req.params.id);               //req.params-store route parameter
    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send('The course you are looking for does not exist')
    res.send(course)
});


app.listen(port, ()=> console.log(`port is running on ${port}`))


//Nodemon - automatically restart the server. 