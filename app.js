const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/product.model.js");
const User = require("./models/user.model.js");
const Order = require("./models/order.model.js");
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js");
const orderRoute = require("./routes/order.route.js");
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

// routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

mongoose
  .connect(
    `mongodb+srv://${process.envNODE_APP_API_KEY}.iv4lfgu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=${process.env.appName}`
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.listen(3000);
