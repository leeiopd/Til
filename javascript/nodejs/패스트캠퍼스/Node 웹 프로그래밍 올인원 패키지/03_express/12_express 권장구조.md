# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 12_express 권장구조



```javascript
// 폴더 및 파일 구조
-root  ---- controllers ---- admin 		
             -index.js        -index.js
                              -admin.ctrl.js
       ---- template    ---- admin
                              -products.html
                              -write.html
                        ---- comon
                              -404.html
                              -500.html
                        ---- layout
                              -base.html
                        ---- macro
                              -link.html
       ---- uploads
 -app.js
 -server.js
```



```javascript
// ./app.js

const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyparser = require("body-parser");

const admin = require("./routes/admin");

class App {
  constructor() {
    this.app = express();

    // 뷰엔진 셋팅
    this.setViewEngine();

    // 미들웨어 셋팅
    this.setMiddleWare();

    // 정적 디렉토리 추가
    this.setStatic();

    // 로컬 변수
    this.setLoals();

    // 라우팅
    this.getRouting();

    // 404 error
    this.status404();

    // error
    this.errorHandler();
  }

  setMiddleWare() {
    //미들웨어 셋팅
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
    this.app.use((err, req, res, _) => {
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

* app.js 호출로, App instance 가 생성되어 뿌려짐



```javascript
// ./controllers/index.js

const { Router } = require("express");
const router = Router();

router.use("/admin", require("./admin"));
// router.use("/contacts", require("./contacts"));

module.exports = router;

```

* 모든 하위 폴더를 작성



```javascript
// ./controllers/admin/index.js

const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");

router.get("/products", ctrl.get_product);
router.get("/products/write", ctrl.get_product_write);
router.post("/products/write", ctrl.get_product_write);

module.exports = router;
```

* admin 으로 시작하는 url 과 middleWare 를 작성



```javascript
// ./controllers/admin/admin.ctrl.js

exports.get_product = (_, res) => {
  res.render("admin/products.html", { message: "hello" });
};

exports.get_product_write = (_, res) => {
  res.render("admin/write.html");
};

exports.get_product_write = (req, res) => {
  res.send(req.body);
};

```

* 실제 routing 이 접근 하는 곳 (controller)

