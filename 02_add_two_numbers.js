// Practice 2: A program to add two numbers.

// Practice A: Let's add two numbers only.
function practiceA() {
  const num1 = 8;
  const num2 = 2;
  // addition of two numbers
  const sum = num1 + num2;
  // display the output
  console.log('The sum of' + num1 + 'and' + num2 + '=' + sum);
}

// Practice B: Sum two numbers based on user input.
function practiceB() {
  const num1 = parseInt(prompt('Enter 1st number:'));
  const num2 = parseInt(prompt('Enter 2do number:'));

  // sum the save numbers
  const sum = num1 + num2;

  // display the sum
  console.log(`The sum of ${num1} and ${num2} = ${sum}`);
}


