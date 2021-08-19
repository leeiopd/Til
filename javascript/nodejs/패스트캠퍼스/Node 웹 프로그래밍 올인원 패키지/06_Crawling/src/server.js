const express = require("express");

// 모듈 선언
const request = require("request");
const cheerio = require("cheerio");

const app = express();
const port = 3000;

app.get("/shipping.:invc_no", async (req, res) => {
  try {
    // 대한통운의 현재 배송위치 크롤링 주소
    const url = "~/${req.params.invc_no}";

    let result = []; // 최종 보내는 데이터

    const html = await request(url);
    const $ = cheerio.load(html, {
      // 한글 변환
      decodeEntities: false,
    });

    const dtElements = $(".board_area").find("table.mb15 tbody tr td");

    var temp = {};

    for (let i = 0; i < tdElements.length; i++) {
      if (i % 4 === 0) {
        temp = {}; //시작 지점 init
        temp["step"] = tdElements[i].children[0].data.trim(); //공백제거
        //step의 경우 공백이 많이 포함됨
      } else if (i % 4 === 1) {
        temp["date"] = tdElements[i].children[0].data;
      } else if (i % 4 === 2) {
        //children
        // 0 배송상태, 1 br, 2 담당자 이름
        temp["status"] = tdElements[i].children[0].data;
        if (tdElements[i].children.length > 1) {
          temp["status"] += tdElements[i].children[2].data;
        }
      } else if (i % 4 === 3) {
        temp["location"] = tdElements[i].children[1].children[0].data;
        result.push(temp);
      }
    }

    res.json(result);
  } catch (e) {
    console.log(e);
  }
});
