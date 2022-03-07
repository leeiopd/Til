# Udemy - CleanCode

### 2. 변수 다루기

##### 05_var 를 지양하자

* var 를 사용하지 말고, const 를 사용하자
  * let & const 은 ES2015 이후에 추가
  * 과거의 코드는 var 로 작성되어 있음

* 스코프
  * var 는 함수 스코프
  * let & const 는 블록 스코프
    * 블록 스코프에서 Temporal Dead Zone 속성도 가질 수 있음
    * 안전한 코드 작성 가능




* var

  ```javascript
  console.log(name);
  // undefined
  var name = "이름";
  var name = "이름2";
  var name = "이름3";
  var name = "이름3";
  var name = "이름3";
  console.log(name);
  // 이름3
  ```

  * 중복선언 가능

  ```javascript
  console.log(name);
  // undefined
  var name = "이름";
  name = "이름2";
  name = "이름3";
  name = "이름3";
  name = "이름3";
  console.log(name);
  // 이름3
  ```

  * 재할당 가능



* let

  ```javascript
  let name = "이름3";
  let name = "이름3";
  // *^ SyntaxError: Identifier 'name' has already been declared (2:4)* 
  let name = "이름3";
  console.log(name);
  ```

  * Error 발생, 중복선언 불가

  ```javascript
  let name = "이름";
  name = "이름2";
  name = "이름3";
  name = "이름4";
  console.log(name);
  // 이름4
  ```

  * 변수 재할당 가능



* const

  ```javascript
  const name = "이름3";
  const name = "이름3";
  // SyntaxError: Identifier 'name' has already been declared (2:6) 
  const name = "이름3";
  console.log(name);
  ```

  * Error 발생, 중복 선언 불가

  ```javascript
  const name = "이름";
  name = "이름2";
  // Assignment to constant variable.
  name = "이름3";
  name = "이름4";
  console.log(name);
  
  ```

  * Error 발생, 재할당 불가



