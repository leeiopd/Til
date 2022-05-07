# Udemy - CleanCode

### 5. 분기 다루기

##### 28_Default Case 고려하기



* Default Case 고려하기

  ```javascript
  function sum(x, y) {
    x = x || 1;
    y = y || 1;
  
    return x + y;
  }
  
  
  function createElement(type, height, width) {
    const element = document.createElement(type || "div");
  
    element.style.height = height || 100;
    element.style.width = width || 100;
  
    return element;
  }
  
  
  function registerDay(userInputDay) {
    switch (userInputDay) {
      case "월요일": //some code
      case "화요일": //some code
      case "수요일": //some code
      case "목요일": //some code
      case "금요일": //some code
      case "토요일": //some code
      case "일요일": //some code
      default:
        // Edge Cate 를 위해 명시적으로 Error를 선언
        throw Error("입력값이 유효하지 않습니다.");
    }
  }
  
  
  const Root = () => (
    <Router history={browserHistory}>
      <Switch>
        <Router exact path="/" component={App} />
        <Router path="/welcome" component={Welcome} />
        <Router component={NotFound} />
      </Switch>
    </Router>
  );
  
  ```
  
  * 모든 상황에 대비하기 위해 Default Case 를 고려하자
    * 기본값 설정
    * 사용자의 실수 예방
  
