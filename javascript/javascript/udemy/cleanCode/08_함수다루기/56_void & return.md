# Udemy - CleanCode

### 8. 함수다루기

##### 56_void & return

* void 연산자: undefined 를 반환
* return: 함수의 반환 값



* void return 예제

  ```javascript
  /**
   * void & return
   */
  
  function handleClick() {
    // void 함수의 return
    // undefined 가 return 됨
    return setState(false);
  }
  
  function showAlert(message) {
    // void 함수의 return
    // undefined 가 return 됨
    return alert(message);
  }
  
  function test(sum1, sum2) {
    const result = sum1 + sum2;
  
    return;
  }
  
  test(1, 2); //undefined
  
  function testVoidFunc() {
    return test(1, 2);
  }
  
  testVoidFunc(); //undefined
  ```
  
  * 반환값이 없는 함수의 반환값은 void
  * 반환값이 없는 함수를 반환하면 void 가 반환됨



* void 가 아닌 return 예제

```javascript
function isAdult(age) {
  return age > 19;
}

function getUserName(name) {
  return "유저 " + name;
}

const isFlag = isAdult(10);
console.log(isFlag); // false
console.log(typeof isFlag); // boolean
```

