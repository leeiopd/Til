# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 06.Crawling

##### 03_puppeteer2

* puppeteer : 크롤링 module
  * web browser 를 제어하여 crawling



```javascript
// ./template.js

const puppeteer = require("puppeteer");

//입력 할 텍스트
const insert_name = "insert_" + Math.random().toString(36).substring(2, 15);
const insert_description =
  "insert_" + Math.random().toString(36).substring(2, 15);

//수정 할 텍스트
const modi_name = "update_" + Math.random().toString(36).substring(2, 15);
const modi_description =
  "update_" + Math.random().toString(36).substring(2, 15);

async function run() {
  // 브라우저 열기
  const browser = await puppeteer.launch({
    // 웹 브라우저를 열기: headless false
    // 웹 브라우저를 열지 않고 실행: headless true (dafault)
    headless: false,
  });
  const page = await browser.newPage();

  // 웹사이트 로딩
  await page.goto("http://localhost:3000/", {
    timeout: 0,
    waitUntil: "domcontentloaded",
  });

  // 작성하기
  // main page randering 기다리기
  await page.waitForSelector(".btn-default");
  // 작성하기 btn click
  await page.click(".btn-default");
  // 작성 page 에서 작성하기 btn randing 기다리기
  await page.waitForSelector(".btn-primary");
  // 작성
  await page.evaluate(
    (a, b) => {
      // 제목 입력
      document.querySelector("input[name=name]").value = a;
      // 내용 입력
      document.querySelector("textarea[name=description]").value = b;
      // 작성하기 btn click
      document.querySelector(".btn-primary").click();
    },
    insert_name,
    insert_description
  );

  // 수정하기
  // main page randering 기다리기
  await page.waitForSelector(".btn-default");
  // 수정대상 detail page click
  await page.click("table tr:nth-child(2) td:nth-child(1) a");
  // 수정하기 btn randering 기다리기
  await page.waitForSelector(".btn-primary");
  // 수정하기 btn click
  await page.click(".btn-primary");
  // 수정
  await page.evaluate(
    (a, b) => {
      // 제목 입력
      document.querySelector("input[name=name]").value = a;
      // 내용 입력
      document.querySelector("textarea[name=description]").value = b;
      // 작성하기 btn click
      document.querySelector(".btn-primary").click();
    },
    modi_name,
    modi_description
  );

  // 목록으로 btn click
  await page.click(".btn-default");

  // 삭제하기
  // main page randering 기다리기
  await page.waitForSelector(".btn-default");
  // 삭제하기 btn click
  await page.click(".btn-danger");

  // 브라우저 닫기
  await browser.close();
}

run();
```
