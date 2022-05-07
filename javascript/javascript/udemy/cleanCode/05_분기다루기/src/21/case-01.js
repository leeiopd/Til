function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition2) {
    return value3;
  } else {
    return value4;
  }
}

function example() {
  switch (condition) {
    case condition1:
      return value1;
    case condition2:
      return value2;
    case condition3:
      return value3;
    default:
      return value4;
  }
}
