const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyparser = require("body-parser");

const admin = require("./routes/admin");
const contacts = require("./routes/contacts");

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

// middleware setting
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// body parse 를 만들어 삽입 가능
// app.use((req, res, next) => {
//   req.body = {};
// });

app.get("/", (req, res) => {
  res.send("Hello Express");
});

function vipMiddleware(erq, res, next) {
  console.log("최우선 미들웨어");
  next();
}

app.use("/admin", vipMiddleware, admin);
app.use("/contacts", contacts);

app.listen(port, () => {
  console.log("Express Listening on port", port);
});
