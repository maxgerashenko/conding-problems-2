// https://leetcode.com/problems/generate-parentheses/
// Generate Parentheses

// use dfs
// use backTracking
// use openCount
// use openClose count
// use array.lenght to get base case
// generaet 2^n options
// T:O(2^n) S:O(N)

var generateParenthesis = function (n) {
  let res = [];
  let openCount = 0;
  let openCloseCount = 0;
  let array = [];

  function dfs() {
    if (array.length === n * 2) {
      res.push(array.join(''));
      return;
    }

    if (openCount < n) {
      openCount++;
      openCloseCount++;
      array.push('(');
      dfs();
      openCount--;
      openCloseCount--;
      array.pop();
    }

    if (openCloseCount > 0) {
      openCloseCount--;
      array.push(')');
      dfs();
      array.pop();
      openCloseCount++;
    }
  }
  dfs();

  return res;
}; // T:O(2^N) S:O(2^N) to store combinatino and S:O(N) to handle the stack
