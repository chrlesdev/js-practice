let valueA = "string";
var valueB = " ";
const valueC = 23;

let combine = valueA + valueB + valueC;

// console.log(combine);

console.log(valueG);
var valueG = "trying hoisting";
/**
 * When I use var, the JavaScript engine hoists the declaration to the top of its scope. During this process, the variable is automatically initialized with a value of undefined.

In the code above, console.log(valueG) returns undefined because the variable exists, but the assignment (the actual string value) hasn't happened yet. The assignment only occurs when the engine reaches that specific line of code.

simple : 
var valueG;
console.log(valueG);
valueG = "trying hoisting";

"its calling the declaration value because of the console.log but it only called the variable not the value."
 */

let string = "blue"; //string
// console.log(typeof string);

let number = 1234; //number
// console.log(typeof number);

const x = true; //boolean
// console.log(typeof x);

let y = BigInt(1234567890123456789012345); //bigint
// console.log(typeof y);

const date = new Date("2022-03-25"); //object
// console.log(typeof date);

let valueD; //undefined
// console.log(valueD);

let ValueE = null; //null
// console.log(typeof ValueE);

let valueH = undefined;
// console.log(typeof valueH);
