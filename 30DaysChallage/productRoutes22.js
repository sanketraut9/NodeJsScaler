const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, updateProduct, deleteProduct, getProductsPopulatedWithCategory } = require('./productController22');
// const categoryController23 = require(productController22.getProductsPopulatedWithCategory)

router.post('/', async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const product = await updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await deleteProduct(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/products', async (req, res) => { // Use correct controller method
  try {
    const products = await getProductsPopulatedWithCategory();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
