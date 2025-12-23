// if else conditional

const cardId1 = {
  id: 1,
  name: "arya",
};

const cardId2 = {
  id: 2,
  name: "rehan",
};

const workers = [cardId1, cardId2];
manager(workers);

function manager(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i].id <= 1) {
      console.log(`${input[i].name} is a manager`);
    } else {
      console.log(`${input[i].name} is a normal worker`);
    }
  }
}
// exercise 1
/**
 * 
 * 
 * 🧠 Exercise: Rate Limiter (Conditionals + Closure)
Scenario

You are building a system that limits how often an action can happen.

Task:
Create a function called createLimiter.

Rules:
- createLimiter(limit)
- limit is a number (maximum allowed calls)
- It returns a function called run
- Every time run() is called:
- If calls ≤ limit → return "Action allowed"
- If calls > limit → return "Too many requests"

Constraints
- The call count must be private (closure)
- No global variables
- Use if / else

The parent function runs once

The returned function can be called many times
 */

function createLimiter(limit) {
  function run(calls) {
    if (calls <= limit) {
      return "action allowed";
    } else if (calls > limit) {
      return "too many request";
    }
  }
  return run;
}

const limiter = createLimiter(3);

console.log(limiter(10));
console.log(limiter(2));
