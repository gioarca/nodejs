const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");

const Product = require("./models/product.model.js");
const User = require("./models/user.model.js");
const Order = require("./models/order.model.js");

const productRoute = require("./v1/routes/product.route.js");
const userRoute = require("./v1/routes/user.route.js");
const orderRoute = require("./v1/routes/order.route.js");

const app = express();

// connessione al database
mongoose
  .connect(
    `${process.env.CREDENTIAL}Node-API?retryWrites=true&w=majority&appName=${process.env.APP_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(mongoSanitize());
app.use(xss());

// routes
app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);
