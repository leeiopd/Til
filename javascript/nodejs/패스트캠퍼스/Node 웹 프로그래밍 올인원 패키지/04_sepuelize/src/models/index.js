var Sequelize = require("sequelize");
var path = require("path");
var fs = require("fs");
var dotenv = require("dotenv");

dotenv.config(); // LOAD CONFIG

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    timezone: "+09:00",
    operatorsAliases: Sequelize.Op,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

let db = [];

fs.readdirSync(__dirname)
  .filter((file) => {
    //   index.js 를 제외한 모든 js 파일
    return file.indexOf(".js") && file !== "index.js";
  })
  .forEach((file) => {
    //   각각의 file 을 참조하여, db에 Table 을 생성
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

//   모델간의 관계를 생성 (외래 key 등)
Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
