const mongoose = require("mongoose");
const Joi = require("joi");
const {categoriesSchema} = require('../Models/categoriesModel')


const coursesSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        trim:true,
        minlength: 5,
        maxlength: 40
    },
    category: {
        type: categoriesSchema,
        require:true
    },
    creator: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required:true
    }
  });
  
  const Course = mongoose.model("Course", coursesSchema);


  function validateData(course) {
    const schema = Joi.object({
      title: Joi.string().min(5).max(25).required(),
      category: Joi.string().required(),
      creator: Joi.string().min(5).required(),
      rating: Joi.number().min(0).max(10).required(),
    });
    return schema.validate(course);
  }


  exports.Course = Course
  exports.validate = validateData