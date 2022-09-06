# Udemy - CleanCode

### 6. 배열 다루기

##### 39_map vs forEach

* map vs forEach

  ```javascript
  const prices = ["1000", "2000", "3000"];
  
  const newPricesForEach = prices.forEach((price) => price + "원");
  console.log(newPricesForEach); // undefined
  
  const newPricesMap = prices.map((price) => price + "원");
  console.log(newPricesMap); //[ '1000원', '2000원', '3000원' ]
  ```

  * forEach
    * 반환값 없음
    * 매 요소마다 callback / 매개변수로 들어오는 함수를 실행하는 동작만 진행
  * map
    * 매 요소마다 반환된 값이 배열 요소에 조작을 가함
    * 원본 배열에 조작을 가하지 않고 새로운 배열을 생성

* map vs forEach 2

  ```javascript
  const prices = ["1000", "2000", "3000"];
  
  prices.forEach((price) => console.log(price + "원"));
  // 1000원
  // 2000원
  // 3000원
  
  prices.map((price) => console.log(price + "원"));
  // 1000원
  // 2000원
  // 3000원
  ```

  * 같은 동작처럼 보이지만, 반환값이 없고 요소마다 배개변수로 들어오는 함수를 실행하는 동작을 수행하는 forEach Method를 사용하는것이 바람직하다.
  * 의도와 목적에 맞는 Method 를 사용하는것이 바람직하다.
