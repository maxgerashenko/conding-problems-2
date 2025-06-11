// https://leetcode.com/problems/generate-parentheses/description/
// Generate Parentheses

// use bfs for options
// space is max stack hight is options^number

function generateParenthesis(n: number): string[] {
  let stack = [];
  let res = [];

  function backTrek(openCount = 0, closeCount = 0) {
    if (closeCount === n) {
      res.push(stack.join(''));
      return;
    }

    if (openCount > closeCount) {
      stack.push(')');
      backTrek(openCount, closeCount + 1);
      stack.pop(); // backtraking
    }

    if (openCount < n) {
      stack.push('(');
      backTrek(openCount + 1, closeCount);
      stack.pop(); // backtraking
    }
  }
  backTrek();

  return res;
} // T:O(2^n) S:O(2^n)
