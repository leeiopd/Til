/**
 * Pure Function
 */

const obj1 = { one: 1 };

function changeObj(targetObj) {
  targetObj.one = 100;

  return targetObj;
}

changeObj(obj1);

obj1;
/////////////////////////////
// primitive value vs reference value
// 객체, 배열 => 새롭게 만들어서 변환

const obj2 = { one: 1 };
function changeObj2(targetObj) {
  return { ...targetObj, one: 100 };
}

changeObj2(obj2);

obj2;
