var globalVar = "global";

console.log(globalVar);

// 런타임 환경 (실행하는 환경) 도 변경 가능
console.log(window.globalVar);

var setTimeout = "setTimeout";

function setTimeout() {
  console.log("function");
}

const array = [10, 20, 30];
for (var index = 0; index < array.length; index++) {
  const element = array[index];
}
