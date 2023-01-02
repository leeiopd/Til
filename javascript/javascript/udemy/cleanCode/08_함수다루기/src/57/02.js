/**
 * void & return
 */

const Person = (name, city) => {
  this.name = name;
  this.city = city;
};

// 생성자 함수를 화살표 함수를 사용하여 만들 수 없음
const person = new Person("poco", "korea"); // Person is not a constructor

console.log(person);
