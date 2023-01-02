/**
 * void & return
 */

function isAdult(age) {
  return age > 19;
}

function getUserName(name) {
  return "유저 " + name;
}

const isFlag = isAdult(10);
console.log(isFlag); // false
console.log(typeof isFlag); // boolean
