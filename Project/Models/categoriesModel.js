const mongoose = require("mongoose");
const Joi = require("joi");


const categoriesSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 20 },
  });
  
  const Category = mongoose.model("Category", categoriesSchema);


  function validateData(category) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
    });
    return schema.validate(category);
  }


  exports.Category = Category
  exports.validate = validateData
  exports.categoriesSchema = categoriesSchema