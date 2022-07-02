// https://www.educative.io/courses/grokking-the-coding-interview/mE2LVDE3wp0
// Find the Corrupt Pair

const find_corrupt_numbers = function (nums) {
  for (let i in nums) {
    while (nums[i] !== +i + 1) {
      let val = nums[i];
      if (val === nums[val - 1]) break;
      [nums[i], nums[val - 1]] = [nums[val - 1], nums[i]];
    }
  }
  for (let i in nums) {
    let val = nums[i];
    if (val === nums[val - 1] && +i !== val - 1) return [val, +i + 1];
  }
  return [-1, -1];
}; // T:O(N+N-1+N) S:O(1)
