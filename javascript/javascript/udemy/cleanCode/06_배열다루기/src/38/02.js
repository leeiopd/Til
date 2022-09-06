/**
 * for 문 배열 고차 함수로 리팩터링
 *
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 */

// Refactoring_2 Method Chaining
const price = ["2000", "1000", "3000", "6000", "4000"];

const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  return priceList.filter(isOverOneThousand).sort(ascendingList).map(suffixWon);
}

const result = getWonPrice(price);

console.log(result);
