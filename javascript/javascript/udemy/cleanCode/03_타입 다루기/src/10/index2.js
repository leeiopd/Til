function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = new Person("이름", 13);

p instanceof Person;
console.log(p instanceof Person);

const p2 = {
  name: "이름",
  age: 00,
};

p2 instanceof Person;
console.log(p2 instanceof Person);
