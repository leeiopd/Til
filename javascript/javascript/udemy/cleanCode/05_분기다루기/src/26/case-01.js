function loginService(isLogin, user) {
  // 로그인 여부 확인
  if (!isLogin) {
    // 토큰 존재 확인
    if (!checkToken()) {
      // 기가입유저 재확인
      if (!user.nickName) {
        // 가입
        return registerUser(user);
      } else {
        // 로그인 성공
        refreshToken();

        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

function loginService2(isLogin, user) {
  // Early Return
  /**
   * 함수 미리 종료
   * 사고하기 편함
   */
  if (isLogin) {
    return;
  }
  // 토큰 존재 확인
  if (!checkToken()) {
    throw new Error("No Token");
  }

  // 기가입유저 재확인
  if (!user.nickName) {
    // 가입
    return registerUser(user);
  }

  // 로그인 성공
  refreshToken();
  return "로그인 성공";
}
