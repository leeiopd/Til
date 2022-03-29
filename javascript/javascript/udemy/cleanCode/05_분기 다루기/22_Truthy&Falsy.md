# Udemy - CleanCode

### 3. 타입 다루기

##### 22_Truthy&Falsy



* Truthy & Falsy
  * Javascript 의 참/거짓 판별을 이용




```javascript
// case1

// Truthy
if (true) {
  console.log("true!");
}

if ({}) {
  console.log("true!");
}

if ([]) {
  console.log("true!");
}

if (42) {
  console.log("true!");
}

if ("0") {
  console.log("true!");
}

if ("false") {
  console.log("true!");
}

if (new Date()) {
  console.log("true!");
}

if (-42) {
  console.log("true!");
}

if (12n) {
  console.log("true!");
}

if (3.14) {
  console.log("true!");
}

if (-3.14) {
  console.log("true!");
}

if (Infinity) {
  console.log("true!");
}

if (-Infinity) {
  console.log("true!");
}


// Falsy
if (false) {
  console.log("false!");
}

if (null) {
  console.log("false!");
}

if (undefined) {
  console.log("false!");
}

if (0) {
  console.log("false!");
}

if (-0) {
  console.log("false!");
}

if (0n) {
  console.log("false!");
}

if (NaN) {
  console.log("false!");
}

if ("") {
  console.log("false!");
}
```



```javascript
// case2

function printName(name) {
  //   if (name === undefined || name === null) {
  // Falsy 조건 이용 (undefined 와 null 모두 포함됨)
  if (!name) {
    return "사람이 없네요";
  }

  return "안녕하세요 " + name + "님";
}

console.log(printName(customer));
```

