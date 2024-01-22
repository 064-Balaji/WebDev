const asyncHandler = require("express-async-handler");
const Course = require("../model/courseModel");

const getCourses = asyncHandler(async (req, res) => {
  const course = await Course.find();

  if (!course) {
    res.status(400);
    throw new Error("Requested Course is not available");
  }

  res.status(200).json(course);
});

const getCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(`${course} is found.`);
});

const createCourse = asyncHandler(async (req, res) => {
  const course = await Course.create({
    text: req.body.text,
  });
  res.json(`${course} was sucessfully created`);
});

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(400);
    throw new Error("Requested Course is not available");
  }

  await Course.deleteOne({ _id: req.params.id });
  res.json(`course was removed`);
});

const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  ).catch();
  res.json(`course ${updateCourse} was susccessfully updated`);
});

module.exports = {
  getCourse,
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
};
