let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [
  [[0, 1, 2, 3], [1, 3, 4, 5]],
  [[1, 2, 3], [1, 2, 3]],
  [2, 3],
  2,
  [['a', 'b'], ['a', 'c']],
];

let outputs = [[0, 2, 4, 5], [], undefined, undefined, ['b', 'c']];

/*
Make this function return the elements that are unique to array1 and array2.
An element is unique if it only appears once.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
uniqueElements([[1,2,3], [3,2,1]]); // []
uniqueElements(2); // undefined, not an array

HINTS: 
   - Use a for loop inside another for loop
   - You will need to run your logic 2 times
    - Once to get the unique elements in the first array
    - A second time to get the unique elements in the second array
*/
function f(input) {
  if (Array.isArray(input[0]) === true && Array.isArray(input[1]) === true) {
    let full = input[0].concat(input[1]);
    let res = [];
    for (i = 0; i < full.length; i++) {
      if (full.indexOf(full[i]) === full.lastIndexOf(full[i])) {
        res.push(full[i]);
      }
    }
    return res;
  }
  return undefined;
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
