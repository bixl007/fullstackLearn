// Normal Function

function normalFunc() {
  console.log("Normal Func");
}

normalFunc();

//Arrow Function

const arrowFunction = () => {
  console.log("Arrow Function");
};

arrowFunction();

const sum = () => {
  let num1 = 10;
  let num2 = 20;
  let results = num1 + num2;
  console.log(`The sum of the two numbers is ${results}`);
};

sum();

//Map Function

const arr = [10, 20, 30, 40];

const multiply = (n) => {
  return n * 2;
};

const resultsMultiply = arr.map(multiply);
console.log(`The result of the multiplication is ${resultsMultiply}`);


// Filter Function

const newArray = [10, 20, 30,7,89,9,4,94,8,25,3,96]

const evenNumber = (n) => {
    return n % 2 === 0;
}

const resultsFilter = newArray.filter(evenNumber);
console.log(`The result of the filter is ${resultsFilter}`);