# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 06.Crawling

##### 01_크롤링 개요

* 목차
  1. Crawling 개요
  2. 배송위치 추적
  3. Puppeteer
     * Web Browser 에서 동적인 크롤링 도구
       * 로그인 한 뒤, 게시글 크롤링 등
     * Python 의 Selenium 과 유사



* 크롤링 순서
  1. URL 에서 html 을 가져온다.
  2. 내가 원하는 부분을 가져온다.



* 사용하는 패키지
  * request: url 로 호출 후, 데이터를 가져옴
  * cheerio : jQuery 방식으로 DOM 을 가져와서 데이터를 정제





* 실슬환경 : node > 12v



```javascript
// ./request.js

const request = require("request");

// 네이버 주소
const url = "https://naver.com";

request(url, (err, res, body) => {
  // request module 로 url 의 html 정보를 가져옴
  console.log(body);
});
```

* request module 의 crowling 결과로 url 의 html 전체가 출력된다.