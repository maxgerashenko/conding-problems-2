// https://www.educative.io/courses/grokking-the-coding-interview/3wEkKy6Pr9A
// Find the Duplicate Number

const find_duplicate = function (nums) {
  for (let n in nums) {
    while (nums[n] != +n + 1) {
      let val = nums[n];
      if (nums[n] === nums[val - 1]) return nums[n];
      [nums[n], nums[val - 1]] = [nums[val - 1], nums[n]];
    }
  }
  return nums;
}; // T:O(n+n-1) S:O(1)
