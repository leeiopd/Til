/**
 * 직접 접근 지양하기
 */

// 직접 접근 지양
const model = {
  isLogin: false,
  isValidToken: false,
};

// model 에 대신 접근
function setLogin(bool) {
  model.isLogin = bool;
  serverAPI.log(model.isLogin);
}

// model 에 대신 접근
function setValidToken(bool) {
  model.isLogin = bool;
  serverAPI.log(model.isValidToken);
}

// model 에 직접 접근 X
function login() {
  setLogin(true);
  setValidToken(true);
}

// model 에 직접 접근 X
function logout() {
  setLogin(false);
  setValidToken(false);
}

someElement.addEventListener("click", login);
