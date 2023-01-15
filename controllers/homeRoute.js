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

router.get("/dashboard", (req, res)=>{
  res.render("dash");
});

router.get("/dashboard/createpost", (req, res) => {
  res.render("createPost", {
    logged_in: req.session.logged_in,
  });
});

router.get("/dashboard/updatepost", (req, res) => {
  res.render("update", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
