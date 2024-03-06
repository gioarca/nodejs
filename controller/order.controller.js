const { model } = require("mongoose");
const Order = require("../models/order.model.js");
const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");

const getOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ messaggio: error.messaggio });
  }
};

const addOrder = async (req, res) => {
  try {
    const order = await Order.create(Product, User);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrder, addOrder };
