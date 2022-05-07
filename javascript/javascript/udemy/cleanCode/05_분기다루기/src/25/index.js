function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return "이름없음";
  }
}

function getHelloCustomer(user) {
  if (user.age < 20) {
    reportError(user);
  } else {
    return "안녕하세요";
  }
}

function getActiveUserName2(user) {
  if (user.name) {
    return user.name;
  }
  return "이름없음";
}

function getHelloCustomer2(user) {
  if (user.age < 20) {
    reportError(user);
  }
  return "안녕하세요";
}
