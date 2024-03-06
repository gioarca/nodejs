const express = require("express");
const enduser = express.Router();
const users = require("../utenti");

enduser.get("/", (req, res) => {
  res.json({ success: true, data: users });
});

enduser.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).json({ success: true, data: users });
});

enduser.put("/:id", (req, res) => {
  const { id } = req.params;
  const prodotto = req.body;
  users[Number(id) - 1] = prodotto;
  res.status(200).json({ success: true, data: users });
});

enduser.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((prodotto) => prodotto.id === id);
  users.splice(index, 1);
  res.status(200).json({ success: true, data: users });
});

module.exports = enduser;
