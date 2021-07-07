const express = require("express");
const nunjucks = require("nunjucks");

const admin = require("./routes/admin");
const contacts = require("./routes/contacts");

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.use("/admin", admin);
app.use("/contacts", contacts);

app.listen(port, () => {
  console.log("Express Listening on port", port);
});
