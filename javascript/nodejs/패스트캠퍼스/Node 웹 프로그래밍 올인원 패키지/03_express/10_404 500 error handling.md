# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 10_404 500 error handling

* 404 / 500 error 를 template 으로 연결하여 handling 할 수 있다.
  * 404 : page Not found
  * 500 : server Error





```javascript
const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyparser = require("body-parser");

const admin = require("./routes/admin");

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// staticFile
app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  app.locals.isLogin = false;
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.use("/admin", admin);


// 404 handler
app.use((req, res, _) => {
  res.status(400).render("common/404.html");
});

// 500 handler
app.use((req, res, _) => {
  res.status(500).render("common/500.html");
});

app.listen(port, () => {
  console.log("Express Listening on port", port);
});
```

* 404 와 500 status 를 캐치하여 error tamplate 을 랜더링 해 준다.