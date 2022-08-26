const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Tag = require("../models/Tag");

// Create
router.post("/", async (req, res) => {
  const { title, desc, photo, username } = req.body;
  const tags = req.body.tags?.slice();

  console.log(tags);
  const newPost = new Post({ title, desc, photo, username, tags });
  // const newPost = new Post(req.body);
  try {
    // save post
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    // server error
    res.status(500).send(error);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    // find post by id
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        // update post
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    // find post by id
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted!");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get
router.get("/:id", async (req, res) => {
  try {
    // find post by id
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all
router.get("/", async (req, res) => {
  const username = req.query.user;
  const tagName = req.query.tag;
  try {
    let posts;
    if (username) {
      // find posts by username
      // usage: localhost:4000/api/posts?user=testUsername
      posts = await Post.find({ username }); // same as { username: username }
    } else if (tagName) {
      // find posts by tag
      // usage: localhost:4000/api/posts?tag=testTag
      posts = await Post.find({ tags: { $in: [tagName] } });
    } else {
      // find all posts
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
