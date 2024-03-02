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
    quantity: { type: Number, required: true, validate: {
        validator: value => Number.isInteger(value) && value > 0, message: `quantity must be a positive number`
    } },
    price: { type: Number, required: true, validate: {
        validator: value => Number.isInteger(value) && value > 0, message: `price must be a positive number`
    }},
});

  
  const Product = mongoose.model('Product25', productSchema);

  async function createProductNameIndex() {
    try{
        await Product.collection.createIndex({name:1});
    } catch (error) {
        console.log('Error in index creation');
    }
  }

  createProductNameIndex();

  app.get('/products', async(req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message})
    }
  })



  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });