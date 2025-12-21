Hoisting

Hoisting is JavaScript’s default behavior during the creation phase, where variable and function declarations are processed before code execution.

Variables declared with let and const are hoisted, but not initialized.

They exist in a Temporal Dead Zone (TDZ) until their declaration is reached.

Accessing them before initialization results in a ReferenceError.

Example:

```js
carName = "Volvo";
let carName; // ReferenceError
```

Variables declared with var are hoisted and initialized with undefined, which is why they can be accessed before declaration without throwing an error.

Closure

A closure happens when a function is defined inside another function and remembers variables from its outer scope, even after the outer function has finished executing.

Closures allow variables to live longer than the function that created them.

This enables functions to retain state without using global variables.

Closures are created naturally in JavaScript and are commonly used in callbacks, event handlers, and stateful logic.

I understand the basic concept of closures, but I still need more practice to see how and when to use them in real examples.
