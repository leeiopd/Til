function printName(name) {
  //   if (name === undefined || name === null) {
  // Falsy 조건 이용 (undefined 와 null 모두 포함됨)
  if (!name) {
    return "사람이 없네요";
  }

  return "안녕하세요 " + name + "님";
}

console.log(printName(customer));
