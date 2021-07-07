# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 03_Routing

* 여러 url 의 추가시 router 를 이용하여 url 을 분리하여 정리
  * ~/admin
  * ~/admin/products
  * ~/contacts
  * ~/contacts/list



```javascript
// ./router/admin.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
  res.send("admin products");
});

module.exports = router;
```

* admin url 의 routing



```javascript
// ./router/contacts.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("contacts 이후 url");
});

router.get("/list", (req, res) => {
  res.send("contacts list");
});

module.exports = router;
```

* contacts url 의 routing



```javascript
// ./app.js

const express = require("express");

const admin = require("./routes/admin");
const contacts = require("./routes/contacts");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.use("/admin", admin);
app.use("/contacts", contacts);

app.listen(port, () => {
  console.log("Express Listening on port", port);
});
```

* admin 과 contacts url 모듈로 url rouing

