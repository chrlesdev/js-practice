// basic Function

function basicFunction(p1, p2) {
  return p1 * p2;
}
let Value1 = basicFunction(12, 23);
// console.log(Value1);

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

// console.log(myCar.make); // "Honda"
myFunc(myCar);
// console.log(myCar.make); // "Toyota"

//-----

function passing(parameter) {
  parameter.name = "kelvin";
}

const valueA = {
  name: "charles",
  gender: "man",
  games: "stardew Valley",
};

// console.log(valueA.name);
passing(valueA);
// console.log(valueA.name);

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

// console.log(getScore());

function returnNegative(num) {
  let len = num.length;
  result = [];
  for (let i = 0; i < len; i++) {
    let store = num[i];
    if (store < 1) {
      result.push(`${store} negative`);
    } else {
      result.push(`${store} positive`);
    }
  }
  return result;
}

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5];

// closures function

function countingScores(playerName) {
  let score = 0;

  function add(points) {
    if (points < 0) {
      return "points must be a positive numbers";
    } else {
      score = score + points;
      return `${playerName} score now has ${score}`;
    }
  }

  function reset() {
    score = 0;
    return `${playerName} score reset to ${score}`;
  }

  return {
    add,
    reset,
  };
}

const playerA = countingScores("kelvin");
// const playerB = createPlayer("Charles");

// console.log(player.add(30));
// console.log(player.addPlayerTwo(50));

// closures + dom = use State same as in react

const numbers = document.getElementById("number");
const btns = document.getElementById("btn");

function clickCounter() {
  let count = 0;

  return function () {
    count++;
    numbers.innerHTML = count;
  };
}

const handleclick = clickCounter;
btns.addEventListener("click", handleclick());
