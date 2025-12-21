hoisting
i learned that hoisting is default behaviour of javascript
In JavaScript, a variable can be declared after it has been used.

a variable like let and const are aware of this. and since it aware of hoisting they were called but not initialize until it has been declared
Using a let variable before it is declared will result in a ReferenceError.
for example:

<!--
carName = "Volvo";
let carName;
-->

same goes for const
but not with "Var" it can still called but the result would be undefined

Closure
