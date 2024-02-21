const express = require("express");
const Joi = require("joi");
const router = express.Router();
const mongoose = require("mongoose");

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


router.get("/", async (req, res) => {
  let students = await Student.find();
  res.send(students);
});

router.post("/", async (req, res) => {
  const { error } = validateData(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const student = new Student({
    name: req.body.name,
    enrolled: req.body.enrolled,
    phone:req.body.phone
  });
  await student.save();
  res.send(student);
});

router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, isEnrolled: req.body.isEnrolled, phone:req.body.phone },
    { new: true }
  );

  if (!student)
    return res
      .status(404)
      .send("The student with the given Id was not present");

  const { error } = validateData(req.body);
  if (error) res.status(400).send(error.details[0].message);

  res.send(student);
});

router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student)
    return res
      .status(404)
      .send("The student with the given Id was not present");

  res.send(student);
});

router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student)
    return res
      .status(404)
      .send("The student with the given Id was not present");
  res.send(student);
});

function validateData(student) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(15).required(),
    isEnrolled:Joi.boolean(),
    phone:Joi.string().min(10).max(25).required(),
  });
  return schema.validate(student);
}

module.exports = router;
