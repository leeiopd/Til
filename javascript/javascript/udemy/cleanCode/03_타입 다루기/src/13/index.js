// 암묵적 형변환

console.log(typeof (11 + " 문자와 결합"));

console.log(!!"문자열");
console.log(!!"");

// 명시적 형변환

console.log(parseInt("9.999", 10));
// parseInt 의 기본값이 10진수가 아니기 때문에, 명시해주자

console.log(typeof String(11 + " 문자와 결합"));
console.log(Boolean("문자열"));
console.log(Boolean(""));
console.log(Number("11"));
