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

// console.log(score(numbers));

/**
 * Exercise: Product Inventory Analyzer
Goal:
You're given an array of product objects. Write a function that analyzes the inventory and returns a summary object.
Input:
An array of objects like this:
[
  { name: "Laptop", price: 1000, inStock: true, quantity: 5 },
  { name: "Mouse", price: 25, inStock: true, quantity: 50 },
  { name: "Keyboard", price: 75, inStock: false, quantity: 0 },
  { name: "Monitor", price: 300, inStock: true, quantity: 10 },
  { name: "Webcam", price: 80, inStock: false, quantity: 0 }
]

Rules:

- Use a loop
- No map, filter, or reduce
- One function
- One return (at the end)
 
What the function must return:
An object with these properties:
{
  totalValue: ___,        // sum of (price × quantity) for ALL products
  inStockCount: ___,      // how many products have inStock: true
  outOfStockCount: ___,   // how many products have inStock: false
  averagePrice: ___,      // average price of all products (rounded to 2 decimals)
  mostExpensive: ___      // the name of the most expensive product
}


example:
{
  totalValue: 9125,
  inStockCount: 3,
  outOfStockCount: 2,
  averagePrice: 296.00,
  mostExpensive: "Laptop"
}
*/

function product(value) {
  let totalValue = 0;
  let inStockCount = 0;
  let outOfStockCount = 0;
  let store = 0;
  let highestPrice = 0;
  let mostExpensive = "";

  for (let i = 0; i < value.length; i++) {
    totalValue += value[i].price * value[i].quantity;

    if (value[i].inStock === true) {
      inStockCount++;
    } else {
      outOfStockCount++;
    }

    store += value[i].price;

    if (value[i].price > highestPrice) {
      highestPrice = value[i].price;
      mostExpensive = value[i].name;
    }
  }
  let averagePrice = (store / value.length).toFixed(2);

  return {
    totalValue: totalValue,
    inStockCount: inStockCount,
    outOfStockCount: outOfStockCount,
    averagePrice: averagePrice,
    mostExpensive: mostExpensive,
  };
}

const list = [
  { name: "Laptop", price: 1000, inStock: true, quantity: 5 },
  { name: "Mouse", price: 25, inStock: true, quantity: 50 },
  { name: "Keyboard", price: 75, inStock: false, quantity: 0 },
  { name: "Monitor", price: 300, inStock: true, quantity: 10 },
  { name: "Webcam", price: 80, inStock: false, quantity: 0 },
];

// console.log(product(list));

//

// Exercise 1: Array.prototype.first()
// Create a method that returns the first element of an array. If the array is empty, return -1.

Array.prototype.first = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[0];
  }
};

// console.log([1, 2, 3].first()); // should return 1
// console.log([].first());

// Exercise 2: Array.prototype.sum()
// Create a method that returns the sum of all numbers in an array.

Array.prototype.sum = function () {
  let store = 0;
  for (let i = 0; i < this.length; i++) {
    store += this[i];
  }

  return store;
};

// console.log([1, 2, 3].sum()); // should return 6
// console.log([10, -5, 3].sum()); // should return 8
// console.log([].sum());

// Exercise 3: Array.prototype.getAt()
// Create a method that takes an index and returns the element at that position. If the index is negative, count from the end (like Python!). If index is out of bounds, return undefined.

Array.prototype.getAt = function (index) {
  if (index >= 0) {
    return this[index];
  } else if (index < 0) {
    let a = this.length + index;
    return this[a];
  }
};

// console.log([1, 2, 3].getAt(0)); // should return 1
// console.log([1, 2, 3].getAt(-1)); // should return 3 (last element)
// console.log([1, 2, 3].getAt(-2)); // should return 2
// console.log([1, 2, 3].getAt(10)); // should return undefined

//---

let nums = [1, 2, 3, 4];

let multiply = nums.map((num) => num * 2);
// console.log(multiply);

let words = ["hello", "world", "javascript"];
let sayHello = words.map((e) => e.toUpperCase());
// console.log(sayHello);

let wordss = ["cat", "elephant", "dog"];
let long = wordss.map((e) => e.length);
// console.log(long);

let scores = [85, 90, 78, 92];
let sum = scores.map((e) => {
  let store = [];
  for (let i = 0; i < e.length; i++) {
    let sumValue = e[i] + 10;
    return store.push(sumValue);
  }
  return store;
});

// console.log(sum);

//--

let scoresA = [45, 67, 89, 23, 91, 34];

let filters = scoresA.filter((e) => {
  if (e < 50) {
    return;
  } else {
    return e;
  }
});

// console.log(filters);

let wordsA = ["cat", "elephant", "dog", "tiger", "ant"];

let filtersA = wordsA.filter((e) => {
  if (e.length < 4) return false;
  return e;
});

// console.log(filtersA);

let temps = [15, -5, 22, -10, 8, -3];
let filtersB = temps.filter((e) => {
  if (e > 0) return false;
  return e;
});

// console.log(filtersB);

// ---
let numbersA = [2, 3, 4];

let reduceA = numbersA.reduce((acc, num) => acc * num, 1);

console.log(reduceA);

let scoresB = [45, 67, 89, 23, 91, 34];

let reduceB = scoresB.reduce((acc, scr) => (acc < scr ? scr : acc), 0);

console.log(reduceB);

let wordsB = ["cat", "elephant", "dog", "tiger"];
let reduceC = wordsB.reduce((acc, wrd) => {
  if (wrd.length > 3) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);

console.log(reduceC);
