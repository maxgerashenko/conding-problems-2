// https://www.educative.io/courses/grokking-the-coding-interview/mE2LVDE3wp0
// Find the Corrupt Pair

const find_corrupt_numbers = function (nums, results = []) {
  for (let i = 0; i < nums.length; i++)
    while (i + 1 != nums[i]) {
      let val = nums[i];
      if (nums[i] === nums[val - 1]) break;
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  for (let i = 0; i < nums.length; i++)
    if (nums[i] != i + 1) results.push(nums[i], i + 1);
  return results;
}; // T:O(N) S:O(1)
