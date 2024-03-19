const { model } = require("mongoose");
const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id);
    res.status(200).json(product);
  } catch {
    res.status(500).json({ error: message.error });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name } = req.body;
    const product = await Product.findByIdAndUpdate(
      _id,
      { name },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findByIdAndDelete(_id);
    if (!product) {
      res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
