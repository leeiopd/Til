/**
 * Prototype 조작 지양하기
 *
 * 2. 빌트인 객체를 다루는것을 지양하자
 */

String.prototype.welcome = function () {
  return "hello";
};

console.log("str".welcome());

Array.prototype.forEach = function () {
  return "hello";
};

[1, 2, 3].forEach();
