/**
 * 배열 요소에 접근하기
 */

function formatDate(targetDate) {
  const date = targetDate.toISOString().split("T")[0];

  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}

// refactoring_1
function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split("T");

  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}

// refactoring_2
function head(arr) {
  return arr[0] ?? "";
}

function formatDate(targetDate) {
  const date = head(targetDate.toISOString().split("T"));

  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}
