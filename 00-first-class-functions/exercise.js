// 01 - Define a function called getName that returns your name as a string.
function getName() {
  return 'Daniel';
}

const myName = () => {
  return 'Daniel';
}

const myNameShort = () => 'Daniel';

console.log(getName());
console.log(myName());
console.log(myNameShort());

// 02 - Define a function called greet that takes in 2 parameters:
// getNameFn - a function that returns your name
// greeting - a string greeting, e.g. 'Hello', 'Goodbye' etc.
// The function should log `Some greeting, your-name-here` by invoking the getNameFn
// Invoke your function several times with different greetings
const greet = (getNameFn, greeting) => {
  console.log(`${greeting}, ${getNameFn}`)
}

greet(getName(), 'Hello');
greet(myName(), 'Hello');
greet(myNameShort(), 'Hello');

// 03 - Define a function called makeAdder that takes in 1 parameter:
// number - any valid number
// makeAdder should return a function that takes in 1 parameter:
// other_number - any valid number
// The returned function should return the sum of the two numbers

const makeAdder = (number) => {
  return (other_number) => {
    return number + other_number;
  };
}

console.log(makeAdder(5)(5));
console.log(makeAdder(5)(10));

// 04 - Use your makeAdder function to create a function that adds 10 to a number
// Invoke your function several times with different numbers, log the result

const addNumber = (makeAdderFn) => {
  return makeAdderFn + 10;
}

console.log(addNumber(makeAdder(5)(5)))