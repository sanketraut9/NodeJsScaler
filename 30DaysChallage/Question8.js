// 8. Problem: Express Error Handling

// Problem Statement: Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to catch and handle this specific error, returning a custom error message and a 400 Bad Request status.


/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const express = require('express');
const app = express()
const port = 3000;

function positiveIntegerHandler(req, res) {
    // Your implementation here
    let number = req?.query?.number;
    console.log(number);
    number = parseInt(number)

    if(Number.isInteger(number) && number > 0){
        res.send("The number is positive.")
    }
    else{
        throw new Error("Invalid Input")
    }
  }

  function errorHandler(err, req, res, next){
    res.status(400).send("Invalid Input");
  }


  app.get('/positive', positiveIntegerHandler);
  app.use(errorHandler);
  app.listen(port, () => console.log(`Server running on port ${port}`));