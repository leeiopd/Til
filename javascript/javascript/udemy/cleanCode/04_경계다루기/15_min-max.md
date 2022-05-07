# Udemy - CleanCode

### 4. 경계 다루기

##### 15_min-max



* Min / Max 로 경계다루기
  1. 최소값과 최대값을 다루기
  2. 최소값과 최대값 포함 여부를 결정해야 한다 (이상-초과 / 이하-미만)
  3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현해야 한다.
  4. 누가 보아도 명시적인 코드를 작성하자





```javascript
// // 값 사이의 랜덤 상수 함수

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

// 경계 미포함 표현
const MIN_NUMBER_LIMIT = 1;
const MAX_NUMBER_LIMIT = 45;

// 경계 포함 표현
const MIN_IN_NUMBER = 1;
const MAX_IN_NUMBER = 45;

genRandomNumber(MIN_NUMBER_LIMIT, MAX_NUMBER_LIMIT);
```





```javascript
// 성인 판단 함수

const MAX_AGE = 20;
function isAdult(age) {
  // 최소값, 최대값 (포함되는지 vs 안되는지)
  // 이상, 초과 vs 이하, 미만
  if (age >= 20) {
    return true;
  }
  return false;
}


```

