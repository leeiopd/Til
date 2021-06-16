# JS - for~of / for~in



## 1. for~of

>**`for...of` 명령문**은 [반복가능한 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) ([`Array`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Map`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set), [`String`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String), [`TypedArray`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), [arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.

```javascript
// 구문
for (variable of iterable) {
  statement
}

// variable : 각 반복에 서로 다른 속성값이 variable에 할당됩니다.
// iterable : 반복되는 열거가능(enumerable)한 속성이 있는 객체.
```



```javascript
// Array

let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30

let iterable = [10, 20, 30];

// const도 사용 가능
for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```



```javascript
// String

let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```



```javascript
// TypedArray

let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```



```javascript
// Map

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```



```javascript
// Set

let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

