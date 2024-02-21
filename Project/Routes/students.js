const express = require("express");
const router = express.Router();
const {Student, validate} = require('../Models/studentsModel')


router.get("/", async (req, res) => {
  let students = await Student.find();
  res.send(students);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
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

  const { error } = validate(req.body);
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


module.exports = router;
