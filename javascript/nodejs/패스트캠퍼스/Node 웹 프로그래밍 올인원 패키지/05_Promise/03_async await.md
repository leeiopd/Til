# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 05.Promise

##### 03_async await



```javascript
// ./async_ex.js

const models = require("./models");

async function getProducts() {
  try {
    const product3 = await models.Products.findByPk(3);
    const product4 = await models.Products.findByPk(4);
    console.log(product3.dataValues);
    console.log(product4.dataValues);
  } catch (err) {
    console.log(err);
  }
}

getProducts();

// {
//  id: 3,
//  name: 'test1',
//  price: 1000,
//  description: 'test1 입니다.',
//  createdAt: 2021-08-16T13:54:05.000Z,
//  updatedAt: 2021-08-16T13:54:05.000Z
// }
// {
//  id: 4,
//  name: 'test2',
//  price: 100000,
//  description: 'test2 입니다.',
//  createdAt: 2021-08-18T14:34:41.000Z,
//  updatedAt: 2021-08-18T14:34:41.000Z
// }
```

* async await 으로 비동기 처리





```javascript
// ./controllers/admin/admin.ctrl.js

// 실제 routing 이 접근 하는 곳 (controller)
const models = require("../../models");

exports.get_products = async (_, res) => {
  try {
    const products = await models.Products.findAll();
    res.render("admin/products.html", { products });
  } catch (err) {
    console.log(err);
  }
};

exports.get_product_write = (_, res) => {
  res.render("admin/write.html");
};


exports.post_product_write = async (req, res) => {
  await models.Products.create(req.body);
  res.redirect("/admin/products");
};


exports.get_products_detail = async (req, res) => {
  const product = await models.Products.findByPk(req.params.id);
  res.render("admin/detail.html", { product });
};


exports.get_products_edit = async (req, res) => {
  const product = await models.Products.findByPk(req.params.id);
  res.render("admin/write.html", { product });
};


exports.post_products_edit = async (req, res) => {
  await models.Products.update(req.body, {
    where: { id: req.params.id },
  });
  res.redirect("/admin/products/detail/" + req.params.id);
};


exports.get_products_delete = async (req, res) => {
  await models.Products.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/admin/products");
};
```

* async/await 으로 admin controller 개선