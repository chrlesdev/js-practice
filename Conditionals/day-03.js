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

/**
 * Exercise: Login Attempt Lock (Closure + Conditional)

You’re building a login system that locks after too many wrong attempts.

- Rules of the universe:
- The system has one correct password
- The user can try at most 3 times
- After 3 wrong attempts → permanently locked
- If the correct password is entered before the lock → success
- After locked → no mercy

Constraints (important):

- Use closure
- Do not pass attempt count manually
- The function must remember how many times it’s been called
- Use conditionals (if / else) wisely

Mental model hint:
One function = the system

Inner function = the attempt button
The system remembers mistakes
 */

function createLogin(username) {
  const passwords = "admin123";
  let attempt = 0;

  function login(password) {
    attempt++;
    if (attempt <= 3 && password !== passwords) {
      return `${4 - attempt} more chance wrong password or username`;
    } else if (password === passwords) {
      return `welcome back ${username}`;
    } else if (attempt > 3) {
      return "account block";
    }
  }
  return login;
}

const user = createLogin("kelvin");

console.log(user("wrong"));
console.log(user("wrong"));
console.log(user("wrong"));

console.log(user("wrong"));
console.log(user("admin123"));
