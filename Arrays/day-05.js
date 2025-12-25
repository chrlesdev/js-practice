// exercise 1

const data = [{ score: 20 }, { score: 30 }];

const copy = data.slice();
copy[0].score = 999;

// console.log(data[0].score); // ?

/** Leet Code
 * Array.prototype.last = function () {
  if (this === Object) {
    return 1;
  } else if (this) {
    let a = this.length - 1;
    let b = this[a];
    return b;
  }
};
let nothings = [null, {}, 3];
let nothing = [];
let arr2 = ["a", "b", "c"];
console.log(arr2.last());
console.log(typeof nothing);
 */

/**
 * Goal

You’re given an array of player scores.
Write a function that analyzes the scores and returns an object summary.

Input

An array of numbers:

[10, 25, 30, 5, 40, 15]

Rules:

- Use a loop
- No map, filter, or reduce
- No DOM
- One function
- One return (at the end)

What the function must return

An object with four things:

{
  total: ___,        // sum of all scores
  highest: ___,      // highest score
  evenCount: ___,    // how many even numbers
  oddCount: ___      // how many odd numbers
}
 */

const numbers = [10, 25, 30, 5, 40, 15];

function score(num) {
  let total = 0;
  let highest = 0;
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < num.length; i++) {
    total += num[i];

    if (num[i] % 2 !== 0) {
      oddCount++;
    } else {
      evenCount++;
    }

    if (num[i] > highest) {
      highest = num[i];
    }
  }

  return {
    total: total,
    highest: highest,
    evenCount: evenCount,
    oddCount: oddCount,
  };
}

console.log(score(numbers));
