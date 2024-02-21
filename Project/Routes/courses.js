const express = require("express");
const router = express.Router();
const {Course, validate} = require('../Models/coursesModel')
const {Category} = require('../Models/categoriesModel')



router.get("/", async (req, res) => {
  let courses = await Course.find();
  res.send(courses);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const category = await Category.findById(req.body.categoryId)
  if(!category) return res.status(400).send('Invalid ID')

  const course = new Course({
    title: req.body.title,
    category:{
        _id: category.__id,
        name: category.name

    },
    creator: req.body.creator,
    rating:req.body.rating
  });
  await course.save();
  res.send(course);
});

router.put("/:id", async (req, res) => {
    const { error } = validate(req.body);
    if (error) res.status(400).send(error.details[0].message);

    const category = await Category.findById(req.body.categoryId)
    if(!category) return res.status(400).send('Invalid ID')

    const course = await Course.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title,
        category:{
            _id: category.__id,
            name: category.name

        },
        creator: req.body.creator,
        rating:req.body.rating },
    { new: true }
  );

  if (!course)
    return res
      .status(404)
      .send("The course with the given Id was not present");


  res.send(course);
});

router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);

  if (!course)
    return res
      .status(404)
      .send("The course with the given Id was not present");

  res.send(course);
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course)
    return res
      .status(404)
      .send("The course with the given Id was not present");
  res.send(course);
});


module.exports = router;
