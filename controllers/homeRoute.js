const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id:req.params.id,
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [User],
    });
    const singlePost = postData.get({ plain: true });
    console.log(singlePost);
     res.render("existingBlogPost", {
      singlePost,
      logged_in: req.session.logged_in,
  });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;