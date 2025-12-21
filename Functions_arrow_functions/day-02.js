// basic Function

function basicFunction(p1, p2) {
  return p1 * p2;
}
let Value1 = basicFunction(12, 23);
console.log(Value1);

let arrowFunction = (pa, pb) => pa * pb;

//-----
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"

//-----

function passing(parameter) {
  parameter.name = "kelvin";
}

const valueA = {
  name: "charles",
  gender: "man",
  games: "stardew Valley",
};

console.log(valueA.name);
passing(valueA);
console.log(valueA.name);

//closures function

function getScore() {
  const num1 = 20;
  const num2 = 30;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

const name = "chakams";

console.log(getScore());
//-- create add button

const buttonId = document.getElementById("btn");

function btnd() {}
buttonId.style.color = "red";
