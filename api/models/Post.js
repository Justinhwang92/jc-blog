const mongoose = require("mongoose");
const PostSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    photo: { type: String, required: false },
    username: { type: String, required: true },
    tags: { type: Array, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Post", PostSchema);
