const ProductsModel = require("../../models/Products");

exports.get_products = async (_, res) => {
  const products = await ProductsModel.find();
  console.log(products);
  res.render("admin/products.html", { products });
};

exports.get_products_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_products_write = async (req, res) => {
  await ProductsModel.create(req.body);
  res.redirect("/admin/products");
};

exports.get_products_detail = async (req, res) => {
  const product = await ProductsModel.findById(req.params.id);
  res.render("admin/detail.html", { product });
};

exports.get_products_edit = async (req, res) => {
  const product = await ProductsModel.findById(req.params.id);
  res.render("admin/write.html", { product });
};

exports.post_products_edit = async (req, res) => {
  await ProductsModel.updateOne({ _id: req.params.id }, req.body);
  res.redirect("/admin/products/detail/" + req.params.id);
};

exports.get_products_delete = (req, res) => {
  res.redirect("/admin/products");
};
