// https://leetcode.com/problems/product-of-array-except-self/

// get total product
// exclude one 0 if exist
// if 2 0s the product will be 0 anyway
// then get local poduct for each
var productExceptSelf = function (nums) {
  let withOutZero = nums.filter((el) => el !== 0);
  if (nums.length - withOutZero.length >= 2) return nums.map(() => 0);
  let product = nums.reduce((pre, el) => (el === 0 ? pre : pre * el), 1);
  let isZero = nums.indexOf(0) > -1;

  return nums.map((el) => (el === 0 ? product : isZero ? 0 : product / el));
}; // T:O(3n) S:O(1)

// prefix postfix
// got form left -> right to prefix products as pre, cur = cur * pre,
// so if 2,3,4 then will be 2,6,24, ok?
// then do posfix left <- right cur = cur * post, post
var productExceptSelf = function (nums) {
  let prefix = 1;
  const result = [];
  for (let index in nums) {
    result[index] = prefix;
    prefix *= nums[index];
  }
  let postFix = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] *= postFix;
    postFix *= nums[index];
  }

  return result;
}; // T:O(2N) S:O(1)
