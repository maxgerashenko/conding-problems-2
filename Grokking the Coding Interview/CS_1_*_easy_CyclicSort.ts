// https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY
// Cyclic sort

const cyclic_sort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i + 1) {
      let val = nums[i];
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  }
  return nums;
}; // T:O(N) S:O(1)
