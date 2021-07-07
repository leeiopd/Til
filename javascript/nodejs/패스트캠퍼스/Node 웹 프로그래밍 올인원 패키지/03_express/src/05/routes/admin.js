const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
  // res.send("admin products");
  res.render("admin/products.html", {
    message: "hello!!!!!",
    online: "express!!!",
  });
});

module.exports = router;
