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
