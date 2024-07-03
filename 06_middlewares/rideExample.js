const express = require("express");

const app = express();

/*
function isOldEnough(age) {
  if (age > 14) return true;
  else return false;
}

app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully rode the ride 1",
    });
    return;
  }
  res.json({
    msg: "You are not old enough to ride the ride 1",
  });
});
*/

// Using middlewares

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;

  if (age > 14) {
    next();
  } else {
    res.json({
      msg: "You are not old enough to ride the ride 1",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully rode the ride 1",
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
