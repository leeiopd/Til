/**
 * Default Value
 */

const require = (argName) => {
  throw new Error("required is " + argName); // required is items
};

function createCarousel({
  items = require("items"),
  margin = 0,
  center = false,
  navElement = "div",
} = {}) {
  // ...some code
  return {
    margin,
    center,
    navElement,
  };
}

createCarousel(); // required is items
