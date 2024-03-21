const { model } = require("mongoose");
const Product = require("../models/product.model.js");

// Endpoint per creare un prodotto
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Endpoint per cercare un prodotto inserito
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch {
    res.status(500).json({ error: error.message });
  }
};

// Endpoint per mostrare tutti i prodotti inseriti
const getProducts = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    limit = parseInt(limit) || 100; // imposta un limite pari a 100 se non definito
    offset = parseInt(offset) || 0; // imposta un limite pari a 0 se non definito
    const products = await Product.find({}).limit(limit).skip(offset);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endopoint per aggiornare un prodotto
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Endopoint per cancellare un prodotto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" }); // aggiunto un return
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
