# Udemy - CleanCode

### 8. 함수다루기

##### 54_Default Value



* default value 예제1

  ```javascript
  
  function createCarousel(options) {
    options = options || {};
    var margin = options.margin || 0;
    var center = options.center || false;
    var navElement = options.navElement || "div";
  
    // ...some code
    return {
      margin,
      center,
      navElement,
    };
  }
  
  createCarousel();
  
  ```
  



- Error 처리 예제1

  ```javascript
  function createCar({ name, brand, color, type }) {
    if (!name) {
      throw new Error("Name is a required"); // Name is a required
    }
  
    if (!brand) {
      throw new Error("Brand is a required");
    }
  
    return { name, brand, color, type };
  }
  
  createCar("차량 이름", { color: "색", type: "타입" }); // Name is a required
  ```
  



* default value 예제2

  ```javascript
  function createCarousel({
    margin = 0,
    center = false,
    navElement = "div",
  } = {}) {
    // ...some code
    return {
      margin,
      center,
      navElement,
    };
  }
  
  createCarousel();
  
  ```
  
  * 객체 분리 할당 활용



* default value + Error 처리 예제

  ```javascript
  const require = (argName) => {
    throw new Error("required is " + argName); // required is items
  };
  
  function createCarousel({
    items = require("items"),
    margin = 0,
    center = false,
    navElement = "div",
  } = {}) {
    // ...some code
    return {
      margin,
      center,
      navElement,
    };
  }
  
  createCarousel(); // required is items
  ```

  * 객체 분리 할당과 동시에 Error 처리 함수 사용
