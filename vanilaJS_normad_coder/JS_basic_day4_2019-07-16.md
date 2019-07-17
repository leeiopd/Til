# Vanilla js

## JS_basic_day4_2019-07-16



> ### Making a JS Clock part One

* JS로 시계 구현

```javascript
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();ㅋ
}
init();

```

* 시계를 구현 하였지만 동적으로 동작하지 않고 렌더링 되었을 때의 시간만 보여준다





> ### Making a JS Clock part Two

```javascript
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  // clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

  // 10보다 작은 숫자 일때, 앞에 0을 붙여줌
  // 삼항 연산자
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();

  // setInterval - getTime을 1000ms(1초)의 간격으로 반복 실행
  setInterval(getTime, 1000);
}
init();
```

* 삼항 연산자를 이용하여 항상 두 자리 숫자로 표기
* setInterval 함수를 이용하여 1초마다 반복 실행으로 시간을 동적으로 표기





> ### Saving the User Name part Two

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="index.css" />
    <title>Something</title>
  </head>
  <body>
    <div class="js-clock">
      <h1>00:00</h1>
    </div>
      
      <!-- 사용자의 이름을 localStorage에 저장하고 출력할 부분 // greeting.js 호출 -->
    <form class="js-form form">
      <input type="text" placeholder="What it your name?" />
    </form>
    <h4 class="js-greetings greetings"></h4>
    <script src="clock.js"></script>
    <script src="gretting.js"></script>
  </body>
</html>

```



```javascript
// greeting.js

const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
// querySelector - 원하는 셀렉터를 다 가져 올수 있음 (class, tag, id)
// querySelectorAll - 클래스명에 다른 엘리먼트들을 array 형태로 모두 가져 옴
// getElementById - 태그로 엘리먼트를 가져옴 (input, body, html, div, section)

// localStorage에 저장될 currentUser의 변수를 USER_LS로 저장
const USER_LS = "currentUser",
  // shoing class를 SHOWIMG_ON 변수로 저장
  SHOWING_ON = "showing";

function paintGreeting(text) {
  // currentUser 가 not null 일때, 함수 호출

  // SHOWING_ON === showing tag를 form 에서 제거
  form.classList.remove(SHOWING_ON);
  // .js-greetings class가 적용된 테그에 showing class 추가
  greeting.classList.add(SHOWING_ON);
  // innerText를 `hello {text}`로 변경
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // no user
  } else {
    // yes user
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
```

```css
/* index.css */

/* 보이지 않게 하는 class */
.form,
.greetings {
  display: none;
}

/* 보이게 하는 class */
.showing {
  display: block;
}
```

