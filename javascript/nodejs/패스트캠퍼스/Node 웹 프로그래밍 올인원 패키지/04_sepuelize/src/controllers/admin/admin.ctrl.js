// 실제 routing 이 접근 하는 곳 (controller)
const models = require("../../models");

exports.get_product = (_, res) => {
  res.render("admin/products.html", { message: "hello" });
};

exports.get_product_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_product_write = (req, res) => {
  // res.send(req.body);
  // models.Products.create({
  //   name: req.body.name,
  //   price: req.body.price,
  //   description: req.body.description,
  // }).then(() => {
  //   res.redirect("/admin/products");
  // });

  // Products 의 format 이 req.body 와 같음
  models.Products.create(req.body).then(() => {
    res.redirect("/admin/products");
  });
};
