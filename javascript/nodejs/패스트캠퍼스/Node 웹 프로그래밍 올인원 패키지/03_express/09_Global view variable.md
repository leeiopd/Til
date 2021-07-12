# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 09_Global view variable

* Template 에서만 사용할 global 한 변수를 settiing



```javascript
// ./app.js
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


// Global view variable
app.use((req, res, next) => {
  app.locals.isLogin = false;
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.use("/admin", admin);

app.listen(port, () => {
  console.log("Express Listening on port", port);
});

```

```javascript
// Global view variable
app.use((req, res, next) => {
  app.locals.isLogin = false;
  next();
});
```

* 어느 Template 이던 사용가능한, isLogin 변수를 설정



```html
<!-- ./template/layout/base.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ title }}</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container" style="padding-top: 100px">
      {% if isLogin %} 로그인중 {% else %} 로그아웃 {% endif %} {% block content
      %}{% endblock %}
    </div>
  </body>
</html>
```

* Global view variable 로 선언된 isLogin 으로 template 에서 로그인 유무 표기

