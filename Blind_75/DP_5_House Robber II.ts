// House Robber II
// https://leetcode.com/problems/house-robber-ii/

// DP
// r1,r2,cur
// cur = Max r1 + cur or r2
// cycle is a diffrent problem
// everything without start
// everything without end
// return max of 2 parts

function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  function getMaxRob(start, end, rob1 = 0, rob2 = 0) {
    for (let i = start; i < end; i++) {
      let n = nums[i];
      let res = Math.max(rob1 + n, rob2);
      rob1 = rob2;
      rob2 = res;
    }
    return Math.max(rob1, rob2);
  }
  let part1 = getMaxRob(0, nums.length - 1);
  let part2 = getMaxRob(1, nums.length);
  return Math.max(part1, part2);
} // T:O(N) S:O(1)
