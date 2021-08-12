// 실제 routing 이 접근 하는 곳 (controller)

exports.get_product = (_, res) => {
  res.render("admin/products.html", { message: "hello" });
};

exports.get_product_write = (_, res) => {
  res.render("admin/write.html");
};

exports.get_product_write = (req, res) => {
  res.send(req.body);
};
