const express = require("express");
const zod = require("zod");
const app = express();

function validInfo(object) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(object);
 return response;  
}

// validInfo({
//     email: "xyz007@gmail.com",
//     password: "4544464245"

// });

app.use(express.json())

app.post("/login", (req, res) => {
  const response = validInfo(req.body);
  if (!response.success) {
    res.json({
      msg: "Your inputs are invalid",
    });
    return;
  } else {
    console.log("Successfully logged in", response.data);
    res.json({
      msg: "You have successfully logged in",
      userInfo: response.data,
    });
  }
});


app.listen(3000,() => {
    console.log("Server is running on port 3000");
})