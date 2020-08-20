const mongoose = require("mongoose");

const ItemCodeSchema = new mongoose.Schema({
  codeShow: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "codeshow",
  },
  description: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

module.exports = ItemCode = mongoose.model("itemcode", ItemCodeSchema);
