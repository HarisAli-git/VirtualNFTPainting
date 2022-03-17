const express = require("express");
const router = express.Router();

const RegisterController = require("../controllers/resgiter");
const LoginController = require("../controllers/login");

router.post("/register", RegisterController.register);
router.post("/login", LoginController.login);

module.exports = router;
