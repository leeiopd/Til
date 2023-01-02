function Person({ name, age, location }) {
  this.name = name;
  this.age = age ?? 30;
  this.location = location ?? "korea";
}

const poco2 = new Person({ name: "poco", age: 30, location: "korea" });
