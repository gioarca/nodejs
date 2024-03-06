const express = require("express");
const router = express.Router();
const { getOrder, addOrder } = require("../controller/order.controller");

router.get("/", getOrder);
router.post("/", addOrder);
// router.put("/:id", updateOrder);
// router.delete("/:id", deleteOrder);

module.exports = router;
