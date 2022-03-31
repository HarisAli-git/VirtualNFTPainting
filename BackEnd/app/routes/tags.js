const express = require("express");
const router = express.Router();

const TagsController = require("../controllers/tags");

router.post("/addtag", TagsController.create_tag);
router.get("/tags", TagsController.search_tag);

module.exports = router;
