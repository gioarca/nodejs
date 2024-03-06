const express = require("express");
const router = express.Router();
const selledProducts = require("../selledProducts");

router.get("/", (req, res) => {
  //   const { id } = req.params;
  //   const selledProduct = selledProducts.find(
  //     (selledProduct) => selledProduct.id === id
  //   );
  //   if (!selledProduct) {
  //     return res
  //       .status(404)
  //       .json({ messaggio: "Prodotto inesistente", code: 404 });
  //   }
  res.json({ success: true, data: selledProducts });
});

router.post("/", (req, res) => {
  const prodotto = req.body;
  selledProducts.push(prodotto);
  res.status(200).json({ success: true, data: selledProducts });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const prodotto = req.body;
  selledProducts[Number(id) - 1] = prodotto;
  res.status(200).json({ success: true, data: selledProducts });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = selledProducts.findIndex((prodotto) => prodotto.id === id);
  selledProducts.splice(index, 1);
  res.status(200).json({ success: true, data: selledProducts });
});

module.exports = router;
