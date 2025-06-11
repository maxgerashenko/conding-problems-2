// https://leetcode.com/problems/valid-parenthesis-string/description/
// Valid Parenthesis String

// if just DFS
// T:O(n^3) n elements and 3 options for each
//
// if DP(index, current_open)
// T:O(n^2 * n) === T:O(n^3) S:O(n^2)
//
// Greedy
// use range of open
// the same for "(" and ")"
// but for "*" could be -1 and +1 as min and max
// if min<0 can reset to 0
// but if max < 0 return false
// return min === 0
//
// T:O(N) S:O(1)

function checkValidString(str: string): boolean {
  let minOpenCount = 0;
  let maxOpenCount = 0;
  let strArray = str.split('');

  for (let el of strArray) {
    if (el === '(') {
      minOpenCount++;
      maxOpenCount++;
    }
    if (el === ')') {
      minOpenCount--;
      maxOpenCount--;
    }
    if (el === '*') {
      minOpenCount--;
      maxOpenCount++;
    }
    if (minOpenCount < 0) {
      minOpenCount = 0;
    }
    if (maxOpenCount < 0) return false;
  }

  return minOpenCount === 0;
} // T:O(n) S:O(1)
