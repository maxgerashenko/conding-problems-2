// https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY
// Cyclic sort

const cyclic_sort = function (nums) {
  for (let num in nums) {
    while (nums[num] !== +num + 1) {
      let nextValue = nums[num];
      [nums[num], nums[nextValue - 1]] = [nums[nextValue - 1], nums[num]];
    }
  }
  return nums;
}; // T:O(n + n-1) S:O(1)
