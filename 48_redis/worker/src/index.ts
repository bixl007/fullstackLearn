import { createClient } from "redis";

const client = createClient();

async function main() {
  await client.connect();
  while (1) {
    const response = await client.brPop("submissions", 0);
    console.log(response);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log("Processed users submission");
  }
}

main();
