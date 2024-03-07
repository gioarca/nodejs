const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");

const OrderSchema = Schema(
  {
    products: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
