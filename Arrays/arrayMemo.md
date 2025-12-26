build in method Arrays:

.map() Higher-order function = a function that takes another function as an argument

.map() takes a function as an argument. That function gets called for each element in the array, and whatever the function returns becomes the new value.

.filter() keeps only the elements that pass a test (return true). It creates a new array with only the elements that match your condition.

Key insight about .filter():
You don't need to return the element itself - you just need to return true or false!

If the condition is true, .filter() keeps that element
If false, it removes

.reduce() takes an array and "reduces" it down to a single value. It's like a snowball rolling down a hill, accumulating more as it goes.
