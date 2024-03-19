const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./src/models/product.model.js");
const User = require("./src/models/user.model.js");
const Order = require("./src/models/order.model.js");
const productRoute = require("./src/v1/routes/product.route.js");
const userRoute = require("./src/v1/routes/user.route.js");
const orderRoute = require("./src/v1/routes/order.route.js");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const app = express();
const bodyParser = require("body-parser");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);

mongoose
  .connect(
    `${process.env.CREDENTIAL}Node-API?retryWrites=true&w=majority&appName=${process.env.APP_NAME}`
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000);
  })
  .catch(() => {
    console.log("Connection failed!");
  });
