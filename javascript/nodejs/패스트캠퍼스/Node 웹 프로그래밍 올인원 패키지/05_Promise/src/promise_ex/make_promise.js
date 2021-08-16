const wait1secons = new Promise((resolve, reject) => {
  reject(console.log("에러!!!"));
});

wait1secons.then(() => {
  console.log("프라미스 실행 완료!!");
});
