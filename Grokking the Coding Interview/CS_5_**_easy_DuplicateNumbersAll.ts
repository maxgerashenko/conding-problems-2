// https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0
// Find all Duplicate Numbers

const find_all_duplicates = function (nums, results = []) {
  for (let i = 0; i < nums.length; i++)
    while (nums[i] != i + 1) {
      let val = nums[i];
      if (nums[i] == null || nums[i] == nums[val - 1]) break;
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1 && nums[i] != null) results.push(nums[i]);
  }
  return results;
}; // T:O(N) S:O(1)
