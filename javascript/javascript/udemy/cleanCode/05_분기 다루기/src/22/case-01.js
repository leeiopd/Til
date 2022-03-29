// Truthy

if (true) {
  console.log("true!");
}

if ({}) {
  console.log("true!");
}

if ([]) {
  console.log("true!");
}

if (42) {
  console.log("true!");
}

if ("0") {
  console.log("true!");
}

if ("false") {
  console.log("true!");
}

if (new Date()) {
  console.log("true!");
}

if (-42) {
  console.log("true!");
}

if (12n) {
  console.log("true!");
}

if (3.14) {
  console.log("true!");
}

if (-3.14) {
  console.log("true!");
}

if (Infinity) {
  console.log("true!");
}

if (-Infinity) {
  console.log("true!");
}

// Falsy

if (false) {
  console.log("false!");
}

if (null) {
  console.log("false!");
}

if (undefined) {
  console.log("false!");
}

if (0) {
  console.log("false!");
}

if (-0) {
  console.log("false!");
}

if (0n) {
  console.log("false!");
}

if (NaN) {
  console.log("false!");
}

if ("") {
  console.log("false!");
}
