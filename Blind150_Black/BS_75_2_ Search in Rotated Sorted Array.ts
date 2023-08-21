// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// Search in Rotated Sorted Array

// use BS
// 1 more step to define sorted part
// then search
// base case when target === pivot

var search = function (nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let pivot = ~~(left / 2 + right / 2);
    let pivotEl = nums[pivot];
    let leftEl = nums[left];
    let rightEl = nums[right];

    if (pivotEl === target) return pivot; // base case

    if (leftEl <= pivotEl) {
      if (leftEl <= target && target <= pivotEl) {
        right = pivot - 1;
        continue;
      }

      left = pivot + 1;
      continue;
    } // left sorted

    if (pivotEl <= target && target <= rightEl) {
      left = pivot + 1;
      continue;
    }

    right = pivot - 1;
  }

  return -1;
}; // T:O(logN) S:O(1)
