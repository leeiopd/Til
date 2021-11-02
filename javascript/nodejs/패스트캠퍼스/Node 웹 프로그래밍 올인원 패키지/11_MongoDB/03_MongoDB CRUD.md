# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 11. MongoDB

##### 03_MongoDB CRUD

* 목차
  1. DB 접속
  2. Model 작성
  3. CRUD



* Mongoose
  * ODM - Object-Document Mapper
  * NoSQL 에서 Document Databse 를 지원하기 위해 데이터를 변환하는 프로그래밍 기법





* mongoose 연동

```javascript
// ./app.js

const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyParser = require("body-parser");

class App {
  constructor() {
    this.app = express();

    // db 접속
    this.dbConnection();

    // 뷰엔진 셋팅
    this.setViewEngine();

    // 미들웨어 셋팅
    this.setMiddleWare();

    // 정적 디렉토리 추가
    this.setStatic();

    // 로컬 변수
    this.setLocals();

    // 라우팅
    this.getRouting();

    // 404 페이지를 찾을수가 없음
    this.status404();

    // 에러처리
    this.errorHandler();
  }

  dbConnection() {
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function () {
      console.log("MongoDB connect");
    });

    mongoose.connect("mongodb://127.0.0.1/mongooseExample", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  setMiddleWare() {
    // 미들웨어 셋팅
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  setViewEngine() {
    nunjucks.configure("template", {
      autoescape: true,
      express: this.app,
    });
  }

  setStatic() {
    this.app.use("/uploads", express.static("uploads"));
  }

  setLocals() {
    // 템플릿 변수
    this.app.use((req, res, next) => {
      this.app.locals.isLogin = true;
      this.app.locals.req_path = req.path;
      next();
    });
  }

  getRouting() {
    this.app.use(require("./controllers"));
  }

  status404() {
    this.app.use((req, res, _) => {
      res.status(404).render("common/404.html");
    });
  }

  errorHandler() {
    this.app.use((err, req, res, _) => {
      res.status(500).render("common/500.html");
    });
  }
}

module.exports = new App().app;
```

```javascript
dbConnection() {
  // mongoose load
  const mongoose = require("mongoose");
  mongoose.Promise = global.Promise;
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function () {
    console.log("MongoDB connect");
  });
  
  // mongodb 와 연결
  mongoose.connect("mongodb://127.0.0.1/mongooseExample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
```





* model 작성

```javascript
// ./models/Products.js

const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment-timezone");

const ProductsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "제품명을 입력해주세요."],
    },
    price: Number,
    description: String,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  // collection name 을 추가 작성하지 않으면, 모두 소문자 + s 가 붙은 복수형으로 작성됨
  { collection: "Products" }
);

ProductsSchema.methods.dateFormat = function () {
  return moment(this.createdAt)
    .tz("Asia/Seoul")
    .format("MMMM Do YYYY, h:mm:ss a");
};

module.exports = mongoose.model("Products", ProductsSchema);
```





* CURD controller 작성

```javascript
// ./controllers/admin/admin.ctrl.js

// product model
const ProductsModel = require("../../models/Products");

// 전체 목록 Read
exports.get_products = async (_, res) => {
  const products = await ProductsModel.find();
  console.log(products);
  res.render("admin/products.html", { products });
};

// Create Page
exports.get_products_write = (_, res) => {
  res.render("admin/write.html");
};

// Data Create
exports.post_products_write = async (req, res) => {
  await ProductsModel.create(req.body);
  res.redirect("/admin/products");
};


// Product Detail Read
exports.get_products_detail = async (req, res) => {
  const product = await ProductsModel.findById(req.params.id);
  res.render("admin/detail.html", { product });
};


// Update 를 위해 product read
exports.get_products_edit = async (req, res) => {
  const product = await ProductsModel.findById(req.params.id);
  res.render("admin/write.html", { product });
};


// Data Update
exports.post_products_edit = async (req, res) => {
  await ProductsModel.updateOne({ _id: req.params.id }, req.body);
  res.redirect("/admin/products/detail/" + req.params.id);
};

exports.get_products_delete = (req, res) => {
  res.redirect("/admin/products");
};
```

