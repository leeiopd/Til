/**
 * 배열 요소에 접근하기
 */

function clickGroupButton() {
  const confirmButton = document.getElementsByTagName("button")[0];
  const cancelButton = document.getElementsByTagName("button")[1];
  const resetButtonButton = document.getElementsByTagName("button")[2];

  // ...some code
}

// refactoring_1
function clickGroupButton() {
  const [confirmButton, cancelButton, resetButtonButton] =
    document.getElementsByTagName("button");

  // ...some code
}
