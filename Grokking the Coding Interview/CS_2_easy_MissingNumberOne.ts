// https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9
// Find the Missing Number

const find_missing_number = function (nums, i = 0) {
  for (let i = 0; i < nums.length; i++) {
    while (i !== nums[i] && nums[i] != null) {
      let val = nums[i];
      [nums[i], nums[val]] = [nums[val], nums[i]];
    }
  } // sort
  for (let i = 0; i < nums.length; i++) if (nums[i] == null) return i; // return missing number
  return -1;
}; // T:O(N+N-1 S:O(1)
