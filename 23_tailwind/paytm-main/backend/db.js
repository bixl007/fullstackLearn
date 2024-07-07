const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://bishalbaira432:HYe0AbzoSLKBRsk7@cluster0.s6xwq03.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  user: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
