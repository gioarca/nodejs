const express = require("express");
const router = express.Router();
const {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  getOrders,
} = require("../controller/order.controller");

router.get("/", getOrders);
router.get("/:_id", getOrder);
router.post("/", addOrder);
router.put("/:_id", updateOrder);
router.delete("/:_id", deleteOrder);

module.exports = router;
