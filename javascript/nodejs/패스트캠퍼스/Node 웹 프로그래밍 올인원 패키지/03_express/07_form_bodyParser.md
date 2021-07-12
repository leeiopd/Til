# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 06_from {body-parser}

* 유저가 정보를 입력했을 때, express 의 처리



```html
<!-- ./template/admin/write.html -->
{% set title = "제품 등록" %}
{% extends "layout/base.html" %}
{% block content %}
<form action="" method="post">
  <table class="table table-bordered">
    <tr>
      <th>제품명</th>
      <td><input type="test" name="name" class="form-control" /></td>
    </tr>
    <tr>
      <th>가격</th>
      <td><input type="test" name="price" class="form-control" /></td>
    </tr>
    <tr>
      <th>설명</th>
      <td><input type="test" name="description" class="form-control" /></td>
    </tr>
  </table>
  <button class="btn btn-primary">작성하기</button>
</form>
{% endblock %}
```

* 유저 입력 form
* form Tag 의 action 이 비어있으면, 같은 url 로 전송
  * Method: post



```javascript
const express = require("express");
const admin = require("./routes/admin");

const app = express();
const port = 3000;

// body-parser setting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// body parse 를 만들어 삽입 가능
// app.use((req, res, next) => {
//   req.body = {};
// });

app.use("/admin", vipMiddleware, admin);
```

* body-parser 를 require 로 가져오는것은 더이상 사용되지 않음
  * deprecated
  * express 4.X ~ 4.16 이전 버전의 경우 body-parser 사용

* Express 의 method 로 설정
  * app.use(express.json())
    * json 형태의 요청 구문을 분석
  * app.use(express.urlencoded({extended: true}))
    * req 에 body 속성이 추가되어, req.body 로 전송받은 data 를 쉽게 가져올 수 있음
    * extended 속성은 중첩된 객체표현의 사용 여부를 설정
      * 객체 안의 parsing 을 가능하게 하려면 true