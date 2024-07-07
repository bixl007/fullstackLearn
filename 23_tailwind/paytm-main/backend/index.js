const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

app.use(cors());

const app = express();

app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000);
