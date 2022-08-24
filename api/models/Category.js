const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Category", CategorySchema);
