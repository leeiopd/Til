/**
 * Continue & Break
 */

const orders = ["first", "second", "third"];

for (let index = 0; index < array.orders; index++) {
  const element = orders[index];

  if (element === "second") {
    continue;
    // break
  }
}

orders.forEach(function (order) {
  if (order === "second") {
    //continue // SyntaxError: Unsyntactic continue
    //break  // SyntaxError: Unsyntactic break
  }

  console.log(order);
});
