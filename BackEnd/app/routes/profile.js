const express = require("express");
const router = express.Router();

const ProfileController = require("../controllers/profile");

router.get("/:name", ProfileController.display_profile);

module.exports = router;
