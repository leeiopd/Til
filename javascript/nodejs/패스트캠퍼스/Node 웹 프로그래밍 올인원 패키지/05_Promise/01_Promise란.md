# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 05.Promise

##### 01_Promise란?

* callback hell 의 해결을 위해 사용
* 함수가 비동기로 실행되는 것이 아닌 순서대로 실행되도록 작성하기 위하여 사용





- Promise 만들기
  1. resolve 와 reject 를 인자로 가지는 함수를 만든다.
  2. 내가 원하는 시점을 resolve 로 받아오자!

```javascript
const testPromise = new Promise((resolve, reject) => {
  resolve(console.log("프라미스!"));
});

testPromise.then(() => {
  console.log("프라미스 실행 완료!!");
});
// 프라미스!
// 프라미스 실행 완료!!



const testPromise2 = new Promise((resolve, reject) => {
  resolve("프라미스!");
});

testPromise2.then((result) => {
  console.log(result);
});
// 프라미스!
```

* .then() 은 promise 객체이다.
  * then 의 인자는 resolve 의 return 이다.





```javascript
const wait1secons = new Promise((resolve, reject) => {
  console.log("시작!!");
  setTimeout(() => {
    resolve(console.log("1초뒤에 출력"));
  }, 1000);
});

wait1secons.then(() => {
  console.log("프라미스 실행 완료!!");
});

// 시작!!
// 1초뒤에 출력
// 프라미스 실행 완료!!
```

* await method 와 promise





```javascript
const wait1secons = new Promise((resolve, reject) => {
  reject(console.log("에러!!!"));
});

// 에러!!
// node:internal/process/promises:246
//          triggerUncaughtException(err, true /* fromPromise */);
//          ^
```

* Promise 의 err 는 reject 로 처리