const { model } = require("mongoose");
const Order = require("../models/order.model.js");
const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");

// Endpoint per creare un ordine: prende i dati dai modelli creati
const addOrder = async (req, res) => {
  try {
    const { products, users } = req.body;
    const order = new Order({ products, users });
    await order.save();
    res.status(200).json({ data: order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endopoint per aggiornare un ordine
const updateOrder = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name } = req.body;
    const order = await Order.findByIdAndUpdate(_id, { name }, { new: true });
    if (!order) {
      res.status(404).json({ message: "Order not found" });
    }
    const updateOrder = await Order.findById(_id);
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Endpoint per cancellare un ordine con input l'id
const deleteOrder = async (req, res) => {
  try {
    const { _id } = req.params;
    const order = await Order.findByIdAndDelete(_id);
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

// Endpoint per ottenere un singolo ordine cercando con l'id
const getOrder = async (req, res) => {
  try {
    const { _id } = req.params;
    const order = await Order.findById(_id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ messaggio: error.message });
  }
};

// Endpoint per ottenere tutti gli ordini
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("products users");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ messaggio: error.message });
  }
};

// Endpoint per filtrare tutti gli ordini per data di inserimento
const getOrdersByDate = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort("-createdAt")
      .populate("products users");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endpoint per filtrare tutti gli ordini per prodotto inserito
const getOrdersByProducts = async (req, res) => {
  try {
    const { productId } = req.params;
    const orders = await Order.find({
      products: { $elemMatch: { $eq: productId } },
    }).populate("products users");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  getOrdersByDate,
  getOrdersByProducts,
};
