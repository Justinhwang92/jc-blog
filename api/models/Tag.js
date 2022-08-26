const mongoose = require("mongoose");
const TagSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Tag", TagSchema);
