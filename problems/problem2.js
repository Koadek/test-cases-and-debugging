let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = ["max", "fghj", "", "12344", "qwerf zgueg"];

let outputs = ["x", "j", undefined, "4", "g"];

// Make this function return the last character of the string that is passed to it. If the string does not have a last character, return undefined
function f(str) {
  if ((lastChar = myString.charAt(myString.length() - 1) === "")) {
    return undefined;
  }
  return (lastChar = myString.charAt(myString.length() - 1));
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename);
