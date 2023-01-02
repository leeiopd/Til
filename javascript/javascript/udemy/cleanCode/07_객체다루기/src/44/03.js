function Person(name, { age, location }) {
  this.name = name;
  this.age = age ?? 30;
  this.location = location ?? "korea";
}

const pocoOptions = { age: 30, location: "korea" };

const poco2 = new Person("poco", pocoOptions);
