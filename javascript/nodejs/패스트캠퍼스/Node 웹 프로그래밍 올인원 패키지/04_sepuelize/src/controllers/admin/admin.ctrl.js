// 실제 routing 이 접근 하는 곳 (controller)
const models = require("../../models");

exports.get_products = (_, res) => {
  // res.render("admin/products.html", { message: "hello" });
  models.Products.findAll({}).then((products) => {
    // key 와 value 가 일치하게 사용 하기 때문에, products 로 응답을 보냄
    res.render("admin/products.html", { products });
  });
};

exports.get_product_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_product_write = (req, res) => {
  res.send(req.body);
  models.Products.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  }).then(() => {
    res.redirect("/admin/products");
  });

  // Products 의 format 이 req.body 와 같음
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
