// House Robber
// https://leetcode.com/problems/house-robber/description/

// DP
// r1,r2,cur
// can not rob 2 in a row so
// r1 + cur vs r2

function rob(nums: number[]): number {
  let r1 = 0;
  let r2 = 0;

  for (let el of nums) {
    let res = Math.max(r1 + el, r2);
    r1 = r2;
    r2 = res;
  }

  return Math.max(r1, r2);
} // T:O(N) S:O(1)
