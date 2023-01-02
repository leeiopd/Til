/**
 * Closure
 */

const arr = [1, 2, 3, "A", "B", "C"];

function isTypeOF(type) {
  return function (value) {
    return typeof value === type;
  };
}

const isNumber = isTypeOF("number");
const isString = isTypeOF("string");

arr.filter(isNumber); // [1, 2, 3]
arr.filter(isString); // ['A', 'B', 'C']
