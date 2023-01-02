/**
 * void & return
 */

function handleClick() {
  // void 함수의 return
  // undefined 가 return 됨
  return setState(false);
}

function showAlert(message) {
  // void 함수의 return
  // undefined 가 return 됨
  return alert(message);
}

function test(sum1, sum2) {
  const result = sum1 + sum2;

  return;
}

console.log(test(1, 2)); //undefined

function testVoidFunc() {
  return test(1, 2);
}

console.log(testVoidFunc()); //undefined

function testVoidFunc2() {
  const arr = [1, 2];
  return arr.push(10);
}
console.log(testVoidFunc2()); //3
