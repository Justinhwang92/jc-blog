const mongoose = require("mongoose");
const TagSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Tag", TagSchema);
