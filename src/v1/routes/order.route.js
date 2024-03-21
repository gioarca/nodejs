const express = require("express");
const router = express.Router();
const {
  addOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getOrders,
} = require("../../controller/order.controller");

router.post("/", addOrder);

//ricerca per prodotto e data
router.get("/", getOrders);

router.get("/:_id", getOrder);
router.put("/:_id", updateOrder);
router.delete("/:_id", deleteOrder);

module.exports = router;
