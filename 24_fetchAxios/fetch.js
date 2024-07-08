// function main() {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//     const json = await res.json();
//     console.log(json.todos.length);
//   });
// }

// async function main() {
//   const response = await fetch("https://sum-server.100xdevs.com/todos");
//   const json = await response.json();
//   console.log(json.todos.length);
// }

// By default the method is GET

// async function main() {
//   const response = await fetch("https://www.toptal.com/developers/postbin/1720447164451-4046419113874",{
//     method: "POST"
//   });
//   const textData = await response.text();
//   console.log(textData);
// }

async function main() {
  const response = await fetch(
    "https://www.toptal.com/developers/postbin/1720447164451-4046419113874",
    {
      method: "POST",
      body: {
        username: "Xyz",
        Password: "123",
      },
      headers: {
        Authorization: "Bearer 123",
      },
    }
  );
  const textData = await response.text();
  console.log(textData);
}

main();
