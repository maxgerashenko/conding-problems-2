// https://leetcode.com/problems/maximum-subarray/description/
// Maximum Subarray

// use greedy
// think like sliding window, but will be n^2
// reset sum if curr is < 0
// have to start with max = arr[0]
// have to start with sum = arr[0]
// update sum with next value and cal max
//
// T:O(n^2 or n) S:O(1)

function maxSubArray(nums: number[]): number {
  let sum = nums[0];
  let n = nums.length;
  let max = nums[0];

  for (let i = 1; i < n; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    max = Math.max(max, sum);
  }

  return max;
} // T:O(n) S:O(1)
