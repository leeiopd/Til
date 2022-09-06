# Udemy - CleanCode

### 6. 배열 다루기

##### 33_Array.length

* Array.length

  ```javascript
  const arr = [1, 2, 3];
  
  console.log(arr.length); // 3
  
  arr.length = 10;
  
  console.log(arr.length); // 10
  
  arr; // [ 1, 2, 3, , , , , , ,  ]
  ```
  
  ```javascript
  const arr = [1, 2, 3];
  
  arr[3] = 4;
  
  console.log(arr.length); // 4
  
  arr[9] = 10;
  
  console.log(arr.length); // 10
  
  arr; // [ 1, 2, 3, 4, , , , , , 10 ]
  ```
  
  * Javascript 의 Array.length 는 배열의 길이를 보장하지 못함
    * 마지막 index 를 알려줄 뿐임



* Array.length 의 활용

  ```javascript
  Array.prototype.clear = function () {
    this.length = 0;
  };
  
  function clearArray(array) {
    array.length = 0;
  
    return array;
  }
  
  const arr = [1, 2, 3];
  
  arr.clear();
  
  arr; // []
  
  const arr2 = [1, 2, 3];
  
  clearArray(arr2);
  
  arr2; // []
  ```
  
  * 마지막 index 를 0으로 설정하여 Array를 비어있는 상태로 만들 수 있음
  * Javascript 에서 Array.length 의 사용을 주의하여 의식적으로 감지하고 표현해 내어야함



