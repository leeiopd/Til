function alertMessage(isAdult) {
  isAdult ? alert("입장이 가능합니다.") : alert("입장이 불가능합니다.");

  // alert 는 void 를 return 하기 때문에, 값 또는 식이 아닌 것을 사용하는 삼항연산자
  // badCase
}

function alertMessage(isAdult) {
  if (isAdult) {
    alert("입장이 가능합니다.");
    return;
  }
  alert("입장이 불가능합니다.");
  return;
}
