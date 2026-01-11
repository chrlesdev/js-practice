function greet(callback) {
  callback();
}

function sayHi() {
  console.log("Hi!");
}

// greet(sayHi);
// TODO: Call greet and pass sayHi

2;

function double(num, callback) {
  const result = num * 2;
  callback(result);
}

// double(5, (result) => {
//   console.log(result);
// });

// TODO: Call double with 5, and print the result

//3

const numbers = [1, 2, 3, 4, 5];

//

// TODO: Use forEach to print each number
// Hint: numbers.forEach(???)
// TODO: Use forEach to print each number
// Hint: numbers.forEach(???)

//4;

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

const fruits = ["apple", "banana", "orange"];

// myForEach(fruits, function (fruit) {
//   console.log(fruit);
// });

//5
function waitAndSay(message, callback) {
  setTimeout(() => {
    callback(message);
  }, 2000);
}

waitAndSay("hello", (e) => {
  console.log(e);
});

// TODO: Call waitAndSay with "Hello!" and print it
