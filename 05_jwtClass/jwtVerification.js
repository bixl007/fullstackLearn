const jwt = require("jsonwebtoken");

const value = {
  name: "Mr. Xyz",
  age: "20",
  gender: "Male",
};

const token = jwt.sign(value, "secretKey");
console.log("Token:", token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTXIuIFh5eiIsImFnZSI6IjIwIiwiZ2VuZGVyIjoiTWFsZSIsImlhdCI6MTcxODUwNTQ4M30.t5LU8H207UDjyTigTzyeoJV6OeynZiCkuLO6R-beQlU

const verifyToken = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTXIuIFh5eiIsImFnZSI6IjIwIiwiZ2VuZGVyIjoiTWFsZSIsImlhdCI6MTcxODUwNTQ4M30.t5LU8H207UDjyTigTzyeoJV6OeynZiCkuLO6R-beQlU",
  "secretKey"
);
console.log("Verified Token:", verifyToken);
