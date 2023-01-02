/**
 * Pure Function
 */

function pureSum(num1, num2) {
  return num1 + num2;
}
// 동일한 input 에 동일한 output
pureSum(10, 20);
pureSum(10, 20);
pureSum(10, 20);

pureSum(100, 20);
pureSum(100, 20);

function changeValue(num) {
  num++;
  return num;
}
// 동일한 input 에 동일한 output
changeValue(1);
changeValue(1);
changeValue(2);
changeValue(2);
