// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
// Find Minimum in Rotated Sorted Array

// use BS
// the rotated point is the min vale
// use while true
// find sorted part
// go to not sorted part

var findMin = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  if (nums[left] <= nums[right]) return nums[left];

  while (true) {
    let pivot = Math.floor(left / 2 + right / 2);

    if (nums[pivot] >= nums[pivot + 1]) return nums[pivot + 1];

    if (nums[left] <= nums[pivot]) {
      left = pivot + 1;
      continue;
    }
    right = pivot - 1;
  }
}; // T:O(log(n)) S:O(1)
