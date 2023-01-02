# Udemy - CleanCode

### 8. 함수다루기

##### 60_Closure

* 클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다.
* 클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수
  * 클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수




* 예제1

  ```javascript
  function getNum(num1) {
    return function sum(num2) {
      return num1 + num2;
    };
  }
  
  const addOne = getNum(1);
  console.log(calculate); // sum()
  const addTwo = getNum(2);
  
  console.log(calculate(3)); // 4
  console.log(addTwo(3)); // 5
  ```
  



* 예제2

  ```javascript
  function getNum(num1) {
    return function (num2) {
      return function (calculateFn) {
        return calculateFn(num1, num2);
      };
    };
  }
  
  function sum(num1, num2) {
    return num1 + num2;
  }
  
  const calculate = getNum(1)(2);
  console.log(calculate); // 3
  
  const sumResult = calculate(sum);
  console.log(sumResult);
  
  function multiple(num1, num2) {
    return num1 * num2;
  }
  
  const multipleResult = calculate(multiple);
  console.log(multipleResult); // 2
  
  ```
  



* Closure 활용1

  ```javascript
  function log(type, value) {
    if (type === "log") {
      console.log(value);
    }
    if (type === "info") {
      console.info(value);
    }
    if (type === "error") {
      console.error(value);
    }
    if (type === "warn") {
      console.warn(value);
    }
  }
  
  log("log", "foo");
  log("info", "foo");
  log("error", "foo");
  log("warn", "foo");
  
  ////////////////////
  // closure 사용 개선
  function closureLog(value) {
    return function (fn) {
      fn(value);
    };
  }
  
  const logFoo = closureLog("foo");
  logFoo((v) => console.log(v));
  logFoo((v) => console.info(v));
  logFoo((v) => console.error(v));
  logFoo((v) => console.warn(v));
  ```
  



* Closure 활용2

  ```javascript
  const arr = [1, 2, 3, "A", "B", "C"];
  
  const isNumber = (value) => typeof value === "number";
  
  const isString = (value) => typeof value === "string";
  
  arr.filter(isNumber); // [1, 2, 3]
  
  ////////////////////////
  // closure 사용 개선
  const arr = [1, 2, 3, "A", "B", "C"];
  
  function isTypeOF(type) {
    return function (value) {
      return typeof value === type;
    };
  }
  
  const isNumber = isTypeOF("number");
  const isString = isTypeOF("string");
  
  arr.filter(isNumber); // [1, 2, 3]
  arr.filter(isString); // ['A', 'B', 'C']
  ```
  



* Closure 활용3

  ```javascript
  function fetcher(endpoint) {
    return function (url, options) {
      return fetch(endpoint + url, options)
        .then((res) => {
          if (res.ok) {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(res.error);
            }
          }
        })
        .catch((err) => console.log(err));
    };
  }
  
  const getNaverApi = fetcher("https://naver.com");
  const getDaumApi = fetcher("https://daum.net");
  
  getNaverApi("/webtoon").then((res) => res);
  getDaumApi("/webtoon").then((res) => res);
  ```
