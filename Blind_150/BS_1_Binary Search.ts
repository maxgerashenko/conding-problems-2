// https://leetcode.com/problems/binary-search/
// Binary Search

// BS
// pivot = (left + ~~(right-left)/2)
// do while left <= right
// when target on the left of pivot right = pivot - 1
// when traget on the right of pivot left = pivaot + 1

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let pivot = ~~(left + (right - left) / 2);
    let middle = nums[pivot];
    if (middle === target) return pivot;
    if (target > middle) {
      left = pivot + 1;
      continue;
    }
    right = pivot - 1;
  }

  return -1;
} // T:O(logn) S:O(1)
