const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
