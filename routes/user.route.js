const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

router.get("/", getUsers);
router.get("/:_id", getUser);
router.post("/", addUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);

module.exports = router;
