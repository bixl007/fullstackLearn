function sum(a, b) {
  return a + b;
}

function cubeOfSum(a, b, callback) {
  let result = 0;
  result = Math.pow(callback(a, b), 3);
  console.log("Result: " + result);
}

cubeOfSum(3, 2, sum);
