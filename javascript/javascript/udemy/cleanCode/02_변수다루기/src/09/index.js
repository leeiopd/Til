var global = 0;

function outer() {
  console.log(global);
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global);
  }

  inner();

  global = 1;

  console.log(global);
}

outer();
