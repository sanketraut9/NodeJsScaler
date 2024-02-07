// 6. Problem: Express Route Handling

// Problem Statement: You are building a web application using Express in Node.js. Create an Express route to handle GET requests to the endpoint "/greet" that takes a query parameter "name" and returns a personalized greeting. If the name parameter is not provided, the default greeting should be "Hello, Guest!".


const express = require('express')
const app = express();
const port = 3000;


/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const greetHandler = (req, res) => {
    const name = req.query.name;
    if (name) {
        req.send(`Hello, ${name}`);        
    }else{
        res.send(`Hello, Guest!`);
    }
}

app.get(`/greet ${greetHandler}`);

app.listen(port, ()=>{
    console.log(`server is started on port ${port}`);
})