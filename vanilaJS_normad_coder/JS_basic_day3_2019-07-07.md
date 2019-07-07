# Vanilla js

## JS_basic_day3_2019-07-07



> ### DOM - if / else, Function practice

* index.js

```javascript
const title = document.querySelector('#title');
const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHERER_COLOR = '#7f8c8d';

function handleClick() {
	const currentColor = title.style.color;
	// 현재 색의 정보를 받아옴

	console.log(currentColor);
	// 콘솔창에 출력

	if (currentColor == BASE_COLOR) {
		title.style.color = OTHERER_COLOR;
	} else {
		title.style.color = BASE_COLOR;
	}
}

// click - 클릭 할 때 마다
function init() {
	title.style.color = BASE_COLOR;
	title.addEventListener('click', handleClick);
}

// mouseenter - 마우스가 들어 갈 때 마다
// function init() {
// 	title.style.color = BASE_COLOR;
// 	title.addEventListener('mouseenter', handleClick);
// }

init();
```





> ### 2.7 DOM - If else - Function practice part Two

* index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <tittle></tittle>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <h1 id="title" class="btn">This works!</h1>

    <script src="index.js"></script>
  </body>
</html>
```

* index.css

```css
body {
  background-color: #ecf0f1;
}

.btn {
  cursor: pointer;
}

h1 {
  color: #34495e;
  transition: color 0.5s ease-in-out; /* 천천히 변하는 속성 */
}

.clicked {
  color: #7f8c8d;
}
```

* index.js

```javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  //   const currentClass = title.className;
  //   console.log(currentClass);

  const hasClass = title.classList.contains(CLICKED_CLASS);
  console.log(hasClass);
  // title 테그의 class가 CLICKED_CLASS를 가지는지 check하는 변수
  // 가진다면 1, 아니면 0

  //   if (currentClass !== CLICKED_CLASS)

  if (!hasClass) {
    // title.className = CLICKED_CLASS;
    title.classList.add(CLICKED_CLASS);
    // className으로 class 변경시 tag가 포함하고 있는 전체 class가 CLICKED_CLASS로 변경됨
    // 이를 방지하기 위해 classList의 method를 사용.
    // classList.add(CLASS) - CLASS를 class 항목에 추가
  } else {
    // title.className = "";
    title.classList.remove(CLICKED_CLASS);
    // classList.remove(CLASS) - CLASS를 class 항목에서 제거
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
```

* index.js
  * toggle method 사용

```javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  // toggle method는 함수 안에 있는 값을 체크
  // class가 존재하면 add 아니면 remove 동작
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
```

