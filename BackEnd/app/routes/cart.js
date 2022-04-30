const express = require("express");
const multer = require("multer");
const router = express.Router();

const CartController = require("../controllers/cart");

router.post("/checkout_session", CartController.checkout_session);

module.exports = router;
