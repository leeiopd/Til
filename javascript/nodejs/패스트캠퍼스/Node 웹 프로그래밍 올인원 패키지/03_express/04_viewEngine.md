# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 04_View Engine - Nunjucks

* ViewEngine
  * 응답 웹페이지를 독립적으로 작성하고 활용 할 수 있도록 제공
  * View Engine 으로 표시하는 웹페이지를 Template document 라고 하고, 이 템플릿 문서에 데이터 변수의 값을 노출 할 수 있는 방법을 제공



```javascript
// ./app.js
const express = require("express");
const nunjucks = require("nunjucks");

const admin = require("./routes/admin");;

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

app.use("/admin", admin);
```

* Nunchucks 사용 설정
  * autoescape: html tag 삽입 공격을 방지, tag 가 문자열로 인식
    * false 로 설정시, html tag 동작
    * true 설정이라도 template 에서 변수에 safe 항목을 넣으면 render 로 template 에 넣어준 변수의 tag 가 동작한다.
      * {{ message | safe }} 





```javascript
// ./route/admin.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
  res.render("admin/products.html", {
    message: "hello!!!!!",
    online: "express!!!",
  });
});

module.exports = router;
```

* ~/admin/products 요청시, nunjucks 로 template 와 함께 출력될 변수 설정
  * Template 파일: ./admin/products.html
  * 변수
    * message: 'hello!!!!!'
    * online: 'express!!!'



```html
<!-- ./template/admin/products.html -->
products {{message}} {{online}}
```

* ~/admin/products url 로 요청시, products hello!!!!! express!!! 출력