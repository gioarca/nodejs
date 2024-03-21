const express = require("express");
const Product = require("../../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controller/product.controller.js");

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:_id", getProduct);
router.put("/:_id", updateProduct);
router.delete("/:_id", deleteProduct);

module.exports = router;
