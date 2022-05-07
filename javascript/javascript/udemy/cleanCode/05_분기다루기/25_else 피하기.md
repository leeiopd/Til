# Udemy - CleanCode

### 5. 분기 다루기

##### 25_else 피하기



* else 피하기

  ```javascript
  function getActiveUserName(user) {
    if (user.name) {
      // 참
      return user.name;
    } else {
      // 거짓
      return "이름없음";
    }
  }
  
  function getHelloCustomer(user){
    if(user.age<20){
      reportError(user)
    }else{
      return '안녕하세요'
    }
  }
  ```
  
  * else 를 습관적으로 사용하는것을 지양하자
  * else 를 사용하게 되면 로직이 명백하게 참과 거짓으로 나뉘게 된다.
    * 하나의 함수가 2가지 역할을 할때, 문제가 발생
    * getHelloCustomer 함수의 경우, 성인이 아닐 경우 '안녕하세요' 를 반환하지 않음
  
  
  ```javascript
  function getActiveUserName2(user) {
    if (user.name) {
      return user.name;
    }
    return "이름없음";
  }
  
  function getHelloCustomer2(user) {
    if (user.age < 20) {
      reportError(user);
    }
    return "안녕하세요";
  }
  ```
  
  * javascript 의 함수는 return 이후 탈출되므로, else 없이 사용 가능하다.
    
