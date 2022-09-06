/**
 * 유사 배열 객체
 */

function generatePriceList() {
  console.log(Array.isArray(arguments));
  console.log(arguments);

  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    console.log(element);
  }
  //   return arguments.map((arg) => arg + "원"); // arguments.map is not a function
}

generatePriceList(100, 200, 300, 400, 500, 600);

// 함수의 매개변수를 미리 선언하지 않았음에도 불구하고
// 가변적인 인자들을 함수로 넘길 때,
// 함수 내부에서 arguments 라는 "유사 배열 객체" 로 다룰 수 있음.
