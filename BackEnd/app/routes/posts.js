const express = require("express");
const multer = require("multer");
const router = express.Router();

const PostController = require("../controllers/post");

//! Use of Multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});

router.post("/CreatePost", upload.single("image"), PostController.create_post);
router.post("/user", PostController.view_user_posts);
router.get("/", PostController.get_posts);
router.post("/RetweetPost", upload.single("image"), PostController.RetweetPost);

module.exports = router;
