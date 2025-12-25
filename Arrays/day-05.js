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

console.log(product(list));
