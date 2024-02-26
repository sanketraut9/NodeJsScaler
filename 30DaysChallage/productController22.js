const Product = require('./productModel22');

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

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct };
