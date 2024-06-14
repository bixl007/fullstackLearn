const express = require("express");
const zod = require("zod");
const app = express();

const port = 3000;

const schema = zod.array(zod.number());

/*{
    email: string => email;
    password: string => at least 8 CharacterData;
    country: literal(means literally this string) => 'IN', 'US'
}*/

// const schema = zod.object({
//   email: zod.string(),
//   password: zod.string(),
//   country: zod.literal("USA").or(zod.literal("IN")),
// });

app.use(express.json());

app.post("/health-check", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    console.log(response);
    res.send({
      response,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
