# Udemy - CleanCode

### 6. 배열 다루기

##### 32_javascript의 배열은 객체다.

* Javascript의 배열은 객체다.

  ```javascript
  const arr = [1, 2, 3];
  
  arr[3] = "test";
  arr["property"] = "string value";
  arr["obj"] = {};
  arr[{}] = [1, 2, 3];
  arr["func"] = function () {
    return "hello";
  };
  
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // i = 0, 1, 2, 3
  }
  // 1
  // 2
  // 3
  // test
  
  arr;
  // [ 1,
  //  2,
  //  3,
  //  'test',
  //  property: 'string value',
  //  obj: {},
  //  '[object Object]': [ 1, 2, 3 ],
  //  func: [λ] ]
  
  console.log(arr.func()); // hello
  
  const obj = {
    arr: [1, 2, 3],
    3: "test",
    property: "string value",
    obj: {},
    "{}": [1, 2, 3],
    func: function () {
      return "hello";
    },
  };
  
  obj;
  
  { 3: 'test',
    arr: [ 1, 2, 3 ],
    property: 'string value',
    obj: {},
    '{}': [ 1, 2, 3 ],
    func: [λ: func] }
  ```



* 배열을 확인 하는 법

  ```javascript
  const arr = [1, 2, 3];
  
  if (arr.length) {
    console.log("배열 확인");
  }
  
  if (typeof arr === "object") {
    console.log("배열 확인");
  }
  
  if (arr in Array) {
    console.log("배열 확인");
  }
  
  if (arr instanceof Array) {
    console.log("배열 확인");
  }
  
  const arr2 = "[1, 2, 3]";
  
  if (arr2.length) {
    console.log("배열 확인");
  }
  
  // Javascript의 배열을 확인할 때에는 Array.isArray()를 사용하자
  
  console.log(Array.isArray(arr));
  
  if (Array.isArray(arr)) {
    console.log("배열 확인");
  }
  ```

  * Javascript의 배열을 확인할 때에는 Array.isArray()를 사용하자
    * Array 를 확인하는 Javascript의 built-in method
    * 최근에 나온 Method이기 때문에 polyfill 이 필요할수 있음



