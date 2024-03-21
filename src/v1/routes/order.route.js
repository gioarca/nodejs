const express = require("express");
const router = express.Router();
const {
  addOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} = require("../../controller/order.controller");

router.post("/", addOrder);
router.get("/", getOrders); //ricerca per prodotto e data
router.get("/:id", getOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
