const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/fastcampus", (req, res) => {
  res.send("Get Fastcampus");
});

app.listen(port, () => {
  console.log("Express Listening on port", port);
});
