const mongoose = require("mongoose");

const CodeVidSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  keywords: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = CodeVid = mongoose.model("codevid", CodeVidSchema);
