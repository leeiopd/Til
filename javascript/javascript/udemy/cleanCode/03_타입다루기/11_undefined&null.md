# Udemy - CleanCode

### 3. 타입 다루기

##### 11_undefined&null

* 0
* null : 존재하지 않음의 명시적 표현
* undefined : 정의되지 않음
* NaN : Not a Number





```javascript
console.log(!null);  // true
console.log(!!null);  // false

console.log(null === true);  // false
console.log(!null === true);  // true
console.log(null === false);  // false

// null => MATH => 0
console.log(null + 123);  // 123

let varb;
console.log(varb);  // undefined
console.log(typeof varb);  // undefined

varb = null;
console.log(varb); // null
console.log(typeof varb); // object

console.log(undefined + 10);  // Nan

console.log(!undefined);  // true

console.log(undefined == null);  // true
console.log(undefined === null);  // false
console.log(!undefined === !null);  // true

```

* null 과 undefiend 의 사용상 혼란스러운 부분이 많다,
* 협업을 위해 컨벤션을 만들어 사용하자
  * 비어있는 값을 항상 null 로 정의하자
  * 언어차원에서 주어지는 null 을 활용하자 등





* 요약
  * undefined & null : 명시적으로 값이 없거나 정의되지 않은 값
  * undefiend
    * 숫자 -> NaN
    * type -> undefined
  * null
    * 숫자 -> 0
    * type -> Object
