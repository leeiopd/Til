# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 03. express

##### 01_express시작

* express 강의 목차
  1. express 시작
     * Express 기초
  2. Routing
     * 서버 url 추가
  3. View Engine - Nunjucks
     * db 의 정보를 controler 에서 가공해서 전송
  4. Template 상속
     * 중복으로 사용되는 부분을 template 으로 상속받아 사용
  5. 미들웨어
  6. from (body-parser)
     * Data-request
  7. 정적파일
     * Img, css 등의 파일의 접근
  8. Global View Variable
     * template engine 에서 사용할 변수 setting
  9. 404, 500 error handling
  10. nunjucks macro
      * Template engine 의 주요 기능
  11. Express 권장 구조





* 왜 Express 를 사용해야 하는가
  1. 웹서비스의 관점
     * 많이 사용되는 기능과 규칙이 만들어져 있음
  2. 프레임워크 선정시 고려해야 될 점
     * 가장 많이 사용되는 기술





```javascript
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello Server");
    res, end();
  })
  .listen(3000);
```

* express 를 사용하지 않는 서버 코드
* Port 가 3000 번 server 응답
  * http://Localhost:3000
  * Hello Server 가 browser 에 출력



```javascript
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(port, () => {
  console.log("Express Listening on port", port);
});
```

* express 를 사용하는 서버 코드

* Port 가 3000 번 server 응답
  * http://Localhost:3000
  * Hello Express 가 browser 에 출력



* http 상태 코드

  | 상태코드 | 설명                       |
  | :------- | :------------------------- |
  | 1XX      | 조건부응답                 |
  | 2XX      | 응답성공                   |
  | 3XX      | redirection                |
  | 4XX      | 요청오류(ex. 404 Notfound) |
  | 5XX      | 서버오류                   |

  



```json
// package.json
{
  "name": "01",
  "version": "1.0.0",
  "description": "",
  "main": "nonExpress.js",
  "scripts": {
    "start": "nodemon app.js",
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "nodemon": "^2.0.9"
  }
}
```

* nodemon script 추가
  * Start 는 예약어이므로 "npm start" 로 실행
  * dev 는 추가된 명령어 이므로 "npm run start" 로 실행