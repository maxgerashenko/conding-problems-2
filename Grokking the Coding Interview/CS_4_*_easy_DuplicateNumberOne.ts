// https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A
// Find the Duplicate Number

const find_duplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i + 1) {
      let val = nums[i];
      if (nums[i] == nums[val - 1]) return nums[i];
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  }
  return -1;
}; // T:O(N) S:O(1)
