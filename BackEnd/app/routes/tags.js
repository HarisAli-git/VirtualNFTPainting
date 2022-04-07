const express = require("express");
const router = express.Router();

const TagsController = require("../controllers/tags");

router.post("/addtag", TagsController.create_tag);
router.get("/", TagsController.view_tag);
router.get("/post", TagsController.get_post_tag);

module.exports = router;
