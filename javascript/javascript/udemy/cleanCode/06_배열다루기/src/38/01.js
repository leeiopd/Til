/**
 * for 문 배열 고차 함수로 리팩터링
 *
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 */

const price = ["2000", "1000", "3000", "6000", "4000"];

function getWonPrice(priceList) {
  let temp = [];

  for (let i = 0; i < priceList.length; i++) {
    if (priceList[i] > 1000) {
      temp.push(priceList[i] + "원");
    }
  }

  if (orderType === "ASCENDING") {
    someAscendingSortFunc(temp);
  }

  if (orderType === "DESCENDING") {
    someDescendingSortFunc(temp);
  }

  return temp;
}

// refactoring_1
const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  const sortList = isOverList.sort(ascendingList);
  return sortList.map(suffixWon);
}

const result = getWonPrice(price);

console.log(result);
