# Udemy - CleanCode

### 3. 타입 다루기

##### 23_단축평가 short-circuit evaluation



* 단축평가 short-circuit evaluation
  * AND 와 OR 연산이 순서대로 고려됨
  * 논리연산자를 논리적으로 사용할때 효과적



```javascript
// 기본

// AND
console.log(true && true && "도달 O");

console.log(true && false && "도달 O");

// OR
console.log(false || false || "도달 O");

console.log(true || true || "도달 X");

```



```javascript
// case1

function fetchData() {
  if (state.data) {
    return state.data;
  } else {
    return "Fetching...";
  }
}

function fetchData() {
  return state.data || "Fetching...";
}
```



```javascript
// case2

function favoriteDog(someDog) {
  let favoriteDog;

  if (someDog) {
    favoriteDog = someDog;
  } else {
    favoriteDog = "냐옹";
  }

  return favoriteDog;
}

function favoriteDog(someDog) {
  return someDog || "냐옹";
}

favoriteDog(); // '냐옹'
favoriteDog("포메"); // '포메'
```



```javascript
// case3

function getActiveUserName(user, isLogin) {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return "이름없음";
      }
    }
  }
}

function getActiveUserName(user, isLogin) {
  // isLogin 이 True -> user 에 대한 판별
  if (isLogin && user) {
    return user.name || "이름없음";
  }
}
```

