// #1
// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
// Sum of Absolute Differences in a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  // Constraints
  // 2 <= nums <= 1000
  // 1 <= nums[i] <= 1000

  // Naive approach is to n^2
  // Advanced is for sorted array

  // calculate sum for all elements
  // s1 + cur + s2
  // s1 = n1*i-sum1
  // s2 = sum2-n2*(n-i-1)

  // init sum
  // let sum=0;
  // for(let i=0;i<nums.length;i++) {
  //     sum += nums[i];
  // }
  let sum = nums.reduce((prev, cur) => prev + cur, 0);

  let ans = [],
    left_sum = 0,
    right_sum = sum,
    left_n,
    right_n,
    value,
    n = nums.length;
  // calculate the values
  for (let i = 0; i < n; i++) {
    let cur = nums[i];
    right_sum = right_sum - cur;
    left_n = i;
    right_n = n - i - 1;
    ans[i] = left_n * cur - left_sum + right_sum - right_n * cur;
    left_sum += nums[i];
  }

  return ans;
};
