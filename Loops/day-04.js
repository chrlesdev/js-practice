let i = 0;
let text = [];

while (i < 10) {
  text += "the number is " + i;
  i++;
}

// console.log(text);

//------
/**
 * Exercise 1 — Warm-up (for loop, no tricks)

You are given an array of numbers.

Task (in human language):

Go through the array

Print whether each number is even or odd

Rules:

Use a loop

Use an if / else

Do not use array methods like map, forEach, etc.
 */

const valueA = [1, 2, 3, 4, 5, 6];

function checkNumber(num) {
  let store = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      store.push(`even number ${num[i]}`);
    } else {
      store.push(`odd number ${num[i]}`);
    }
  }
  return store;
}

// console.log(checkNumber(valueA));

//--- count

function counters(num) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    let value = num[i];
    if (value % 2 === 0) {
      count++;
    }
  }
  return count;
}
let valueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(counters(valueArray));
/**
 * Exercise 1 — Early Exit Loop (new idea)

Goal:
Write a function that finds the first even number in an array.

Rules:

- Use a loop
- The function should return as soon as it finds the first even number
- If there is no even number, return "no even number"
 */

function evenNumber(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      return `${num[i]}`;
    }
  }
}

const ValueB = [1, 4, 5, 6, 7, 8, 10, 2, 12];
// console.log(evenNumber(ValueB));

/**
 * 
 * Exercise 2 — Accumulator with Condition

Goal:
Write a function that adds numbers together, but:

Stop adding once the total becomes greater than 20

Return the final total

Example behavior (don’t copy this literally):

[5, 5, 5, 5] → stops early

[10, 3, 2] → finishes normally

Why this matters:

You’ll practice

accumulation

loop control

decision timing

 */

function sumNum(num) {
  let prevValue = 0;
  for (let i = 0; i < num.length; i++) {
    prevValue += num[i];
    if (prevValue > 20) {
      return prevValue - num[i];
    } else if (prevValue === 20) {
      return prevValue;
    }
  }
  return prevValue;
}

let valueC = [2, 4, 4, 5, 6, 5];

console.log(sumNum(valueC));

/**
 * Exercise 3 — Reverse Without Helpers (optional spicy)

Goal:
Given an array, return a new array in reverse order.

Rules:

Use a loop

Don’t use .reverse()

Why it’s good:

Forces you to think about indexes

Builds real loop intuition
 */

function returning() {}

const valueD = [1, 2, 3, 4, 5];
