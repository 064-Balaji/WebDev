const express = require("express");
const router = express();
const {
  getCourse,
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/courseController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCourses).post(protect, createCourse);

router
  .route("/:id")
  .get(protect, getCourse)
  .delete(protect, deleteCourse)
  .put(protect, updateCourse);

module.exports = router;
