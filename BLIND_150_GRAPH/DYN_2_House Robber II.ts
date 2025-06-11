// https://leetcode.com/problems/house-robber-ii/
//
// House Robber II

function rob(nums: number[]): number {
  const len = nums.length;

  if (len === 1) return nums[0];

  function findMax(range: number[]): number {
      let len = range.length;
      if (len === 0) return 0;
      if (len === 1) return range[0];

      let pre2 = 0;
      let pre = range[0];

      for (let i = 1; i < len; i++) {
          let tmp = pre;
          pre = Math.max(pre, pre2 + range[i]);
          pre2 = tmp;
      }

      return pre;
  }

  // Since the houses are in a circle, rob either from the second to the last or from the first to the second last
  return Math.max(findMax(nums.slice(1)), findMax(nums.slice(0, len - 1)));
}; // T:O(n) S:O(1)