// Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/description/

// DP with 2 vals
// return max but remember about min
// use new max and min with curr value
// so need to remember abou the cur val
// that could be bigger than current min and max
// [-1, 8] first min -1 max -1, but 8 is bigger that min and Max
// return rest

function maxProduct(nums: number[]): number {
  let res = Math.max(...nums);
  let min = 1;
  let max = 1;

  for (let el of nums) {
    let tmpMax = el * max;
    max = Math.max(el * max, el * min, el);
    min = Math.min(tmpMax, el * min, el);
    res = Math.max(res, max);
  }
  return res;
} // T:O(N) S:O(1)
