// 접근가능
console.log(window.globalVar);

// 접근가능
console.log(globalVar);

// 파일을 나눈다고 Scope 가 나뉘지 않음

setTimeout(() => {
  console.log("1초");
}, 1000);
