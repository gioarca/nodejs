const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");

const orderSchema = new Schema({
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
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
