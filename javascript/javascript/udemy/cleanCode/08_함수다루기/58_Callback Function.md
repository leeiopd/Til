# Udemy - CleanCode

### 8. 함수다루기

##### 58_Callback Function



* eventListner CallbackFunction 예제

  ```javascript
  // click callback EventListner
  someElement.addEventListener("click", function (e) {
    console.log("클릭이 되었습니다");
  });
  
  
  // 직접 구현
  DOMException.prototype.addEventListener = function (eventType, callbackFunc) {
    // event type click
    if (eventType === "click") {
      const clickEventObject = {
        target: {},
      };
      
      // click 이벤트 동작
      callbackFunc(clickEventObject);
    }
  };
  
  ```
  



* callback 함수를 활용한 refactoring

  ```javascript
  function register() {
    const isConfirm = confirm("회원가입에 성공했습니다.");
  
    if (isConfirm) {
      redirectUserInfoPage();
    }
  }
  
  function login() {
    const isConfirm = alert("로그인에 성공했습니다.");
  
    if (isConfirm) {
      redirectIndexPage();
    }
  }
  
  ///////////////////////
  // refactoring
  function confirmModal(message, callback) {
    const isConfirm = alert(message);
  
    if (isConfirm && callback) {
      callback();
    }
  }
  
  function register() {
    confirmModal("회원가입에 성공했습니다.", redirectUserInfoPage);
  }
  
  function login() {
    confirmModal("로그인에 성공했습니다.", redirectIndexPage);
  }
  
  ```
  
  * 생성자 함수를 화살표 함수를 사용하여 만들 수 없음

