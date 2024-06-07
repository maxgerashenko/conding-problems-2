// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/

// Like fibonachi

function climbStairs(n: number): number {
  let pre = 0;
  let cur = 1;

  for (let i = 0; i < n; i++) {
    let tmp = cur;
    cur = pre + cur;
    pre = tmp;
  }

  return cur;
} // T:O(n) S:O(1)
