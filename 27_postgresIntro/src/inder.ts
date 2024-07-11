import { Client } from "pg";

const client = new Client({
  connectionString: "",
});

async function createUserTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
}

async function insertData() {
  await client.connect();

  try {
    const insertQuery =
      "INSERT INTO users (username, email , password) Values ('username1', 'abc@gmail.com', '123456'); ";
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion: ", err);
  } finally {
    await client.end();
  }
}

insertData();
