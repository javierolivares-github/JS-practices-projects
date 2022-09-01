// Practice 3: A program to swap to variables.

// Practice A: Swap values using variables.
function practiceA() {
  // request input from a user
  let x = prompt('Input first value:');
  let y = prompt('Input second value:');

  // declare a temp variable
  let temp;

  // swap values using temp variable
  temp = x;
  x = y;
  y = temp;
}

// Practice B: Swap values using arithmetic operators.
function practiceB() {
  // request input from a user
  let x = parseInt(prompt('Input first value:'));
  let y = parseInt(prompt('Input second value:'));

  // use basic arithmetic operators
  x = x + y;
  y = x - y;
  x = x - y;

  // display the output on the console
  console.log(`Value of x after swapping = ${x}`);
  console.log(`Value of y after swapping = ${y}`);
}

// Practice C: Swap values using destructuring assignment.
function practiceB() {
  // request input from a user
  let x = parseInt(prompt('Input first value:'));
  let y = parseInt(prompt('Input second value:'));

  // apply destructuring assignment method
  [x, y] = [y, x];

  // display the output on the console
  console.log(`Value of x after swapping = ${x}`);
  console.log(`Value of y after swapping = ${y}`);
}
