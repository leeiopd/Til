# Udemy - CleanCode

### 5. 분기 다루기

##### 26_Early Return



* Early Return 예시1

  ```javascript
  function loginService(isLogin, user) {
    // 로그인 여부 확인
    if (!isLogin) {
      // 토큰 존재 확인
      if (!checkToken()) {
        // 기가입유저 재확인
        if (!user.nickName) {
          // 가입
          return registerUser(user);
        } else {
          // 로그인 성공
          refreshToken();
  
          return "로그인 성공";
        }
      } else {
        throw new Error("No Token");
      }
    }
  }
  
  function loginService2(isLogin, user) {
    // Early Return
    /**
     * 함수 미리 종료
     * 사고하기 편함
     */
    if (isLogin) {
      return;
    }
    // 토큰 존재 확인
    if (!checkToken()) {
      throw new Error("No Token");
    }
  
    // 기가입유저 재확인
    if (!user.nickName) {
      // 가입
      return registerUser(user);
    }
  
    // 로그인 성공
    refreshToken();
    return "로그인 성공";
  }
  ```
  
  

* Early Return 예시2

  ```javascript
  function 오늘하루(condition, weather, isJob) {
    if (condition === "GOOD") {
      공부();
      게임();
      유투브보기();
  
      if (weather === "GOOD") {
        운동();
        빨래;
      }
  
      if (isJob === "GOOD") {
        야간업무();
        조기취침();
      }
    }
  }
  
  function 오늘하루2(condition, weather, isJob) {
    if (condition !== "GOOD") {
      return;
    }
    공부();
    게임();
    유투브보기();
  
    if (weather !== "GOOD") {
      운동();
      빨래();
    }
  
    if (isJob === "GOOD") {
      야간업무();
      조기취침();
    }
  }
  ```

  * 하나의 의존성이 많인 로직에 붙어 있을때, Early Return 을 사용해지만 사고 로직이 간단해 진다.
