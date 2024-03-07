const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    name: {
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
