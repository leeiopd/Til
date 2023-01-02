# Udemy - CleanCode

### 8. 함수다루기

##### 52_argument&parameter

* parameter
  * 함수 선언시 사용되는 인자
* argument
  * 함수 사용시 입력되는 인자
  * real value




```javascript
function example(parameter) {
  console.log(parameter);
}

const argument = "foo";

example(argument);
```



```javascript
/**
 * Parameter (Formal Parameter)
 *
 * 형식을 갖춘, 매개변수
 */
function axios(url) {
  // some code
}

/**
 * Argument (Actual Parameter)
 *
 * 실제로 사용되는 인자
 */
axios("https://github.com");
```

