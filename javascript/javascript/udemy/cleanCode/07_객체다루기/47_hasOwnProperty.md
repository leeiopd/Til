# Udemy - CleanCode

### 7. 객체 다루기

##### 47_hasOwnProperty

* 자바스크립트는 프로퍼티 명칭으로 hasOwnProperty 를 보호하지 않는다.
  
* hasOwnPproperty 를 사용하기 위해 외부 hasOwnProperty 를 사용하는것을 권장
  



* 예시 1

```javascript
const person = {
  name: "name",
};

person.hasOwnProperty("name"); // true
person.hasOwnProperty("age"); // false

///////////////////////////////////////////////////////////////
// forin 예시
for (const key in object) {
  // hasOwnProperty 사용을 위해 Object 의 method 로 호출하여 사용
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}
//////////////////////////////////////////////////////////////

const foo = {
  hasOwnProperty: function () {
    return "hasOwnProperty";
  },
  bar: "string",
};

foo.hasOwnProperty("bar"); // hasOwnProperty
Object.prototype.hasOwnProperty.call(foo, "bar"); // true


// 외부 hasOwnProperty 을 사용하기 위해 함수로 선언하여 사용
function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
}

hasOwnProp(person, "name"); // true
```
