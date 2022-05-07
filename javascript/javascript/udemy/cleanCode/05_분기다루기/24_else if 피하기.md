# Udemy - CleanCode

### 5. 분기 다루기

##### 24_else if 피하기



* else if 피하기

  ```javascript
  const x = 1;
  
  if (x >= 0) {
    console.log("x는 0과 같거나 크다");
  } else if (x > 0) {
    console.log("x는 0보다 크다");
  } else {
    console.log("Else");
  }
  ```

  * else if 는 Promise 의 then chaining 과는 다르다
    * else if 는 순차적 실행이 아님

  ```javascript
  const x = 1;
  
  if (x >= 0) {
    console.log("x는 0과 같거나 크다");
  } else {
  	if (x > 0) {
  	  console.log("x는 0보다 크다");    
    }
  }
  ```

  * if ~ else if 는 처음의 if 와 else 를 처리하고 나서 다시 if 문을 처리하는 것과 같다.
    * else if 를 사용하는 것은 조건에 대해 명확하기 생각하고 있지 못한 경우
    * else if 사용하지 말고 switch 를 사용하자
      * 명확하게 조건을 분리하자

  * Promise 의 then 처럼 파이프라인을 타고 흐르는 동작이 아닌것에 주의하자
