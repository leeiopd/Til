# JS

*   html : 구조
*   CSS : 꾸미기
*   JavaScript : 액션 - Java와는 전혀 상관 없다



*   ECMA : JavaScript의 여러 파편화를 묶어서 표현
    *   ES6 - ECMA의 6번째 버전, 2015년 탄생 - 범용적으로 많이 사용
    *   강의는 ES6+를 기준



*   Crome : 스크립트 실행/반응 속도가 빠름 -  V8 엔진



*   자바스크립트의 함수는 일급 객체이다.
    *   조건
        1.  변수나 특정한 오브젝트에(배열) 함수를 저장할 수 있다.
        2.  함수의 인자로 전달할 수가 있어야 한다.
        3.  함수자체를 return 할 수 있어야 한다.
        4.  이름과 상관없이 구별이 가능하다. (익명으로 표현 가능)
        5.  동적으로 속성값(property) 할당이 가능하다.
        6.  





### 1. 출력

```javascript
alert('알림문구로 출력')
console.log('콘솔창에서 출력')

```





-------------------------------------------

1 + '1'

>   '11'

2  * '12'

>24

```javascript
NaN === 0
false
NaN === '0'
false
NaN === []
false
isNaN(NaN)
true
isNaN(0)
false
Infinity
Infinity
typeof Infinity
"number"
typeof typeof '123'
"string"
1 + '1'
"11"
2 * '12'
24
2 - '12'
-10
parseInt('123')
123
parseFloat('123')
123
String(2)
"2"
typeof function() {}
"function"
typeof (() => {})
"function"
'a'.repeat(2)
'aa'
```

