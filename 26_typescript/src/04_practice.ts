/*
function isLegal(age: number): boolean {
  return age > 18;
}

const ans: boolean = isLegal(20);

console.log("ans: ", ans);
*/

function runAfter1S(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfter1S(function () {
  console.log("Hello World!");
});
