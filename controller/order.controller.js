const { model } = require("mongoose");
const Order = require("../models/order.model.js");
const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ messaggio: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ messaggio: error.message });
  }
};

const addOrder = async (req, res) => {
  try {
    // const order = await Order.create(Product, User);

    const order = await Order.find()
      .populate("product")
      .populate("user")
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send({ message: err.message });
      });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate(id, req.body);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
    }
    const updateOrder = await Order.findById(id);
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
    }
    res
      .status(200)
      .json({ message: `The order has been deleted correctly :)` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrders, getOrder, addOrder, updateOrder, deleteOrder };
