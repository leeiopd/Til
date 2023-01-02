/**
 * Callback Function
 */

function register() {
  const isConfirm = confirm("회원가입에 성공했습니다.");

  if (isConfirm) {
    redirectUserInfoPage();
  }
}

function login() {
  const isConfirm = alert("로그인에 성공했습니다.");

  if (isConfirm) {
    redirectIndexPage();
  }
}

///////////////////////

function confirmModal(message, callback) {
  const isConfirm = alert(message);

  if (isConfirm && callback) {
    callback();
  }
}

function register() {
  confirmModal("회원가입에 성공했습니다.", redirectUserInfoPage);
}

function login() {
  confirmModal("로그인에 성공했습니다.", redirectIndexPage);
}
