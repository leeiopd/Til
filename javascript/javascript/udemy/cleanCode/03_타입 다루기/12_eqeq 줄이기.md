# Udemy - CleanCode

### 3. 타입 다루기

##### 12_eqeq 줄이기

* eqeq : 동등 연산자 ( = )
  * Equality Operator( == )
    * 동등 연산자

  * Strict Equality Operator]( === )
    * 업격한 동등 연산자






* 동등 연산자

  ```javascript
  console.log("1" == 1);  // true
  console.log(1 == true);  // true
  ```

  * 엄격하지 않은 동등 연산자 사용시 형 변환 ( type casting ) 발생
  * 위험

* 엄격한 동등 연산자

  ```javascript
  console.log("1" === 1); // false
  console.log(1 === true);  // false
  ```

  
