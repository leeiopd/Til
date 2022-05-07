const isCondition = true;
const isNotCondition = false;

if (!isCondition) {
  console.log("거짓인 겨우에만 실행");
}

if (isNotCondition) {
  console.log("거짓인 겨우에만 실행");
}

// 숫자일때만 동작
// isNaN은 숫자가 아닐때 True
if (!isNaN(3)) {
  console.log("숫자입니다");
}

function isNumber(num) {
  return !Number.isNaN(num) && typeof num === "number";
}
if (isNumber(3)) {
  console.log("숫자입니다");
}
