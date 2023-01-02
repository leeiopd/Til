/**
 * hasOwnProperty
 */

const person = {
  name: "name",
};

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

const foo = {
  hasOwnProperty: function () {
    return "hasOwnProperty";
  },
  bar: "string",
};

console.log(foo.hasOwnProperty("bar"));

console.log(Object.prototype.hasOwnProperty.call(foo, "bar"));

function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
}

console.log(hasOwnProp(person, "name"));
