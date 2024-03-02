const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

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
    description: { type: String, required: true },
    price: { type: Number, required: true },
  });
  
  const Product = mongoose.model('Product24', productSchema);


  app.post('/', async (req, res) => {
    try {
        const {name, description, price} = req.body;
        const product = new Product({name, description, price});
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {name, description, price}  = req.body;
      const updatdProduct = await Product.findByIdAndUpdate({name, description, price}, {new : true});
      res.json(updatdProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  