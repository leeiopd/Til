/**
 * Closure
 */

function getNum(num1) {
  return function (num2) {
    return function (calculateFn) {
      return calculateFn(num1, num2);
    };
  };
}

function sum(num1, num2) {
  return num1 + num2;
}

const calculate = getNum(1)(2);
console.log(calculate);

const sumResult = calculate(sum);
console.log(sumResult);

function multiple(num1, num2) {
  return num1 * num2;
}

const multipleResult = calculate(multiple);
console.log(multipleResult);
