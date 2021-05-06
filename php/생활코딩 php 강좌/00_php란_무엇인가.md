# 생활코딩 php 강좌

### 0강 오리엔테이션 - php 란 무엇인가?

##### 0.1 서버와 클라이언트의 이해

* php는 Server Side Script ( technology)
  * 서버 측에서 동작하는 기술(언어)
* Web Program = Server + Client
  * Client - Server 에 요청
    * Web Browser (Web Client)
      * Chrome
      * Firefox
      * Internet Exproler
    * Web Clinet 를 구성하는 기술
      * HTML
      * CSS
      * Javascript
  * Server - Client 제공 / 요청에 응답
    * Web Server
    * Server 를 구성하는 기술
      * Web Server
        * Apache - 가장 많이 사용
        * IIS - MS 진영의 제품
        * NGINX - 급부상 하는 신예 Web Server 
      * PHP / PYTHON / JAVA
      * MY SQL / ORACLE
  * Client program 이 url 주소로 Server 컴퓨터에 접근하여 Web Server Software 에 요청
    * Web server 는 저장되어 있는 html 을 Client 의 Web browser 에 전송
      * Web Service를 html 파일의 형태로 제공하는 한계를 느끼면서 CGI (Common Gateway Interface) 가 개발됨
      * CGI : Web Server 와 PHP engine 사이에 통신 할 수 있는 통신 규약



##### 0.2 php 의 특성

* Web : Internet 네트워크 위에서 동작하는 하나의 Service 또는 App
* Web 을 사용자에게 보여주는 언어가 html



* `php` :  Hypertext preprocessor
  * 1995년 `라스무스 러도프` 가 개발
  * `Personal Hompege Tools` 에서 `php` 가 됨
    *  개인의 홈페이지를 가볍게 만들수 있는 도구에서 시작
  * Hypertext preprocessor
    * Hypertext : 문서와 문서가 Link 로 연결되어 있는 것
      * hypertext 는 html 로 만듬
    * preprocesor : 전처리기
      * html 이 client 에  전달 되기 전에 programing 적으로 dynamic 하게 만들어 냄
  * 초기에는 `perl` 로 작성이 되었지만, `c` 로 새롭게 만들어 짐
  * Web 개발에 가장 많이 사용되고 있는 언어 중 하나
    * web 를 php 로 개발 할 때, `php 에서 제공하는 api` 를 확인하는 것이 도움됨
    * web 을 운용하는 system 에는 `php 가 설치 되어 있을 가능성이 높음`
      * `web hosting` (공유 hosting)
        * 한대의 컴퓨터에 os 와 server 를 위한 system 이 설치 되어 있는데, 이를 여러 사용자들이 web service 를 위해 공유해서 사용하는 시스템
        * 각각의 사용자들은 보통 root 자용자가 아닌 일반 사용자이고 시스템의 응용프로그램의 설치를 보통은 막아 두기 때문에, 설치되어 있지 않은 시스템의 개발은 불가능하다
        * php 의 경우는 대부분 web 기반 hosting 환경에서 기본적으로 설치가 되어 있기에 `거의 제한이 없음`
    * `Compile` 이 필요없는 `interpreter` 언어
    * 게시판, 블로그, 사이트 빌더 등의 웹 어플리케이션에서 많이 사용 됨
      * 위키피디아, facebook 등

* php 의 단점
  * web Only : web 외의 용도로는 사용되지 않는 언어
  * open source : 많은 사람의 참여로 만들어 졌기 때문에, 이름이나 인자의 일관성이 없고 예측 가능성이 떨어짐