// https://leetcode.com/problems/product-of-array-except-self/
// Product of Array Except Self

// can’t use division
// iterate pre-product
// iterate post product
// return res
// T:O(n) S:O(n)

function productExceptSelf(nums: number[]): number[] {
  let res = [];
  let n = nums.length;

  let pre = 1;
  for (let el of nums) {
    res.push(pre);
    pre *= el;
  }

  let post = 1;
  for (let index = n - 1; index >= 0; index--) {
    res[index] *= post;
    post *= nums[index];
  }

  return res;
} // T:O(n) S:O(n)
