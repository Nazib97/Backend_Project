const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);
