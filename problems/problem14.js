let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
  '12345678901234567890123456789012345678901',
];

let outputs = [
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam',
  '1234567890123456789012345678901234567890\n1',
];

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

even though there is a space before the a in adipisicing
*/
/*function splitValue(value, index) {
  return value.substring(0, index) + '\n' + value.substring(index);
}*/

function stringDivider(str, width, spaceReplacer) {
  if (str.length > width) {
    var p = width;
    for (; p > 0 && str[p] != ' '; p--) {}
    if (p > 0) {
      var left = str.substring(0, p);
      var right = str.substring(p + 1);
      return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
    }
  }
  return str;
}

function f(str) {
  /*let warp = str;
  for (let i = 1; i < str.length; i++) {
    if (i % 40 === 0) {
      warp = splitValue(warp, i);
    }
    if (i % 40 === 0 && warp[i + 1] === ' ') {
      warp[i + 1] === '';
    }
  }
  return warp;*/
  var result = stringDivider(str, 40, '\n');
  return result;
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
