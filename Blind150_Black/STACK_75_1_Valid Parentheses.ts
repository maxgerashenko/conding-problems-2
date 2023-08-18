// https://leetcode.com/problems/valid-parentheses/description/
// Valid Parentheses

// Use stack
// track open brackets with stack length
// use map for brackets
// add when open bracket
// check last when close
// T:O(n) S:O(1)

var isValid = function (s, stack = []) {
  let typeMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let el of s.split('')) {
    if (!(el in typeMap)) {
      stack.push(el);
      continue;
    }
    if (stack.length === 0) return false;
    if (stack.pop() !== typeMap[el]) return false;
  }

  return stack.length === 0;
}; // T:O(N) S:O(1)
