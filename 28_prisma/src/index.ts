// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email: username,
//       password,
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res);
// }
// insertUser("abc@gmail.com", "password", "Abc", "Xyz");

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }

// async function updateUser(
//   username: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: { email: username },
//     data: {
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res);
// }

// updateUser("abc@gmail.com", { firstName: "Abcdefg", lastName: "Xyz" });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });
  console.log(user);
}

getUser("abc@gmail.com");
