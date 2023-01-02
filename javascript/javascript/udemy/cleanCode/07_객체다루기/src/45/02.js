/**
 * Object Freeze
 *
 * 1. 대중적인 유틸 라이브러리 (lodash)
 * 2. 직접 유틸 함수 생성
 * 3. stackoverflow
 * 4. TypeScript => readOnly 사용
 */

const STATUS = deepFreeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

function deppFreeze(targetObj) {
  // 1. 객체 순회
  // 2. 값이 객체 인지 확인
  // 3. 객체이면 재귀
  // 4. 그렇지 않으면 Object.freeze

  Object.keys(targetObj).forEach(key=>{
    if(/** 객체가 맞다면 */){
      return deppFreeze(key)
    }
  })

  return Object.freeze(targetObj);
}
