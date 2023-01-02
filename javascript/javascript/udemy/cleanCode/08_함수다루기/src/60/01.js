/**
 * Closure
 */

function getNum(num1) {
  return function sum(num2) {
    return num1 + num2;
  };
}

const addOne = getNum(1);
console.log(calculate); // sum()
const addTwo = getNum(2);

console.log(calculate(3)); // 4
console.log(addTwo(3)); // 5
