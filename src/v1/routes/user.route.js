const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

router.post("/", addUser);
router.get("/:_id", getUser);
router.get("/", getUsers);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);

module.exports = router;
