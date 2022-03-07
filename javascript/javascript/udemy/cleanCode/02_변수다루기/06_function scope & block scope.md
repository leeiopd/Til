# Udemy - CleanCode

### 2. 변수 다루기

##### 06_function scope & block scope

* var & let & const 는 스코프 차이를 가지고 있다.




* var

  ```javascript
  var global = "전역";
  
  if (global === "전역") {
    var global = "지역";
  
    console.log(global);
    // 지역
  }
  
  console.log(global);
  // 지역
  
  ```
  
  * var 는 함수단위 scope
  * 전역 공간의 scope 까지 오염
  



* let

  ```javascript
  let global = "전역";
  
  if (global === "전역") {
    let global = "지역";
  
    console.log(global);
    // 지역
  }
  
  console.log(global);
  // 전역
  ```
  
  ```javascript
  var global = "전역";
  
  {
    let global = "지역";
  
    console.log(global);
  }
  
  console.log(global);
  
  ```
  
  * let 은 block scope
  * 함수가 아닌 block 으로 작성되면 경계가 유지된다.



* const

  ```javascript
  const global = "전역";
  
  if (global === "전역") {
    const global = "지역";
  
    console.log(global);
    // 지역
  }
  
  console.log(global);
  // 전역
  ```
  
  ```javascript
  const global = "전역";
  
  {
    const global = "지역";
  
    console.log(global);
    // 지역
  }
  
  console.log(global);
  // 전역
  ```





* const 의 재할당

  ```javascript
  const person = {
    name: "lee",
    age: "30",
  };
  
  person.name = "jang";
  person.age = "22";
  
  console.log(person);
  
  const person2 = [
    {
      name: "lee",
      age: "30",
    },
  ];
  
  person2.push({
    name: "jang",
    age: "22",
  });
  
  ```

  * const 는 재할당만 금지되고, 본연의 객체 그리고 배열같은 레퍼런스 객체들을 조작은 가능하다.

