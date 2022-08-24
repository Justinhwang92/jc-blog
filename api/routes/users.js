const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// Update
router.post("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      // find user by id and update
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      // server error
      res.status(500).send(error);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      // find user by id
      const user = await User.findById(req.params.id);
      if (user) {
        try {
          // delete posts
          await Post.deleteMany({ username: user.username });
          // find user by id and delete
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User has been deleted!");
        } catch (error) {
          // server error
          res.status(500).send(error);
        }
      }
    } catch (error) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

// Get user
router.get("/:id", async (req, res) => {
  try {
    // find user by id
    const user = await User.findById(req.params.id);
    if (user) {
      // send user data without password
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    }
  } catch (error) {
    // server error
    res.status(500).send(error);
  }
});

module.exports = router;
