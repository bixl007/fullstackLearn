const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.post("/health-check", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send(`Your have ${kidneyLength} kidneys!`);
});

app.use((err, req, res, next) => {
    res.json({
        message: "Sorry something is up with the server!!"
    })
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
