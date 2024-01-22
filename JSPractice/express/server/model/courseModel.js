const mongoose = require("mongoose");

const courseschema = mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "please add a text field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseschema);
