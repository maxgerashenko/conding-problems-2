// https://leetcode.com/problems/daily-temperatures/
// Daily Temperatures

// use stack
// keep stack monotonicaly decreasing
// set res by index
// T:O(n) S:O(n)

var dailyTemperatures = function (temps) {
  let monotoIndexStack = [];
  let res = [];
  let n = temps.length;

  for (let index = 0; index < n; index++) {
    let el = temps[index];
    while (el > temps[monotoIndexStack[monotoIndexStack.length - 1]]) {
      let stackIndex = monotoIndexStack.pop();
      res[stackIndex] = index - stackIndex;
    } // keep monotolicaly and set values
    monotoIndexStack.push(index);
  } // feed the stack

  for (let index of monotoIndexStack) {
    res[index] = 0;
  } // add 0's
  return res;
}; //T:O(n) S:O(n)
