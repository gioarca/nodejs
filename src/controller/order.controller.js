const { model } = require("mongoose");
const Order = require("../models/order.model.js");
const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");

// Endpoint per creare un ordine: prende i dati dai modelli creati product e user
const addOrder = async (req, res) => {
  try {
    const { products, user } = req.body;
    const order = new Order({ products, user });
    await order.save();
    res.status(200).json({ data: order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endpoint per ottenere un singolo ordine cercando con l'id
const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endpoint per filtrare tutti gli ordini per prodotto inserito e data d'inserimento
const getOrders = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    limit = parseInt(limit) || 100; // imposta un limite pari a 100 se non definito
    offset = parseInt(offset) || 0; // imposta un limite pari a 0 se non definito
    const { productId, createdAt } = req.params;
    const orders = await Order.find({
      products: productId,
      createdAt,
    })
      .populate("products users") // per il populate bastano i due schemi dichiarati nel model
      .limit(limit)
      .skip(offset); // introdotto lo skip per la paginazione
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endopoint per aggiornare un ordine
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const order = await Order.findByIdAndUpdate(id, { name }, { new: true });
    if (!order) {
      res.status(404).json({ message: "Order not found" });
    }
    const updateOrder = await Order.findById(id);
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endpoint per cancellare un ordine con input l'id
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
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
};
