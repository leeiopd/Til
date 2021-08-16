// 실제 routing 이 접근 하는 곳 (controller)
const models = require("../../models");

exports.get_products = (_, res) => {
  models.Products.findAll({}).then((products) => {
    res.render("admin/products.html", { products });
  });
};

exports.get_product_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_product_write = (req, res) => {
  models.Products.create(req.body).then(() => {
    res.redirect("/admin/products");
  });
};

exports.get_products_detail = (req, res) => {
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/detail.html", { product });
  });
};

exports.get_products_edit = (req, res) => {
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/write.html", { product });
  });
};

exports.post_products_edit = (req, res) => {
  models.Products.update(
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
    {
      where: { id: req.params.id },
    }
  ).then(() => {
    res.redirect("/admin/products/detail/" + req.params.id);
  });
};

exports.get_products_delete = (req, res) => {
  models.Products.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.redirect("/admin/products");
  });
};
