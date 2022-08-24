const router = require("express").Router();
const Category = require("../models/Category");

// Create
router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    // save category
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    // server error
    res.status(500).send(error);
  }
});

// Get
router.get("/", async (req, res) => {
  try {
    // get all categories
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
