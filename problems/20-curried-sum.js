/***********************************************************************

Currying is the process of decomposing a function that takes multiple arguments
into one that takes single arguments successively until it has the sufficient
number of arguments to run.This technique is named after the
logician Haskell Curry(the functional programming language Haskell is, too).

Write a `curriedSum` function that takes an integer(how many numbers to sum)
and returns a function that can be successively called with single arguments
until it finally returns a sum.

Here is a breakdown of how curriedSum(numArgs) should work:
    - Define an empty array, `numbers`.
    - Define a function, `_curriedSum` that:
        - Closes over `numArgs` and `numbers`.
        - Takes a single number as an argument.
        - Appends this to the `numbers` array each time.
        - If `numbers.length === numArgs`, it sums the numbers in the array and
        returns the result.
        - Else, it returns itself.
    - Returns `_curriedSum`.

If you're confused, think of it this way: `_curriedSum` keeps collecting
arguments and returning itself until it has enough arguments, at which point it
actually does the required work of summing.


Example:
// 1
const sum = curriedSum(4); // returns a function
sum(5) // returns a function
sum(20) // returns a function
sum(30) // returns a function
sum(20); // => returns 75

// 2
// this function can also be invoked like this:
const sum = curriedSum(3)(2)(1)(7); // => returns 10

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Come up with at least two situations (one per person) on when currying would
  be useful
1. Currying is good for getting multiple values from a single input field.
***********************************************************************/

function curriedSum(numArgs) {
  // Your code here
  let numbers = [];
  let counter = numArgs;
  let sum = numbers.reduce(((acc, ele) => acc + ele), 0);
  return _curriedSum = (num) => {
      if (counter === 0) {
        return sum;
      }
      numbers.push(num);
      counter--;
      if (counter === 0) {
        sum = numbers.reduce(((acc, ele) => acc + ele), 0);
        return sum;
      } else {
      return _curriedSum;
      }
  };
}

//// 1
//const sum = curriedSum(4); // returns a function
//sum(5) // returns a function
//sum(20) // returns a function
//sum(30) // returns a function
//console.log(sum(20)); // => returns 75
//
//
//// 2
//// this function can also be invoked like this:
//const sum2 = curriedSum(3)(2)(1)(7); // => returns 10
//console.log(sum2);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = curriedSum;
} catch (e) {
  return null;
}
