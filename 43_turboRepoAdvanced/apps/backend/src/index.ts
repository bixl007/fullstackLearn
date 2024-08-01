import express from "express";

const app = express();

import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);
app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.listen(3005, () => {
  console.log("listening on 3005");
});
