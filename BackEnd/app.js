const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

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

// Routes which should handle requests
app.use("/account", accountRoutes);
app.use("/tag", tagRoutes);
app.use("/post", postRoutes);

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
