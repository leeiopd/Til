# Udemy - CleanCode

### 6. 배열 다루기

##### 40_Continue & Break

* Continue & Break

  ```javascript
  orders.forEach(function (order) {
    if (order === "second") {
      // continue;
      // break;
    }
  
    console.log(order);
  });
  
  ```

  * continew 와 break 모두 forEach 나 map 에서 흐름제어가 불가능하다
    * SyntaxError
