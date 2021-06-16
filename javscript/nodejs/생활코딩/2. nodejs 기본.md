# node.js_생활코딩

## day2

#### 웹서버 만들기

* opentutorials.org/module/3549/21032
  * 공부 자료
* node.js는 웹서버로 동작함
* 실습 day2 참조



#### JavaScript 문법

* Data Type

  * Number
  * String
  * Boolean
  * Array
  * Object
  * 등...

* Number

  ```javascript
  console.log(1+1);
  > 2
  
  console.log(3-4);
  > -1
  
  console.log(2*3);
  > 6
  
  console.log(10/2);
  > 5
  
  console.log(10/3);
  > 3.3333333333333335
  ```
	
  
  
* String

  ```javascript
  console.log("1+1");
  > 1+1
  
  console.log('1'+'1');
  > 11
  // 문자 사이의 '+'는 문자의 결합 연산자로 됨
  
  console.log('abcdefg'.length);
  > 7
  ```



* 변수

  ```javascript
  a = 1;
  console.log(a);
  a = 2;
  console.log(a);
  // 1 = 2; - ReferenceError
  ```

* 변수2

  ```javascript
  var letter = 'Velit sunt consectetur laboris aute et minim laboris eu deserunt.'
  console.log(letter);
  > Velit sunt consectetur laboris aute et minim laboris eu deserunt.
  ```

  ```javascript
  var name = '<CHANGE>';
  var letter = 'Velit sunt cons'+name+'ectetur laboris aute et '+name+'minim laboris eu deserunt.'
  console.log(letter);
  > Velit sunt cons<CHANGE>ectetur laboris aute et <CHANGE>minim laboris eu deserunt.
  ```

  

* Template Literal (Template String) - 문자를 표현하는 방법

  ```javascript
  var name = '<CHANGE>';
  var letter = 'Velit sunt cons'+name+'ect\n\
  \n\
  \netur laboris aute et '+name+'minim laboris eu deserunt.'
  console.log(letter);
  > Velit sunt cons<CHANGE>ect
  
  
  etur laboris aute et <CHANGE>minim laboris eu deserunt.
  ```

  ```javascript
  var letter = `Velit sunt cons${name}ect
  
  etur laboris aute et ${name}minim laboris eu deserunt. ${1+1}`
  console.log(letter);
  > Velit sunt cons<CHANGE>ect
  
  
  etur laboris aute et <CHANGE>minim laboris eu deserunt. 2
  ```




#### URL

* `http` :// `opentutorials.org` : `3000` / `main` ? `id=HTML&page=12`
* `http` - protocal
  * 프로토콜, 통신규칙
  * 사용자가 서버에 접속 시 어떤 방식으로 통신 할 것인가 알려줌 
  * http - hyper text transfer protocal : 웹 브라우저와 웹 서버가 서로 데이터를 데이터를 주고받기 위해서 만든 통신 규칙 
* `opentutorials.org` - host(domain)
  * host : 인터넷에 접속되어 있는 각각의 컴퓨터
  * 특정한 인터넷에 연결되어 있는 컴퓨터를 가르키는 주소
* `3000` - port 번호
  * 한대의 컴퓨터 안에 여러대의 서버가 있을 수 있음
  * 클라이언트가 접속 시, 그 중 어떤 서버와 통신할지 port 번호로 결정
  * 80번은 web서버로 전 세계적으로 약속되어 있음 ( 생략 가능 ) - defualt 값이 80번
* `main` - path
  * 컴퓨터 안의 디렉토리와 파일을 가리킴
* `id=HTML&page=12` - query string
  * 웹서버에 정보를 전달
  * `?` 로 시작
  * `&` 값과 값 구분
  * `=` 값의 이름과 값을 구분