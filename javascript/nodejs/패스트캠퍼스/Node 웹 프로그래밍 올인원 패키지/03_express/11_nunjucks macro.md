# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 11_nunjucks macro

* nunjucks macro 를 이용하여, 현재 url 에 따라 메뉴의 active 상태를 변경 가능하다.



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

// global view variable
app.use((req, res, next) => {
  app.locals.isLogin = false;

  // req.path - express 의 현재 url 정보
  app.locals.req_path = req.path;

  next();
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.use("/admin", admin);

app.use((req, res, _) => {
  res.status(400).render("common/404.html");
});

app.use((req, res, _) => {
  res.status(500).render("common/500.html");
});

app.listen(port, () => {
  console.log("Express Listening on port", port);
});

```

```javascript
// global view variable
app.use((req, res, next) => {
  app.locals.isLogin = false;

  // req.path - express 의 현재 url 정보
  app.locals.req_path = req.path;

  next();
});
```

* global view variable 로 현재 url 정보를 req_path 에 저장



```html
<!-- ./template/macro/link.html -->

{#
    href: 링크
    text: 링크에 들어갈 텍스트
    current_url: 현재 url
#}

{% macro link(href, text, current_url) %}
    <li {% if href == current_url  %} class="active" {% endif %}>
        <a href="{{ href }}">{{ text }}</a>
    </li>
{% endmacro %}
```

* nunjucks macro 작성
  * macro Name: link
  * Parameter: href, text, current_url



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
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
  </head>
  <body>
    <!-- 현재 url -->
    {{ req_path }}

    <div class="container" style="padding-top: 10px">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-9"
          >
            <ul class="nav navbar-nav">
              {# <li class="active">
                <a href="/admin/products">List</a>
              </li>
              <li>
                <a href="/admin/products/write">Write</a>
              </li> #}
              {% from "macro/link.html" import link %}
              {{ link('/admin/products', "List", req_path )}}
              {{ link('/admin/products/write', "List", req_path )}}
            </ul>
          </div>
        </div>
      </nav>
      {% block content %}{% endblock %}
    </div>
  </body>
</html>

```

* nunjucks macro 를 Import 하여 적용
  * Url 주소에 따라 메뉴 버튼에 class active 가 적용됨

