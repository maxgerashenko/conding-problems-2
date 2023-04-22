// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

// use left & right
//
// Math.floor((left + right)/2) !!!!!!
// mid = Math.round((r-l+1)/2) -1
// go to unsored part
// set left to mid + 1 to be on min value
// aways return left

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const midIndx = Math.floor((left + right) / 2);
    if (nums[midIndx] > nums[right]) {
      left = midIndx + 1;
      continue;
    }
    right = midIndx;
  }
  return nums[left];
}; // T:O(logN) S:O(1)
