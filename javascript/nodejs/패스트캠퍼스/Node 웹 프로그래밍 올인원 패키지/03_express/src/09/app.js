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

app.use((req, res, _) => {
  res.status(400).render("common/404.html");
});

app.use((req, res, _) => {
  res.status(500).render("common/500.html");
});

app.listen(port, () => {
  console.log("Express Listening on port", port);
});
