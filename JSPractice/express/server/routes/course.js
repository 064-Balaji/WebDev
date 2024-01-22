const express = require("express");
const router = express();
const {
  getCourse,
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/courseController");

router.get("/", getCourses);

router.get("/:id", getCourse);

router.post("/", createCourse);

router.delete("/:id", deleteCourse);

router.put("/:id", updateCourse);

module.exports = router;
