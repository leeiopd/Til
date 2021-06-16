# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 01. Javascript

##### 01_Javascript란

1.1 Javascript 란?

 * javascript 란
   * 브라우저를 제어하기 위해 넷스케이프에서 개발한 언어
      * 사용자의 클릭, 게산기, 달력 등의 이벤트 조작에 대응하기 위한 언어



* javascript 의 확대
  * AJAX 활용(구글맵)
    * 화면의 이동에 따라 지도를 그려줌
    * Action 에 따라 서버에 동적으로 Data 호출
  *  Debug 툴의 발전
    * Firefox 의 Firelog 에서 console.log 가 최초로 지원
    * 이전에는 alert 등으로 출력하여 확인
  * V8 engine 개발
    * chrome 에서 개발
    * 성능의 비약전 발전
  * Nodejs 등장
    * Server 에서 V8 engine 기반으로 javascript 가 동작하게 됨
  * Desktop, IOT 등 사용범위 확대
  * 여러 플랫폼 제작에서 자바스크립트 개발자를 끌어안기 위한 환경 조성
    * client 뿐만 아니라 server 등 여러 역할에 javascript 개발자들이 활약



* javascript 의 변수
  * var 로 선언 (ES6 이전)
  * 동적언어 이므로 자료형을 선언 할 필요 없음
    * 동적 언어: 컴파일 시 자료형을 정하는 것이 아니고 실행 시에 결정
      * 타입 없이 변수만 선언하여 값을 지정 가능
      * Runtime 까지 타입에 대한 결정을 끌고 갈 수 있기 때문에, 선택의 여지가 많음
  * 기본자료형과 객체(Object) 두 가지로 나뉨

| 기본 자료형 | 설명                                       |
| ----------- | ------------------------------------------ |
| Boolean     | 논리적인 요소를 나타냄, True / False       |
| Null        | 객체 값이 존재하지 않는다는 것을 의미      |
| Undifined   | 값을 할당하지 않음                         |
| Number      | 숫자형                                     |
| String      | 문자형                                     |
| Symbol      | ECMAScript 6 에서 추가, 유일하고 변경 불가 |





```javascript
var a = '123';
console.log(a)
// 123

var b = 'Node js'
console.log(b)
// Node js

var c = false;
console.log(c)
// false

var d
console.log(d)
// undefined

console.log(e)
// Uncaught ReferenceError: e is not defined

var f = null
console.log(f)
// null
```

