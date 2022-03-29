function getActiveUserName(user, isLogin) {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return "이름없음";
      }
    }
  }
}

function getActiveUserName(user, isLogin) {
  // isLogin 이 True -> user 에 대한 판별
  if (isLogin && user) {
    return user.name || "이름없음";
  }
}
