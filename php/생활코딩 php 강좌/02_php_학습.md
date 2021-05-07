# 생활코딩 php 강좌

### 2. php 학습

##### 2.1 나의 첫번째 php 어플리케이션

* php 개발 환경
  * OS
  * Apache - Web Server Software
  * php - Apache 와 통신하며, php로 만들어진 코드를 실행하여 Apache 에게 돌려줌
    * php
    * php Interpreter
    * php engine
  * php Application
    * *.php file - php program
      * php interpreter 를 통해 해석되어 Apache 를 통해 운영체제를 거쳐 Client 에게 전달 됨
* php Aplication 개발 == *.php 파일을 작성



```php
<?php
echo"Hello world";
?>

* 출력결과

  * ```html
    hello world

* `<?php` : php engine 에게 php 가 작성시작을 알림

* `echo`: 화면에 출력

* `?>`: php 끝을 알림



```c
<html>
<body>
echo "hello world";
<?php
echo "hello world";
?>
</body>
</html>
```

* 출력결과

  * ```c
    echo "hello world"; hello world
    ```

* php 에 대한 구분자로 감싸져 있지 않은 부분은, 그대로 출력됨

  * php 문법을 적용 시키려면 `<?php` , `?>` 사이에 작성 하여 함



* Web Brower에 url 을 입하여 web page 를 본다는 의미
  1. client computer 에 설치되어 있는 web browser 를 통해 url 에 해당되는 컴퓨터를 찾아가서 요청
     1. Web Brwoser 는 운영체제에게 Network 통신을 요청함
     2. 컴퓨터의 Lan Card 를 통해 인터넷 Network 에 접근
     3. Network 를 통해 Server 에 설치되어 있는 Lan Card 를 통해 접속
  2. 요청이 Server 에 설치되어 있는 운영체제에 도착하면. 운영체제는 Apache 를 실행
  3. 요청된 url 의 파일 확장자가 `.php`인 것을 확인하고, Apache가 php engine(Interpreter) 에게 php 파일 실행을 위임
  4. php engine 은 요청된 파일을 찾고, 해석하여 html code 로 이루어진 php application 으로 만들어 client에게 전달
  5. web browser 는 html code 를 분석하여 화면에 출력



##### 2.2 서버측 언어 Server Side Script 를 사용하는 이유

* 인터넷 환경

  * Server
    * Web Server : Client 가 요청한 Web Server 의 html 문서를 보내주는 역할 만 함
  * Client
    * Web Browser
  * html : Hyper Text Markup Language
    * 내용
  * http : Hyper Text Transfer Protocol
    * Server 와 Client 의 통신 규약
    * 메세지 운송 규칙
  * uri / url
    * 자원 (html) 식별 주소
  * CGI : Comon Gateway Interface
    * web server 와 server side script 사이의 통신 규약
    * 사용자가 요청한 file 에 해당하는 engine을 호출하여 처리
      * 해당하는 언어의 file 을 읽고 해석된 내용을 web server 에 전달
      * web server 는 brwoser 에게 html 파일을 전달 해 주는 것처럼 동작
  * Data Base : 정보를 저장하는 것에 특화
    * MySQL, Oracle 등
    * 요청에 필요한 data 가 data base 에 저장된 것이라면, data 를 가져와서 가공하여 html 파일로 만들어 web server 에 전달

  



