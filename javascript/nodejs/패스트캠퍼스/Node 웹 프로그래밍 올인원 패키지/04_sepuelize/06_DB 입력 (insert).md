# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 04. Sequelize

##### 06_DB 입력 (insert)



```mysql
-- data 입력

INSERT INTO Products SET name = "", price = "", description = "";
```



````javascript
// ./controllers/admins/admin.ctrl.js

// 실제 routing 이 접근 하는 곳 (controller)

// ./model/index.js import
const models = require("../../models");

exports.get_product = (_, res) => {
  res.render("admin/products.html", { message: "hello" });
};

exports.get_product_write = (_, res) => {
  res.render("admin/write.html");
};


// data 삽입
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
````

