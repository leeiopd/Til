const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");

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
