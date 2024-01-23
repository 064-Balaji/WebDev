const express = require("express");
const router = express.Router();
const { getUser, login, register } = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.get("/:id", protect, getUser);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
