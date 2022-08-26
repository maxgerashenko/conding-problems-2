// https://www.educative.io/courses/grokking-the-coding-interview/RLw1Pjk1GQ0
// Find all Duplicate Numbers

const find_all_duplicates = function (nums, results = []) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i + 1) {
      let val = nums[i];
      if (nums[i] == nums[val - 1]) {
        results.push(nums[i]);
        break;
      }
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  }
  return results;
}; // T:O(N) S:O(1)
