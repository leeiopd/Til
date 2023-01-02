# Udemy - CleanCode

### 7. 객체 다루기

##### 46_Prototype 조작 지양하기

* javascript 가 이미 굉장히 발전했기 때문 prototype 을 다룰 필요성이 없다
  * 직접 만들어서 모듈화 => 배포 => Npm 으로 사용하자

* 빌트인 객체를 다루는것을 지양하자
* prototype 은 새로운 문법 코드 속에서 공존하는 형태



* 예시 1

```javascript
/**
 * Prototype 조작 지양하기
 *
 * 1. 이미 JS는 많이 발전했다.
 */

function Car(name, brand) {
  this.name = name;
  this.brand = brand;
}

Car.prototype.sayName = function () {
  return this.brand + "-" + this.name;
};

////////////////////////////
class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  sayName() {
    return this.brand + "-" + this.name;
  }
}
////////////////////////////
```



* 예시 2

```javascript
/**
 * Prototype 조작 지양하기
 *
 * 2. 빌트인 객체를 다루는것을 지양하자
 */

String.prototype.welcome = function () {
  return "hello";
};

console.log("str".welcome());

Array.prototype.forEach = function () {
  return "hello";
};

[1, 2, 3].forEach();

```

