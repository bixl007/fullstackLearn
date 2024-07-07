const mongoose = require("mongoose");

mongoose.connect(
  
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
