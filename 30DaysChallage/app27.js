const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000

mongoose.connect('mongodb://127.0.0.1/myapp')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
  app.use(bodyParser.json());


  const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true, validate: {
        validator: value => Number.isInteger(value) && value > 0, message: `quantity must be a positive number`
    } },
    price: { type: Number, required: true, validate: {
        validator: value => Number.isInteger(value) && value > 0, message: `price must be a positive number`
    }},
});

  
  const Product = mongoose.model('Product', productSchema);


  function authenticateAndAuthorize(req, res, next) {
    const token = req.headers['authorization'];


  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }


  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    } else {
      
      req.user = decoded; 
      next(); 
    }
  });
}


function checkRole(role) {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
      }
      next();
    };
  }



  app.get('/admin', authenticateAndAuthorize, checkRole('admin'), (req, res) => {
    res.json({ message: 'Admin route accessed successfully' });
  });
  
  app.get('/user', authenticateAndAuthorize, (req, res) => {
    res.json({ message: 'User route accessed successfully' });
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });