/**
 * Pure Function
 */

const obj = { one: 1 };
function changeObj(targetObj) {
  targetObj.one = 100;

  return { ...targetObj, one: 100 };
}

changeObj(obj); // {one: 100}

obj; // {one: 100}
