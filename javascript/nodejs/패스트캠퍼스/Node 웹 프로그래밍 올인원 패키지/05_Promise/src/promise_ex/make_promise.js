const wait1secons = new Promise((resolve, reject) => {
  reject("에러!!!");
});

wait1secons
  .then(() => {
    console.log("프라미스 실행 완료!!");
  })
  .catch((err) => {
    console.log(err);
  });
