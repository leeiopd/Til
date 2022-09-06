/**
 * 유사 배열 객체
 */

const arrayLikeObject = {
  0: "HELLO",
  1: "WORLD",
  length: 2,
};

console.log(Array.isArray(arrayLikeObject));

const arr = Array.from(arrayLikeObject);
console.log(arr);

console.log(Array.isArray(arr));

console.log(arr.length);
