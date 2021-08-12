// 모든 폴더를 작성

const { Router } = require("express");
const router = Router();

router.use("/admin", require("./admin"));
// router.use("/contacts", require("./contacts"));

module.exports = router;
