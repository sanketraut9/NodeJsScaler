const mongoose = require("mongoose");
const Joi = require("joi");


const studentsSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 20},
    isEnrolled:{
      type:Boolean,
      default:false,
    },
    phone:{
      type:String,
      require:true,
      minlength:10,
      maxlength:25
    }
  });
  
  const Student = mongoose.model("Student", studentsSchema);

  function validateData(student) {
    const schema = Joi.object({
      name: Joi.string().min(2).max(15).required(),
      isEnrolled:Joi.boolean(),
      phone:Joi.string().min(10).max(25).required(),
    });
    return schema.validate(student);
  }

  exports.Student = Student
  exports.validate = validateData