const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [Comment, User],
    });
    const userBlog = userPosts.map((post) => post.get({ plain: true }));
    console.log(userBlog);

    res.render("dash", {
      userBlog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/createpost", (req, res) => {
  res.render("createPost", {
    logged_in: req.session.logged_in,
  });
});

router.get("/post/:id", async (req, res) => {
  try {
    const data = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [User, Comment],
    });

    const post = data.get({ plain: true });

    res.render("update", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
