const welcomeMessage1 = (isLogin) => {
  if (isLogin) {
    return `안녕하세요 ${name}`;
  }
  return `안녕하세요 이름없음`;
};

const welcomeMessage2 = (isLogin) => {
  const name = isLogin ? getName(0) : "이름없음";
  return `안녕하세요 ${name}`;
};
