/**
 * Pure Function
 */

let num1 = 10;
let num2 = 20;

function impureSum1() {
  return num1 + num2;
}

impureSum1();
impureSum1();
num2 = 30;

// 일관성을 유지 하지 못함
impureSum1();
impureSum1();

function impureSum2(newNum) {
  return num1 + newNum;
}

impureSum2(30);
impureSum2(30);

num1 = 100;

// 값을 예측하지 못함
impureSum2(30);
impureSum2(30);
