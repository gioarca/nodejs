const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, "Please enter product name"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
