// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/

// DP with 2 var
// reversed order
// start from the value 1 as on posible way when you have only on step

function climbStairs(n: number): number {
  let pre = 1;
  let prePre = 0;
  let cur = 1;

  for (let i = 0; i < n; i++) {
    let tmp = cur;
    cur = pre + prePre;
    prePre = pre;
    pre = cur;
  }

  return Math.max(pre, prePre);
} // T:O(n) S:O(1)
