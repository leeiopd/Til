# JS - 삼항 조건 연산자

>**조건부 삼항 연산자**는 JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자입니다. 보통 [`if`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else) 명령문의 단축 형태로 쓰입니다.



```javascript
function getFree(isMember){
  if(isMember){
    return '$2.00'
  }
  return '10.00'
}
```



```javascript
function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"

```

