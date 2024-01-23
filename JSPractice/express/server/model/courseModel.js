const mongoose = require("mongoose");

const courseschema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "user",
    },
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
