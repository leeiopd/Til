# Udemy - CleanCode

### 3. 타입 다루기

##### 14_isNaN

* 컴퓨터의 숫자는 2진수, 사람이 작성하는 코드는 10진수
  * 숫자를 다루는 간극이 발생

* Javascript 는 소숫점의 간극을 IEEE754 표준을 사용하여 부동 소수점 방식으로 해결하려고 함
  * 부동 소수점 표햔 <-> 고정 소수점 표현




* isNaN()
  * is Not a Number
    * 숫자가 아니면 true
    * 숫자면 false
* Number.isNaN()
  * isNaN 보다 엄격한 검사
  * Number 형이면서 NaN 이면 True, 그외에는 모두 false
  * 암묵적 형변환을 하지 않음

```javascript
console.log(isNaN(123));  // fasle
console.log(Number.isNaN(123));  // fasle

console.log(isNaN("123"));  // fasle
console.log(Number.isNaN("123"));  // fasle

console.log(isNaN("텍스트"));  // true
console.log(Number.isNaN("텍스트"));  // fasle

console.log(isNaN(NaN));  // true
console.log(Number.isNaN(NaN));  // true

console.log(isNaN(123 + "테스트"));  // true
console.log(Number.isNaN(123 + "테스트"));  // false
```
