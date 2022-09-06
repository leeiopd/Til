/**
 * Javascript의 배열은 객체다
 */

const arr = [1, 2, 3];

if (arr.length) {
  console.log("배열 확인");
}

if (typeof arr === "object") {
  console.log("배열 확인");
}

if (arr in Array) {
  console.log("배열 확인");
}

if (arr instanceof Array) {
  console.log("배열 확인");
}

const arr2 = "[1, 2, 3]";

if (arr2.length) {
  console.log("배열 확인");
}

// Javascript의 배열을 확인할 때에는 Array.isArray()를 사용하자

console.log(Array.isArray(arr));

if (Array.isArray(arr)) {
  console.log("배열 확인");
}
