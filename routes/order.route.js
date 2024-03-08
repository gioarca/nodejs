const express = require("express");
const router = express.Router();
const {
  addOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getOrdersByDate,
  getOrdersByProducts,
  getOrders,
} = require("../controller/order.controller");

// ricerca per data
router.get("/byDate", getOrdersByDate);

//ricerca per prodotto
router.get("/byProduct", getOrdersByProducts);

router.get("/", getOrders);
router.get("/:_id", getOrder);
router.post("/", addOrder);
router.put("/:_id", updateOrder);
router.delete("/:_id", deleteOrder);

module.exports = router;
