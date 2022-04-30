const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
const stripe = require("stripe")("private key");

const sessions = require("express-session");
// creating 1 hour from milliseconds
const oneHour = 1000 * 60 * 60;

//session middleware
//session will expire after an hour

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); // Add this after you initialize express.

const accountRoutes = require("./app/routes/auth");
const tagRoutes = require("./app/routes/tags");
const postRoutes = require("./app/routes/posts");
const profileRoutes = require("./app/routes/profile");
const cartRoutes = require("./app/routes/cart");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(
  sessions({
    secret: "thisismysecrctekeyyyykkk786",
    saveUninitialized: true,
    cookie: { maxAge: oneHour },
    resave: false,
  })
);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "ReactJS course" }],
]);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Sunglasses",
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    });
    console.log(session);
    res.send({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Routes which should handle requests
app.use("/account", accountRoutes);
app.use("/tag", tagRoutes);
app.use("/post", postRoutes);
app.use("/user", profileRoutes);
app.use("/cart", cartRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
