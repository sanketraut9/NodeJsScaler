const Product = require('./productModel22');
const Category = require('./categoryModel23')

async function createProduct(productData) {
  return await Product.create(productData);
}

async function getAllProducts() {
  return await Product.find();
}

async function updateProduct(productId, updatedProductData) {
  return await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });
}

async function deleteProduct(productId) {
  return await Product.findByIdAndDelete(productId);
}


async function getProductsPopulatedWithCategory(req, res) {
  try {
    const products = await Product.find().populate('category');
    // res.json(products);
    return products;
  } catch (error) {
    // res.status(500).json({ message: error.message });
    throw new Error(error.message);
  }
}


module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct, getProductsPopulatedWithCategory };
