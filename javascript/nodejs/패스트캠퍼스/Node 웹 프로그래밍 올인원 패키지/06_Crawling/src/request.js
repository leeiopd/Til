const request = require("request");

// 네이버 주소
const url = "https://naver.com";

request(url, (err, res, body) => {
  // request module 로 url 의 html 정보를 가져옴
  console.log(body);
});
