const express = require("express");
const nunjucks = require("nunjucks");
const logger = require("morgan");
// const bodyParser = require("body-parser");

class App {
  constructor() {
    this.app = express();

    // 뷰엔진 셋팅
    this.setViewEngine();

    // 미들웨어 셋팅
    this.setMiddleWare();

    // 정적 디렉토리 추가
    this.setStatic();

    // 로컬 변수
    this.setLocals();

    // 라우팅
    this.getRouting();

    // 404 error
    this.status404();

    // error
    this.errorHandler();
  }

  setMiddleWare() {
    //미들웨어 셋팅
    this.app.use(logger("dev"));
    this.app.use(express.urlencoded({ extended: true }));
  }

  setViewEngine() {
    nunjucks.configure("template", {
      autoescape: true,
      express: this.app,
    });
  }

  setStatic() {
    this.app.use("./uploads", express.static("uploads"));
  }

  setLocals() {
    this.app.use((req, res, next) => {
      this.app.locals.isLogin = true;
      this.app.locals.req_path = req.path;
      next();
    });
  }

  getRouting() {
    this.app.use(require("./controllers"));
  }

  status404() {
    this.app.use((err, req, res, _) => {
      res.status(404).render("common/404.html");
    });
  }

  errorHandler() {
    this.app.use((err, req, res, _) => {
      res.status(500).render("common/500.html");
    });
  }
}

module.exports = new App().app;
