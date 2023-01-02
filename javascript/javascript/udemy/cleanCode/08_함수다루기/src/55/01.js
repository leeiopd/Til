/**
 * Rest Parameters
 */

function sumTotal() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr);
}

sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
