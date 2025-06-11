// https://leetcode.com/problems/valid-parentheses/
// Valid Parentheses

// use stack
// add open
// check that next pop has correct parentheses
// check that stack in empty
// ([)] - wrong order

var isValid = function (str) {
  let arr = str.slice('');
  let stack = [];
  let map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let el of arr) {
    if (/[\(\[{]/.test(el)) {
      stack.push(el);
      continue;
    }
    if (el !== map[stack[stack.length - 1]]) return false;
    stack.pop();
  }
  return stack.length === 0;
}; // T:O(N) S:O(N)
