function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MIN_IN_NUMBER_LIMIT = 1;
const MAX_IN_NUMBER_LIMIT = 45;

genRandomNumber(MIN_NUMBER_LIMIT, MAX_NUMBER_LIMIT);

const MAX_AGE = 20;
function isAdult(age) {
  // 최소값, 최대값 (포함되는지 vs 안되는지)
  // 이상, 초과 vs 이하, 미만
  if (age >= 20) {
    return true;
  }
  return false;
}
