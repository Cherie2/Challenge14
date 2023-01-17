const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require('../utils/auth')

router.get("/", withAuth, async (req, res) => {
    try {
      const userPosts = await Post.findAll({
        where: {
          user_id:req.session.user_id,
        },
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
  
  router.get("/update", (req, res) => {
    res.render("update", {
      logged_in: req.session.logged_in,
    });
  });
  

  module.exports = router;