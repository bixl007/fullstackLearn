const axios = require("axios");

// async function main() {
//   const res = await axios.get("https://sum-server.100xdevs.com/todos");
//   console.log(res.data.todos.length);
// }

// main();

// const axios = require("axios");

// async function main() {
//   const res = await axios.post(
//     "https://www.toptal.com/developers/postbin/1720447164451-4046419113874"
//   );
//   console.log(res.data);
// }

// async function main() {
//   const res = await axios.post(
//     "https://www.toptal.com/developers/postbin/1720447164451-4046419113874",
//     {
//       username: "abc",
//       password: "123",
//     },
//     {
//       headers: {
//         Authorization: "Bearer 123",
//       },
//     }
//   );
//   console.log(res.data);
// }

// In a post req the first arg is url, second arg is body, third is the header

// async function main() {
//   const res = await axios.post(
//     " https://httpdump.app/dumps/7be00855-cecc-4ca0-8207-cc8118dadcd1",
//     {
//       username: "abc",
//       password: "123",
//     },
//     {
//       headers: {
//         Authorization: "Bearer 123",
//       },
//     }
//   );
//   console.log(res.data);
// }

//In get you cannot send any body

async function main() {
  const res = await axios.get(
    " https://httpdump.app/dumps/7be00855-cecc-4ca0-8207-cc8118dadcd1",
    {
      headers: {
        Authorization: "Bearer 123",
      },
    }
  );
  console.log(res.data);
}

main();
