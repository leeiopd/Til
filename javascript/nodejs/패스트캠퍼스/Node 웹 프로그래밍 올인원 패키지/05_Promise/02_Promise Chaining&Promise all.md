# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 05.Promise

##### 02_Promise Chaining & Promise all



```javascript
// Promise Error 처리

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
```

* Promise 의 Error 는 reject 로 callback 되고, 그 결과는 then 이 아닌 catch 로 받아 온다.





```javascript
// Promise Chaning

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p1_text: "p1 의 텍스트" });
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p2_text: "p2 의 텍스트" });
  }, 3000);
});

p1.then((result1) => {
  console.log("p1 = " + result1.p1_text);
  return p2;
}).then((result2) => {
  console.log("p2 = " + result2.p2_text);
});
```

* Promise Chaning 
  * Promise 를 callback 으로 받아 then 으로 이어받아 실행 할 수 있다.
  * 예제의 총 실행시간은 1초 (p1) + 3초(p2) 이므로 4초가 된다.





```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p1_text: "p1 의 텍스트" });
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p2_text: "p2 의 텍스트" });
  }, 3000);
});

Promise.all([p1, p2]).then((result) => {
  console.log("p1 = " + result[0].p1_text);
  console.log("p2 = " + result[1].p2_text);
});

```

* Promise all
  * Promise.all 을 이용하여 Promise 여러개를 한번에 실행 할 수 있다.
  * promise 를 배열로 입력하고 병렬로 처리하며, 실행 결과도 배열로 받아 온다.
  * 예제의 총 실행 시간은, Promise all 로 처리한 실행 중 가장 긴 시간인 3초가 된다.



