const express = require("express");

const port = 3000;

const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidney = users[0].kidneys;
  const numberOfKidney = johnKidney.length;
  let numberOfHealthyKidney = 0;
  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy) {
      numberOfHealthyKidney = numberOfHealthyKidney + 1;
    }
  }
  const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;

  res.json({
    johnKidney,
    numberOfKidney,
    numberOfHealthyKidney,
    numberOfUnhealthyKidney,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "Successfully added kidney",
  });
});

app.put("/", function (req, res) {
  if (isThereAnyHealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      message: "Successfully updated kidney",
    });
  } else {
    res.json({message: "No unhealthy kidney present!!"});
  }
});

app.delete("/", function (req, res) {
  if (isThereAnyHealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }

    users[0].kidneys = newKidneys;
    res.json({ message: "Successfully deleted kidney" });
  } else {
    res.json({ message: "No healthy kidneys to delete" });
  }
});

function isThereAnyHealthyKidney() {
  let pass = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      pass = true;
    }
  }
  return pass;
}

app.listen(port, function () {
  console.log(`Server running on port ${port}...`);
});
