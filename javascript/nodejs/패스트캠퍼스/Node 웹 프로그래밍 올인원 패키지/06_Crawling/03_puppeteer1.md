# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 06.Crawling

##### 03_puppeteer1

* puppeteer : 크롤링 module
  * web browser 를 제어하여 crawling



```javascript
const puppeteer = require("puppeteer");

async function run() {
  // 브라우저 열기
  const browser = await puppeteer.launch({
    // 웹 브라우저를 열기: headless false
    // 웹 브라우저를 열지 않고 실행: headless true (dafault)
    headless: true,
  });
  const page = await browser.newPage();

  // 웹사이트 로딩
  await page.goto("http://localhost:3000/", {
    timeout: 0,
    waitUntil: "domcontentloaded",
  });

  // 상단 테이블의 th 제목을 가져오고 싶은경우
  const tdName = await page.$eval(
    "table tr:nth-child(1) th:nth-child(1)",
    (th) => th.textContent.trim()
  );
  console.log(tdName);

  // 브라우저 닫기
  await browser.close();
}

run();
```

* puppeteer option 에서 headless 는 broswer 의 동작을 화면에 띄울지 또는 숨길지에 대한 설정이다.