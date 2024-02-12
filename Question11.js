const express = require('express')
const jwt = require('jsonwebtoken');
const app = express();

const port = 3000;


function authenticationMiddleware(req, res, next) {
    // Your implementation here
    const token = req.header.authentication;

    if(!token){
        return res.status(401).json({message:"No Token Provided"});
    }

    try{
        const decode  =jwt.verify(token, "yours_secret_key_here");

        req.user = decode;

        next();
    }catch(error){
        return res.status(401).json({message: "Invalid token"});

    }
  }

  app.get('/', (req, res) => {
    res.send('error 401: unautherized - No token provided');
  });

  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  })

//   module.exports = authenticationMiddleware;