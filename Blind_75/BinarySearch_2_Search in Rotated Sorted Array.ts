// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// use mid  Math.floor((left + right) / 2)
// return nums[left];
// it focus search element on left side
// use <= everywhere to accept 1 el when left===mid or right===mid;
// and return it at the end

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // left sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
      continue;
    }
    // right sorted
    if (nums[mid] <= target && target <= nums[right]) {
      left = mid;
    } else {
      right = mid - 1;
    }
    continue;
  }
  return nums[left] === target ? left : -1;
}; // T:O(logN) S:O(1)
