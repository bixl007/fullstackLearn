import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import client from "@/db"

export async function POST(req: NextRequest) {
  const body = await req.json();
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(body);

  return Response.json({
    message: "You are logged in!!",
  });
}
