// https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9
// Find the Missing Number

const find_missing_number = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i) {
      let val = nums[i];
      if (nums[i] == null) break;
      [nums[i], nums[val]] = [nums[val], nums[i]];
    }
  }
  for (let i = 0; i < nums.length; i++) if (nums[i] == null) return i;
  return -1;
}; // T:O(N S:O(1)
