// https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A
// Find the Duplicate Number

const find_duplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (i + 1 != nums[i]) {
      let val = nums[i];
      if (nums[i] === nums[val - 1]) return val;
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  }
  return -1;
}; // T:O(N) S:O(1)
