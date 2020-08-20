const mongoose = require("mongoose");

const CodeShowSchema = new mongoose.Schema({
  title: {
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

module.exports = CodeShow = mongoose.model("codeshow", CodeShowSchema);
