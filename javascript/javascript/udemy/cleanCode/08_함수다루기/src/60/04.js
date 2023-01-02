/**
 * Closure
 */

const arr = [1, 2, 3, "A", "B", "C"];

const isNumber = (value) => typeof value === "number";

const isString = (value) => typeof value === "string";

arr.filter(isNumber); // [1, 2, 3]
