const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Product } = require("./user.model");

const OrderSchema = mongoose.Schema(
  {
    prodotti: {
      _id: Schema.Types.ObjectId,
      utente: [{ type: Schema.Types.ObjectId, ref: "nome" }],
      type: Object,
      required: true,
    },
    utente: {
      _id: Schema.Types.ObjectId,
      utente: [{ type: Schema.Types.ObjectId, ref: "nome" }],
      type: Object,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
