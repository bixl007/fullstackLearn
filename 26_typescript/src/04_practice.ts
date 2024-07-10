/*
function isLegal(age: number): boolean {
  return age > 18;
}

const ans: boolean = isLegal(20);

console.log("ans: ", ans);
*/

// function runAfter1S(fn: () => void) {
//   setTimeout(fn, 1000);
// }

// runAfter1S(function () {
//   console.log("Hello World!");
// });

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // adding ? means it is a optional field
}

function isLegal(user: User) {
  if (user.age > 18) return true;
  else return false;
}

function greetUser(user: User) {
  console.log("Hello " + user.firstName);
}

const ans = isLegal({
  firstName: "John",
  lastName: "Doe",
  age: 20,
});

console.log(ans);
