# Udemy - CleanCode

### 8. 함수다루기

##### 55_Rest Parameters

* 나머지 매개변수



* default value 예제1

  ```javascript
  function sumTotal() {
    Array.isArray(arguments) // false
    
    return Array.from(arguments).reduce((acc, curr) => acc + curr);
  }
  
  sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  ```
  
  * argumetns 를 이용한 가변인자
    * 유사 배열 객체로 받아 짐
  * sumTotal 함수에 인자를 받으면 활용하기 어려워짐



- Rest Parameter 를 활용한 가변 인자

  ```javascript
  function sumTotal(initValue, bonusValue, ...args) {
    Array.isArray(args) // true
    
    return args.reduce((acc, curr) => acc + curr, initValue);
  }
  
  sumTotal(100, 99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  ```
  
  * restParameter: 나머지 매개변수
    * "...변수명" 으로 사용
    * 배열로 입력 됨
  * restParameter를 사용하면 추가 변수를 입력 받을 수 있음
    * 단, 가장 마지막으로 작성 되어야 한다.

