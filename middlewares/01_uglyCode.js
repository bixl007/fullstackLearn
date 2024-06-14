const express = require("express");

const app = express();

app.get("/health-check", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (!(username === "xyz" && password === "123")) {
    res.status(400).json({ msg: "Something up with the input" });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Something up with the input" });
    return;
  }

  res.json({
    msg: "Your kidneys are fine!!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
