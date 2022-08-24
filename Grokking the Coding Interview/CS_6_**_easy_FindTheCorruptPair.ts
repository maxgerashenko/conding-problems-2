// https://www.educative.io/courses/grokking-the-coding-interview/mE2LVDE3wp0
// Find the Corrupt Pair

const find_corrupt_numbers = function (nums) {
  for (let i in nums) {
    while (nums[i] !== +i + 1 && nums[i] !== nums[nums[i] - 1]) {
      let val = nums[i];
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  }
  for (let i in nums) {
    if (nums[i] !== +i + 1) return [nums[i], +i + 1];
  }
  return [-1, -1];
}; // T:O(2N) S:O(1)
