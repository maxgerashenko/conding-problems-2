// https://leetcode.com/problems/climbing-stairs/
// Climbing Stairs

// DP
// no dfs
// like fibonacy 1,1,2,3,5,8

var climbStairs = function (n) {
  let pre = 0;
  let cur = 1;

  for (let i = 0; i < n; i++) {
    let tmp = cur;
    cur = pre + cur;
    pre = tmp;
  }

  return cur;
}; // T:O(N) S:O(N)
