const mongoose = require("mongoose");

const CodeDefSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: { type: String, required: true },
  keywords: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = CodeDef = mongoose.model("codedef", CodeDefSchema);
