# Udemy - CleanCode

### 3. 타입 다루기

##### 17_first-last



* first-last
  * 포함된 양 끝을 의미
  * ~~ 부터 ~~ 까지
  * min/max 의 경우 순차적으로 모든 요소를 처리하는 함수가 있다고 가정 할때, 명시적으로 유효성을 가짐
  * first/last 는 연속성과 규칙성이 없는경우에 사용
  * 시작과 끝에대한 명시적으로 사용하는 네이밍
  





```javascript
const students = ["포코", "존", "현석"];

function getStudents(first, last) {
  // ...some code
}

getStudents("포코", "현석");

```

