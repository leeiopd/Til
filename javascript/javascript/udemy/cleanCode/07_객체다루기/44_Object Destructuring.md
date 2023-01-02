# Udemy - CleanCode

### 7. 객체 다루기

##### 44_Object Destructuring

* 객체 구조 분해 할당



* 객체 구조 분해 할당 예제

```javascript
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const poco = new Person("poco", 30, "korea");

--------------------------------------------
function Person({ name, age, location }) {
  this.name = name;
  this.age = age ?? 30;
  this.location = location ?? "korea";
}

const poco2 = new Person({ name: "poco", age: 30, location: "korea" });

--------------------------------------------------
function Person(name, { age, location }) {
  this.name = name;
  this.age = age ?? 30;
  this.location = location ?? "korea";
}

const pocoOptions = { age: 30, location: "korea" };

const poco = new Person("poco", pocoOptions);
```



* Array 의 객체 구조 분해 할당

```javascript
const orders = ["First", "Second", "Third"];

const { 0: st, 2: rd } = orders;

console.log(st); // 0
console.log(rd); // 2

```

