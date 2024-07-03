const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/pr", function (req, res) {
  res.send("Post request successfully fired!");
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
