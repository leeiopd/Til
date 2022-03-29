# Udemy - CleanCode

### 3. 타입 다루기

##### 16_begin-end



* Begin / End 로 경계다루기
  1. 기간과 같이 시작과 끝의 포함여부가 다른경우가 존재
  1. 시작은 포함 ~ 끝은 미포함
  1. 사소한 함수에도 표현해 낼 수 있는 규칙이 존재 할 수 있음





```javascript
function reservationDate(beginDate, endDate) {
  // ...some code
}

reservationDate("YYYY-MM-DD", "YYYY-MM-DD");

```

