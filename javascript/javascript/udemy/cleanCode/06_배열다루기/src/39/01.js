/**
 * map vs forEach
 */

const prices = ["1000", "2000", "3000"];

const newPricesForEach = prices.forEach((price) => price + "원");
console.log(newPricesForEach);

const newPricesMap = prices.map((price) => price + "원");
console.log(newPricesMap);

prices.forEach((price) => console.log(price + "원"));
prices.map((price) => console.log(price + "원"));
