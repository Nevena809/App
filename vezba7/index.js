function sum(callback, x, y) {
  const result = x + y;
  callback(result);
}

function display(result) {
  console.log(result);
}

sum(display, 2, 3);
