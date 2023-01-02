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
