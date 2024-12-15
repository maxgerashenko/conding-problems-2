// https://leetcode.com/problems/climbing-stairs/
//
// Climbing Stairs

// 0 is 1 because you can stay at step 0 (doing nothing counts as 1 way)

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
