const mongoose = require("mongoose");

mongoose.connect(
  "zzzzzzzzzzzz"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("Todo", todoSchema);

module.exports = { todo };
