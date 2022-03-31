const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post");

router.post("/CreatePost", PostController.create_post);
router.get("/posts", PostController.view_unsub_posts);

module.exports = router;
