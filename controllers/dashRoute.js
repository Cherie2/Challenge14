const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.get("/dashboard", async (req, res) => {
    try {
      res.render('dash');
      const userPosts = await User.findAll({
        include: [Post],
        where: {
          id:req.session.user_id
        }
      });
      const userBlog = userPosts.map((post) => post.get({ plain: true }));
      res.render("dash", {
        userBlog,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });