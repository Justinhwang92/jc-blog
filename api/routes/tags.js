const router = require("express").Router();
const Tag = require("../models/Tag");

// Create
router.post("/", async (req, res) => {
  const newTag = new Tag(req.body);
  try {
    // save Tag
    const savedTag = await newTag.save();
    res.status(200).json(savedTag);
  } catch (error) {
    // server error
    res.status(500).send(error);
  }
});

// Get
router.get("/", async (req, res) => {
  try {
    // get all tags
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
