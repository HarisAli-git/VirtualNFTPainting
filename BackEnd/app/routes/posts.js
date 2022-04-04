const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post");

router.post("/CreatePost", PostController.create_post);
router.post("/user", PostController.view_user_posts);
router.get("/", PostController.get_posts);

module.exports = router;
