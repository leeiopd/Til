// index.js 는 url 과 middleWare 를 작성

const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");

router.get("/products", ctrl.get_products);

router.get("/products/write", ctrl.get_product_write);

router.post("/products/write", ctrl.post_product_write);

router.get("/products/detail/:id", ctrl.get_products_detail);

router.get("/products/edit/:id", ctrl.get_products_edit);

router.post("/products/edit/:id", ctrl.post_products_edit);

module.exports = router;
