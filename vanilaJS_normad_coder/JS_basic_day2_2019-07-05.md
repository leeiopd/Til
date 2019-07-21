# Vanilla js

## JS_basic_day2_2019-07-05



> ###  function

```javascript
function sayHello(name, age){
  console.log(`Hello ${name} you are ${age} years old`)
}
// ` (back tic) 사용

const greetNicolas = sayHello("Nicolas", 14)
// Hello Nicolas you are 14 years old

console.log(greetNicolas)
// undefined
// greetNicolas 함수의 return 값이 존재하지 않기 때문에
// 콘솔창에 undefined이 나타남
```



```javascript
function sayHello2(name, age){
  return `Hello ${name} you are ${age} years old`;
}

const greeNicolas = sayHello2("Nicolas", 14)

console.log(greeNicolas)
```



```javascript
const calculator = {
  plus: function(a, b){
    return a+b;
  },
  minus: function(a, b){
    return a-b;
  }
  }


const plus = calculator.plus(5, 5);
console.log(plus)

const minus = calculator.minus(1, 4)
console.log(minus)
```





> ### funtion - html

```javascript
console.log(document);
// document 또한 object

const title = document.getElementById("title")

console.log(title)

// DOM - Document Object Model
// javascript는 html 요소를 가져와서 object로 변환함

title.innerHTML = "hi!!"
// title의 내용이 hi!!로 바뀜
```

```html
<!-- HTML 파일 -->
<!DOCTYPE html>
<html>
  <head>
    <tittle></tittle>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <h1 id="title">This works!</h1>

    <script src="index.js"></script>
  </body>
</html>
```

* DOM - Document Object Mdel
  * javascript는 html 요소를 가져와서 object로 변환함



> Modifying the DOM with JS

```javascript
const title = document.getElementById("title")

title.innerHTML = "hi!!"
// title의 내용이 hi!!로 바뀜

title.style.color = 'red';
// title의 글자 색이 red로 바뀜

```

```html
<!-- HTML 파일 -->
<!DOCTYPE html>
<html>
  <head>
    <tittle></tittle>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <h1 id="title">This works!</h1>

    <script src="index.js"></script>
  </body>
</html>
```



> ### Events and event handlers

```javascript
const title = document.getElementById("#title");

function handleResize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize);

// handleResize 와 handleResize()의 차이
// handleResize()는 곧바로 호출 됨.
// handleResize 는 이벤트가 발생 시 호출.
```

* 창 사이즈가 변하면 동작하는 함수



```javascript
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "red";
}

title.addEventListener("click", handleClick);
```

* 클릭 시  `#title` 의 색이 `red`로 변하는 함수



```javascript
const title = document.querySelector("#title");

// function handleResize() {
//   console.log("I have been resized");
// }

function handleResize(event) {
  console.log(event);
  // event 객체 작성
}
// addEventListener로 이벤트 발생 시
// window.addEventListener("resize", handleResize(event));
// 로 이벤트 발생의 함수 인자를 받도록 함.

window.addEventListener("resize", handleResize);
// addEventListner('발생을 기다릴 이벤트', 작동할 함수)
// window.addEventListener("resize", handleResize); - 이벤트 발생 시 함수 작동
// window.addEventListener("resize", handleResize()); - 즉시 함수 발동

function handleClick() {
  title.style.color = "red";
}

title.addEventListener("click", handleClick);

```





> ### If, else, and, or

```javascript
// if
if ("10" === 10) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lalalalal");
} else {
  console.log("ho");
}
```

* console-print
  * lalalalal

```javascript
// if - and(&&)
if (20 > 5 && "nicolas" === "nicolas") {
  console.log("yes");
} else {
  console.log("no");
}
```

* console - print
  * yes

```javascript
// if - or(||)
if (20 > 5 || "nicolas" === "necolas") {
  console.log("yes");
} else {
  console.log("no");
}
```

* console-pirnt
  * no



```javascript
true && true = true;
false && true = false;
true && false = false;
false && false = false;
```

* && - and 문법

```javascript
true || true = true;
false || true = true;
true || false = true;
false || false = false;
```

* || - or 문법



```javascript
const age = prompt("How old are you?");
// prompt - alert 같은 입력 창을 띄워 줄수 있는 함수//옛날 JS

if (age >= 18 && age <= 21) {
  console.log("You can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
```

