const router = require('express').Router();
const {User, Post, Comment} = require("../../models");


//Create a new comment
router.post("/", (req, res) => {
  
    Comment.create({
      comment_text:req.body.comment_text,
      user_id:req.session.user_id,
      post_id:req.body.post_id
    })
      .then(newComment => {
        res.json(newComment);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "An Error Occurred!", err });
      });
});

// //Update your comment
// router.put("/:id", (req, res) => {
   
//     Comment.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     }).then(updatedComment => {
//       res.json(updatedComment);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ msg: "An Error Occurred!", err });
//     });
// });

// //Delete your comment
// router.delete("/:id", (req, res) => {
  
//     Comment.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(delComment => {
//       res.json(delComment);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ msg: "An Error Occurred!", err });
//     });
// });


module.exports = router;