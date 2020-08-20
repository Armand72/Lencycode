const mongoose = require("mongoose");

const CommentarySchema = new mongoose.Schema({
  itemCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "itemcode",
  },
  text: {
    type: String,
    required: true,
  },
  spanNumber: {
    type: String,
    required: true,
  },
});

module.exports = Commentary = mongoose.model("commentary", CommentarySchema);
