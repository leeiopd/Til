/**
 * Shorthand Properties
 * Concise Method
 */

const counterApp = combineReducers({ counter, extra, etc1, etc2 });

const firstName = "poco";
const lastName = "jang";

const person = {
  firstName: "poco",
  lastName: "jang",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  // Shorthand Properties
  firstName,
  lastName,
  getFullName() {
    // Concise Method
    return this.firstName + " " + this.lastName;
  },
};
