const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  try {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // user model
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    // save user to database
    const user = await newUser.save();
    // send user data
    res.status(200).json(user);
  } catch (error) {
    // server error
    res.status(500).send(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    // find user by username
    const user = await User.findOne({
      username: req.body.username,
    });
    // check if user exists
    !user && res.status(400).json("Wrong credentials!");

    // check password
    const validate = await bcrypt.compare(req.body.password, user.password);
    // check if password is valid
    !validate && res.status(400).json("Wrong credentials!");

    // send user data without password
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    // server error
    res.status(500).send(error);
  }
});

module.exports = router;
