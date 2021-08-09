// index.js 는 url 과 middleWare 를 작성

const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");

router.get("/products", ctrl.get_product);
router.get("/products/write", ctrl.get_product_write);
router.post("/products/write", ctrl.get_product_write);

module.exports = router;
