const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb');

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

  async function getProductStatistics() {
    try {
        const result = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    totalProducts: { $sum: 1 },
                    highestQuantity: { $max: '$quantity' },
                    averagePrice: { $avg: '$price' }
                }
            }
        ]);
        return result[0];
    } catch (error) {
        console.error('Error in getProductStatistics:', error);
        throw error;
    }
}

  getProductStatistics();


  app.get('/products', async(req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Error fetching products' });
    }
  });
  
  app.get('/productStatistics', async(req, res) => {
    try {
      const statistics = await getProductStatistics();
      res.json(statistics);
    } catch (error) {
      console.error('Error fetching product statistics:', error);
      res.status(500).json({ error: 'Error fetching product statistics' });
    }
  });
  



  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });